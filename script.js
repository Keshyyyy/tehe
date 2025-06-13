const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonsContainer = document.querySelector(".buttons");



const nuhUh = [
    "No (poopy)",
    "Nope!",
    "Not allowed",
    "Never",
    "Nuh uh",
    "Never in a zillion years",
    "Nah not today",
    "Erm, what do you think youre doing"
];

function moveNoButton(){
    noButton.style.position = "absolute";
    
    const containerRect = buttonsContainer.getBoundingClientRect();
    const btnRect = noButton.getBoundingClientRect();
    const maxY = containerRect.height - btnRect.height;
    const maxX = containerRect.width - btnRect.width;

    const newX = Math.random() * Math.max(0, maxX);
    const newY = Math.random() * Math.max(0, maxY);
    noButton.style.left = newX + "px";
    noButton.style.top = newY + "px";
    const randomText = nuhUh[Math.floor(Math.random() * nuhUh.length)];
    noButton.textContent = randomText;
}

function createLeaf() {
    const leaf = document.createElement("div");

    if(Math.random() > 0.5)
        leaf.classList.add("leaf");
    else{
        leaf.classList.add("unicode-leaf");
        leaf.innerHTML = Math.random() > 0.5 ? "🍃" : "🌿";
    }

    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = (3 + Math.random() * 5) + "s";
    leaf.style.opacity = Math.random();

    document.getElementById("leaf-container").appendChild(leaf);
     
    setTimeout(() => {
        leaf.remove();
    }, 8000);
}

setInterval(createLeaf, 300);

yesButton.addEventListener("click", function(){
    window.location.href = "page2.html";
});

noButton.addEventListener("click", function(e) {
    e.preventDefault();
    moveNoButton();
});