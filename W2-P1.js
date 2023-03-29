/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = "30";
let num2 = "20";

if (num1 > num2) {
  console.log(num1);
} else if (num2 > num1)
  console.log(num2);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 5;

if (num3 !== 5) {
  console.log("not equal");
} else {
  console.log("Il numero è 5.");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num4 = 50;

if (num4 % 5 === 0) {
  console.log("divisible by 5");
} else {
  console.log("non divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num5 = 5;
let num6 = 3;

if (num5 === 8 || num6 === 8 || num5 + num6 === 8 || num5 - num6 === 8) {
  console.log("I numeri soddisfano la condizione.");
} else {
  console.log("I numeri non soddisfano la condizione.");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 34;

if (totalShoppingCart > 50) {
  console.log(totalShoppingCart + " (Spedizione gratuita)");
} else {
  console.log((totalShoppingCart + 10) + " (Costo spedizione: 10)");
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart1 = 80;

let totalDiscount = totalShoppingCart1 * 0.2;
totalShoppingCart1 -= totalDiscount;

if (totalShoppingCart1 > 50) {
  console.log(totalShoppingCart1 + " (Spedizione gratuita)");
} else {
  totalShoppingCart += 10;
  console.log(totalShoppingCart1 + " (Costo spedizione: 10)");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 15;
let b = 5;
let c = 20;

if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
}
if (b > c) {
  b = b + c;
  c = b - c;
  b = b - c;
}
if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
}

console.log(c, b, a);

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num7 = 10

if (typeof num7 === "number") {
  console.log("è un numero");
}
else {
  console.log("non è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num8 = 10

if (num8 % 2 === 0) {
  console.log("Il numero è pari.");
} else {
  console.log("Il numero è dispari.");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num9 = 12;

if (num9 < 5) {
  console.log("Tiny");
} else {
  if (num9 < 10) {
    console.log("Small");
  } else {
    if (num9 < 15) {
      console.log("Medium");
    } else {
      if (num9 < 20) {
        console.log("Large");
      } else {
        console.log("Huge");
      }
    }
  }
}

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let gender = "male";
let isMale = (gender === "female") ? false : true;
gender = isMale ? "male" : "female";
console.log(gender);

/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num10 = 0;

while (num10 <= 5) {
  console.log(num10);
  num10++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num11 = 0; num11 <= 10; num11++) {
  console.log(num11);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num12 = 0; num12 <= 10; num12++) {
  if (num12 === 3 || num12 === 8) {
    continue;
  }
  console.log(num12);
}

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num13 = 0; num13 <= 15; num13++) {
  if (num13 % 2 === 0) {
    console.log(num13 + " è pari");
  } else {
    console.log(num13 + " è dispari");
  }
}

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let num14 = 1; num14 <= 100; num14++) {
  if (num14 % 3 === 0 && num14 % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num14 % 3 === 0) {
    console.log("Fizz");
  } else if (num14 % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num14);
  }
}

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let day = 4;

switch (day) {
  case 1:
    console.log("Lunedi");
    break;
  case 2:
    console.log("Martedi");
    break;
  case 3:
    console.log("Mercoledi");
    break;
  case 4:
    console.log("Giovedi");
    break;
    case 5:
    console.log("Venerdi");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido. Inseriesci un numero da 1 a 7.");
}