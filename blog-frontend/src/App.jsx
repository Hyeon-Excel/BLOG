import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/write"
          element={
            <PrivateRoute>
              <WritePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:id/edit"
          element={
            <PrivateRoute>
              <EditPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/category"
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
