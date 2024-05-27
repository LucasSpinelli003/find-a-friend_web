import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./Pages/Home";
import { PetsDashBoard } from "./Pages/Pets";
import { PetInfo } from "./Pages/Pet";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pet" element={<PetInfo />} />
        <Route path="/pets" element={<PetsDashBoard />} />
      </Route>
    </Routes>
  );
}
