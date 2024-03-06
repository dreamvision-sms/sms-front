import { useState } from 'react';
import TableTwo from '../../components/Tables/TableTwo';
import Button from '../../components/utils/Button';
import { Dialog, IconButton } from '@mui/material';
import { CgClose } from 'react-icons/cg';
import SessionForm from '../../components/Settings/forms/SessionForm';
const Sessions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Dialog
        open={isOpen}
        fullWidth
        style={{
          position: 'absolute',
          top: 0,
          backgroundColor: 'InactiveCaptionText',
        }}
      >
        <div className="p-4 bg-white dark:bg-boxdark">
          <div className="flex justify-end">
            <IconButton onClick={() => setIsOpen(false)}>
              <CgClose className="dark:text-white" />
            </IconButton>
          </div>
          <SessionForm />
        </div>
      </Dialog>
      <div className="flex justify-end mb-5">
        <Button title="Créer" func={() => setIsOpen(!isOpen)} />
      </div>
      <TableTwo />
    </div>
  );
};

export default Sessions;
