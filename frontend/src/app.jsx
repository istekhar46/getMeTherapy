import "./app.css";
import LayOut from "./layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <>
      <ToastContainer
        theme="dark"
        position="top-right"
        pauseOnHover={false}
        closeOnClick
        autoClose={3000}
      />
      <LayOut />
    </>
  );
}
