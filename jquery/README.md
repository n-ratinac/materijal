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
