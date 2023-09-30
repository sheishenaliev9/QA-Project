import { Route, Routes } from "react-router";
import "./App.css";
import { SneakersPage } from "./pages/SneakersPage/SneakersPage";
import { ToastContainer } from "react-toastify";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { SneakerPage } from "./pages/SneakerPage/SneakerPage";
import { CartPage } from "./pages/CartPage/CartPage";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="sneakers" element={<SneakersPage />} />
          <Route path="/sneakers/:id" element={<SneakerPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
