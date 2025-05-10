import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
    document.querySelector('#Excuse').innerHTML = generateExcuse();
};    

let generateExcuse = () => {
    let noun = ['A dog','My grandma','Iron Man','The President','A guitar','My Cat'];
    let action = ['broke','blasted','destroyed','ate', 'burnt'];
    let object = ['my homework','my phone','my car','my clothes'];
    let when = ['while I was sleeping', 'before school', 'while I was dressing', 'while eating breakfast'];

    let nounIndex = Math.floor(Math.random() * noun.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let objectIndex = Math.floor(Math.random() * object.length);
    let whenIndex = Math.floor(Math.random() * when.length);





    return noun[nounIndex]+' '+action[actionIndex]+' '+object[objectIndex]+' '+when[whenIndex]
}