//@ts-nocheck
import { useState } from "react";
import { toast } from "react-toastify";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { User } from "@/types";
import { useRemoveUser } from "@/hooks/useAuth";


// Delete user dialog component
const DeleteUserDialog = ({ user }: { user: User }) => {
    const [isOpen, setIsOpen] = useState(false);
    const deleteUserMutation = useRemoveUser()

    const handleDelete = async () => {
        try {
            const response = await deleteUserMutation.mutateAsync(user.id)
            if (response.success) {
                toast.success(response.message)
                setIsOpen(false);
            } else {
                toast.error(response.error.msg)
            }
        } catch (error) {
            toast.error('Delete user failed!')
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="!rounded hover:bg-white" size="sm">
                    <X size={18} color="red" />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Delete User</DialogTitle>
                </DialogHeader>
                <p>Are you sure you want to delete <span className="font-semibold">{user.fullName}</span>? This action cannot be undone.</p>
                <div className="flex gap-2 justify-end mt-4">
                    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={deleteUserMutation.isPending}>
                        {
                            deleteUserMutation.isPending ? "Deleting..." : "Confirm"
                        }
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteUserDialog