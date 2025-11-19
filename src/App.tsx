import "./App.css";
import "./index.css";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import W9FormDemo from "./core/pages/page";
import AxperForm from "./components/sections/AxperForm";
import GeneralInfo from "./components/sections/GeneralInfo";
import RequirementsInfo from "./components/sections/RequirementsInfo";
// import HomePage from "./components/sections/HomePage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
          <Routes>
            {/* Public routes */}

            {/* Protected routes wrapped in Layout */}
            <Route
              element={
                  <>
                    <Outlet />
                  </>
              }
            >
           
          

            </Route>

            {/* Fullscreen POS route - outside Layout wrapper for touch interface */}
            <Route
              path="/main"
              element={
                <W9FormDemo/>
              }
            />
             <Route
              path="/axper"
              element={
                <AxperForm/>
              }
            />
             <Route
              path="/general-info"
              element={
                <GeneralInfo/>
              }
            />
             <Route
              path="/requirements"
              element={
                <RequirementsInfo/>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
    </QueryClientProvider>
  );
}

export default App;
