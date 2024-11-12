/** @format */
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import ReactQueryProvider from "@/providers/react.query.provider";
import AuthProvider from "@/providers/auth.provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NpProgress from "@/components/NpProgress";
import StarFieldBackground from "@/components/StarField";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
   title: "GosQuest | A Gospel Gateway Application",
   description: "GosQuest is your portal to an immersive spiritual experience, bridging timeless gospel wisdom with the digital world. Dive into a rich reservoir of inspiration, reflection, and connection, tailored for everyone on their spiritual journey.",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body
            className={cn(poppins.className, {
               "debug-screens": process.env.NODE_ENV === "development",
            })}
         >
            <AuthProvider>
               <ReactQueryProvider>
                  <StarFieldBackground /> {/* Add the star background here */}
                  <div className="relative ">{children}</div>
                  <NpProgress />
               </ReactQueryProvider>
            </AuthProvider>
            <ToastContainer
               progressStyle={{ background: "#001544" }}
               icon={false}
               hideProgressBar={true}
               autoClose={3000}
               toastClassName={"border-darkBlue"}
            />
         </body>
      </html>
   );
}
