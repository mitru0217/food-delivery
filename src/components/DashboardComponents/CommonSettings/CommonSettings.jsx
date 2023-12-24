import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';
import ArrowRight from '@mui/icons-material/ArrowRight';

const CommonSettings = () => {
  return (
    <ListItem component="div" disablePadding>
      <ListItemButton sx={{ height: 56 }}>
        <ListItemIcon>
          <SettingsApplicationsIcon color="primary" />
        </ListItemIcon>
        <ListItemText
          primary="Common Settings"
          primaryTypographyProps={{
            color: 'primary',
            fontWeight: 'medium',
            variant: 'body2',
          }}
        />
      </ListItemButton>
      <Tooltip title="Common Settings">
        <IconButton
          size="large"
          sx={{
            '& svg': {
              color: 'rgba(255,255,255,0.8)',
              transition: '0.2s',
              transform: 'translateX(0) rotate(0)',
            },
            '&:hover, &:focus': {
              bgcolor: 'unset',
              '& svg:first-of-type': {
                transform: 'translateX(-4px) rotate(-20deg)',
              },
              '& svg:last-of-type': {
                right: 0,
                opacity: 1,
              },
            },
            '&:after': {
              content: '""',
              position: 'absolute',
              height: '80%',
              display: 'block',
              left: 0,
              width: '1px',
              bgcolor: 'divider',
            },
          }}
        >
          <Settings />
          <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
        </IconButton>
      </Tooltip>
    </ListItem>
  );
};

export default CommonSettings;
