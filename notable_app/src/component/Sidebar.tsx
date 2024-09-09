import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './Sidebar.css'; // Import CSS file
interface SidebarProps {
  open: boolean;
  onClose: () => void;
  
}const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  const drawerList = (
    <Box
      sx={{
        width: 250,
        backgroundImage: 'url(https://your-image-url.com/image.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        color: '#333',
        borderRight: '1px solid #e0e0e0',
        height: '100%',
        boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
      }}
      role="presentation"
      onClick={onClose}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                padding: '10px 20px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#007bff',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#0056b3', // Thay đổi màu khi hover
                  },
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#e0e0e0' }} />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              sx={{
                padding: '10px 20px',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.7)',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: '#007bff',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: '#0056b3', // Thay đổi màu khi hover
                  },
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText
                primary={text}
                sx={{ fontWeight: 500 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {drawerList}
    </Drawer>
  );
};

export default Sidebar;
