import { Button, Card, Grid } from "@mui/material";
import { FC } from "react";

const Controls: FC = () => {
  return (
    <Card>
      <Grid container spacing={1} sx={{ p: 1 }}>
        <Grid item xs={12}>
          <Button fullWidth variant="contained">
            Dodaj wydatek
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined">
            Doładuj budżet
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="outlined" color="error">
            Zamknij okres
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Controls;
