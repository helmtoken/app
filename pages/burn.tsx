import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import { IconButton } from '@mui/material';

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
              burn
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              burn HLM at will
            </Typography>
            <Grid spacing={3} alignItems="center" justifyContent="center" container>
              <Grid item>
                <Grid spacing={2} direction="column" alignItems="center" justifyContent="center" container>
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocalFireDepartmentIcon sx={{ color: 'ButtonHighlight', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="HLM amount to burn" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <IconButton sx={{ border: '1px solid gray' }}>
                  <NavigateNextIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}