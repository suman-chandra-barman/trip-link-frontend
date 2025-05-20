import { Box, Container, Stack, Typography } from "@mui/material";

const TrustedTravelBuddies = () => {
    return (
        <Container maxWidth="xl">
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center" marginLeft={{md:10, lg: 20}} marginRight={{md:10, lg: 20}}>
                {/* Left Column - Text */}
                <Box sx={{ flex: 1,}}>
                    <Typography variant="h3" component="h3" fontWeight="600" sx={{
                        fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "2.5rem",
                        },
                    }}>
                        Real and Verified Travelers Only!
                    </Typography>
                    <Typography component="h4" mt={2}  color="text.secondary">
                        TripLink connects 150,000 passionate travelers from all around the globe.
                        Everyone on board is ID checked and verified. Travel safe, comfortable, and fun.
                    </Typography>
                </Box>

                {/* Right Column - Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth:560,
                        maxHeight: 560,
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component="img"
                        src="https://optim.tildacdn.net/tild6265-3466-4130-a363-393664306335/-/format/webp/JMT_Find_Travel_Budd.jpg.webp"
                        alt="Travel"
                        sx={{
                            width: '100%',
                            maxWidth:560,
                            maxHeight: 560,
                            borderRadius: 2,
                            objectFit: 'cover',
                        }}
                    />
                </Box>
            </Stack>
            <Stack direction={{xs: "column-reverse", md: "row"}} mt={10} spacing={4} alignItems="center" marginLeft={{md:10, lg: 20}} marginRight={{md:10, lg: 20}}>
                {/* Left Column - Image */}
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth:560,
                        maxHeight: 560,
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component="img"
                        src="https://optim.tildacdn.net/tild3230-6630-4566-a538-353535373561/-/format/webp/JMT_Find_Travel_Budd.jpg.webp"
                        alt="Travel"
                        sx={{
                            width: '100%',
                            maxWidth:560,
                            maxHeight: 560,
                            borderRadius: 2,
                            objectFit: 'cover',
                        }}
                    />
                </Box>

                {/* Right Column - Text */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h3" component="h3" fontWeight="600" sx={{
                        fontSize: {
                            xs: "1.5rem",
                            sm: "2rem",
                            md: "2.5rem",
                        },
                    }}>
                        Travel with the Perfect Clique
                    </Typography>
                    <Typography component="h4" mt={2} color="text.secondary">
                        Explore 7,000 destinations around the globe with the perfect travel buddy by joining tailor-made trips. Everything is planned and hosted by an experienced travel buddy, called TripLeader.
                        All you need to do is sit down, relax, and have a lot of fun with new travel buddies!
                    </Typography>
                </Box>
            </Stack>
        </Container>
    );
};

export default TrustedTravelBuddies;
