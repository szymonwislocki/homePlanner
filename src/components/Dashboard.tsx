import { Grid } from "@mui/material";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div>Test</div>
      </Grid>
      <Grid item xs={4}>
        <div>Test</div>
      </Grid>
      <Grid item xs={4}>
        <div>Test</div>
      </Grid>
      <Grid item xs={8}>
        <div>Test</div>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
