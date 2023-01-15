import { FC } from "react";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";

export const App: FC = () => {
  return (
    <>
      <Nav />
      <Dashboard />
    </>
  );
};

export default App;
