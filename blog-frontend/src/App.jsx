import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/write" element={<WritePage />} />
        <Route path="/post/:id/edit" element={<EditPage />} />
        <Route path="/admin/category" element={<CategoryPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
