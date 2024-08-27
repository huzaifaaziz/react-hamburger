import {Menu, MenuItem} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CustomPopover from '../CustomPopover';
import {ReactElement, useState} from 'react';

interface CustomMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
  items: string[];
  subMenu: ReactElement;
}

const CustomMenu = ({
  isOpen,
  onClose,
  anchorEl,
  items,
  subMenu,
}: CustomMenuProps) => {
  const [subMenuAnchorEl, setsubMenuAnchorEl] = useState<null | HTMLElement>(
    null
  );
  const openSubMenu = (e: React.MouseEvent<HTMLLIElement>, index: number) => {
    if (index === 1) {
      setsubMenuAnchorEl(e.currentTarget);
      return;
    }
    return;
  };
  return (
    <>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        {Array.isArray(items) ? (
          items.map((item, index) => (
            <MenuItem
              key={index}
              className="capitalize !py-3 !text-sm !font-normal !text-grey-1 !flex !items-center !justify-between"
              onClick={(e) => openSubMenu(e, index)}
            >
              {item}
              {index === 1 && <ArrowRightIcon />}
            </MenuItem>
          ))
        ) : (
          <div className="w-full">{items}</div>
        )}
      </Menu>
      <CustomPopover
        anchorEl={subMenuAnchorEl}
        isOpen={!!subMenuAnchorEl}
        onClose={() => setsubMenuAnchorEl(null)}
      >
        {subMenu}
      </CustomPopover>
    </>
  );
};
export default CustomMenu;
