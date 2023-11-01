import { BrowserRouter } from "react-router-dom";
import Effect from "./components/Effect";
import Header from "./components/Header";
import AppRouter from "./routes";

export default function App() {
  return (
    <>
      <Effect/>
      {/* <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter> */}
    </>
  );
}
