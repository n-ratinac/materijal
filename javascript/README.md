# Javascript

[TOC]

Javascript je jezik koji se primarno koristio za programiranje klijetskog dela
web aplikacija, ali se od skorijeg vremena koristi i na serveru uz pomoc node.js
runtime okruzenja.

## Sintaksa

Sintaksa javascript-a podseca dosta na programski jezik C, stim sto je dinamicki
tipiziran. U prevodu, kada deklarisemo promenjive ili parametre, ne mozemo da
navedemo kog ce tipa biti, ali tokom rada programa (runtime), tipovi promenjivih
se zakljucuju na osnovu vrednosti koje sadrze. Takodje, javascript je skriptni
jezik koji se interpretira. To znaci da se kod moze izvrsavati van funkcija i da
je najsira oblast vazenja promenjivih sam fajl u kom su definisane.

### Definisanje promenjivih

Promenjive se mogu definisati kljucnim recima `let` ili `var`, mada novije
konvencije predlazu `let`. Promenjive nisu tipizirane.

```js
// deklarisana promenjiva a
let a;
// deklarisana promenjiva b i inicijalizovana
let b = a + 1;
// deklarisana promenjiva c
let c = 3.14;
// dodeljena vrednost promenjivoj a
a = 5;
// dodeljena druga vrednost promenjivoj a drugog tipa
a = "Hello World";
// deklarisana konstanta koja ima vrednost promenjive a
const d = a;
```

### Tipovi podataka

U javascript-u je skoro sve objekat. Sve vrednosti osim primitiva, su objekti.
Primitive su u sustini literali i ono sto je karakteristicno za njih jeste sto
nemaju svojstva niti metode.

| Tip Podatka | Opis                                        | Primer Literala                 |
| ----------- | ------------------------------------------- | ------------------------------- |
| String      | Тekstualni podatak                          | `'Zdravo, svete!'`              |
| Number      | Numerički podatak                           | `42`, `3.14`                    |
| Boolean     | Logička vrednost                            | `true`, `false`                 |
| Null        | Namerno odsustvo vrednosti                  | `null`                          |
| Undefined   | Neinicijalizovana ili nepostojeća vrednost  | `undefined`                     |
| Symbol      | Jedinstveni identifikator (ES6+)            | `let mojSimbol = Symbol();`     |
| Object      | Kolekcija parova ključ-vrednost             | `{ ime: 'John', 'godine': 34 }` |
| BigInt      | Celobrojna vrednost proizvoljne preciznosti | `BigInt(9007199254740991)`      |

### Ulaz i izlaz

S obzirom da je javascript nastao za potrebe programiranja browsera, on nema
podrazumevani nacin ulaza/izlaza. Stavise, u klijentskom okruzenju, ne postoji
nacin da se ucita nesto sa standardnog ulaza, jer on ne postoji. Sa druge
strane, postoji ekvivalent standardnom izlazu, a to je objekat `console`.
Koriscenjem metode `log` mozemo na browser konzolu ispisati sta god zelimo.
Postoji nekoliko metoda za ispis na konzolu i nivo ozbiljnosti:

| Metoda  | Nivo    |
| :------ | :------ |
| `log`   | Info    |
| `info`  | Info    |
| `debug` | Verbose |
| `warn`  | Warning |
| `error` | Error   |

```js
console.log("Ovo je samo obavestenje");
console.info("I ovo je obavestenje");
console.debug("Ovo je debug naredba");
console.warn("Nesto moze poci po zlu");
console.error("NESTO JE POSLO PO ZLU!");
```

Ako se ovaj kod pokrene dobijemo:

![Alt text](image.png)

[Dokumentacija o `console` objektu.](https://developer.mozilla.org/en-US/docs/Web/API/console)

Takodje, jedan od nacina izlaza koji je specifican za browser jeste alert.
Metoda `alert` stvara mini-prozor na vrhu pretrazivaca.

```js
alert("Zdravo, ovo je pozvano sa 'window' objekta").
```

![Alt text](image-1.png)

### Operatori

Operatori u javascriptu su standardni operatori familije C jezika.

| Ime                      | Operator | Primer                                                    | Rezultat                              |
| ------------------------ | -------- | --------------------------------------------------------- | ------------------------------------- |
| Dodeljivanje             | `=`      | `let x = 5;`                                              | `x` je dodeljeno vrednost `5`         |
| Sabiranje                | `+`      | `let zbir = 3 + 4;`                                       | `zbir` je `7`                         |
| Oduzimanje               | `-`      | `let razlika = 8 - 3;`                                    | `razlika` je `5`                      |
| Množenje                 | `*`      | `let proizvod = 2 * 6;`                                   | `proizvod` je `12`                    |
| Deljenje                 | `/`      | `let kolicnik = 10 / 2;`                                  | `kolicnik` je `5`                     |
| Ostatak (Moduo)          | `%`      | `let ostatak = 15 % 4;`                                   | `ostatak` je `3`                      |
| Stepenovanje             | `**`     | `let rezultat = 2 ** 3;`                                  | `rezultat` je `8`                     |
| Inkrement                | `++`     | `let brojac = 1; brojac++;`                               | `brojac` je sada `2`                  |
| Dekrement                | `--`     | `let brojac = 3; brojac--;`                               | `brojac` je sada `2`                  |
| Jednakost (labavo)       | `==`     | `5 == '5';`                                               | `true` (vrednosti su konvertovane)    |
| Stroga Jednakost         | `===`    | `5 === '5';`                                              | `false` (proverava se i tip)          |
| Nejednakost (labavo)     | `!=`     | `5 != '5';`                                               | `false` (vrednosti su konvertovane)   |
| Stroga Nejednakost       | `!==`    | `5 !== '5';`                                              | `true` (proverava se i tip)           |
| Veće od                  | `>`      | `10 > 5;`                                                 | `true`                                |
| Manje od                 | `<`      | `3 < 7;`                                                  | `true`                                |
| Veće ili Jednako         | `>=`     | `5 >= 5;`                                                 | `true`                                |
| Manje ili Jednako        | `<=`     | `4 <= 3;`                                                 | `false`                               |
| Logičko I                | `&&`     | `true && false;`                                          | `false`                               |
| Logičko ILI              | `\|\|`   | `true \|\| false;`                                        | `true`                                |
| Logičko NIJE             | `!`      | `!true;`                                                  | `false`                               |
| Ternarni (Uslovni)       | `? :`    | `let rezultat = (x > 0) ? 'pozitivno' : 'non-pozitivno';` | Zavisi od vrednosti `x`               |
| Bitovsko I               | `&`      | `5 & 3;`                                                  | `1` (bitovsko I od 0101 i 0011)       |
| Bitovsko ILI             | `\|`     | `5 \| 3;`                                                 | `7` (bitovsko ILI od 0101 i 0011)     |
| Bitovsko XOR             | `^`      | `5 ^ 3;`                                                  | `6` (bitovsko XOR od 0101 i 0011)     |
| Bitovsko NIJE            | `~`      | `~5;`                                                     | `-6` (bitovsko NIJE od 0101)          |
| Pomeraj Levo             | `<<`     | `8 << 2;`                                                 | `32` (pomeraj levo za 2 bita)         |
| Pomeraj Desno            | `>>`     | `16 >> 2;`                                                | `4` (pomeraj desno za 2 bita)         |
| Neoznačeni Pomeraj Desno | `>>>`    | `-1 >>> 1;`                                               | `2147483647` (logički pomeraj udesno) |

### Upravljacke strukture

#### Grananja

##### if-else

```js
let poena = 85;

if (poena >= 85) {
    console.log("Ocena: 5");
} else if (poena >= 70) {
    console.log("Ocena: 4");
} else if (poena >= 55) {
    console.log("Ocena: 3");
} else if (poena >= 40) {
    console.log("Ocena: 2");
} else {
    console.log("Ocena: 1");
}
```

##### switch

```js
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("It's the beginning of the week.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("It's a weekday.");
}
```

#### Petlje

##### for

```js
for (let i = 1; i <= 5; i++) {
    console.log("Iteration number: " + i);
}
```

##### while

```js
let count = 1;

while (count <= 5) {
    console.log("Iteration number: " + count);
    count++;
}
```

##### do while

```js
let count = 1;

do {
    console.log("Iteration number: " + count);
    count++;
} while (count <= 5);
```

### Funkcije

Definisanje funkcija u javascript-u se moze obaviti na nekoliko nacina:

```js
// Funkcija bez parametara i bez povratne vrednosti
function greet() {
    console.log("Hello!");
}

// Funkcija sa parametrima i sa povratnom vrednoscu
function add(a, b) {
    return a + b;
}

// Promenjiva multiply predstavlja funkciju
let multiply = function (x, y) {
    return x * y;
};

// Promenjiva subtract je lambda koja prima dva broja i racuna njihovu razliku
let subtract = (a, b) => a - b;
```

Ove funkcije dalje mozemo pozvati:

```js
greet(); // ispisuje Hello!

let sum = add(3, 4);
console.log("Sum:", sum); // ispisuje: Sum: 7

let product = multiply(2, 5);
console.log("Product:", product); // Ispisuje: Product: 10

let difference = subtract(8, 3);
console.log("Difference:", difference); // Ispisuje: Difference: 5
```

### Objekti

#### Definisanje objekata

U javascriptu se objekat najcesce kreira na sledeca dva nacina

1. Koriscenjem objekat literala
2. Koriscenjem kljucne reci `new`

##### 1. Koriscenjem literala

```js
const osoba = { ime: "Pera", prezime: "Peric", godiste: 1989 };
```

##### 2. Kljucna rec `new`

```js
const osoba = new Object();
osoba.ime = "Pera";
osoba.prezime = "Peric";
osoba.godiste = 1989;
```

Javascript objekti su zapravo reference tako da vazi:

```js
const osoba = {
    ime: "Pera",
    prezime: "Peric",
    godiste: 1989,
};

const x = osoba;
x.godiste = 2006; // promena se odrazava i na x.godiste i na osoba.godiste
```

`x` i `osoba` su pokazivaci (reference) na isti objekat u memoriji.

#### Svojstva objekata (properties)

##### Pristup svojstvima

Pristup svojstvima se moze vrsiti na sledece nacine :

```js
objekat.svojstvo; // osoba.godine

objekat["svojstvo"]; // osoba['godine']

objekat[izraz]; // a = 'godine'; osoba[a]
```

##### Izlistavanje svojstava

```js
const osoba = {
    ime: "Pera",
    prezime: "Peric",
    godine: 25,
};

for (let v in osoba) {
    console.log(v);
}
// ispisuje:
// ime
// prezime
// godine

for (let v in osoba) {
    console.log(osoba[v]);
}
// ispisuje:
// Pera
// Peric
// 25
```

##### Dodavanje svojstava

```js
const osoba = {
    ime: "Pera",
    prezime: "Peric",
    godina: 25,
};

osoba.zanimanje = "automehanicar";
```

##### Brisanje svojstava

```js
const osoba = {
    ime: "Pera",
    prezime: "Peric",
    godina: 25,
};

delete osoba.godina;
```

##### Objekti kao svojstva (ugnjezdavanje)

```js
const gost = {
    ime: "Laza",
    prezime: "Lazic",
    rezervacija: {
        brojStola: 15,
        brojOsoba: 4,
    },
};
console.log(gost.rezervacija.brojOsoba);
```

##### Nizovi kao svojstva

```js
const menadzer = {
    ime: "Rale",
    prezime: "Ralevic",
    godina: 37,
    podredjeni: [
        { ime: "Pera", prezime: "Peric", godina: 24 },
        { ime: "Mika", prezime: "Mikic", godina: 21 },
        { ime: "Laza", prezime: "Lazic", godina: 27 },
    ],
};

console.log(menadzer.podredjeni[1].ime); // ispisuje 'Mika'
```

#### Metode

##### Definisanje metoda

```js
const osoba = {};
osoba.ime = "Rale";
osoba.prezime = "Ralevic";
osoba.godine = 35;
osoba.punoIme = function () {
    return this.ime + " " + this.prezime;
};

console.log(osoba.punoIme()); // ispisuje 'Rale Ralevic'
```

#### `this`

Kljucnu rec `this` (ili njen ekvivalent), ste sigurno susretali u drugim
objektno-orijentisanim jezicima i, kao i tamo, ovde ona oznacava referencu
objekta na samog sebe. Ono sto je specificno za javascript jeste to sto se this
zapravo moze pozvati u bilo kom kontekstu izvrsenja. U zavisnosti od konteksta:

-   U globalnom kontekstu vraca referencu na **globalni objekat** (npr. window
    objekat ukoliko se radi o browser-u)
    ```js
    console.log(this); // vraca referencu na window objekat
    ```
-   U kontekstu funkcije koja nije vezana za korisnicki definisan objekat
    takodje vraca referencu na globalni objekat (sto znaci da zapravo da
    **funkcije u pravom smislu te reci ne postoje**, vec postoje samo metode na
    globalnom objektu)
    ```js
    function exampleFunction() {
        console.log(this);
    }
    exampleFunction(); // takodje vraca referencu na globalni objekat
    ```
-   U kontekstu metode na objektu, vraca referencu na taj objekat

    ```js
    const obj = {
        method: function () {
            console.log(this);
        },
    };

    obj.method(); // vraca referencu na obj
    ```

-   U kontekstu upravaljanja dogadjajima, `this` **oznacava DOM element koji je
    podigao dogadjaj**
    ```js
    document.getElementById("myButton").addEventListener("click", function () {
        console.log(this); // vraca referencu na element koji ima id 'myButton'
    });
    ```
-   Kada se koristi u kontekstu lambda funkcija (`=>`) onda `this` pokazuje na
    isto na sta pokazuje `this` u kontekstu definisanja lambda funkcije

    ```js
    const f1 = () => {
        console.log(this); // vraca referencu na globalni objekat
    };

    const obj {
        f2 : () => {
            console.log(this); // vraca referencu na obj
        }
    }
    ```

### Nizovi

Kao i kod drugih programskih jezika, nizove u javascript-u koristimo da bismo
zapamtili vise promenjivih. Ono sto je tipicno za javascript (i python) jeste da
jedan niz moze da drzi vise promenjivih razlicitog tipa:

```js
const niz = [
    "Pera",
    3,
    1.2,
    true,
    false,
    [1, 2, 3],
    { ime: "Mika", godina: 15 },

    for (let x of niz){
        console.log(x);
    }
];
```

Ovde se koristi kljucna rec `of` (nesto slicno forEach petlji) da ukaze na to da
se prolazi kroz tip podataka koji je **iterabilan**. **Objekti nisu iterabilni**

Za nabrajanje se korisiti:

| Kljucna rec | Tip                       |
| :---------- | :------------------------ |
| `of`        | nizovi, iterabilni tipovi |
| `in`        | objekti                   |

##### Indeksiranje

```js
const nums = [1, 2, 3, 4];
console.log(nums[2]); // ispisuje 3
```

##### Duzina

```js
const nums = [1, 2, 3, 4, 5];
console.log(nums.length);
```

##### Znacajne metode

| Metoda      | Objasnjenje                                                                                                | Primer                                                                    | Primer Objasnjenje                                             |
| ----------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `push()`    | Dodaje jedan ili vise elemenata na kraj niza.                                                              | `niz.push(4, 5)`                                                          | Dodaje elemente 4 i 5 na kraj niza.                            |
| `pop()`     | Uklanja poslednji element sa kraja niza.                                                                   | `let poslednjiElement = niz.pop()`                                        | Uklanja i vraca poslednji element.                             |
| `shift()`   | Uklanja prvi element sa pocetka niza.                                                                      | `let prviElement = niz.shift()`                                           | Uklanja i vraca prvi element.                                  |
| `unshift()` | Dodaje jedan ili vise elemenata na pocetak niza.                                                           | `niz.unshift(1, 2)`                                                       | Dodaje elemente 1 i 2 na pocetak niza.                         |
| `slice()`   | Vraca plitku kopiju dela niza.                                                                             | `let noviNiz = niz.slice(1, 4)`                                           | Vraca elemente na indeksima 1, 2 i 3.                          |
| `splice()`  | Menja sadrzaj niza uklanjanjem ili zamjenom postojecih elemenata.                                          | `niz.splice(1, 2, 'a', 'b')`                                              | Uklanja 2 elementa pocinjuci od indeksa 1 i ubacuje 'a' i 'b'. |
| `indexOf()` | Vraca prvi indeks na kojem se nalazi dati element.                                                         | `let indeks = niz.indexOf(3)`                                             | Vraca indeks prvog pojavljivanja broja 3.                      |
| `forEach()` | Izvrsava datu funkciju jednom za svaki element niza.                                                       | `niz.forEach(element => console.log(element))`                            | Prikazuje svaki element niza na konzoli.                       |
| `map()`     | Kreira novi niz sa rezultatima pozivanja date funkcije za svaki element.                                   | `let kvadriraniNiz = niz.map(element => element * element)`               | Kreira novi niz sa kvadriranim vrednostima.                    |
| `filter()`  | Kreira novi niz sa svim elementima koji prolaze test dat funkcijom.                                        | `let filtriraniNiz = niz.filter(element => element > 2)`                  | Kreira novi niz sa elementima vecim od 2.                      |
| `reduce()`  | Primenjuje funkciju na akumulator i svaki element niza (s leva na desno) da ga redukuje na jednu vrednost. | `let suma = niz.reduce((akumulator, element) => akumulator + element, 0)` | Racuna sumu svih elemenata niza.                               |
| `every()`   | Proverava da li svi elementi u nizu prolaze test dat funkcijom.                                            | `let sviVećiOdNule = niz.every(element => element > 0)`                   | Proverava da li su svi elementi veci od nule.                  |
| `some()`    | Proverava da li barem jedan element u nizu prolazi test dat funkcijom.                                     | `let nekiVećiOdDeset = niz.some(element => element > 10)`                 | Proverava da li bar jedan element niza veci od 10.             |
| `sort()`    | Sortira elemente niza na licu mesta.                                                                       | `niz.sort((a, b) => a - b)`                                               | Sortira niz u rastucem redosledu.                              |
| `reverse()` | Okrece redosled elemenata niza na licu mesta.                                                              | `niz.reverse()`                                                           | Okrece redosled elemenata niza.                                |

Sve metode nad nizovima mozete naci na
[ovom linku](https://www.w3schools.com/jsref/jsref_obj_array.asp) zajedno sa
pratecom dokumentacijom i primerima.

### Stringovi

Javascript stringovi se kao i kod drugih programskih jezika tretiraju kao nizovi
karaktera.

#### Deklaracija

```js
const ime = "Laza";
const prezime = "Lazic";
const punoIme = ime + " " + prezime; // dozvoljeno je nadovezivanje koriscenjem operatora +
```

#### Interpolacija

Kada zelimo da tokom runtime-a umetnemo neke vrednosti u string, onda moramo da
koristimo **string interpolaciju**. Obavezno je da koristimo karakter `` ` `` za
oznacavanje string literala koji se mogu interpolirati. Vrednosti koje se
koriste za interpolaciju moraju se naci unutar strukture `${}`.

```js
const ime = "Mika";
const prezime = "Mikic";
const godine = 26;

const tekst = `Osoba se zove ${ime} ${prezime} i ima ${godine} godina`;
console.log(tekst); // ispisuje Osoba se zove Mika Mikic i ima 26 godina
```

Ovo je posebno korisno kada treba se dinamicki generise markup koji treba da
sluzi kao prikaz dinamickih podataka.

Ovo se moze prosiriti tako da `${}` sadrzi i logiku tj. validan javascript kod.

```js
const broj = 42;
console.log(`Broj ${broj} je ${broj % 2 === 0 ? "paran" : "neparan"}`);
```

#### Znacajne metode

| Metod           | Objašnjenje                                                    | Primer                                        | Nakon Izvršenja                                                               |
| --------------- | -------------------------------------------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------- |
| `concat()`      | Spaja dva ili više stringova i vraća novi string               | `let rezultat = str1.concat(str2);`           | `rezultat` sadrži spojeni string.                                             |
| `toUpperCase()` | Pretvara string u velika slova                                 | `let velikaSlovaStr = str.toUpperCase();`     | `velikaSlovaStr` sadrži string pretvoren u velika slova.                      |
| `toLowerCase()` | Pretvara string u mala slova                                   | `let malaSlovaStr = str.toLowerCase();`       | `malaSlovaStr` sadrži string pretvoren u mala slova.                          |
| `charAt()`      | Vraća karakter na određenom indeksu u stringu                  | `let karakter = str.charAt(2);`               | `karakter` sadrži karakter na indeksu 2 u stringu.                            |
| `indexOf()`     | Vraća indeks prvog pojavljivanja određenog podniza u stringu   | `let indeks = str.indexOf('pretraga');`       | `indeks` sadrži indeks prvog pojavljivanja 'pretraga' u stringu.              |
| `substring()`   | Vraća podnisku na osnovu početnog i završnog indeksa           | `let podNiska = str.substring(0, 5);`         | `podNiska` sadrži podnisku od indeksa 0 do 4 (isključujući 5) u stringu.      |
| `slice()`       | Izdvaja deo stringa i vraća novi string                        | `let izdvojenStr = str.slice(2, 5);`          | `izdvojenStr` sadrži podnisku od indeksa 2 do 4 (isključujući 5) u stringu.   |
| `replace()`     | Zamenjuje određenu vrednost drugom vrednošću u stringu         | `let noviStr = str.replace('stari', 'novi');` | `noviStr` sadrži string sa prvom pojavom 'stari' zamenjenom sa 'novi'.        |
| `split()`       | Deli string na niz podniski na osnovu određenog razgraničivača | `let niz = str.split(',');`                   | `niz` je niz koji sadrži podniske razdvojene zarezima iz originalnog stringa. |
| `trim()`        | Uklanja praznine sa obe strane stringa                         | `let sredjenStr = str.trim();`                | `sredjenStr` sadrži string bez vodećih i trailing praznina.                   |

Sve funkcije vezane za stringove mozete naci na
[ovom linku](https://www.w3schools.com/jsref/jsref_obj_string.asp)

## Browser API

Kada se koristi u kontekstu klijentskog programiranja (browser-a) onda
javascript ima pristup skupu funkcionalnosti koje jednim imenom zovemo **browser
API**.

Ono sto nam browser API omogucava jesu sledece funkcionalnosti:

-   **Manipulacija DOM-om**: Manipulacija strukturom DOM stabla i sadrzajem
    elemenata unutar DOM stabla

-   **Dogadjaji**: Mehanizmi za upravljanje i odgovaranje na dogadjaje, poput
    kucanja na tastaturi, kliktanje misa, ucitavanje dokumenta itd.

-   **AJAX (Asynchronous Javascript And XML)** : mogucnost slanja i primanja
    struktuiranih podataka van standardnog request/response ciklusa

-   **Canvas i WebGL** : Mehanizme za crtanje 2D i 3D grafike unutar
    pretrazivaca

-   **Geolokacija** : Pristup geografskoj lokaciji korisnika

-   **Obavestenja** : Dozvoljava stranicama da prikazu obavestenja korisnicima

-   **WebSocket-i** : Omogucuje bidirekcionu komunikaciju u realnom vremenu
    izmedju browsera i servera koriscenjem jedne dugotrajne konekcije

### Manipulacija DOM-om

#### Selekcija i pristup elementima

Nacin pristupa DOM stablu se vrsi preko `document` objekta (dokumentaciju mozete
procitati [ovde](https://developer.mozilla.org/en-US/docs/Web/API/Document)).
Elementima DOM-a mozemo pristupati na osnovu:

-   tipa elementa `document.getElementsByTagName('div')`
-   klase `document.getElementsByClassName('card')`
-   id-a `document.getElementById('search-input')`
-   atributa name `document.getElementsByName('email')`
-   kombinovano
    -   `document.querySelector('button.btn-primary#accept')`
    -   `document.querySelectorAll('input[type='text']')`

Treba imati u vidu da ove metode vracaju referencu na jedan element ili listu
elemenata koji zadovoljavaju uslov selekcije.

#### Menjanje sadrzaja elemenata

##### Setovanje atributa

```js
let dugme = document.getElementById("myButton");
dugme.disabled = true; // atribut disabled se postavlja na true
dugme.setAttribute("name", "moje-dugme"); // setuje atribut 'name' na 'moje-dugme'
```

##### Setovanje stilova

```js
let emailInput = document.querySelector(`input[type='email']`)[0]; // mora [0] jer querySelector vraca listu
email.style.padding = "4px"; // style je ugnjezden objekat na objektu email i setujemo padding svojstvo
```

##### Setovanje klase

```js
let divs = document.querySelector(`div.circle`); // uzimanje svih divova sa klasom circle
// za svaki div
for (div of divs) {
    div.classList.add("large"); // na classList svojstvo dodati string 'large'
}
```

Za vise informacija o tome sta sve mozete da radite sa HTMLElement objektima u
javascript-u posetite
[ovaj link](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

#### Podizanje i reagovanje na dogadjaje (events)

Dogadjaji su veoma mocan alat za programiranje klijentskog ponasanja jer se
problemu moze pristupiti sa umosklopom "Ako se desi X onda radi Y". Svaki HTML
element ima listu dogadjaja koju moze da podigne. U javascript-u su ti dogadjaji
reprezentovani kao svojstva na objektima. Naravno, ta lista zavisi od tipa
elementa. Jasno je da div elementi ne mogu imati `oninput` dogadjaj kao sto
input elementi imaju.

##### Event interface

`Event` je interfejs koji svi moderni browseri implmentiraji i sluzi da
reprezentuje dogadjaj koji se desio u DOM-u. Citavu dokumentaciju ovog
interfejsa mozete pogledati na
[ovom linku](https://developer.mozilla.org/en-US/docs/Web/API/Event). Ovde cemo
se samo upoznati sa osnovnim svojstvima i metodama.

| Svojstvo         | Opis                                                     | Primer                   |
| ---------------- | -------------------------------------------------------- | ------------------------ |
| `type`           | Tip događaja (npr. "click", "keydown").                  | `event.type`             |
| `target`         | Element koji je izazvao događaj.                         | `event.target`           |
| `currentTarget`  | Element na koji je vezan rukovalac događaja.             | `event.currentTarget`    |
| `clientX`        | Horizontalna koordinata pokazivača miša.                 | `event.clientX`          |
| `clientY`        | Vertikalna koordinata pokazivača miša.                   | `event.clientY`          |
| `pageX`          | Horizontalna koordinata u odnosu na dokument.            | `event.pageX`            |
| `pageY`          | Vertikalna koordinata u odnosu na dokument.              | `event.pageY`            |
| `keyCode`        | Kod tastera za događaje tastature.                       | `event.keyCode`          |
| `key`            | Vrednost tastera za događaje tastature.                  | `event.key`              |
| `shiftKey`       | Označava da li je pritisnut taster "Shift".              | `event.shiftKey`         |
| `ctrlKey`        | Označava da li je pritisnut taster "Ctrl".               | `event.ctrlKey`          |
| `altKey`         | Označava da li je pritisnut taster "Alt".                | `event.altKey`           |
| `preventDefault` | Metoda za sprečavanje podrazumevanog ponašanja događaja. | `event.preventDefault()` |

`type` svojstvo odgovara tipu dogadjaja i svi dogadjaji (koji nisu korisnicki
definisani) imaju atribut za HTML elemente.

##### Reagovanje na dogadjaje (event handling)

Definisanje logike koja se izvrsava onda kada se neki dogadjaj podigne se moze
uraditi na nekoliko nacina. Funkcija koja reaguje na dogadjaj moze da prima
Event objekat kao parametar, ali i ne mora ukoliko nam nisu potrebni detalji
dogadjaja.

###### 1. Pretplacivanje na dogadjaj koriscenjem HTML atributa

```html
<script>
    const obradiDogadjaj = () => {
        alert("Desio se dogadjaj!");
    };
</script>
...
<button onclick="obradiDogadjaj()" />
```

Ovde smo u HTML kodu naveli da kada se dugme klikne (a samim tim podigne
dogadjaj), izvrsava se funkcija `obradiDogadjaj`.

```html
<script>
    const obradiDogadjaj = (event) => {
        console.log("Event type:", event.type);
        console.log("Target element:", event.target);
        console.log("Current target element:", event.currentTarget);
        console.log(
            "Mouse coordinates (clientX, clientY):",
            event.clientX,
            event.clientY
        );

        event.preventDefault();
        event.stopPropagation();
    };
</script>
...
<button onclick="obradiDogadjaj(this)" />
```

###### 2. Pretplacivanje na dogadjaj koriscenjem javascripta

```js
const registerEvents = () => {
    let myButton = document.getElementById("myButton");
    // koriscenjem addEventListener metode
    myButton.addEventListener("click", (event) => {
        console.log(`Hello from ${event}`);
    });
    // koriscenjem svojstva
    myButton.ondblclick = (event) => {
        console.log(`${event} double clicked`);
    };
};
```

`AddEventListener` metoda prima 2 parametra:

1. Naziv dogadjaja na koji se reaguje
2. Funkciju koja treba da se izvrsi kada se dogadjaj podigne

##### Podizanje dogadjaja (event triggering)

###### Podizanje vec postojecih dogadjaja

```js
let element = document.getElementById("myButton");
element.click(); // podize dogadjaj tipa 'click' na elementu 'element'
```

###### Definisanje i podizanje korisnickih dogadjaja (CustomEvent)

```js
let myEvent = new CustomEvent("customType", {
    details: {
        key: "value",
    },
    document.dispatchEvent(myEvent) // DOM podize myEvent
});
```

Naravno, nije nuzno da sam DOM podize dogadjaj. Dogadjaj moze da se podigne iz
bilo kog cvora DOM stabla. Tu se postavlja pitanje: Ako se dogadjaj moze podici
iz bilo kog dela DOM stabla, da li se moze reagovati na njega takodje iz bilo
kog dela DOM stabla?

Odgovor je **da**.
