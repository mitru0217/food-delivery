import { useState } from 'react';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BasicPopover = ({
  anchorEl,
  handleClose,
  popoverContent,
  anchorPosition,
  children,
}) => {
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Popover
      anchorReference="anchorPosition"
      anchorPosition={anchorPosition}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Box sx={{ p: 2 }} style={{ background: '#3d77a7' }}>
        {children} {/* Render dynamic content */}
      </Box>
    </Popover>
  );
};

export default BasicPopover;
