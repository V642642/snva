import "./App.css";
import Card from "./components/Card/index"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  



  return (
    <div className="w-full">
    <Router>
    <Routes>
    <Route path="/" element={<Card />} />
    </Routes>
    </Router>
    </div> 
  );
}

export default App;
