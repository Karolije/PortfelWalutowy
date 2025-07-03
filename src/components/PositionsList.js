import { useSelector, useDispatch } from "react-redux";
import { removePosition } from "../store/portfolioReducer";
function PortfolioTable() {
  const positions = useSelector((state) => state.portfolio);
  const rates = useSelector((state) => state.rates);
  const dispatch = useDispatch();
  const formatNumber = (value) =>
    typeof value === "number" && !isNaN(value) ? value.toFixed(2) : "-";

  const handleRemove = (i) => {
    dispatch(removePosition(i));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Waluta</th>
          <th>Ilość</th>
          <th>Data zakupu</th>
          <th>Cena zakupu</th>
          <th>Obecny kurs</th>
          <th>Obecna wartość</th>
          <th>Zysk/Strata</th>
        </tr>
      </thead>
      <tbody>
        {positions.map((pos, i) => {
          const rate = rates[pos.currency] ?? 0;
          const currentValue = pos.amount * rate;
          const purchaseValue = pos.amount * pos.purchasePrice;
          const profit = currentValue - purchaseValue;
          const percent =
            purchaseValue !== 0 ? (profit / purchaseValue) * 100 : 0;

          return (
            <tr key={i}>
              <td>{pos.currency}</td>
              <td>{pos.amount}</td>
              <td>{pos.date}</td>
              <td>{formatNumber(pos.purchasePrice)}</td>
              <td>{formatNumber(rate)}</td>
              <td>{formatNumber(currentValue)}</td>
              <td>
                {formatNumber(profit)} ({formatNumber(percent)}%)
              </td>
              <td>
                <button onClick={() => handleRemove(i)}>Usuń</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PortfolioTable;
