import { Route, Routes } from "react-router";
import "./App.css";
import { SneakersPage } from "./pages/SneakersPage/SneakersPage";
import { ToastContainer } from "react-toastify";
import { Layout } from "./layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sneakers" element={<SneakersPage />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
