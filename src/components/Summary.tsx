import { Card, Typography } from "@mui/material";
import { FC } from "react";

const Summary: FC = () => {
  return (
    <Card sx={{ textAlign: "center" }}>
      <Typography variant="h6" component="div">
        Finanse z ostatniego miesiąca
      </Typography>
      <Typography>
        Zaplanowany budżet:
        <Typography variant="h3" component="p">
          0,00
        </Typography>
        Poniesione wydatki:
        <Typography sx={{ color: "red" }} variant="h3" component="p">
          0,00
        </Typography>
        Różnica:
        <Typography sx={{ color: "green" }} variant="h3" component="p">
          0,00
        </Typography>
      </Typography>
    </Card>
  );
};

export default Summary;
