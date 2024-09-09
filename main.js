const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const winScoreSelect = document.querySelector("#winSelect");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

let p1Score = 0;
let p2Score = 0;
let winScore = 0;
let isGameOver = false;

winScoreSelect.addEventListener("change", () => {
    winScore = parseInt(winScoreSelect.value);
    console.log(winScore);
})

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        if (p1Score !== winScore) {
            p1Display.innerText = p1Score;
            p1Score +=1;
            p1Display.innerText = p1Score;
        }
        else {
            isGameOver = true;
            p1Button.disabled = true;
            p2Button.disabled = true;
            p1Display.style.color = "green";
            p2Display.style.color = "red";
        }
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
    if (p2Score !== winScore) {
        p2Display.innerText = p2Score;
        p2Score +=1;
        p2Display.innerText = p2Score;
    }
    else {
        isGameOver = true;
        p2Button.disabled = true;
        p1Button.disabled = true;
        p1Display.style.color = "red";
        p2Display.style.color = "green";
    }
    }
})

resetButton.addEventListener('click', () => {
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    isGameOver = false;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.style.color = "";
    p2Display.style.color = "";
})

// PROMISES

// const delayedColor = (color, delay) => {
//     return new Promise ((resolve,reject) => {
//         setTimeout(() => {
//             if (delay > 4000) {
//                 reject ('Connection timeout')
//             }
//             else {
//             document.body.style.backgroundColor = color;
//             resolve(); }
//         }, delay)
//     })
// }

// rainbow("red", 5000)
// .then(() => rainbow("green",1000))
// .then(() => rainbow("blue",1000))
// .then(() => rainbow("indigo",1000))
// .then(() => rainbow("orange",1000))
// .then(() => rainbow("yellow",1000))
// .catch((err) => {console.log(err)})

// ASYNC & AWAIT

function delayedColor (color, delay) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve()}, delay)
    })
}

async function rainbow () {
    await delayedColor("red", 1000)
    await delayedColor("blue", 1000)
    console.log('Hi')
    await delayedColor("yellow", 1000)
}
