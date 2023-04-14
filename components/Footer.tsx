import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from '../src/Link';

export default function Album() {
  return (<Box sx={{ p: 6 }} component="footer">
    <Typography variant="h6" align="center" gutterBottom>
      Navigate decentralized experiences
    </Typography>
    <Grid sx={{ mt: 3 }} spacing={2} alignItems="center" justifyContent="center" container>
      <Grid item>
        <Link target="_blank" href="https://github.com/helmtoken">
          <GitHubIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link target="_blank" href="https://twitter.com/helmtoken">
          <TwitterIcon />
        </Link>
      </Grid>
      <Grid item>
        <Link target="_blank" href="https://t.me/helmtoken">
          <TelegramIcon />
        </Link>
      </Grid>
    </Grid>
  </Box>
  );
}