import { Grid } from "@mui/material";
import { LoadingCircleSpinner } from "@/stared/ui";

export default function Loading() {
  return <Grid sx={{
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
  }}>
    <LoadingCircleSpinner />
  </Grid>;
}
