import { Container, Grid, Typography } from "@mui/material";
import HowTripLinkWorkCard from "../Cards/HowTripLinkWorkCard";
import SearchIcon from "@mui/icons-material/Search";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import GroupsIcon from "@mui/icons-material/Groups";

export type THowTripLinkWorksData = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const HowTripLinkWork = () => {
  const data: THowTripLinkWorksData[] = [
    {
      icon: <SearchIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Search Destination",
      description: "Search and select a destination that you are traveling to.",
    },
    {
      icon: <PersonSearchIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Find Travel Partners",
      description:
        "Browse through the list of trips, locals, and nearby users in that location.",
    },
    {
      icon: <AddReactionIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Get Connected",
      description:
        "When you find someone that you want to meet up with, click the connect button and start chatting with them.",
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 50, color: "primary.main" }} />,
      title: "Trip Together",
      description:
        "Plan together, meet up with your travel companion at a pre-decided public place and travel together.",
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Typography
        component="h2"
        variant="h3"
        fontWeight="600"
        textAlign="center"
        mb={6}
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
          },
        }}
      >
        How TripLink Works
      </Typography>

      {/* cards */}
      <Grid container spacing={1}>
        {data?.map((item, idx) => (
          <Grid key={idx} item xs={12} md={4} lg={3}>
            <HowTripLinkWorkCard data={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowTripLinkWork;
