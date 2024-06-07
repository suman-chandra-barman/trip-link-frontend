import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Box } from "@mui/material";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Navbar />
      <Box mt="65px">{children}</Box>
      <Footer />
    </Box>
  );
};

export default CommonLayout;
