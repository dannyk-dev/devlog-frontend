import "./App.css";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Layout from "./routes/Layout";

function App() {
  return (
    <div className="min-h-screen max-w-screen bg-slate-900 ">
      {/* <Layout> */}
      <Outlet />
      {/* </Layout> */}
    </div>
  );
}

export default App;
