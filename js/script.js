// aboutSection modified
const aboutSection = document.getElementById("about-us");
aboutSection.style.backgroundColor = "tomato";
aboutSection.style.color = "white";

// cards modified
const cards = document.getElementsByClassName('card');
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.style.borderRadius = "30px";
}

// addEventListener button top Section
function listenerFunction() {
    console.log("I am here");
}

// buy now button modified
const buyNowBtns = document.getElementsByClassName("buyNowBtn");

for (const buyNowBtn of buyNowBtns) {
    buyNowBtn.addEventListener("click", function () {
        buyNowBtn.style.display = "none";
    });

}

// disabled button modified
const disabledBtn = document.getElementById("disabledBtn")
const inputforDisabledBtn = document.getElementById("inputForDisabledBtn");
inputforDisabledBtn.addEventListener("keyup", disabledFunction);
function disabledFunction() {
    if (inputforDisabledBtn.value == "approve me") {
        disabledBtn.removeAttribute("disabled");
    }
    else {
        disabledBtn.setAttribute("disabled", true)
    }
}