const section = document.querySelector('section');
const areYouSmart = document.querySelector('span');
const areYouLives = 7;


//link text 
areYouSmart.textContent = areYouLives;

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
    // console.log(clickedFlag);
}
 flagGenerator();