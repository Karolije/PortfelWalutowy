import "./App.css";
import AddPositionForm from "./components/AddPositionsForm";
import PositionsList from "./components/PositionsList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRates } from "./api/fetchRates";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRates());
  }, [dispatch]);
  return (
    <div className="App">
      <AddPositionForm />
      <PositionsList />
    </div>
  );
}

export default App;
