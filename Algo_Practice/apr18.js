/*
  Pokemon Finder

  This challenge will have 5 functions where, given an array, display the required information.
*/

var pokemon = [
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
];

// 1.

for (const a in pokemon) {
  if (pokemon[a].id % 3 == 0) {
    console.log(pokemon[a]);
  }
}

// 2.
// for (const a in pokemon) {
//   if (pokemon[a].types.length > 1) {
//     console.log(pokemon[a]);
//   }
// }

// 3.
// for (const a in pokemon) {
//   if (pokemon[a].types.length == 1 && pokemon[a].types[0] == "poison") {
//     console.log(pokemon[a].name);
//   }
// }

// 4.
// for (const a in pokemon) {
//   if (pokemon[a].types[1] == "flying") {
//     console.log(pokemon[a].types[0]);
//     return;
//   }
// }

// 5.
// for (const a in pokemon) {
//   if (pokemon[a].types.length == 1 && pokemon[a].types[0] == "poison") {
//     const x = pokemon[a].name;
//     console.log(reverseString(x));
//   }
// }

// function reverseString(str) {
//   var newStr = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
