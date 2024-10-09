import React, { useState } from "react";
import { useGetAllAdmins, useGetAllUsers } from "@/hooks/useAuth";
import { FormField, FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Check, ChevronsDown, Eye, EyeOff, Loader } from "lucide-react";

export const FullNameField = ({ form, isSubmitting, role }: any) => {

    const { data: userData, isPending: isUserPending } = useGetAllUsers();
    const { data: adminData, isPending: isAdminPending } = useGetAllAdmins();

    const [popoverOpen, setPopoverOpen] = useState(false);
    

    const data = role === "User" ? userData : adminData;
    const isPending = role === "User" ? isUserPending : isAdminPending;

    return (
        <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                    <FormLabel>Select your Name</FormLabel>
                    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                        <PopoverTrigger asChild>
                            <FormControl>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    className="justify-between px-6 py-6 bg-white text-main !font-normal"
                                    disabled={isSubmitting}
                                    onClick={() => setPopoverOpen(!popoverOpen)}
                                >
                                    {field.value ? data?.data.find((user: any) => user.fullName === field.value)?.label || field.value : "Select name"}
                                    <ChevronsDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
                                </Button>
                            </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="min-w-full sm:w-[400px] overflow-auto p-0">
                            <Command>
                                <CommandInput placeholder="Search name..." className="bg-white" />
                                <CommandList>
                                    {isPending ? (
                                        <div className="flex items-center justify-center p-4">
                                            <Loader className="animate-spin h-5 w-5" />
                                        </div>
                                    ) : (
                                        <>
                                            <CommandEmpty>No name found.</CommandEmpty>
                                            <CommandGroup>
                                                {data?.data.map((user: any) => (
                                                    <CommandItem
                                                        key={user.id}
                                                        value={user.fullName}
                                                        onSelect={() => {
                                                            form.setValue("fullName", user.fullName);
                                                            setPopoverOpen(false);
                                                        }}
                                                    >
                                                        <Check className={user.fullName === field.value ? "mr-2 h-5 w-5 opacity-100" : "mr-2 h-5 w-5 opacity-0"} />
                                                        {user.fullName}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </>
                                    )}
                                </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};


export const CodeField = ({ form, isSubmitting }: any) => {
    const [showPasscode, setShowPasscode] = useState(false);

    return (
        <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                    <FormLabel>Enter your passcode</FormLabel>
                    <div className="relative">
                        <Input
                            {...field}
                            type={showPasscode ? "text" : "password"} 
                            placeholder="Enter passcode"
                            className="h-[50px] bg-white text-main !font-normal !text-sm"
                            disabled={isSubmitting}
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-2 flex items-center"
                            onClick={() => setShowPasscode(!showPasscode)}
                        >
                            {showPasscode ? <EyeOff className="h-5 w-5 text-gray-500" /> : <Eye className="h-5 w-5 text-gray-500" />}
                        </button>
                    </div>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
