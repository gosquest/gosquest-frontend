"use client";

import Image from "next/image";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsDown, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";

import { useGetAllUsers, useLogin } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { Cookies } from "react-cookie";
import { storeData } from "@/utils/storage";

const FormSchema = z.object({
  fullName: z.string({
    required_error: "Please select a name.",
  }),
  code: z.string().min(4, "Passcode must be at least 4 characters"),
});

const cookies = new Cookies();

const Page = () => {
  const { data: userData, isPending: isUserPending } = useGetAllUsers();
  const loginMutation = useLogin();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      code: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await loginMutation.mutateAsync(data);
      if (response?.success === true) {
        storeData("userId", response.data.userId);
        cookies.set("token", response.token, { path: "/" });
        window.location.replace("/dashboard");
        toast.error(response.error.msg);
      } else {
        toast.error(response.error.msg);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative flex items-center min-h-screen justify-center gap-6 flex-col bg-main text-white">
      <Image
        src={"/svg/flow.svg"}
        alt="flowers"
        style={{ objectFit: "cover" }}
        fill
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src={"/svg/welcome.svg"}
        alt="welcome"
        width={300}
        height={120}
        className="relative z-10"
      />
      <h2 className="text-center relative z-10 md:w-3/4 lg:w-[50%]">
        Welcome to Rwanda Coding Academy Hackathon
      </h2>
      <div className="relative z-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 flex flex-col gap-4 items-center"
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Select your Name</FormLabel>
                    <Popover
                      open={popoverOpen}
                      onOpenChange={setPopoverOpen}
                    >
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[400px] justify-between px-6 py-4 text-lg bg-white text-main",
                              !field.value && "text-muted-foreground"
                            )}
                            disabled={isSubmitting}
                            onClick={() => setPopoverOpen(!popoverOpen)}
                          >
                            {field.value
                              ? userData?.data.find(
                                  (user: any) => user.fullName === field.value
                                )?.label || field.value
                              : "Select name"}
                            <ChevronsDown className="ml-2 h-5 w-5 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[400px] max-h-[200px] overflow-auto p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search name..."
                            className="bg-white"
                          />
                          <CommandList>
                            {isUserPending ? (
                              <div className="flex items-center justify-center p-4">
                                <Loader className="animate-spin h-5 w-5" />
                              </div>
                            ) : (
                              <>
                                <CommandEmpty>No name found.</CommandEmpty>
                                <CommandGroup>
                                  {userData?.data.map((user: any) => (
                                    <CommandItem
                                      value={user.fullName}
                                      key={user.id}
                                      onSelect={() => {
                                        form.setValue("fullName", user.fullName);
                                        setPopoverOpen(false); // Close popover after selection
                                      }}
                                    >
                                      <Check
                                        className={cn(
                                          "mr-2 h-5 w-5",
                                          user.fullName === field.value
                                            ? "opacity-100"
                                            : "opacity-0"
                                        )}
                                      />
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
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Enter your passcode</FormLabel>
                    <Input
                      {...field}
                      type="password" 
                      placeholder="Enter passcode"
                      className="w-[400px] px-6 py-4 text-lg h-[50px] bg-white text-main"
                      disabled={isSubmitting}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full max-w-[400px] p-6 text-lg bg-white text-main hover:text-white"
              disabled={isSubmitting}
              variant="secondary"
            >
              {isSubmitting ? (
                <Loader className="animate-spin h-5 w-5 mr-2" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
