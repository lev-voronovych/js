const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";
for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ", ";
  }
}

string = friends.join(", ");

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
const removed = cards.splice(2, 1);
console.log(cards);
const index = cards.indexOf("Карточка-3");
if (index !== -1) {
  cards.splice(index, 1);
}
console.log(cards);

cards.splice(2, 0, "Карточка-3");
console.log(cards);

cards.splice(3, 1, "Карточка-4 (оновлена)");
console.log(cards);
