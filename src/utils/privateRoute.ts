"use client";
import { getUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userInfo = getUserInfo();
      console.log(userInfo);
    }
  }, []);

  //   useEffect(() => {
  //     const handleUnauthorizedAccess = () => {
  //       dispatch(logout());
  //       router.push("/login");
  //       toast.success("Logged out", { duration: 2000 });
  //     };

  //     if (!user || user?.role !== "ADMIN") {
  //       handleUnauthorizedAccess();
  //     }
  //   }, [dispatch, user, router]);

  return children;
};

export default ProtectedRoute;
