import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { User } from "@/types";
import { useUpdateUser } from "@/hooks/useAuth";
import { PenBox } from "lucide-react";

type EditUserDialogProps = {
    user: User;
};

export default function EditUserDialog({ user }: EditUserDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState(user.fullName);
    const [status, setStatus] = useState(user.status);

    const updateUserMutation = useUpdateUser()

    const handleUpdate = async () => {
        if (!fullName) {
            toast.error("Full Name is required");
            return;
        }
        try {
            const response = await updateUserMutation.mutateAsync({ userId: user.id, formData: { fullName, status } })
            if (response.success) {
                toast.success(response.message)
                setIsOpen(false)
            } else {
                toast.error(response.error.msg)
            }
        } catch (error) {
            toast.error("Updating user failed!")
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button variant="secondary" className="!rounded hover:bg-white" size="sm">
                    <PenBox size={18} />
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>Edit user information below:</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                    <select
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="Enabled">Enabled</option>
                        <option value="Disabled">Disabled</option>
                    </select>
                    <div className="flex gap-2 justify-end mt-4">
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button className="bg-main !rounded" onClick={handleUpdate} disabled={updateUserMutation.isPending}>
                            {
                                updateUserMutation.isPending ? "Saving..." : "Save"
                            }
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
