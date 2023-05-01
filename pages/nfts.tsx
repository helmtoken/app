import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AppBar from '../components/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Footer from '../components/Footer';

function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Mint new" />
        <Tab label="Minted" />
        <Tab label="Staked" />
        <Tab label="Burnt" />
      </Tabs>
    </Box>
  );
}

export default function Home() {
  return (
    <Box>
      <CssBaseline />
      <AppBar />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'transparent',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
            >
              NFTs
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              earn rewards by time locking your HLM
            </Typography>
            <CenteredTabs />
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}