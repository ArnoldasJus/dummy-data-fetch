import "./App.css";
import IndexPage from "./pages/IndexPage";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Toolbar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:id" element={<UserPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
