import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navbar/navbar";
import { Separator } from "@/components/ui/separator";
import Contact from "@/components/contact/contact";


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
      <body className="bg-slate-50/70 dark:bg-stone-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <NavBar />
          {children}
          <Separator className="dark:bg-gray-500" />
          <Contact />
        </ThemeProvider>
      </body>
    </html >
  );
}
