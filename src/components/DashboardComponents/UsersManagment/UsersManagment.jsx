import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PeopleIcon from '@mui/icons-material/People';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const UsersManagment = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Paper elevation={0} style={{ width: '100%' }}>
      <List sx={{ bgcolor: '#193044', fontSize: '4rem' }}>
        <ListItemText
          sx={{
            my: 0,
            padding: '1rem 5rem',
          }}
          primary="Users Management"
          primaryTypographyProps={{
            color: '#4fc3f7',
            fontSize: 24,
            fontWeight: 'medium',
            letterSpacing: 0,
          }}
        />
        <Divider
          sx={{
            height: 2,
            bgcolor: 'rgba(71, 98, 130)',
          }}
        />
        <Box
          sx={{
            bgcolor: '#3d77a7',
          }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PeopleIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Customers"
              primaryTypographyProps={{
                color: '#193044',
                fontSize: 20,
                fontWeight: 'medium',
              }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <PeopleAltIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Customers List"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <AccountBoxIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Customer Account"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider
            sx={{
              height: 2,
              bgcolor: 'rgba(71, 98, 130)',
            }}
          />
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <DeliveryDiningIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Couriers"
              primaryTypographyProps={{
                color: '#193044',
                fontSize: 20,
                fontWeight: 'medium',
              }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <PeopleAltIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Couriers List"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <AccountBoxIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Courier Account"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <Divider
            sx={{
              height: 2,
              bgcolor: 'rgba(71, 98, 130)',
            }}
          />
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <PeopleAltIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Admins"
              primaryTypographyProps={{
                color: '#193044',
                fontSize: 20,
                fontWeight: 'medium',
              }}
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <PeopleIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Admins List"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <ManageAccountsIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Admin Account"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
        </Box>
      </List>
    </Paper>
  );
};

export default UsersManagment;
