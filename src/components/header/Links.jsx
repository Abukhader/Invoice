import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import {Paper, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function Link({title}) {
  return (
    <Box sx={{display: "flex", alignItems: "center", position: "relative", ":hover .show-when-hover": {display: "block"},
    ":hover": {cursor: "pointer"}}}>
      <Typography sx={{color: "white"}} variant='body1'>{title}</Typography>
      <ExpandMoreIcon sx={{fontSize: "16px", ml: 1, color: "white"}}/>

      <Box className='show-when-hover' sx={{position: "absolute", zIndex: 2, minWidth: "150px", top: "100%", left: "50%", transform: "translate(-50%)", display: "none"}}>
        <Paper sx={{mt: 2 }} >
          <nav aria-label="secondary mailbox folders">
            <List >
              <ListItem disablePadding >
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px",  textAlign: "center"}
                  }}
                    primary="خيار 1" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px", textAlign: "center"}
                  }}
                    primary="خيار 2" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px", textAlign: "center"}
                  }}
                    primary="خيار 3" />
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText sx={{
                    ".MuiTypography-root":{ fontSize: "15px", textAlign: "center"}
                  }}
                    primary="خيار 4" />
                </ListItemButton>
              </ListItem>

            </List>
          </nav>
        </Paper>
      </Box>

      </Box>
  )
}
