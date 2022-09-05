
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Films from '../films/components/Films';
import IndividualFilm from "../films/components/IndividualFilm";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={< Films />}/>
      <Route path="/films/:id" element={< IndividualFilm />}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
