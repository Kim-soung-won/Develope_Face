import { Typography } from "@mui/material";
import { TopMenuBar } from "@/layout/topbar";

export default function Home() {
  return (<>
    <TopMenuBar />
    <Typography variant="h1" sx={{
      height: "10000px",
    }}>
      hello 
    </Typography>
  </>
  );
}
