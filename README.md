# PortfelWalutowy 🏦💱

Aplikacja webowa do śledzenia wartości posiadanych walut i obliczania potencjalnego zysku/straty w czasie.

---

## 📌 Opis projektu

* PortfelWalutowy pozwala użytkownikowi:
  * wprowadzić walutę, ilość, datę zakupu i cenę zakupu (lub pobrać ją automatycznie przy pomocy API),
  * przechowywać dane w **localStorage**, aby stan portfela był zachowany między sesjami,
  * pobierać aktualne kursy walut za pomocą zewnętrznego API i na tej podstawie obliczać obecną wartość oraz zysk/stratę,
  * w przyszłości: generować wykresy historii i zapisywać historię zmian kursów.


## 🛠️ Technologie i narzędzia

Projekt został zbudowany w oparciu o:

- **Frontend**: HTML, CSS i JavaScript  
- **Zarządzanie stanem**: Redux – dane aplikacji są podzielone na magazyny i łączone za pomocą `combineReducers`  
- **API kursów walut**: [exchangeratesapi.io](https://exchangeratesapi.io)
- **Przechowywanie danych**: localStorage – aby zapamiętać portfel między sesjami  
