import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '../src/Link';
import Connect from '../components/Connect';

export default function MainAppBar() {
  return (
    <AppBar color="inherit" elevation={0} position="relative">
      <Link underline="none" href="/">
        <Toolbar>
          <Grid alignItems="center" alignContent="center" justifyContent="space-between" container>
            <Grid item>
              <Grid alignItems="center" alignContent="center" container>
                <Grid item>
                  <Avatar sx={{ mr: 2 }} src="/logo.png"></Avatar>
                </Grid>
                <Grid item>
                  <Typography variant="h6" color="inherit" noWrap>
                    Helm
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Connect />
            </Grid>
          </Grid>
        </Toolbar>
      </Link>
    </AppBar>
  );
}