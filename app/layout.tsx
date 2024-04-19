import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Sebastian Actis"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-slate-50 dark:bg-[#272727]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html >
  );
}
