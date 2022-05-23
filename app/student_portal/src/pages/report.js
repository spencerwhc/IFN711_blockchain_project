import { Box, Container, Typography, Grid } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Report() {
  return (
    <Container maxWidth='lg' sx={{ my: '30px' }}>
      <img src='/qutlogo.png' alt='qut logo' width='50px' />
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
        <Typography variant='text' gutterBottom component='div' align='right'>
          22/05/22
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
          <Grid item xs={4} align='right'>
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
          paddingBottom: '30px'
        }}
      >
        <Grid item xs={12}>
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', paddingTop: '20px' }}
          >
            Course Experience &#38; Skills
          </Typography>
        </Grid>

        {/* Assessment 1 */}
        <Grid container xs={12}>
          <Grid item xs={11}>
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
          <Grid item xs={1}>
            <Typography
              variant='subtitle1'
              sx={{
                fontWeight: 'bold',
                paddingTop: '20px',
                textDecoration: 'underline'
              }}
              align='right'
            >
              Semester 2
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          {/* Assessment title and date */}
          <Grid container>
            <Grid item xs={11}>
              <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                Project Plan
              </Typography>
            </Grid>
            <Grid item xs={1} align='right'>
              <Typography variant='text'>11/03/22</Typography>
            </Grid>
          </Grid>
          {/* Criteria */}
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

      {/* Footer section */}
      <Grid container xs={12} sx={{ marginTop: '30px' }}>
        {/* signature */}
        <Grid sx={{ display: 'flex' }} xs={8} align='left'>
          <Box sx={{ textAlign: 'center', lineHeight: '0.5' }}>
            <p>APPROVED</p>
            <img src='/signature.png' alt='Karen Jen' width='180px' />
            <p>Karen Jen</p>
            <p>University Registrar</p>
          </Box>
        </Grid>
        {/* QUT address */}
        <Grid
          sx={{
            // marginTop: '70px',
            display: 'flex',
            justifyContent: 'flex-end'
          }}
          xs={4}
        >
          <Box
            sx={{
              textAlign: 'left',
              lineHeight: '0.5',
              borderLeft: '2px solid black',
              paddingLeft: '30px'
            }}
          >
            <Typography
              variant='subtitle1'
              sx={{ fontWeight: 'bold' }}
              gutterBottom={true}
            >
              Queensland University of Technology
            </Typography>
            <Typography gutterBottom={true}>GPO Box 2434</Typography>
            <Typography gutterBottom={true}>Brisbane, QLD 4001</Typography>
            <Typography>www.qut.edu.au/</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
