import type { Metadata } from "next";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "e-commernce",
  description: "e-commernce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <Providers>
          <div className="grid grid-rows-[auto_1fr] h-svh">
            <Header />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
