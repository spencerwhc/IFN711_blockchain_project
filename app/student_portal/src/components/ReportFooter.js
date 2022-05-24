import { Box, Typography, Grid } from "@mui/material";

export default function ReportFooter() {
    return (
        <Grid container sx={{ marginTop: "30px" }}>
            {/* signature */}
            <Grid item sx={{ display: "flex" }} xs={8} align="left">
                <Box
                    sx={{
                        textAlign: "center",
                        lineHeight: "0.5",
                    }}
                >
                    <p>APPROVED</p>
                    <img src="/signature.png" alt="Karen Jen" width="180px" />
                    <p>Karen Jen</p>
                    <p>University Registrar</p>
                </Box>
            </Grid>
            {/* QUT address */}
            <Grid
                item
                sx={{
                    // marginTop: '70px',
                    display: "flex",
                    justifyContent: "flex-end",
                }}
                xs={4}
            >
                <Box
                    sx={{
                        textAlign: "left",
                        lineHeight: "0.5",
                        borderLeft: "2px solid black",
                        paddingLeft: "30px",
                    }}
                >
                    <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: "bold" }}
                        gutterBottom={true}
                    >
                        Queensland University of Technology
                    </Typography>
                    <Typography gutterBottom={true}>GPO Box 2434</Typography>
                    <Typography gutterBottom={true}>
                        Brisbane, QLD 4001
                    </Typography>
                    <Typography>www.qut.edu.au/</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}
