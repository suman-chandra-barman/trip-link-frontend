import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Providers from "@/lib/Provider/Providers";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TripLink",
  description:
    "Find your perfect travel companion with TripLink! Connect with like-minded adventurers, plan trips together, and explore the world with new friends. Join our community and start your journey today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <Toaster position="top-center" />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
