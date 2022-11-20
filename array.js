//Objects and arrays reference types

// const names = ["Dinu", "Bubzy", "Drake"];

// const newNames = names;

// newNames.push("Marta");

// console.log(newNames);

// console.log(names);

// let bank = 250;
// let newBank = bank;
// console.log(bank, newBank);
// newBank = 500;

// console.log(bank, newBank);

// const tweet = {
//   name: "Developedbyed",
//   tweets: 20,
//   age: 32,
// };

// const newTweet = tweet;
// newTweet.tweets = 21;

// console.log(tweet);

const videos = [
  "Pranking my sister, is she okay(gone wrong)",
  "how to javascript",
  "html tutorial",
  "learning the piano",
  "css",
  "java",
  "programming",
  "ui/ux",
];

const games = [
  { title: "Mass Effect", rating: 9.5 },
  { title: "League of Legends", rating: 5 },
  { title: "Last of Us", rating: 10 },
  { title: "Warrior", rating: 10 },
  { title: "WWE 2k20", rating: 4 },
];

//For each
// videos.forEach(function (video) {
//   console.log("run");
//   console.log(video);
// });

// videos.forEach(function (video) {
//   console.log("run");
//   console.log(video);
// });

//Higher Order Function
// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// repeater(function () {
//   console.log("Hello There!");
// });

//Map
// const newVideos = videos.map(function (video) {
//   return video.length < 10 ? video : "nope";
// });
// console.log(newVideos);

//Find
const searchTutorial = videos.find(function (video) {
  return video.includes("va");
});

//Filter
const shortSearch = videos.filter(function (video) {
  return video.length < 15;
});

const highRating = games.filter(function (game) {
  return game.rating >= 9.5;
});

//Some and Every
const checkRating = games.every(function (game) {
  return game.rating > 8;
});

const someRating = games.some(function (game) {
  return game.rating >= 10;
});

//How we used to do it
const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : "nope";
});

const arrowVideos = videos.map((video) => video + video.toUpperCase());

//Sort
const items = ["Banana", "Orange", "Apple", "Mango"];
const ratings = [92, 56, 4, 2, 22, 45.6, 10, 80];

// Return is negative a is sorted before b
// Positive b is sorted before a
// if they are the same then nothing changes

// games.sort((a, b) => a.rating - b.rating);

// console.log(games);

const names = ["ed", "you"];
const otherNames = ["John", "Bohn", "Jovi"];

const allNames = [...names, ...otherNames];

console.log(allNames);
