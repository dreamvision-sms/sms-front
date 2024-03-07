import { useState } from 'react';
import Button from '../../components/utils/Button';
import {
  CircularProgress,
  Dialog,
  IconButton,
  Slider,
  TextField,
} from '@mui/material';
import { CgClose } from 'react-icons/cg';
import SessionForm from '../../components/Settings/forms/SessionForm';
import { useGetSessionsQuery } from '../../store/api/SessionApi';
import SessionList from '../../components/Settings/SessionList';
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridToolbar,
} from '@mui/x-data-grid';

const Sessions = () => {
  const { data, isLoading, isSuccess } = useGetSessionsQuery();
  console.log(data);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,

      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Dialog
        className="bg-red-500"
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
      {isLoading && (
        <div className="h-[200px] w-full bg-white dark:bg-boxdark flex justify-center items-center">
          <CircularProgress size={50} />{' '}
        </div>
      )}
      {isSuccess && data && <SessionList session={data} />}
      {isSuccess && data && (
        <div className="bg-white p-4 my-5 dark:bg-boxdark text-white">
          <DataGrid
            checkboxSelection
            editMode="row"
            columns={columns}
            slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            slots={{ toolbar: GridToolbar }}
            classes={{
              // columnHeader: 'bg-red-500',
              checkboxInput: 'bg-red-500 rounded-full',
              rowReorderCellPlaceholder: 'bg-red-500',
              sortIcon: 'text-blue-500',
              // iconButtonContainer: 'bg-red-500',
              'cell--rangeBottom': 'bg-red-500',

              'cell--selectionMode': 'border-red-500',
              columnHeaders:
                'rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5 border-0 border-b-0 gap-4 dark:text-white mb-4 uppercase ',
              rowCount: 'bg-red-500',
              columnHeaderTitle: 'font-bold',
              // filterForm: 'bg-red-500',
              // filterFormColumnInput: 'bg-red-500',
              selectedRowCount: 'bg-blue-500 p-2 text-white rounded-full',
              toolbarContainer: ' bg-red-500',

              root: 'border-none p-4 border-t-4 border-indigo-500',
              cell: 'border-b-0',
              columnHeader: 'border-b-0 font-bold ',
              columnsPanelRow: 'bg-red-500',
              'cell--withRenderer': 'border-0',
              row: ' text-black dark:text-white',
              rowReorderCell: 'text-black dark:text-white p-4',

              // menu: 'bg-red-500',
            }}
            rows={rows}
          />
        </div>
      )}
    </div>
  );
};

export default Sessions;
