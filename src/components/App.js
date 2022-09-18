
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Films from '../films/components/Films';
import IndividualFilm from "../films/components/IndividualFilm";
import IndividualPeople from "../peoples/components/IndividualPeople";
import IndividualStarship from "../starships/components/IndividualStarship";
import IndividualVehicule from "../vehicules/components/IndividualVehicules";
import AppContainer from "./AppContainer";
import { Container } from "react-bootstrap";
import AuthLayout from "../auth/components/AuthLayout";
import User from "./User";



function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Container>
          <User />
          <Routes>
            <Route path='login' element={<AuthLayout />} />
            <Route path="/" element={< Films />} />
            <Route path="/films/:id" element={< IndividualFilm />} />
            <Route path="/people/:id" element={< IndividualPeople />} />
            <Route path="/starship/:id" element={< IndividualStarship />} />
            <Route path="/vehicule/:id" element={< IndividualVehicule />} />
          </Routes>
        </Container>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
