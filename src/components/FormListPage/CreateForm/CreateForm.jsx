import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import "./styles.css";
import { FormContext } from "../../../context/InvoiceContext";

function CreateForm() {
  const [formDetails, setFormDetails] = useState({
    id: Math.random(),
    date: "",
    InvoiceNumber: "",
    CustomerName: "",
    BillingAddress: "",
    ShippingAddress: "",
    GSTIN: "",
    item_Id: "",
    item_name: "",
    item_quantity: "",
    item_price: "",
    item_amount: "",
    soundryId: "",
    soundry_billSundryName: "",
    soundry_amount: "",
  });
  const { handleAddInvoices } = useContext(FormContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleAddInvoice = () => {
    handleAddInvoices(formDetails);
  };

  return (
    <div>
      <form className="create-form">
        <input
          type="text"
          name="CustomerName"
          value={formDetails.CustomerName}
          placeholder="Enter Customer Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="BillingAddress"
          value={formDetails.BillingAddress}
          placeholder="Enter customer Address"
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formDetails.date}
          placeholder="Enter date"
          min={new Date().toISOString().split("T")[0]}
        />
        <input
          type="text"
          name="ShippingAddress"
          value={formDetails.ShippingAddress}
          placeholder="Enter Shipping Address"
          onChange={handleChange}
        />
        <input
          type="number"
          name="GSTIN"
          value={formDetails.GSTIN}
          placeholder="Enter GSTIN"
          onChange={handleChange}
        />
        <input
          type="number"
          name="item_Id"
          value={formDetails.item_Id}
          placeholder="Enter Item Id"
          onChange={handleChange}
        />
        <input
          type="text"
          name="item_name"
          value={formDetails.item_name}
          placeholder="Enter Item name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="item_quantity"
          value={formDetails.item_quantity}
          placeholder="Enter Item Quantity"
          onChange={handleChange}
        />
        <input
          type="number"
          name="item_price"
          value={formDetails.item_price}
          placeholder="Enter Item Price"
          onChange={handleChange}
        />
        <input
          type="number"
          name="item_amount"
          value={formDetails.item_amount}
          placeholder="Enter item amount"
          onChange={handleChange}
        />
        <input
          type="text"
          name="soundry_billSundryName"
          value={formDetails.soundry_billSundryName}
          placeholder="Enter Soundery name"
          onChange={handleChange}
        />
        <input
          type="number"
          name="soundry_amount"
          value={formDetails.soundry_amount}
          placeholder="Enter soundry Amount"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleAddInvoice}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default CreateForm;
