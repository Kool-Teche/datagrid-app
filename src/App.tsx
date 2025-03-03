import { FC, lazy, Suspense } from "react";
import Header from "./components/Header";
const DataGrid = lazy(() => import("./components/DataGrid"));

import "./App.css";

const App: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <DataGrid />
      </Suspense>
    </>
  );
};

export default App;
