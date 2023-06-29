import {BrowserRouter, Route, Routes} from "react-router-dom";
import Betting from "./pages/Betting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Betting/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
