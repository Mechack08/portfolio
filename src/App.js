import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/blog" element={<Blog />} />
    </Routes>
  );
}

export default App;
