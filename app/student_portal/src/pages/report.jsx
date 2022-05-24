import { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ReportFooter from "../components/ReportFooter";
// Import Services
import { getReport, getStudent } from "../service/api";
export default function Report() {
    const [reportData, setReportData] = useState();
    const [studnetData, setStudentData] = useState();
    const [isLoadingStudent, setIsLoadingStudent] = useState(false);

    useEffect(() => {
        console.log("here");
        const getStudentData = async () => {
            try {
                setIsLoadingStudent(true);

                const result = await getStudent("n10864989");
                const { data } = result;
                setStudentData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoadingStudent(false);
            }
        };
        getStudentData();
    }, [setStudentData]);

    useEffect(() => {
        const getreport = async () => {
            try {
                const result = await getReport("R0001");
                const { data } = result;

                setReportData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getreport();
    }, [setReportData]);

    // return <div>hi</div>;

    return (
        <>
            {isLoadingStudent ? (
                <div>Loading</div>
            ) : (
                <>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            pr: "20px",
                            pt: "20px",
                        }}
                    >
                        <Button variant="contained">Download</Button>
                    </Box>
                    <Container maxWidth="lg" sx={{ my: "30px" }}>
                        <img src="/qutlogo.png" alt="qut logo" width="50px" />
                        {/* Title */}
                        <Box
                            sx={{
                                textAlign: "center",
                                mb: "2rem",
                                borderBottom: "2px solid black",
                            }}
                        >
                            <Typography
                                variant="h4"
                                gutterBottom
                                component="div"
                            >
                                Skills Report
                            </Typography>
                            <Typography
                                variant="text"
                                gutterBottom
                                component="div"
                                align="right"
                            >
                                22/05/22
                            </Typography>
                        </Box>

                        {/* Course Info */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                borderBottom: "2px solid black",
                                paddingBottom: "35px",
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        {studnetData.Degree}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4} align="right">
                                    <strong>Name: </strong>
                                    {studnetData.Name}
                                    &nbsp;&nbsp;&nbsp;
                                    <strong>Student ID: </strong>
                                    {studnetData.ID}
                                </Grid>
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="subtitle1">
                                    <strong>Study Area Z: </strong>
                                    {studnetData.Major}
                                </Typography>
                            </Grid>
                        </Box>

                        {/* Course Experience & Skills section */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                paddingBottom: "30px",
                            }}
                        >
                            <Grid item xs={12}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        paddingTop: "20px",
                                    }}
                                >
                                    Course Experience &#38; Skills
                                </Typography>
                            </Grid>

                            {/* Assessment 1 */}
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
                                        <Typography variant="text">
                                            11/03/22
                                        </Typography>
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
                        </Box>

                        {/* Footer section */}
                        <ReportFooter />
                    </Container>
                </>
            )}
        </>
    );
}
