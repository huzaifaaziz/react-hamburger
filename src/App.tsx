import MenuIcon from '@mui/icons-material/Menu';
import {useState} from 'react';
import CustomMenu from './components/CustomMenu';
import {pages} from './utils/constants';
import Students from './components/Students';

const App = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  return (
    <>
      <div
        onClick={(e) => setAnchorEl(e.currentTarget)}
        className="cursor-pointer"
      >
        <MenuIcon />
      </div>
      <CustomMenu
        isOpen={!!anchorEl}
        onClose={() => setAnchorEl(null)}
        items={pages}
        anchorEl={anchorEl}
        subMenu={<Students />}
      />
    </>
  );
};

export default App;
