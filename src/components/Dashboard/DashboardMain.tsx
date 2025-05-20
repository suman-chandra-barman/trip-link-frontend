import { useState } from "react";
import { Container, Grid } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import StoreIcon from "@mui/icons-material/Store";
import UsersTable from "../Tables/UsersTable";
import TripsTable from "../Tables/TripsTable";

const DashboardMain = () => {
  const [open, setOpen] = useState(true);
  const [selectedSection, setSelectedSection] = useState("userManagement");

  const renderSection = () => {
    switch (selectedSection) {
      case "userManagement":
        return <UsersTable />;
      case "tripManagement":
        return <TripsTable />;
      default:
        return null;
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Container maxWidth="xl" sx={{ paddingTop: "50px" }}>
      <Grid container spacing={2} minHeight="100vh">
        <Grid item xs={12} lg={3}>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Admin Dashboard
              </ListSubheader>
            }
          >
            <ListItemButton
              onClick={() => setSelectedSection("userManagement")}
            >
              <ListItemIcon>
                <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="User Management" />
            </ListItemButton>
            <ListItemButton
              onClick={() => setSelectedSection("tripManagement")}
            >
              <ListItemIcon>
                <StoreIcon />
              </ListItemIcon>
              <ListItemText primary="Trip Management" />
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12} lg={9}>
          {renderSection()}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardMain;
