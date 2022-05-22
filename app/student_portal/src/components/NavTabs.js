import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import '../styles/NavTabStyle.css';
import { Typography } from '@mui/material';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#001E36',
        justifyContent: 'space-between',
        display: 'flex'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{
          style: {
            display: 'none'
          }
        }}
        aria-label='nav tabs example'
      >
        <Tab component={Link} label='view Reports' to='/' value={0} />
        <Tab
          component={Link}
          label='Generate Report'
          to='/generate'
          value={1}
        />
      </Tabs>
      <Box sx={{ alignItems: 'center', m: '0.7rem' }}>
        <Typography sx={{ color: '#fff' }}> Byrant Tanadjaya </Typography>
      </Box>
    </Box>
  );
}
