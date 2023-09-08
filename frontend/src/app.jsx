import "./app.css";
import LayOut from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export function App() {
  return (
    <>
      <ToastContainer />
      <LayOut />
    </>
  );
}
