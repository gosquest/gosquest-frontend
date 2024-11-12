import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const InvalidRequest = () => {
   const router = useRouter();
   return (
      <main className="flex flex-col justify-center">
         <p className="text-center text-red-500 mb-3">Invalid Request</p>
         <Button
            variant={"secondary"}
            className="bg-main hover:bg-main/90 hover:text-white text-white max-w-[400px] min-w-[300px] mx-auto"
            onClick={() => router.push("/dashboard")}
         >
            Go Back
         </Button>
      </main>
   );
};

export default InvalidRequest;
