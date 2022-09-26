import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
