import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import { RiAdvertisementFill } from 'react-icons/ri';

const PromoAndActions = () => {
  return (
    <Paper elevation={0} style={{ width: '100%' }}>
      <List sx={{ bgcolor: '#193044', fontSize: '4rem' }}>
        <ListItemText
          sx={{
            my: 0,
            padding: '1rem 5rem',
          }}
          primary="Promos and Actions"
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
          <ListItemButton>
            <ListItemIcon>
              <RiAdvertisementFill
                sx={{ color: '#193044', fontSize: '22px' }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Promos"
              primaryTypographyProps={{
                color: '#193044',
                fontSize: 20,
                fontWeight: 'medium',
              }}
            />
          </ListItemButton>
          <Divider
            sx={{
              height: 2,
              bgcolor: 'rgba(71, 98, 130)',
            }}
          />
          <ListItemButton>
            <ListItemIcon>
              <RiAdvertisementFill
                sx={{ color: '#193044', fontSize: '22px' }}
              />
            </ListItemIcon>
            <ListItemText
              primary="Actions"
              primaryTypographyProps={{
                color: '#193044',
                fontSize: 20,
                fontWeight: 'medium',
              }}
            />
          </ListItemButton>
        </Box>
      </List>
    </Paper>
  );
};

export default PromoAndActions;
