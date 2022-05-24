import { Box, Container, Typography, Grid, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReportFooter from "../components/ReportFooter";
export default function ReportAssessment() {
    return (
        <>
            {" "}
            <Grid container>
                <Grid item xs={11}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            paddingTop: "20px",
                            textDecoration: "underline",
                        }}
                    >
                        IFN711: IT Industry Project
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: "bold",
                            paddingTop: "20px",
                            textDecoration: "underline",
                        }}
                        align="right"
                    >
                        Semester 2
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
                {/* Assessment title and date */}
                <Grid container>
                    <Grid item xs={11}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold" }}
                        >
                            Project Plan
                        </Typography>
                    </Grid>
                    <Grid item xs={1} align="right">
                        <Typography variant="text">11/03/22</Typography>
                    </Grid>
                </Grid>
                {/* Criteria */}
                <List dense={true}>
                    <ListItem>
                        <ListItemText primary="1) Integrate advanced specialist disciplinary knowledge and skills in the context of an industry project " />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="2) Critically analyze a client brief and use novel methods, advanced problem solving, analysis and design skills to achieve an outcome for a client" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="3) Demonstrate project management skills including project planning, execution, and closing" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="4) Communicate effectively and professionally to diverse audiences in oral and written formats" />
                    </ListItem>
                </List>
            </Grid>
        </>
    );
}
