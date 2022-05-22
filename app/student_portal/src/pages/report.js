import { Box, Container, Typography, Grid } from '@mui/material';
import Layout from '../components/layout';
export default function Report() {
  return (
    <Container maxWidth='lg' sx={{ my: '30px' }}>
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
      <Box sx={{ flexGrow: 1 }}>
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
    </Container>
  );
}
