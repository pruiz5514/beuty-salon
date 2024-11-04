import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { AuthProvider } from "./auth-provider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700","900"], });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
