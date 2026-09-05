import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Layout from "./components/layout/Layout";

// Pages
import HomePage from "./components/pages/HomePage";
import ContactPage from "./components/pages/ContactPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout /> }>
          <Route index element={<HomePage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;