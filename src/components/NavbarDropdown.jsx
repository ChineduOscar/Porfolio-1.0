import NavbarIcon from "../assets/icons/NavbarIcon";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { resumeLink } from '../data'

export default function NavbarDropdown() {
  const [open, setOpen] = React.useState(false);

  // Toggle drawer open/close
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Section data
  const sections = [
    { name: 'About', id: 'about' },
    { name: 'Skill', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Project', id: 'projects' },
    { name: 'Contact', id: 'contact' },
    {
      name: 'Resume',
      id: 'resume',
      link: resumeLink,
      isExternal: true,
    },
  ];

  // Drawer content
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sections.map(({ name, id, link, isExternal }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton
              component="a"
              href={isExternal ? link : `#${id}`}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              sx={{ color: 'white', textDecoration: 'none' }}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <div className="cursor-pointer" onClick={toggleDrawer(true)}>
        <NavbarIcon />
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#111827',
            color: 'white',
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
}
