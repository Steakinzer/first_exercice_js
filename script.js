// Script1

// console.log("Hello world")

// Script2

// let answer =""
// let result = window.prompt("Rentre ton nom")
// console.log("Bonjour" + " " + result)

// Script3
// let n = window.prompt("Choisi un chiffre")
// function fact(n) {
//   for (let i = n-1; i >= 1; i--) {
//     n = n*i
//   }
//   return n
// }
// console.log(fact(n))

// Script4
// console.log("Bievenue dans ma super pyramide! Combien d'étages veux tu?")
// const etage = window.prompt("Choisi le nombre d'étages")
// const space = " "
// const star = "#"
// function pyramid(etage) {
//   for(let i = 1; i <= etage; i++) 
//   {
//     console.log(space.repeat(etage-i)+star.repeat(i))
//   }
// }
// pyramid(etage)

// Script5
// const entrepreneurs = [
//   { first: 'Steve', last: 'Jobs', year: 1955 },
//   { first: 'Oprah', last: 'Winfrey', year: 1954 },
//   { first: 'Bill', last: 'Gates', year: 1955 },
//   { first: 'Sheryl', last: 'Sandberg', year: 1969 },
//   { first: 'Mark', last: 'Zuckerberg', year: 1984 },
//   { first: 'Beyonce', last: 'Knowles', year: 1981 },
//   { first: 'Jeff', last: 'Bezos', year: 1964 },
//   { first: 'Diane', last: 'Hendricks', year: 1947 },
//   { first: 'Elon', last: 'Musk', year: 1971 },
//   { first: 'Marissa', last: 'Mayer', year: 1975 },
//   { first: 'Walt', last: 'Disney', year: 1901 },
//   { first: 'Larry', last: 'Page', year: 1973 },
//   { first: 'Jack', last: 'Dorsey', year: 1976 },
//   { first: 'Evan', last: 'Spiegel', year: 1990 },
//   { first: 'Brian', last: 'Chesky', year: 1981 },
//   { first: 'Travis', last: 'Kalanick', year: 1976 },
//   { first: 'Marc', last: 'Andreessen', year: 1971 },
//   { first: 'Peter', last: 'Thiel', year: 1967 }
// ];
// let list = []
// let hash = []
// entrepreneurs.forEach(function(entrepreneur) {
//   if (entrepreneur.year >= 1970 && entrepreneur.year <= 1980) {
//   console.log(entrepreneur.first + entrepreneur.last);
//   list.push(entrepreneur.first + " " + entrepreneur.last + " " + ((new Date().getFullYear())- (entrepreneur.year))+ " ans");
//   hash.push(entrepreneur)}
// })
// // Entrepreneurs compris entre 1970 et 1980
// console.log(hash)
// // Age actuel
// console.log(list)
// // Trier par nom de famille
// console.log(hash.sort((a, b) => a.last.toLowerCase().localeCompare(b.last.toLowerCase())))

// Script6
// const books = [
//   { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
//   { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
//   { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
//   { title: 'Les frères Karamazov', id: 450911, rented: 55 },
//   { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
//   { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
//   { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
//   { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
//   { title: 'La disparition', id: 364445, rented: 33 },
//   { title: 'La lune seule le sait', id: 63541, rented: 43 },
//   { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
//   { title: 'Guerre et Paix', id: 748147, rented: 19 }
// ];
// // Est-ce que tout les livres ont étés empruntés
// books.forEach(function(livre){
//   if (livre.rented < 0) {
//     i = 1;
//     console.log("Tout les livres n'ont pas été empruté au moins une fois")
//   }
//   else {
//   console.log("Tout les livres on étés empruntés au moins une fois")
//   }
// })
// // Trouver le livre le plus emprunté
// let best = Math.max.apply(Math, books.map(function(o) { return o.rented; }))
// let bebest = books.find(({rented}) => rented === best)
// console.log(bebest)
// // Trouver le livre le moins emprunté
// let worst = Math.min.apply(Math, books.map(function(o) { return o.rented; }))
// let woworst = books.find(({rented}) => rented === worst)
// console.log(woworst)
// // Trouver le livre avec id 87xxx
// let idfind = books.find(({id}) => id === 873495)
// console.log(idfind)
// // Supprimer id 13xxxx
// let index = books.findIndex((books) => books.id === 133712)
// books.splice(index, 1)
// console.log(books)
// // Trier par odre alpha
// console.log(books.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())))

// Script 7
// const first = "CCGUCGUUGCGCUACAGC"
// const second = "CCUCGCCGGUACUUCUCG"
// let valeur = "CCG"
// let firsttable = first.match(/.{1,3}/g)
// let secondtable = second.match(/.{1,3}/g)
// let tableau = []
// function convert(table) {
//   table.forEach((element) => {
//     switch (element) {
//       case "UCU":
//       case "UCC":
//       case "UCA":
//       case "UCG":
//       case "AGU":
//       case "AGC":
//         tableau.push("Sérine");
//         break;
//       case "CCU":
//       case "CCC":
//       case "CCA":
//       case "CCG":
//         tableau.push("Proline");
//         break;
//       case "UUA":
//       case "UUG":
//         tableau.push("Leucine");
//         break;
//       case "UUU":
//       case "UUC":
//         tableau.push("Phénylalanine");
//         break;
//       case "CGU":
//       case "CGC":
//       case "CGA":
//       case "CGG":
//       case "AGA":
//       case "AGG":
//         tableau.push("Arginine");
//         break;
//       case "UAU":
//       case "UAC":
//         tableau.push("Tyrosine");
//         break;
//       }
// })
// let table1 = tableau.join('-')
// console.log(table1)
// tableau = []
// }
// convert(firsttable)
// convert(secondtable)
// Script8
let sentence = prompt("Que veux tu me dire ?")
function rep(sentence) {
  if (sentence.at(-1) == "?") {
    console.log("Ouai ouai ..")
  }
  else if ((/^[A-Z]+$/.test(sentence)) == true) {
    console.log("Calme toi chakal!!")
  }
  else if (sentence.includes("Fortnite")) {
    console.log("Chaud pour une game!")
  }
  else if (!sentence) {
    console.log("T'es rébou ou quoi?")
  }
  else 
  console.log("Balek man!")
}

rep(sentence)