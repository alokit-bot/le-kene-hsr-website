import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeKene from "./pages/LeKene";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LeKene />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
