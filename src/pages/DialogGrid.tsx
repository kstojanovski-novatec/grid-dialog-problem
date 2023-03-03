import {CloseRounded} from "@mui/icons-material";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack,} from "@mui/material";
import React, {useState} from "react";
import { DialogGridColumnsDefinition } from "./DialogGridColumnsDefinition";
import { Box } from "@mui/material";
import { DataGridPro} from "@mui/x-data-grid-pro";

interface ExportJobInfoDialogProps {
  id: number
}

export const DialogGrid = ({id}: ExportJobInfoDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const handleClickCancel = () => {
    setOpen(false);
  };

  const rows = [
    {
      "id": 1,
      "firstname": "John",
      "lastname": "Doe"
    },
    {
      "id": 2,
      "firstname": "Jane",
      "lastname": "Doe"
    }
  ];

  const columns = DialogGridColumnsDefinition();

  return (
    <Stack spacing={2}>
      <Button onClick={handleClickOpen}>Info</Button>
      <Dialog fullScreen open={open} onClose={handleClickClose}>
        <DialogActions sx={{background: "linear-gradient(35deg, black 0%, gray 100%)"}}>
          <DialogTitle sx={{width: "58%", color: "white"}}>Item - {id}</DialogTitle>
          <IconButton onClick={handleClickCancel}><CloseRounded sx={{color: "white"}}/></IconButton>
        </DialogActions>
        <DialogContent>
          <Box sx={{height: "60rem", width: "100%", backgroundColor: "white"}}>
            <DataGridPro columns={columns} rows={rows} />
          </Box>;
        </DialogContent>
      </Dialog>
    </Stack>
  );
}
