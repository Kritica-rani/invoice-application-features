import "./App.css";
import Navbar from "./components/FormListPage/navbar/Navabar";
import Home from "./components/FormListPage/Home/Home";
import FromList from "./components/FormListPage/FromList";
import CreateForm from "./components/FormListPage/CreateForm/CreateForm";
import { createBrowserRouter, Routes, Route } from "react-router-dom";

import { FormContext } from "./context/InvoiceContext";
import { useState } from "react";

function App() {
  const [invoicesData, setinvoicesData] = useState([]);
  const handleAddInvoices = (data) => {
    setinvoicesData((prevData) => {
      return [...prevData, data];
    });
  };

  return (
    <FormContext.Provider value={{ handleAddInvoices, invoicesData }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list-view" element={<FromList />} />
          <Route path="/create-invoice" element={<CreateForm />} />
        </Routes>
      </div>
    </FormContext.Provider>
  );
}

export default App;
