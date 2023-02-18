import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function ConfirmBox(props) {
  const { open, onClose, onConfirm, title, content } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="primary" onClick={onConfirm}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmBox;