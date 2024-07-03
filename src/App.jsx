import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePageWeb from "./pages/web/HomePageWeb";
import DetailPage from "./pages/web/DetailPage";
import MasterLayoutWeb from "./master-layout-web/MasterLayoutWeb";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import CategoryWeb from "./pages/web/CategoryWebPage";
import { WebProvider } from "./contextProvider/webContext/WebProvider";
import MasterLayoutDashboard from "./master-layout-dashboard/MasterLayoutDashboard";
import Login from "./pages/login/Login";
import Employee from "./pages/dashboard/employee/Employee";
import "@/services/AxiosInterceptor";

function App() {
  // console.log(<Login />);
  return (
    <>
      {/* <UseMemoComponent /> */}
      {/* <UseRef /> */}
      <WebProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route element={<MasterLayoutDashboard />}>
              <Route
                path="/dashboard"
                element={<div>Hello, welcome dashboard page</div>}
              />
              <Route
                path="/dashboard/customer"
                element={<div>Hello, welcome customer page</div>}
              />
              <Route path="/dashboard/employee" element={<Employee />} />
              <Route path="/dashboard/*" element={<PageNotFound />} />
            </Route>

            <Route element={<MasterLayoutWeb />}>
              <Route path="/" element={<HomePageWeb></HomePageWeb>} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/category" element={<CategoryWeb></CategoryWeb>} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WebProvider>
    </>
  );
}

export default App;
