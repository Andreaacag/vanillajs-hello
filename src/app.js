/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const num_who = Math.floor(Math.random() * 4);
  const num_action = Math.floor(Math.random() * 4);
  const num_what = Math.floor(Math.random() * 3);
  const num_when = Math.floor(Math.random() * 5);

  document.querySelector(
    "#excuse"
  ).innerHTML = `<h1>${who[num_who]} ${action[num_action]} ${what[num_what]} ${when[num_when]}</h1>`;
};
