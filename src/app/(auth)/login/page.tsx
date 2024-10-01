"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import welcome from "../../../../public/svg/welcome.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation, useQuery } from 'react-query'; 
import { useRouter } from 'next/navigation';

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
import flow from "../../../../public/svg/flow.svg";
import { loginUser ,getAllUsers} from "@/lib/api";


const FormSchema = z.object({
  name: z.string({
    required_error: "Please select a name.",
  }),
  passcode: z.string().min(6, "Passcode must be at least 6 characters"),
});


const Page = () => {
  const [names, setNames] = useState([]); 
  const router = useRouter(); 

 
  const { data, isLoading } = useQuery('userNames', fetchUserNames, {
    onSuccess: (data) => {
   
      setNames(data.map((user: { fullName: any; id: any; }) => ({ label: user.fullName, value: user.id }))); 
    },
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      router.push("/dashboard");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    mutation.mutate({ fullName: data.name, code: data.passcode });
  };


  async function fetchUserNames() {
    const response = await getAllUsers()
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  }

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="relative flex items-center min-h-screen justify-center gap-6 flex-col bg-main text-white">
      <Image
        src={flow}
        alt="flowers"
        fill
        style={{ objectFit: "cover" }}
        className="absolute top-0 left-0 z-0"
      />
      <Image src={welcome} alt="welcome" width={300} className="relative z-10" />
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
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Please select your Name</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[400px] justify-between px-6 py-4 text-lg bg-white",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? names.find((name) => name.value === field.value)?.label
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
                            <CommandEmpty>No name found.</CommandEmpty>
                            <CommandGroup>
                              {names.map((name) => (
                                <CommandItem
                                  value={name.label}
                                  key={name.value}
                                  onSelect={() => {
                                    form.setValue("name", name.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-5 w-5",
                                      name.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {name.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
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
                name="passcode"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Please Enter your passcode</FormLabel>
                    <Input
                      {...field}
                      placeholder="Enter passcode"
                      className="w-[400px] px-6 py-4 text-lg h-[50px] bg-white"
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full max-w-[400px] p-6 text-lg bg-white text-main"
            >
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
