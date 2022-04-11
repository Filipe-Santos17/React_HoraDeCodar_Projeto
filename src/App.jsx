import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom"
import { Global } from "./style";
import { Navbar, Footer, Container } from "./components";
import { Home, Company, Contact, Project, Projects, ProjectId} from "./Pages"

function App() {
  return (
    <BRouter>
      <Global/>
      <Navbar/>
      <Container customClass="minHeigth">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/newproject" element={<Project/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/project/:id" element={<ProjectId/>}/>
        </Routes>
      </Container>
      <Footer/>
    </BRouter>
  );
}

export default App;