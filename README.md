# WDP Projekt Zespołowy

## Opis projektu

Bazar Online Shopping jest projektem głównej strony sklepu internetowego opracowanym na podstawie darmowego szablonu graficznego (PSD). Projekt strony realizowany jest w ramach projektu zespołowego będącego częścią 9-miesięcznego kursu programowania Kodilli. Praca w projekcie prowadzona jest w sposób zwinny (zgodnie z metodologą Kanban), w oparciu o system Jira.

## Demo

Demo zostanie udostępnione po ukończeniu przydzielonych zadań na Github Pages. Obecnie należy pobrać repozytorium, a następnie za pomocą NPM uruchomić skrypt "build" lub "watch".

## Inicjacja projektu

Po sklonowaniu projektu, zainstaluj wymagane paczki komendą `npm install`.

Teraz możesz zacząć pracę, korzystając z przygotowanych zadania `npm run watch`.

Wszystkie potrzebne do pracy pliki źródłowe znajdują się w folderze `src/`.

## NPM Scripts

Dostępne są 3 główne skrypty przyspieszające pracę:

- `build`: na bazie plików z folderu `src` buduje project w folderze `dist`
- `watch`: odpala `browser-sync`, obserwuje zmiany w folderze `src` i przebudowuje projekt
- `code-quality`: skrypt dokonuje automatycznego formatowania plików w folderze `src/`
  zgodnie z przyjętą konwencją formatowania kodu i sprawdza błędy w JS.

## Git Hooks

Projekt korzysta z Git Hooks - możliwości uruchamiania skryptów w reakcji na wybrane zdarzenia programu Git.

Za każdym razem gdy wykonasz komendę `git commit` zostanie uruchomiony skrypt `code-quality`
dla plików, które zostały wybrane do za-commit'owania.

## Konwencje i dobre praktyki

### Struktura strony

Strona budowana jest w oparciu o framework Bootstrap i 12-kolumnowy grid. Dla wszelkich ikon zastosowanych w projekcie wykorzystano zbiór Font Awesome.

W projekcie wykorzystujemy angielską terminologię i nazewnictwo - wszystkie elementy strony opisane są w języku angielskim (struktura, styl, skrypty).

Strona budowana jest w sposób modularny - każda sekcja stanowi osobny moduł. Plik główny - `index.html` - oprócz określenia podstawowej struktury html strony, łączy w sobie wszystkie sekcje strony. Częściowe pliki .html przechowujemy w katalogu `src/partials/`.

Nazwy klas powinny być możliwie czytelne. Sekcje oznaczamy nadając im prefiks `section--features`; elementy-kontenery zawierające w sobie inne elementy powinny zawierać w nazwie klasy wyraz "container" lub "wrapper". 

Pliki .html modułów są numerowane zgodnie z kolejnością sekcji w projekcie graficznym. Nadaje się im numery będące wielokrotnością liczby 10, po którym następuje podkreślnik, a następnie nazwa sekcji łączona myślnikami (np. `10_header`, 3`0_section-features`). W przypadku, kiedy nie jest możliwe nadania odpowiedniego numeru, nadaje się numer pośredni, zakończony cyfrą 5 (np. `85_section-feedback`).

### Stylowanie

Arkusze styli pisane są w formacie .scss, a następnie kompilowane przez task-runner do pojedynczego pliku .css. 
W plikach .scss reguły dla poszczególnych elementów oddzielane są od siebie linią przerwy. Dla zwiększenia czytelności kodu stosujemy również wcięcia (mające rozmiar 2 spacji).
Powielające się wartości styli (kolory, czasy trwania przejść, rozmiary czcionek) zostały wydzielone jako zmienne do pliku `_variables.scss`.

Plik główny - `style.scss`, podobnie jak `index.html`, jest plikiem łączącym pliki .scss projektu - importujemy do niego wszystkie zmienne, pliki częściowe dla layoutu, poszczególnych sekcji i komponentów.

Jeżeli sekcja jest ostylowana w sposób unikatowy, tworzymy dla niej osobny plik .scss (np. `_section--features.sccss`). Częściowe pliki stylów przechowujemy w katalogu `src/sass/components/`. Pamiętamy, że nazwa częściowych plików .scss zawsze poprzedzona jest podkreślnikiem (np. `_variables.scss`).


### Praca z repozytorium

Dla każdego wydzielonego w projekcie zadania lub zgłoszonego błędu tworzymy osobny branch w repozytorium. Nazwa brancha powinna być identyfikatorem zadania lub zgłoszonego problemu, nad którym rozpoczynamy pracę.

Nie ma regulacji dotyczących ilości i częstotliwości commitów. W przypadku ukończenia prac nad danym zadaniem lub naprawienia błędu **zgłaszamy pull request**, następnie kod poddawany jest recenzji. Po uzyskaniu dwóch pozytywnych code-review, dokonuje się merge'u brancha z masterem. **Nie należy dokonywać merge'u własnego brancha do mastera** bez uzyskania dwóch pozytywnych recenzji.

Podczas code-review uwagi do kodu zamieszczane są w formmie komentarzy na GitHubie. W przypadku negatywnej recenzji wnioskuje się o wprowadzenie zmian zgodnie z przedstawionymi uwagami. Po ustosunkowaniu się do uwag należy poprosić o ponowną ocenę kodu.

W celu minimalizacji konfliktów podczas merge'u zaleca się rebase gałęzi roboczej do mastera. W ten sposób można uniknąć przestojów związanych z rozwiązywaniem konfliktów i minimalizuje się ryzyko wystąpienia błedu.

Nazwy pull requestów podajemy w języku angielskim przedstawiając w możliwie treściwy sposób wprowadzone modyfikacje. Konieczne jest również podanie numeru taska, np.: nazwa jakiegoś commita.

Opisy pull requestów mogą być przygotowane w języku polskim. Opis musi w sobie zawierać informację o wykonanym działaniu (przedstawiamy w punktach opis wprowadzonych zmian). W przypadku odstępstw od projektu graficznego zaznaczamy to w opisie commita. 

### Praca z tusk runnerem

Do pracy nad projektem wykorzystujemy NPM. Aby uruchomić środowisko w trybie deweloperskim należy uruchomić skrypt "watch". 

W celu przygotowania wersji produkcyjnej (dostępnej w katalogu `dist/`) należy uruchomić skrypt "build".

W przypadku edycji plików .html innych, niż `index.html`, niezbędne będzie nadpisanie pliku `index.html`, aby task runner przeładował edytowany wcześniej plik. W przypadku edycji plików .scss i .js nie zachodzi taka konieczność.

### Struktura plików

Struktura plików repozytorium jest ściśle określona. 
Folder zawierający pliki deweloperskie nosi nazwę `src/` i znajduje sie w głównym katalogu projektu. Znajdują się w nim pliki i foldery podzielone zgodnie z przeznaczeniem plików, które są w nich zawarte. Dopuszcza się stosowanie podfolderów dla poszczególnych grup plików. 

Poniżej znajduje się opis struktury plików deweloperskich, wraz z opisem zawartości katalogów:

`src/` - katalog główny, w którym znajdują się:

1. `images/` - wszystkie obrazy wykorzystywane przez deweloperów w projekcie (o ile nie są linkowane z innych stron), np: logotypy sklepów i partnerów, zdjęcia mebli.
2. `partials/` - częściowe pliki .html - odpowiadają za strukturę html konkretnych sekcji. Poza strukturą html plików, należy zwrócić uwagę na konsekwencję w stosowaniu nazw (zarówno plików, jak i ich zawartości).
3. `sass/` - częściowe pliki styli (.scss) importowane do głównego pliku style.scss. Struktura folderu:
  - `bootstrap/` - znajdują się w nim pliki .scss frameworka Bootstrap, na którym bazowany jest layout projektu; nie edytujemy zawartości tego folderu
  - `components/` - zawiera pliki stylujące poszczególne elementy (komponenty i sekcje) strony
  - `fontawesome/` - zawiera pliki związane z wykorzystaniem biblioteki ikon Font Awesome; nie edytujemy zawartości tego folderu
  - `_variables.scss` - pik zawierający w sobie zmienne (style powielające się na przestrzeni strony): kolory i czasy trwania przejść
  - `style.scss` - główny plik .scss scalający w sobie pliki częściowe
4. `scripts/` - skrypty działające na stronie (również wymagane przez framework Bootstrap)
5. `webfonts/` - pliki czcionek wymagane przez bibliotekę Font Awesome
6. `index.html` - główny plik .html scalający całą zawartość strony

Pliki produkcyjne, po skompilowaniu skryptem "build", znajdują się w folderze `dist/`.
