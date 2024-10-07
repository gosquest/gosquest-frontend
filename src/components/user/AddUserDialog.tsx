import React, { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useGetAllRoles } from "@/hooks/useRole";
import { useRegister } from "@/hooks/useAuth";

export function AddUserDialog() {
    const [fullName, setFullName] = useState("");
    const [roleId, setRoleId] = useState("");
    const { data, isLoading, isError } = useGetAllRoles();
    const registerMutation = useRegister()

    const handleAddUser = async () => {
        if (!fullName) {
            toast.error("User full name is required");
            return;
        }
        if (!roleId) {
            toast.error("Please select a role");
            return;
        }
        try {
            const response = await registerMutation.mutateAsync({ fullName, roleId })
            if (response.success) {
                toast.success(response.message)
                setRoleId("")
                setFullName("")
            } else {
                toast.error(response.error.msg)
            }
        } catch (error) {
            toast.error("Adding user failed")
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-main !rounded !text-sm !font-normal">
                    Add User
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
                <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                    <DialogDescription>Enter the full name of the user and assign a role.</DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    {/* Role selection */}
                    <select
                        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-main"
                        value={roleId}
                        onChange={(e) => setRoleId(e.target.value)}
                    >
                        <option value="" disabled>Select Role</option>
                        {!isLoading && !isError && data?.roles.map((role: any) => (
                            <option key={role.id} value={role.id}>
                                {role.name}
                            </option>
                        ))}
                    </select>

                    <Button className="bg-main !rounded" onClick={handleAddUser} disabled={registerMutation.isPending}>
                        {
                            registerMutation.isPending ? "Saving..." : "Save"
                        }
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}