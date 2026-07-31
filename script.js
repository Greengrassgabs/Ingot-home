const aquarium = document.getElementById("aquarium");
const fishContainer = document.getElementById("fish-container");

function createBubble(){

    const bubble=document.createElement("div");

    bubble.className="bubble";

    bubble.style.left=Math.random()*100+"vw";

    bubble.style.bottom="-20px";

    bubble.style.animationDuration=
    4+Math.random()*6+"s";

    aquarium.appendChild(bubble);

    setTimeout(()=>bubble.remove(),10000);

}

setInterval(createBubble,250);

const fish=["🐠","🐟","🐡","🦀","🐙"];

function createFish(){

    const fishy=document.createElement("div");

    fishy.className="fish";

    fishy.innerHTML=fish[
        Math.floor(Math.random()*fish.length)
    ];

    fishy.style.top=Math.random()*80+"vh";

    fishy.style.animationDuration=
    12+Math.random()*15+"s";

    fishContainer.appendChild(fishy);

    setTimeout(()=>fishy.remove(),30000);

}

setInterval(createFish,2500);
const speechBubble = document.getElementById("speech-bubble");
const speechText = document.getElementById("speech-text");

const ingotMessages = [

    "Oh! You’re here!",

    "I’m Ingot.",

    "Gabby left some surprises around my aquarium...",

    "Go on, have a look around! Starfish has something for you 🫧"

    

];

let messageNumber = 0;

function showIngotMessage() {

    speechText.textContent = ingotMessages[messageNumber];

    speechBubble.classList.add("show");

    setTimeout(() => {

        speechBubble.classList.remove("show");

        messageNumber++;

        if (messageNumber < ingotMessages.length) {

            setTimeout(showIngotMessage, 500);

        }

    }, 2500);

}

setTimeout(showIngotMessage, 800);
const starfish = document.getElementById("starfish");
const starfishBubble = document.getElementById("starfish-bubble");

starfish.addEventListener("click", () => {

    starfishBubble.classList.add("show");

    setTimeout(() => {

        starfishBubble.classList.remove("show");

    }, 3000);

});
const crab = document.getElementById("crab");
const crabArea = document.getElementById("crab-area");
const crabBubble = document.getElementById("crab-bubble");
const crabText = document.getElementById("crab-text");

const crabMessages = [

    "Nope. I haven’t seen Chickenpox.",

    "But I saw something moving behind the seaweed..."

];

let crabMessageNumber = 0;
let crabHasMoved = false;

crab.addEventListener("click", () => {

    if (crabHasMoved) return;

    crabHasMoved = true;

    crabArea.classList.add("scuttle");

    setTimeout(() => {

        showCrabMessage();

    }, 1000);

});

function showCrabMessage() {

    crabText.textContent = crabMessages[crabMessageNumber];

    crabBubble.classList.add("show");

    setTimeout(() => {

        crabBubble.classList.remove("show");

        crabMessageNumber++;

        if (crabMessageNumber < crabMessages.length) {

            setTimeout(showCrabMessage, 500);

        }

    }, 2500);

}
const seaweed = document.getElementById("seaweed");
const chickenpox = document.getElementById("chickenpox");

const bottle = document.getElementById("bottle");
const memoryOverlay = document.getElementById("memory-overlay");

let chickenpoxFound = false;
let bottleOpened = false;



seaweed.addEventListener("click", () => {

    if (chickenpoxFound) return;

    chickenpoxFound = true;

    seaweed.classList.add("shake");

    setTimeout(() => {

        chickenpox.classList.add("show");

    }, 400);


    setTimeout(() => {

        bottle.classList.add("appear");

    }, 1200);

});


// CLICK THE BOTTLE

bottle.addEventListener("click", () => {

    if (bottleOpened) return;

    bottleOpened = true;

    bottle.style.transform = "rotate(12deg) scale(1.12)";


    // Show the memory photo

    setTimeout(() => {

        memoryOverlay.classList.add("show");

    }, 250);


    // Hide the memory photo

    setTimeout(() => {

        memoryOverlay.classList.remove("show");

    }, 4750);


    // Ingot speaks after the photo disappears

    setTimeout(() => {

        speechText.textContent =
        "Oh! Chickenpox sent a surprise. Wonder if you remember this...";

        speechBubble.classList.add("show");

    }, 5500);


    // Hide Ingot's speech bubble

   setTimeout(() => {

    speechBubble.classList.remove("show");

}, 8500);


setTimeout(() => {

    turtleArea.classList.add("appear");

}, 9000);

});

// TURTLE

const turtle = document.getElementById("turtle");

const turtleArea = document.getElementById("turtle-area");

const turtleBubble = document.getElementById("turtle-bubble");

const memory2Overlay =
document.getElementById("memory2-overlay");

let turtleOpened = false;


// CLICK THE TURTLE

turtle.addEventListener("click", () => {

    if (turtleOpened) return;

    turtleOpened = true;

    turtleBubble.style.opacity = "0";


    // Show Memory 2

    setTimeout(() => {

        memory2Overlay.classList.add("show");

    }, 300);


    // Hide Memory 2

    setTimeout(() => {

        memory2Overlay.classList.remove("show");

    }, 4800);


    // Start Parrotfish after Memory 2

    setTimeout(() => {

        startParrotfishConversation();

    }, 5500);

});
// PARROTFISH

const parrotfishArea =
document.getElementById("parrotfish-area");

const parrotfishBubble =
document.getElementById("parrotfish-bubble");

const parrotfishText =
document.getElementById("parrotfish-text");

const treasureChest =
document.getElementById("treasure-chest");


// PARROTFISH DIALOGUE

function startParrotfishConversation() {

    parrotfishArea.classList.add("appear");


    setTimeout(() => {

        parrotfishText.textContent =
        "Hi Ingot!";

        parrotfishBubble.classList.add("show");

    }, 2200);


    setTimeout(() => {

        parrotfishBubble.classList.remove("show");

    }, 4200);


    setTimeout(() => {

        speechText.textContent =
        "Hi Parrotfish, what brings you here?";

        speechBubble.classList.add("show");

    }, 4700);


    setTimeout(() => {

        speechBubble.classList.remove("show");

    }, 7200);


    setTimeout(() => {

        parrotfishText.textContent =
        "Ingot, I found something! Come and look!";

        parrotfishBubble.classList.add("show");

    }, 7700);


    setTimeout(() => {

        parrotfishBubble.classList.remove("show");

    }, 10400);


    setTimeout(() => {

        treasureChest.classList.add("appear");

    }, 10900);

}
// FINAL TREASURE CHEST

const letterOverlay =
document.getElementById("letter-overlay");

let treasureOpened = false;


treasureChest.addEventListener("click", () => {

    if (treasureOpened) return;

    treasureOpened = true;


    treasureChest.style.transform =
    "translateX(-50%) scale(1.15)";


    setTimeout(() => {

        letterOverlay.classList.add("show");

    }, 400);

});