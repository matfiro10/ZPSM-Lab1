# Sprawozdanie

---

## 1. Czy funkcja ma przerwać działanie przy pierwszym błędnym argumencie, czy zebrać uwagi o wszystkich i policzyć to, co się da?

Lepiej jest zebrać uwagi o wszystkich błędnych danych i wyświetlić je naraz. Dzięki temu użytkownik widzi od razu pełną listę problemów i może naprawić wszystko w jednym podejściu, zamiast uruchamiać program w kółko i poprawiać błędy pojedynczo po kolei.

---

## 2. Co ta biblioteka (Lodash) tutaj dała?

W naszym przypadku praktycznie nic. We współczesnym standardzie JS (ES6+) metody filter oraz reduce są już wbudowane bezpośrednio w tablice i działają tak samo, a samo dodanie biblioteki jedynie niepotrzebnie powiększyło node_modules.

---

## 3. Sprawdzić, co zwróci sum dla tablicy tysiąca losowych liczb zmiennoprzecinkowych, i wyjaśnić, dlaczego suma bywa inna przy innej kolejności składników

Wszystko zależy od tego, jaka liczba jest sumowana jako pierwsza. Mantysa ma ograniczoną pojemność, gdy dodajemy mniejszą liczbę do większej, bity mniejszej liczby są przesuwane w prawo, aby wyrównać ich wykładniki, przez co te najmniejsze bity są ucinane. Zmieniając kolejność sumowania, na bieżąco ucinamy inne końcówki liczb, przez co ostateczny wynik sumy jest inny.
