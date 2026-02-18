import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {

    return (
        <Router>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home />} />

            </Routes>
            <Footer/>
        </Router>

    );
};  

export default App;