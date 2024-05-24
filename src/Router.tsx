import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import First from "./component/test";
import { Hometest } from "./Pages/Home/testHome";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Hometest />} />
        <Route path="/pets" element={<First />} />
      </Route>
    </Routes>
  );
}
