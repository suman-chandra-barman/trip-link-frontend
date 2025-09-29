import { Box, Container, Divider, Stack, Typography } from "@mui/material";

const TrustedTravelBuddies = () => {
  return (
    <Container maxWidth="lg" sx={{ my: "60px" }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 3, sm: 6, md: 10 }}
        alignItems="center"
      >
        {/* Left Column - Text */}
        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <Typography
            variant="h3"
            component="h3"
            fontWeight="700"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
            }}
          >
            Real and Verified Travelers Only!
          </Typography>
          <div
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "black",
              margin: "40px 0",
            }}
          ></div>
          <Typography component="h4" mt={2} color="text.secondary">
            TripLink connects 150,000 passionate travelers from all around the
            globe. Everyone on board is ID checked and verified. Travel safe,
            comfortable, and fun.
          </Typography>
        </Box>

        {/* Right Column - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 560,
            maxHeight: 560,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dlywv3nys/image/upload/v1748235592/JMT_Find_Travel_Budd.jpg-ezgif.com-webp-to-jpg-converter_ook08m.jpg"
            alt="Travel"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 560 },
              maxHeight: 560,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        mt={10}
        spacing={{ xs: 3, sm: 6, md: 10 }}
        alignItems="center"
      >
        {/* Left Column - Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 560,
            maxHeight: 560,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dlywv3nys/image/upload/v1748235466/JMT_Find_Travel_Budd.jpg_kwqn3s.jpg"
            alt="Travel"
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", sm: 560 },
              maxHeight: 560,
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Right Column - Text */}
        <Box sx={{ flex: 1, maxWidth: "500px" }}>
          <Typography
            variant="h3"
            component="h3"
            fontWeight="600"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.5rem",
              },
            }}
          >
            Travel with the Perfect Clique
          </Typography>
          <div
            style={{
              width: "100px",
              height: "3px",
              backgroundColor: "black",
              margin: "40px 0",
            }}
          ></div>
          <Typography component="h4" mt={2} color="text.secondary">
            Explore 7,000 destinations around the globe with the perfect travel
            buddy by joining tailor-made trips. Everything is planned and hosted
            by an experienced travel buddy, called TripLeader. All you need to
            do is sit down, relax, and have a lot of fun with new travel
            buddies!
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default TrustedTravelBuddies;
