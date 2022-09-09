
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Films from '../films/components/Films';
import IndividualFilm from "../films/components/IndividualFilm";
import IndividualPeople from "../peoples/components/IndividualPeople";
import IndividualStarship from "../starships/components/IndividualStarship";
import IndividualVehicule from "../vehicules/components/IndividualVehicules";



function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/" element={< Films />}/>
      <Route path="/films/:id" element={< IndividualFilm />}/>
      <Route path="/people/:id" element={< IndividualPeople />}/>
      <Route path="/starship/:id" element={< IndividualStarship/>}/>
      <Route path="/vehicule/:id" element={< IndividualVehicule />}/>



    </Routes>
    </BrowserRouter>
  );
}

export default App;
