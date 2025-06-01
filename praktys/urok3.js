//const car = {
//  make: 'Toyota',
// model: 'Camry',
//  year: 2020
// };

// const { make, model, year } = car;

// console.log(make);
// console.log(year);
//console.log(model);
// глибока деструктуризація об'єкта car
//const car = {
// make: 'Toyota',
//    model: 'Camry',
//    year: 2020,
//   safety: {
//      airbags: true,
//     antilock_brakes: true,
//     stability_control: true
//  }
//}
//const { make,
//   model,
//   year,
//    safety: { airbags, antilock_brakes, stability_control }
//} = car;

//console.log(make);
//console.log(antilock_brakes);

const movie = {
  title: "The Shawshank Redemption",
  director: {
    name: "Frank Darabont",
    nationality: "American",
  },
  actors: ["Tim Robbins", "Morgan Freeman"],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90,
  },
};
const {
    title,
    director: { name , nationality },
    actors: [actor1, actor2],
  release_year,
  ratings: { imdb },
} = movie;

console.log(title);
console.log(directorName);
console.log(actor1); 