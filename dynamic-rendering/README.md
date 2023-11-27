# Dinamicko renderovanje veb stranica

Ideja dinamickog renderovanja veb stranica implicira da postoji staticko renderovanje istih.
Pre nego sto zapocnemo pricu o dinamickom renderovanju, osvrnimo se na staticko.

## Staticke veb stranice

Staticke web stranice su karakteristicne po tome sto je njihov sadrzaj uvek isti nezavisno od toga ko, i odakle salje zahtev.
Za isti zahtev ce se renderovati uvek ista stranica.

![Staticki](staticki.png)

Sa slike se vidi sledece (u hronoloskom poretku):

1. Slanje zahteva serveru
2. Odgovor servera slanjem index.html
3. Parsiranje html-a da bi se izgradio DOM
4. Renderovanje DOM-a i dobijanje UI-a

Dinamicko renderovanje bi izgledalo ovako:

![Alt text](dinamicki.png)

i sastoji se od sledecih koraka:

1. Slanje zahteva serveru
2. Odgovor servera slanjem index.html
3. Parsiranje html-a da bi se izgradio DOM
4. Podizanje event-a `ready` u trenutku kada se DOM izgradi
5. Pozivanje logike koja zahteva sada **korisne podatke** sa servera
6. Odgovor servera na zahtev u json formatu
7. Prihvatanje podataka u json formatu i dodavanje novih DOM elemenata u DOM
8. Rerenderovanje DOM-a

Imajte na umu da programer (na klijentskoj strani) kontrolise sve ono sto je obojeno narandzastom. Cim dodje do promene u DOM-u, browser ce automatski prikazati te promene u UI-u.
Odogovor servera kod dinamickih stranica moze zavisiti od kolacica, sesija, lokacije, koji je korisnik ulogovan, da li su dodatni parametri u zahtevu itd.
