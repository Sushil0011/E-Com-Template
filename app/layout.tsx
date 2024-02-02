import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getData } from "@/utils/getData";
import Header from "./components/header";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";
import { MyContextProvider } from "@/app/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories: any = await getData(
    "https://api.tanntrim.com/static-categories/"
  );
  return (
    <html lang="en">
      <body>
        <MyContextProvider>
          <Header categories={categories as string[]} />
          <Toaster position="top-center" />
          {children}
          <Footer />
        </MyContextProvider>
      </body>
    </html>
  );
}
