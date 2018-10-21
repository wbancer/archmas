# #TYDZIEN 3

## #TYDZIEN3.1 Konwencja nazewnicza w projektach.

 * grupy zasobów: [nazwa_kodowa_projektu]-[nazwa_srodowiska]
 * zasoby: [nazwa_komponentu]-[nazwa_kodowa_projektu]-[nazwa_srodowiska]

 Opis:

  * nazwa kodowa projektu - nazwa używana w projekcie
  * nazwa komponentu zależna od funkcji zasobu: np. ui, collector, itp. (możemy np. mieć wiele storage accounts z przeznaczeniem dla różnych komponentów)
  * nazwa środowiska to np. dev, sandbox, sandbox1 itp.
  * konwencja z nazwą komponentu z przodu pozwala na użycie prostego łączenia stringów bazującego na nazwie resource-grupy

W przypadku zasobów nie akceptujących w nazwie znaków '-', pomijamy je przy tworzeniu.


## #TYDZIEN3.2 oraz #TYDZIEN3.4, szablony ARM

Szablony ARM znajdują się w plikach: ```deploy.json``` oraz ```template.json```.
Ich uruchomienie zostało przetestowane komendami:

```
$ az group create archmas
$ az group deployment create --resource-group archmas --template-file deploy.json --parameters @parameters.json
```

Plik parameters.json zawiera odwołania do osobno utworzonego EncryptionKey Vault z utworzonymi odpowiednimi zasobami typu ```secret```.

Deployment został przetestowany przez zalogowanie się do wspomnianych maszyn danymi ustalonymi w keyvault.

Wnioski wyniesione z robienia tego zadania:

 * keyvault poza samym dostępem roli (czy to usera, czy service principal) musi mie włączoną opcję template-deployment
 * w porównaniu do innych rozwiązań jakie miałem okazję używać szablony ARM są dość trudne w użyciu i w mojej ocenie nadmiernie skomplikowane (por. np. do terraform). Ich główną zaletą jest największa aktualność. Najwększą wadą jest brak możliwości użycia linked Templates które są podane jako pliki lokalne.


## #TYDZIEN3.3

Rola została zdefiniowana w pliku ```support-role.json```.

Została dodand do subskrybcji poprzez komendę:

```
$ az role definition create --role-definition support-role.json
```

Wnioski z tego zadania:

 * role pozwalają na dokładniejsze precyzowanie dostępu dla poszczególnych osób
 * aby zapewnić możliwość restartu, trzeba zdefiniować osobą akcję (nie wystarczy start i powerOff).
 * aby zapewnić w ogóle dostęp do możliwości akcji z maszynami dana osoba musi mieć możliwość ich przeglądania na portalu (akcja read)
 * w narzędziu cli jest obecnie zgłoszony bug, który nie pozwala aktualizować (update) roli. Jako workaround - trzeba rolę usunąć i ponownie utworzyć.
