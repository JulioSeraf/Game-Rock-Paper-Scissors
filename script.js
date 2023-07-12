const hands = document.querySelectorAll('.inside');
const yourPicked = document.querySelector('.yourPicked');
const closerBut = document.getElementById('close-but');
const rules = document.querySelector('.rules');
const handsDis = document.querySelector('.selectHand');
const resultDis = document.querySelector('.result');
const handHouse = document.querySelector('.theHouse');
const resNumber = document.querySelector('.numberResult');
let puntos = 0;
const paper = {
    img: `<img src="images/icon-paper.svg" alt="icon-paper">`,
    color: `background-color: hsl(230, 89%, 65%); box-shadow:inset 0px -6px 0px hsl(230, 85%, 60%);`
};
const rock ={
    img: `<img src="images/icon-rock.svg" alt="icon-rock"></img>`,
    color: `background-color: hsl(349, 70%, 56%);
    box-shadow:  inset 0px -7px 0px  hsl(349, 71%, 52%);`
};
const sciss = {
    img:`<img src="images/icon-scissors.svg" alt="icon-scissors">`,
    color: ` background-color:hsl(40, 84%, 53%);
    box-shadow:  inset 0px -7px 0px  hsl(39, 89%, 49%);`
};
function selectHand(chose){
    resDisplay();
    yourPicked.classList.remove('but-div');
    yourPicked.classList.add('but-select'); 
    let imgHand = null;
    if(chose === 'paper'){
        imgHand = paper.img;
        yourPicked.style.cssText = paper.color;
    }else if(chose === 'rock'){
        imgHand = rock.img;
        yourPicked.style.cssText = rock.color;
    }else if(chose === 'sciss'){
        imgHand = sciss.img;
        yourPicked.style.cssText = sciss.color;
    }
    yourPicked.innerHTML = `<div class="insideRes">${imgHand}
  </div>`;
};
// Select the House------------------------------------------------------------
function houseSelect(nuRandom){
    handHouse.classList.remove('but-div');
    handHouse.classList.add('but-select'); 
    let imgHand = null;
    if(nuRandom === 0){
        imgHand = paper.img;
        handHouse.style.cssText = paper.color;
    }else if(nuRandom === 1){
        imgHand = rock.img;
        handHouse.style.cssText = rock.color;
    }else if(nuRandom === 2){
        imgHand = sciss.img;
        handHouse.style.cssText = sciss.color;
    }
   handHouse.innerHTML = `<div class="insideRes">${imgHand}
  </div>`;
}
// button Rules-----------------------------------------------------------
document.getElementById('rulesbut').addEventListener('click',()=>{
    rules.style.display = 'block';
    closerBut.addEventListener('click',()=>{
        rules.style.display = 'none';
    });
});
const resDisplay = ()=>{
    setTimeout(()=>{
    resultDis.style.display = 'flex';
    handsDis.style.display = 'none';}, 100);
    clearTimeout();
};

// Play Again---------------------------------------------------------

document.getElementById('butAgain').addEventListener('click',()=>{
    handsDis.style.display = 'block';
    resultDis.style.display = 'none';
})
hands.forEach((hand)=>{
    hand.addEventListener('click', ()=>{
        let nuRandom = Math.trunc(Math.random()*3);
        houseSelect(nuRandom);
        selectHand(hand.id);
        if(hand.id === 'paper' && nuRandom === 1){
            puntos ++;
        }else if(hand.id === 'paper' && nuRandom === 2){
            if( puntos > 0){
                puntos--;
            }else{
                puntos = 0;
            }
        }else if(hand.id === 'rock' && nuRandom === 2){
            puntos++;
        }else if(hand.id === 'rock' && nuRandom === 0){
            if( puntos > 0){
                puntos--;
            }else{
                puntos = 0;
            }
        }else if(hand.id === 'sciss' && nuRandom === 0 ){
            puntos ++;
        }else if(hand.id === 'sciss' && nuRandom === 1){
            if( puntos > 0){
                puntos--;
            }else{
                puntos = 0;
            }
        }
        resNumber.innerHTML = puntos;
    });
});



