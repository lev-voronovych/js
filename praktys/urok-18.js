const hero = document.querySelector('.hero');

const title = document.createElement("h1");
title.textContent = "helllo world";


const p = document.createElement("p");
p.textContent = "heloo world";
hero.append(title, p);