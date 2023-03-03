import {GridColumns, GridRenderCellParams, GridRenderEditCellParams} from "@mui/x-data-grid-pro";
import {DialogGrid} from "./DialogGrid";

export function ViewGridColumnsDefinition(): GridColumns {
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
      field: "name",
      headerName: "Name",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center"
    },
    {
      field: "items",
      headerName: "Items",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center"
    },
    {
      field: "startTime",
      headerName: "Start Time",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center",
      renderCell: (props: GridRenderCellParams<Date>) => {
        return props.value ? new Date(props.value).toLocaleString('de-DE') : "";
      }
    },
    {
      field: "finishTime",
      headerName: "Finish Time",
      flex: 1,
      editable: false,
      type: "string",
      headerAlign: "center",
      renderCell: (props: GridRenderCellParams<Date>) => {
        return props.value ? new Date(props.value).toLocaleString('de-DE') : "";
      }
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      editable: false,
      type: "string",
      headerAlign: "center"
    },
    {
      field: "info",
      headerName: "",
      width: 150,
      editable: false,
      type: "singleSelect",
      headerAlign: "center",
      align: "center",
      sortable: false,
      renderCell: ({row}) => {
        return (<DialogGrid id={row.id as number}/>);
      }
    }
  ];
}
