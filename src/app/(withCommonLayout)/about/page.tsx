"use client";
import { Box, Typography, Grid, Avatar, Link, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const teamMembers = [
  { name: "Sam Barman", role: "Founder", image: "" },
  { name: "Jack Robart", role: "Founder", image: "" },
  { name: "Max Tramp", role: "CEO", image: "" },
  { name: "Suman Roy", role: "CTO", image: "" },
  { name: "Jubal Barman", role: "Manager", image: "" },
  { name: "Ali Akbar", role: "Manager", image: "" },
];

const AboutUs = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          About Us
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Typography
          variant="h6"
          component="p"
          textAlign="center"
          maxWidth="800px"
          margin="0 auto"
          gutterBottom
        >
          At TripLink, we connect travelers with like-minded companions for
          memorable journeys. Our goal is to create a safe, inclusive platform
          for sharing experiences and building friendships. We are here to
          support your adventures—reach out with any questions or feedback.
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mt={5}
          gutterBottom
        >
          Meet Our Team
        </Typography>
      </motion.div>

      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
            >
              <Box
                sx={{
                  textAlign: "center",

                  padding: "20px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",

                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 10px",
                  }}
                />
                <Typography variant="h6" fontWeight="bold">
                  {member.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  {member.role}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          mt={5}
          gutterBottom
        >
          Contact Us
        </Typography>
        <Box textAlign="center">
          <Typography variant="body1">Email: triplink@gmail.com</Typography>
          <Typography variant="body1">Phone: +8801518441778</Typography>

          <Box>
            <IconButton href="#" color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton href="#" color="inherit">
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default AboutUs;
