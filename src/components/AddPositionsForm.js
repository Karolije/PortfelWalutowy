import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPosition } from "../store/portfolioReducer";

const AddPositionForm = () => {
  const dispatch = useDispatch();

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || !date || !price) {
      alert("Uzupełnij wszystkie pola!");
      return;
    }

    dispatch(
      addPosition({
        currency,
        amount: parseFloat(amount),
        date,
        purchasePrice: parseFloat(price),
      })
    );

    setAmount("");
    setDate("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Waluta:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="PLN">PLN</option>
          {/* Dodaj inne waluty, jeśli chcesz */}
        </select>
      </label>

      <label>
        Ilość:
        <input
          type="number"
          step="any"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label>
        Data zakupu:
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>

      <label>
        Cena zakupu:
        <input
          type="number"
          step="any"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>

      <button type="submit">Dodaj</button>
    </form>
  );
};

export default AddPositionForm;
