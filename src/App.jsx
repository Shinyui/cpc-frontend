import { BrowserRouter } from "react-router-dom";
import Routers from "./Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
};

export default App;
