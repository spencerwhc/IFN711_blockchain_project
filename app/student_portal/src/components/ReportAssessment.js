import { Typography, Grid, List, ListItem, ListItemText } from "@mui/material";

export default function ReportAssessment({ data }) {
    console.log(data);
    return (
        <>
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
                        {data.UnitId} {data.UnitName}
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
                        Semester {data.Semester}
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
                            {data.AssessmentName}
                        </Typography>
                    </Grid>
                    <Grid item xs={1} align="right">
                        <Typography variant="text">{data.StartDate}</Typography>
                    </Grid>
                </Grid>
                {/* Criteria */}
                <List dense={true}>
                    {data
                        ? data.Achievement.map((item, index) => (
                              <ListItem>
                                  <ListItemText
                                      primary={`${index + 1}) ${item}`}
                                  />
                              </ListItem>
                          ))
                        : null}
                </List>
            </Grid>
        </>
    );
}
