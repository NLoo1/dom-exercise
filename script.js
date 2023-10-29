let exOne, exTwo, exThree, exFour, exFive, exSix, exSeven, exEight, exNine, exTen, exEleven, exTwelve;

exOne = document.getElementById('container');
exTwo = document.querySelector('#container');
exThree = document.querySelectorAll("li.second");
exFour = document.querySelector("ol li.third");

exFive = document.getElementById("container");
exFive.innerText = "Hello!"

exSix = document.querySelector("div.footer");
exSix.classList.add("main");

exSeven = document.querySelector('div.footer');
exSeven.classList.remove("main");

exEight = document.createElement("li");
exEight.innerText = "four";

exTen = document.querySelector("ul");
exTen.append(exEight);

exEleven = document.querySelectorAll("ol li");

for(let num of exEleven){
    num.style.backgroundColor = "green";
}

exTwelve = document.querySelector("div.footer");
exTwelve.remove();
