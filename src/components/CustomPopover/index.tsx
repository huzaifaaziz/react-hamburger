import {Popover} from '@mui/material';
import {ReactNode} from 'react';

interface CustomPopoverProps {
  anchorEl: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const CustomPopover = ({
  anchorEl,
  isOpen,
  onClose,
  children,
}: CustomPopoverProps) => {
  return (
    <Popover
      classes={{paper: '!rounded-lg h-96'}}
      anchorEl={anchorEl}
      open={isOpen}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'center',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {children}
    </Popover>
  );
};

export default CustomPopover;
