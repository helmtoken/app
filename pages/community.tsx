import * as React from 'react';
import Image from 'next/image';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
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
              community
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              community projects related to Helm
            </Typography>
            <Grid spacing={2} justifyContent="center" container>
              <Grid item>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Grid item>
                      <Image src="/mobytokenlogo.svg" width={140} height={140} alt="Moby token logo" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Moby</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="dimgray">
                        Coming soon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="dimgray">
                        A meme token
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Grid item>
                      <Image src="/harbortokenlogo.svg" width={140} height={140} alt="Moby token logo" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Harbor</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="dimgray">
                        Coming soon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="dimgray">
                        A savings account
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Grid item>
                      <Image src="/helmtokenlogo.svg" width={140} height={140} alt="Moby token logo" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Helm NFTs</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="dimgray">
                        Coming soon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="dimgray">
                        Helm stakes as NFTs
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Grid item>
                      <Image src="/helmstatslogo.svg" width={140} height={140} alt="Helm stats website logo" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Helm Stats</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="dimgray">
                        Coming soon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="dimgray">
                        Community stats
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item>
                <Paper variant="outlined" sx={{ p: 1.5 }}>
                  <Grid direction="column" alignItems="center" justifyContent="center" container>
                    <Grid item>
                      <Image src="/vaultlogo.svg" width={140} height={140} alt="Helm stats website logo" />
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">Vault</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="caption" color="dimgray">
                        Coming soon
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography color="dimgray">
                        A token lock service
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}