# JQuery

JQuery predstavlja JavaScript biblioteku čuja je glavna uloga da olakša korišćenje JS-a na vašem sajtu.

Jedna od osnovnih stvari za koju je odgovoran JS jeste prikaz i skrivanje izvesnih elemenata iz DOM-a. U vanila JS-u bismo to odradili na sledeći način:

```js
document.getElementById("zeljeni-id").style.display = "none";
```

Ista funkcionalnost bi se mogla postići sledećim JQuery kodom:

```js
$("#zeljeni-id").hide();
```

Ono sto se razlikuje od vanila JS-a jeste sto JQuery koristi `$` kao znak za pristpu biblioteci. Sama ideja biblioteke je vrlo jednostavna. Svaka naredba ima sledeci oblki:

```js
$(selektor).akcija();
```

gde selektor predstavlja string na osnovu kog biramo DOM elemente nad kojima zelimo da izvrsimo akciju.

Ako bismo hteli neku komplikovaniju akciju, npr. da sakrijemo sve `div` elemente koji implementiraju klasu `point`, vanila JS-om bismo rekli nesto ovako:

```js
let pointDivs = document.querySelectorAll("div.point");

pointDivs.forEach(function (div) {
  div.style.display = "none";
});
```

Naravno, ovde koristimo `querySelectorAll` metodu da jednostavnije pristupimo zeljenim elementima, no `forEach` metodi ovde nije mesto jer vrsimo jednostavno skrivanje elemenata. Da li je zaista neophodno da se vrsi iteracija kroz svaki element i pojedinacno postavljanje stilova? JQuery bi to resio na sledeci nacin:

```js
$("div.point").hide();
```

U pozadini se naravni izvrsava neka iteracija, ali mi kao programeri ne moramo o tome da vodimo racuna jer je to reseno od strane biblioteke.

#### Dodavanje klase na elemente

```js
// JQuery
$("div").addClass("newClass");

// Vanilla JS
document.querySelectorAll("div").forEach(function (div) {
  div.classList.add("newClass");
});
```

#### Upravljanje DOM dogadjajima

```js
// JQuery
$("button").click(function () {
  console.log("Button clicked");
});

// Vanilla JS
document.querySelector("button").addEventListener("click", function () {
  console.log("Button clicked");
});
```

#### Kreiranje novih DOM elemenata

```js
// JQuery
$("body").append("<p>New paragraph</p>");

// Vanilla JS
var newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph";
document.body.appendChild(newParagraph);
```
