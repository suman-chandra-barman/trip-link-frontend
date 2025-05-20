import { Box, Button } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import TBModal from "../Modals/TBModal";
import TBForm from "../Forms/TBForm";
import TBSelect from "../Forms/TBSelect";
import { useUpdateUserMutation } from "@/redux/features/user/userApi";

type TUserRoleModalProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  userId: string;
};

const UserRoleModal = ({ open, setOpen, userId }: TUserRoleModalProps) => {
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (values: FieldValues) => {
    const toastId = toast.loading("Updating...");
    const data = { ...values, userId };
    try {
      const res = await updateUser(data).unwrap();
      if (res?.id) {
        toast.success("Role updated successfully!", { id: toastId });
        setOpen(false);
      }
      if (!res?.id) {
        toast.error("Failed to update role!", { id: toastId });
      }
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <TBModal title="Change User Role" open={open} setOpen={setOpen}>
      <Box sx={{ width: 450 }}>
        <TBForm onSubmit={handleSubmit}>
          <TBSelect name="role" label="Role" items={["ADMIN", "USER"]} />
          <Box mt={2}>
            <Button type="submit">Update</Button>
          </Box>
        </TBForm>
      </Box>
    </TBModal>
  );
};

export default UserRoleModal;
