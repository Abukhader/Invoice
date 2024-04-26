import { IconButton, Typography, Stack } from '@mui/material'
import React, { useContext } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { Close } from '@mui/icons-material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import Links from './Links'
import TranslateIcon from '@mui/icons-material/Translate';
import { ColorModeContext } from "../../theme";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';


export default function Header1() {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event.type === 'keydown' &&
          (event.key === 'Tab' ||
            event.key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box sx={{
      bgcolor: theme.palette.myColor.main,
      py: "4px",
      mt: 2,
      borderRadius: "50px",
  }}>
      {useMediaQuery('(min-width:1201px)') && (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} gap={5}>
          <Stack direction={"row"} alignItems={"center"} gap={5}>
          {theme.palette.mode === "light" ? (
            <IconButton sx={{ mx: 3, color: "white" }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton sx={{ mx: 3 }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}
          <Links title={"الزبائن"} />
          <Links title={"ادارة الموارد"} />
          <Links title={"الحسابات"} />
          <Links title={"الفواتير"} />
          <Links title={"القيود"} />
          <Links title={"الحسابات"} />
          <Links title={"الاعدادات"} />
          <IconButton sx={{ color: "white" }}><TranslateIcon /></IconButton>
          </Stack>

          

          <Stack display={"flex"} direction={"row"} alignItems={"center"}>
            <Typography sx={{ color: "white", ml: 1 }}>abed</Typography>
            <IconButton sx={{ bgcolor: "white", color: "black", m: "5px" }}><ManageAccountsIcon /></IconButton>
          </Stack>


        </Stack>

      )}



      {useMediaQuery('(max-width:1200px)') && (
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Stack direction={"row"} alignItems={"center"}>
            {theme.palette.mode === "light" ? (
            <IconButton sx={{ mx: 3, color: "white" }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton sx={{ mx: 3 }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="inherit"
            >
              <DarkModeOutlined />
            </IconButton>
          )}
              <IconButton sx={{color: "white"}} onClick={toggleDrawer("top", true)}>
                <MenuIcon sx={{fontSize: "30px"}} />
              </IconButton>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Typography sx={{ color: "white", ml: 1, alignItems: "center" }}>abed</Typography>
              <IconButton sx={{ bgcolor: "white", color: "black", m: "5px" }}><ManageAccountsIcon /></IconButton>
            </Stack>
            </Stack>
      )}





      <Drawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ ".MuiPaper-root.css-1sozasi-MuiPaper-root-MuiDrawer-paper": { height: "100%" } }}
      >

        <Box sx={{ width: 444, mx: "auto", mt: "6", position: "relative", pt: 10 }}>
          <IconButton sx={{ ":hover": { rotate: "180deg", transition: ".5s", color: "red" }, position: "absolute", top: 10, right: 10 }} onClick={toggleDrawer("top", false)}>
            <Close />
          </IconButton>

          {[
            { id: 1, mainLink: "الزبائن", subLink: [] },
            { id: 2, mainLink: "ادارة الموارد", subLink: [] },
            { id: 3, mainLink: "الحسابات", subLink: [] },
            { id: 4, mainLink: "الفواتير", subLink: [] },
            { id: 5, mainLink: "القيود", subLink: [] },
            { id: 6, mainLink: "الحسابات", subLink: [] },
            { id: 6, mainLink: "الاعدادات", subLink: [] },
          ].map((item) => (
            <Accordion key={item.id} elevation={0} sx={{ bgcolor: "initial" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {item.mainLink}
              </AccordionSummary>
              <List sx={{ py: 0, my: 0, zIndex: 2 }}>
                {item.subLink.map((link, index) => (
                  <ListItem key={index} sx={{ py: 0, my: 0 }}>
                    <ListItemButton>
                      <ListItemText primary={link} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Accordion>
          ))}



        </Box>
      </Drawer>

    </Box>
  )
}
