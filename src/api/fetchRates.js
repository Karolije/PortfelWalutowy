import { setRates } from "../store/ratesReducer";

const ACCESS_KEY = "90e27173df1896dcb85ccf461a486342";

export const fetchRates = () => async (dispatch) => {
  try {
    const response = await fetch(
      `https://api.exchangeratesapi.io/v1/latest?access_key=${ACCESS_KEY}`
    );
    const data = await response.json();

    console.log("Odpowiedź API:", data);

    if (!data || !data.rates) {
      throw new Error("Błąd pobierania kursów");
    }

    dispatch(setRates(data.rates));
  } catch (e) {
    console.error("Błąd pobierania kursów:", e);
  }
};
