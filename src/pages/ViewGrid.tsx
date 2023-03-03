import { Box } from "@mui/material";
import { DataGridPro} from "@mui/x-data-grid-pro";
import { ViewGridColumnsDefinition } from "./ViewGridColumnsDefinition";

export const ViewGrid = () => {
  const columns = ViewGridColumnsDefinition();

  const rows = [
    {
      "id": 1,
      "name": "name1",
      "items": 1,
      "startTime": "2022-02-02T14:30:31+01:00",
      "finishTime": "2023-02-02T14:30:31+01:00",
      "status": "STATUS1"
    },
    {
      "id": 2,
      "name": "name2",
      "items": 5,
      "startTime": "2022-02-02T14:30:31+01:00",
      "finishTime": "2023-02-02T14:30:31+01:00",
      "status": "STATUS3"
    },
    {
      "id": 3,
      "name": "name3",
      "items": 2,
      "startTime": "2022-02-02T14:30:31+01:00",
      "finishTime": "2023-02-02T14:30:31+01:00",
      "status": "STATUS4"
    },
  ];
    return (
    <Box sx={{height: "60rem", width: "100%", backgroundColor: "white"}}>
      <DataGridPro columns={columns} rows={rows} />
    </Box>);
};