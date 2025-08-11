import { Routes, Route } from "react-router";
import { routes } from "./routes";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </>
  );
}

export default App;
