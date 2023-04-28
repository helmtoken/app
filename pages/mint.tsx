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
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';

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
              mint
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              current ratio is <strong>10,000 XEN:1 HLM</strong>
            </Typography>
            <Grid spacing={5} direction="column" alignItems="center" justifyContent="center" container>
              <Grid item>
                <Grid spacing={2} direction="column" alignItems="center" justifyContent="center" container>
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <LockIcon sx={{ color: 'ButtonHighlight', mr: 1, my: 0.5 }} />
                      <TextField id="input-with-sx" label="XEN amount to lock" variant="standard" />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <FiberNewIcon sx={{ color: 'ButtonHighlight', mr: 1, my: 0.5 }} />
                      <TextField disabled id="input-with-sx" label="Est. HLM reward" variant="standard" value={0} />
                    </Box>
                  </Grid>
                  <Grid item>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <PublicIcon sx={{ color: 'ButtonHighlight', mr: 1, my: 0.5 }} />
                      <TextField disabled id="input-with-sx" label="Global rank" variant="standard" value={0} />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Button variant="outlined" target="_blank" href="">Claim rank and mint</Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}