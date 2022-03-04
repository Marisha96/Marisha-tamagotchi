const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span');
let playerLives = 7;


//link text 
playerLivesCount.textContent = playerLives;

// Generarting data
// [{ imgSrc: './African American fLAG.gif'}]
// images.src = imgscr

const getData = () => [
{imgSrc: "./images/dr.gif", name: "dr"},
{imgSrc: "./images/barbados.gif", name: "barbados"},
{imgSrc: "./images/ethiopia.gif", name: "ethiopia"},
{imgSrc: "./images/ghana.gif", name: "ghana"},
{imgSrc: "./images/guyana.gif", name: "guyana"},
{imgSrc: "./images/haiti.gif", name: "haiti"},
{imgSrc: "./images/jamaica.gif", name: "jamaica"},
{imgSrc: "./images/nigeria.gif", name: "nigeria"},
{imgSrc: "./images/south.gif", name: "south"},
{imgSrc: "./images/vincy.gif", name: "vincy"},
{imgSrc: "./images/dr.gif", name: "dr"},
{imgSrc: "./images/barbados.gif", name: "barbados"},
{imgSrc: "./images/ethiopia.gif", name: "ethiopia"},
{imgSrc: "./images/ghana.gif", name: "ghana"},
{imgSrc: "./images/guyana.gif", name: "guyana"},
{imgSrc: "./images/haiti.gif", name: "haiti"},
{imgSrc: "./images/jamaica.gif", name: "jamaica"},
{imgSrc: "./images/nigeria.gif", name: "nigeria"},
{imgSrc: "./images/south.gif", name: "south"},
{imgSrc: "./images/vincy.gif", name: "vincy"},
];
// const data = getData();

const randomize = () => {
    const flagData = getData();
    flagData.sort(() => Math.random() - 0.5);
    // console.log(flagData);
    return flagData;
};

randomize();

const flagGenerator = () => {
    const flagData = randomize();
    // console.log(flagData)

    
    flagData.forEach((item) => {
        const flag = document.createElement("div");  
        const face = document.createElement("img")
        const back = document.createElement("div")
        flag.classList = 'flag';
        face.classList = 'face';
        back.classList = 'back';
        
        face.src = item.imgSrc;
        flag.setAttribute("name", item.name);
        
        section.appendChild(flag);
        flag.appendChild(face);
        flag.appendChild(back);

        flag.addEventListener('click', (m) => {
            flag.classList.toggle("toggleFlag");
            checkFlags(m);
    }); 
});
};
const checkFlags = (m) => {
    console.log(m);
    const clickedFlag = m.target
    clickedFlag.classList.add("flipped")
    const flippedFlags = document.querySelectorAll(".flipped")
  
    // console.log(clickedFlag);
    if(flippedFlags.length === 2) {
        if(flippedFlags[0].getAttribute('name') ===
         flippedFlags[1].getAttribute('name'))
   {
       console.log("match");
       flippedFlags.forEach(flag => {
           flag.classList.remove("flipped");
          flag.style.pointerEvents = "none"
       });
   } else {
        console.log('wrong');
        flippedFlags.forEach((flag) => {
        flag.classList.remove("flipped");
        setTimeout(() => flag.classList.remove("toggleFlag"), 1000);
  
        });
        playerLives--;
        playerLivesCount.textContent = playerLives;
        if(playerLives === 0) {
            restart();
        }
   }
    }
};

const restart = (text) => {
let flagData = randomize();
let  faces = document.querySelectorAll(".face");
let flags = document.querySelectorAll(".flag")
section.style.pointerEvents = "none";
flagData.forEach((item,index) => {
flags[index].classList.remove("toggleFlag");

setTimeout(() => {
    
flags[index].style.pointerEvents = "all"
faces[index].src = item.imgSrc;
flags[index].setAttribute("name", item.name);
section.style.pointerEvents = "none";
}, 1000);
});
playerLives = 7;
playerLivesCount.textContent = playerLives;
setTimeout(() => { window.alert(text).100);
    
};

};
 flagGenerator();