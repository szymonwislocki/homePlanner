import { Button, Card, Grid, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { FC } from "react";
import Controls from "./Controls";
import Summary from "./Summary";

const Dashboard: FC = () => {
  return (
    <Grid sx={{ mt: 1 }} container spacing={2}>
      <Grid item xs={12} md={8}>
        <Card>Chart</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Summary />
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>Test</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>TesttestLore Lore Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis similique sed quos accusantium excepturi eum tenetur odit alias totam corrupti veritatis qui commodi, minus magnam esse magni vitae molestiae quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptatibus fugit eaque. Eius cum soluta corrupti voluptate maxime molestiae ducimus vitae sequi? Repudiandae in earum, at quis aliquam animi eius?</Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Controls />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
