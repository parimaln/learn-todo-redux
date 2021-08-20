import React, { useState } from 'react';
import { DataGrid, GridSelectionModel } from '@material-ui/data-grid';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  selectLoading,
  selectTodos
} from './todoSlice';
import { columns } from './coloumns';
import { Backdrop, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, TextField } from '@material-ui/core';
import { Add, Delete } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));
export function Todo() {
  const classes = useStyles();
  const status = useAppSelector(selectLoading);
  const todos = useAppSelector(selectTodos)
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState('');
  const [open, setOpen] = React.useState(false);
  const [selection, setSelection] = useState<GridSelectionModel>();
  React.useEffect(() => {
    dispatch(incrementAsync())
  }, [])

  function onSelectionModelChange(selectionModel: GridSelectionModel) {
    setSelection(selectionModel);
  }
  function completeTask() {
    dispatch(decrement(selection))
  }
  function addTask() {
    dispatch(increment(todoText))
    setOpen(false);
    setTodoText('')
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const handleChange = (event: any) => {
    setTodoText(event.target.value);
  };
  return (
    <div>
      <div style={{ height: 500, width: '100%' }}>
        <div style={{ margin: '20px' }}>
          <Button
            startIcon={<Add />}
            disableElevation
            onClick={handleOpen}
            variant="contained"
            color="primary">
            Add todo
          </Button>
          <Button
            startIcon={<Delete />}
            style={{ marginLeft: '20px' }}
            disableElevation
            onClick={completeTask}
            disabled={!selection || selection.length === 0}
            variant="contained"
            color="secondary">
            {selection && selection.length > 1 ? `Complete ${selection.length} Todos` : 'Complete Todo'}
          </Button>
        </div>
        <DataGrid
          onSelectionModelChange={onSelectionModelChange}
          rows={todos}
          columns={columns}
          pageSize={10}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter your life goal
          </DialogContentText>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="name"
            label="Todo"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTask} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop className={classes.backdrop} open={status === 'loading'}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
