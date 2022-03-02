const section = document.querySelector('section');
const areYouSmart = document.querySelector('span');
const areYouLives = 7;


//link text 
areYouSmart.textContent = areYouLives;

// Generarting data
// [{ imgSrc: './African American fLAG.gif'}]
// images.src = imgscr

const getData = () => [
{ imgSrc: "./African American fLAG.gif", name: "African American fLAG"},
{imgSrc: "./Barbados.gif", name: "Barbados"},
{imgSrc: "./ethiopia.gif", name: "ethiopia"},
{imgSrc: "./Ghana.gif", name: "Ghana"},
{imgSrc: "./Guyana.gif", name: "Guyana"},
{imgSrc: "./Haiti.gif", name: "Haiti"},
{imgSrc: "./Jmaiaca.gif", name: "Jamaica"},
{imgSrc: "./Nigeria.gif", name: "Nigeria"},
{imgSrc: "./South-Africa.gif", name: "South-Africa"},
{imgSrc: "./Vincy.gif", name: "Vincy"},
{ imgSrc: "./African American fLAG.gif", name: "African American fLAG"},
{imgSrc: "./Barbados.gif", name: "Barbados"},
{imgSrc: "./ethiopia.gif", name: "ethiopia"},
{imgSrc: "./Ghana.gif", name: "Ghana"},
{imgSrc: "./Guyana.gif", name: "Guyana"},
{imgSrc: "./Haiti.gif", name: "Haiti"},
{imgSrc: "./Jmaiaca.gif", name: "Jamaica"},
{imgSrc: "./Nigeria.gif", name: "Nigeria"},
{imgSrc: "./South-Africa.gif", name: "South-Africa"},
{imgSrc: "./Vincy.gif", name: "Vincy"},
];
// const data = getData();

const randomize = () => {
    const cardData = getData();
    console.log(cardData);
};
