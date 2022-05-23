import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';
import '../styles/NavTabStyle.css';
import { Typography } from '@mui/material';

function LinkTab(props) {
  return <Tab component={Link} to={props.pathname} {...props} />;
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
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
        <LinkTab label='View Reports' pathname='/' />
        <LinkTab label='Generate reports' pathname='/generate' />
      </Tabs>

      <Box sx={{ alignItems: 'center', m: '0.7rem' }}>
        <Typography sx={{ color: '#fff' }}> Byrant Tanadjaya </Typography>
      </Box>
    </Box>
  );
}
