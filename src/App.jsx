import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageWeb from "./pages/web/HomePageWeb";
import DetailPage from "./pages/web/DetailPage";
import MasterLayoutWeb from "./master-layout-web/MasterLayoutWeb";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import CategoryWeb from "./pages/web/CategoryWeb";

function App() {
  return (
    <>
      {/* <UseMemoComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayoutWeb />}>
            <Route path="/" element={<HomePageWeb></HomePageWeb>} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/category" element={<CategoryWeb></CategoryWeb>} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
