import { Box, Container, Typography, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export default function Report() {
  return (
    <Container maxWidth='lg' sx={{ my: '30px' }}>
      {/* Title */}
      <Box
        sx={{
          textAlign: 'center',
          mb: '2rem',
          borderBottom: '2px solid black'
        }}
      >
        <Typography variant='h4' gutterBottom component='div'>
          Skills Report
        </Typography>
      </Box>

      {/* Course Info */}
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: '2px solid black',
          paddingBottom: '35px'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Master of Information Technology
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <strong>Name:</strong> Byrant Tanadjaya &nbsp;&nbsp;&nbsp;
            <strong>Student ID:</strong>
            10576843
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Typography variant='subtitle1'>
            <strong>Study Area Z:</strong> Business Process Management
          </Typography>
        </Grid>
      </Box>

      {/* Course Experience & Skills section */}
      <Box
        sx={{
          flexGrow: 1,
          borderBottom: '2px solid black',
          paddingBottom: '30px'
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant='subtitle1'
            sx={{ fontWeight: 'bold', paddingTop: '20px' }}
          >
            Course Experience &#38; Skills
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant='subtitle1'
            sx={{
              fontWeight: 'bold',
              paddingTop: '20px',
              textDecoration: 'underline'
            }}
          >
            IFN711: IT Industry Project
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
            Project Plan
          </Typography>
          <List dense={true}>
            <ListItem>
              <ListItemText primary='1) Integrate advanced specialist disciplinary knowledge and skills in the context of an industry project ' />
            </ListItem>
            <ListItem>
              <ListItemText primary='2) Critically analyze a client brief and use novel methods, advanced problem solving, analysis and design skills to achieve an outcome for a client' />
            </ListItem>
            <ListItem>
              <ListItemText primary='3) Demonstrate project management skills including project planning, execution, and closing' />
            </ListItem>
            <ListItem>
              <ListItemText primary='4) Communicate effectively and professionally to diverse audiences in oral and written formats' />
            </ListItem>
          </List>
        </Grid>
      </Box>
    </Container>
  );
}
