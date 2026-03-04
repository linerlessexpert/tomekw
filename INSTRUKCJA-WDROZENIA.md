# 🚀 Instrukcja wdrożenia — GitHub + Netlify CMS

## Co dostajesz po wdrożeniu

- Strona dostępna pod adresem `twojadomena.netlify.app` (lub własna domena)
- Panel CMS pod `twojadomena.netlify.app/admin`
- Edycja wszystkiego przez przeglądarkę — bez kodu
- Upload zdjęć bezpośrednio w panelu
- Każda zmiana publikuje się automatycznie w ~30 sekund

---

## KROK 1 — Załóż konto GitHub (5 min)

1. Wejdź na **github.com** → kliknij „Sign up"
2. Wybierz plan **Free**
3. Potwierdź e-mail

---

## KROK 2 — Wgraj pliki na GitHub (5 min)

1. Zaloguj się na GitHub
2. Kliknij zielony przycisk **„New repository"** (prawy górny róg)
3. Nazwa repozytorium: `moja-strona` (dowolna)
4. Zaznacz **„Public"** (wymagane dla darmowego Netlify)
5. Kliknij **„Create repository"**

### Wgraj pliki:
6. Na stronie repozytorium kliknij **„uploading an existing file"**
7. Przeciągnij **wszystkie pliki i foldery** z paczki którą dostałeś:
   ```
   index.html
   netlify.toml
   admin/
   content/
   images/
   ```
8. Kliknij **„Commit changes"**

---

## KROK 3 — Załóż konto Netlify (5 min)

1. Wejdź na **netlify.com** → kliknij „Sign up"
2. Wybierz **„Sign up with GitHub"** — zaloguj się przez GitHub
3. Netlify dostanie dostęp do twoich repozytoriów

---

## KROK 4 — Podłącz stronę do Netlify (3 min)

1. W panelu Netlify kliknij **„Add new site"** → „Import an existing project"
2. Wybierz **GitHub**
3. Znajdź i kliknij repozytorium `moja-strona`
4. Ustawienia build (zostaw domyślne — nic nie zmieniaj):
   - Build command: `echo 'Static site'`
   - Publish directory: `.`
5. Kliknij **„Deploy site"**

⏳ Netlify za chwilę da Ci adres, np. `amazing-pancake-123.netlify.app`

---

## KROK 5 — Włącz Netlify Identity (CMS auth) (3 min)

1. W panelu Netlify wejdź w **Site settings → Identity**
2. Kliknij **„Enable Identity"**
3. Przewiń do sekcji **„Registration"** → wybierz **„Invite only"**
   (tylko Ty będziesz mieć dostęp)
4. Przewiń do **„Git Gateway"** → kliknij **„Enable Git Gateway"**

---

## KROK 6 — Zaproś siebie do CMS (2 min)

1. W panelu Netlify → **Identity → Invite users**
2. Wpisz swój e-mail
3. Sprawdź skrzynkę — kliknij link aktywacyjny
4. Ustaw hasło do panelu CMS

---

## KROK 7 — Przetestuj panel CMS ✅

1. Wejdź na `twojadres.netlify.app/admin`
2. Zaloguj się e-mailem i hasłem z kroku 6
3. Zobaczysz panel z sekcjami:
   - ⚙️ **Moje dane i ustawienia** — zmień swoje imię, bio, e-mail, tagi
   - 📰 **Aktualności Linerless** — dodaj/edytuj wpisy branżowe
   - ✍️ **Blog** — dodaj/edytuj wpisy podróżnicze i techniczne
   - ✈️ **Podróże** — dodaj/edytuj karty podróży ze zdjęciami

---

## Jak dodać nowy wpis blogowy

1. Wejdź w panel → **Blog → „New Blog"**
2. Wypełnij pola:
   - **Tytuł** — tytuł wpisu
   - **Data** — wybierz z kalendarza
   - **Kategoria** — Podróże / Linerless / Technika
   - **Czas czytania** — wpisz liczbę minut
   - **Krótki opis** — pojawi się na liście wpisów
   - **Treść** — edytor Markdown (jak Word, ale prostszy)
   - **Zdjęcie główne** — kliknij i wgraj plik z dysku
3. Kliknij **„Publish"** — strona aktualizuje się w ~30 sekund

---

## Jak dodać zdjęcia do podróży

1. Panel → **Podróże** → kliknij podróż
2. Przewiń do **„Zdjęcia z podróży"**
3. Kliknij **„Add"** → wgraj zdjęcie z dysku
4. Możesz dodać wiele zdjęć — pierwsze pojawi się w modalu
5. Kliknij **„Publish"**

---

## Własna domena (opcjonalnie)

1. Netlify → **Site settings → Domain management**
2. Kliknij **„Add custom domain"**
3. Wpisz `twojastrona.pl`
4. Netlify pokaże instrukcje konfiguracji DNS u rejestratora domeny

---

## Rozwiązywanie problemów

| Problem | Rozwiązanie |
|---------|-------------|
| Strona nie ładuje się | Sprawdź zakładkę „Deploys" w Netlify — poczekaj na zielony status |
| Panel CMS daje błąd 401 | Sprawdź czy Git Gateway jest włączony (Krok 5) |
| Zdjęcia nie wyświetlają się | Upewnij się że folder `images/uploads` istnieje w repozytorium |
| Zmiany nie pojawiają się | Odśwież stronę po 30-60 sekundach od zapisu w CMS |

---

## Kontakt

Masz problem z wdrożeniem? Wróć do rozmowy z Claude i opisz co się dzieje — pomogę na bieżąco.
