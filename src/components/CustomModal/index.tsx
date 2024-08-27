import {Modal} from '@mui/material';
import {ReactElement} from 'react';

interface CustomModalProps {
  children: ReactElement;
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
}

const CustomModal = ({
  children,
  isOpen,
  onClose,
  title,
  image,
}: CustomModalProps) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg w-96 xs:w-96 md:w-600 p-px rounded overflow-y-scroll ">
        <div className="flex justify-between py-5 px-4 bg-grey-50 items-center rounded-t-15px">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <img src={image} className="w-full h-full rounded-full" />
            </div>
            <p className="text-base font-semibold">{title}</p>
          </div>
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default CustomModal;
