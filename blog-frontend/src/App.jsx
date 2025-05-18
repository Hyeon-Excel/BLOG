import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";
import CategoryPage from "./pages/CategoryPage";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route
            path="/post/:id/edit"
            element={
              <PrivateRoute>
                <EditPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/write"
            element={
              <PrivateRoute>
                <WritePage />
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
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
