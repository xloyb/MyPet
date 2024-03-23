import type { Metadata } from "next";
import "./globals.css";
import { Footer, NavBar } from "@/components";


export const metadata: Metadata = {
  title: "MyPet",
  description: "Welcome to MyPet, where the passion for pet adoption meets the expertise of MyDevify.com. Our platform, powered by MyDevify.com's cutting-edge development tools and expertise, revolutionizes the way homeless pets find loving homes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        {/* <NavBar/> */}
        {children}
        {/* <Footer/> */}
        </body>
    </html>
  );
}
