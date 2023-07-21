import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Suspense, lazy } from "react";
import Preloader from "./common/preloader/preloader";
const HomePage = lazy(() => import("./components/HomePage/Homepage"));
const Catalog = lazy(() => import("./components/Catalog/Catalog"));
function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <div className="container">
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
