"use client";
import DashboardMain from "@/components/Dashboard/DashboardMain";
import ProtectedRoute from "@/utils/privateRoute";

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <DashboardMain />
    </ProtectedRoute>
  );
};

export default DashboardLayout;
