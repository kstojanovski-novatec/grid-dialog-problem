import {GridColumns} from "@mui/x-data-grid-pro";

export function DialogGridColumnsDefinition(): GridColumns {
  return [
    {
      field: "id",
      headerName: "ID",
      width: 70,
      editable: false,
      headerAlign: "center",
      hide: true,
      type: "number",
    },
    {
      field: "firstname",
      headerName: "First Name",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center"
    },
    {
      field: "lastname",
      headerName: "Last Name",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center"
    }
  ];
}
