import { Dispatch, SetStateAction } from "react";
import TBModal from "../Modals/TBModal";
import { Box, Divider, Typography } from "@mui/material";

type TDemoLoginCredentialModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const DemoLoginCredentialModal = ({
  open,
  setOpen,
}: TDemoLoginCredentialModalProps) => {
  return (
    <TBModal title="Login Credentials" open={open} setOpen={setOpen}>
      <Box sx={{ p: 2, width: 450 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Admin
        </Typography>
        <Typography>Username: sam_barman</Typography>
        <Typography>Email: sam@gmail.com</Typography>
        <Typography>Password: 123456</Typography>

        <Divider sx={{ mt: 2, mb: 2 }} />

        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          User
        </Typography>
        <Typography>Username: max</Typography>
        <Typography>Email: max@gmail.com</Typography>
        <Typography>Password: 123456</Typography>
      </Box>
    </TBModal>
  );
};

export default DemoLoginCredentialModal;
