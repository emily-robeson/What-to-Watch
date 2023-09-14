const media = ['The Orville', 'Futurama', 'Wheel of Time', 'TDP', 'Taskmaster New Zealand', 'ATLA', "Marvel thing we're behind on", "YouTube stuff (Em's choice)", "YouTube stuff (El's choice)", "Movie from Em's list", "Movie from El's list", "Show from Em's list", "Show from El's list"];

const random = Math.floor(Math.random() * media.length);
console.log(random, media[random]);

let resultDiv = `"Today's thing to watch is: " + ${random} + '.'` 

document.getElementById("resultDiv").innerHTML = resultDiv.toString();

random();