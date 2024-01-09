import { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import ListIcon from '@mui/icons-material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BasicPopover from '../Popover/Popover';
import AddingForm from '../AddingForm';

const ProductManagment = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    // Устанавливаем якорь для всплывающего окна
  };

  const handleClickPopover = event => {
    setOpen(open);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const open = Boolean(anchorEl);

  return (
    <Paper elevation={0} style={{ width: '100%' }}>
      <List sx={{ bgcolor: '#193044', fontSize: '4rem' }}>
        <ListItemText
          sx={{
            my: 0,
            padding: '1rem 5rem',
          }}
          primary="Product Management"
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
              <CategoryIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Categories"
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
              <ListItemButton onClick={handleClickPopover} sx={{ pl: 3 }}>
                <ListItemIcon>
                  <AddCircleIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Add Categories"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <BasicPopover
                anchorEl={anchorEl}
                handleClose={handleClose}
                popoverContent={AddingForm}
                anchorPosition={{ top: 290, left: 350 }}
              >
                <AddingForm
                  fieldLabel="Category"
                  fieldNameImg="categoryImg"
                  fieldName="category"
                />
              </BasicPopover>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <RemoveCircleIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Remove Categories"
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
              <RestaurantIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Restaurants"
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
                  <AddCircleIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Add Restaurant"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <ListIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Restaurants List"
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
              <MenuBookIcon sx={{ color: '#193044', fontSize: '22px' }} />
            </ListItemIcon>
            <ListItemText
              primary="Products"
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
                  <AddCircleIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Add Product"
                  primaryTypographyProps={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: 18,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
              <ListItemButton sx={{ pl: 3 }}>
                <ListItemIcon>
                  <ListIcon
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '18px',
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary="Products List"
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

export default ProductManagment;
