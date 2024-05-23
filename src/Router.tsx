import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";

export function Router() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}
