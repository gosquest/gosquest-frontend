//@ts-nocheck
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { User } from "@/types";
import { PenBox } from "lucide-react";
import { useModifyUser } from "@/hooks/useAuth";

type EditUserDialogProps = {
    user: User;
};

export default function EditUserDialog({ user }: EditUserDialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [fullName, setFullName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email); // Add email state
    const [role, setRole] = useState(user.role || ""); // Add role state
    const [password, setPassword] = useState(""); // Add password state (optional)

    const updateUserMutation = useModifyUser();

    const handleUpdate = async () => {
        if (!fullName || !email || !password) {
            toast.error("Full Name, Email, and Password are required");
            return;
        }
        try {
            const response = await updateUserMutation.mutateAsync({
                userId: user.id,
                formData: { fullName, email, role, password: password || undefined }, // Include password
            });
            if (response.success) {
                toast.success(response.message);
                setIsOpen(false);
            } else {
                toast.error(response.error.msg);
            }
        } catch (error) {
            toast.error("Updating user failed!");
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
                    <input
                        type="email"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <select
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                    <div className="flex gap-2 justify-end mt-4">
                        <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
                        <Button className="bg-main !rounded" onClick={handleUpdate} disabled={updateUserMutation.isPending}>
                            {updateUserMutation.isPending ? "Saving..." : "Save"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
