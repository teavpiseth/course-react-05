import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageWeb from "./master-layout-web/HomePageWeb";
import DetailPage from "./master-layout-web/DetailPage";
import MasterLayoutWeb from "./master-layout-web/MasterLayoutWeb";

function App() {
  return (
    <>
      {/* <UseMemoComponent /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<MasterLayoutWeb />}>
            <Route path="/" element={<HomePageWeb></HomePageWeb>} />
            <Route path="/detail" element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
