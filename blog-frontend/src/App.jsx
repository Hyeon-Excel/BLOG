import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/write" element={<WritePage />} />
        <Route path="/admin/category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
