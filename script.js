const hands = document.querySelectorAll('.inside');
const yourPicked = document.querySelector('.yourPicked');
const closerBut = document.getElementById('close-but');
const rules = document.querySelector('.rules');
const homebut = document.getElementById('homebut');
const handsDis = document.querySelector('.selectHand');
const resultDis = document.querySelector('.result');
const handHouse = document.querySelector('.theHouse');
const resNumber = document.querySelector('.numberResult');
const jaken = document.querySelector('.contagen');
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
const jajaken =[{
    nu:1,
    jkp: 'JAN'
},{
    nu:2,
    jkp: 'KEN'
},{
    nu:3,
    jkp:'PO'
}];
function selectHand(chose){
    yourPicked.classList.remove('but-div');
    yourPicked.classList.add('but-select'); 
    let imgHand = null;
    if(chose === 'paper'){
        jaken.style.color = 'hsl(230, 89%, 65%)';
        imgHand = paper.img;
        yourPicked.style.cssText = paper.color;
    }else if(chose === 'rock'){
        jaken.style.color = ' hsl(349, 70%, 56%)';
        imgHand = rock.img;
        yourPicked.style.cssText = rock.color;
    }else if(chose === 'sciss'){
        jaken.style.color = 'hsl(40, 84%, 53%)';
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
};

function resltHands(hand,nuRandom){
    let resultado = document.querySelector('.res');
    if(hand.id === 'paper' && nuRandom === 1){
        puntos ++;
        resultado.innerHTML = 'YOU WIN!';
    }else if(hand.id === 'paper' && nuRandom === 2){
        if( puntos > 0){
            puntos--;
        }else{
            puntos = 0;
        }
        resultado.innerHTML = 'YOU LOSE';
    }else if(hand.id === 'rock' && nuRandom === 2){
        puntos++;
        resultado.innerHTML = 'YOU WIN!';
    }else if(hand.id === 'rock' && nuRandom === 0){
        if( puntos > 0){
            puntos--;
        }else{
            puntos = 0;
        }
        resultado.innerHTML = 'YOU LOSE';
    }else if(hand.id === 'sciss' && nuRandom === 0 ){
        puntos ++;
        resultado.innerHTML = 'YOU WIN!';
    }else if(hand.id === 'sciss' && nuRandom === 1){
        if( puntos > 0){
            puntos--;
        }else{
            puntos = 0;
        }
        resultado.innerHTML = 'YOU LOSE';
    }else if(hand.id === ''){

    }else if((hand.id === 'paper' && nuRandom === 0)||(hand.id === 'rock' && nuRandom === 1) || (hand.id === 'sciss' && nuRandom === 2)){
        resultado.innerHTML = 'DRAW';
    }
    resNumber.innerHTML = puntos;
};

// button Rules / home-----------------------------------------------------------

document.getElementById('rulesbut').addEventListener('click',()=>{
    rules.style.display = 'block';
    closerBut.addEventListener('click',()=>{
        rules.style.display = 'none';
    });
});

// Play Again---------------------------------------------------------
homebut.addEventListener('click', ()=>{
    let exit = document.querySelector('.msgExit');
    exit.style.display = 'block';
    document.querySelectorAll('.butExit').forEach((item)=>{
        item.addEventListener('click', ()=>{
            if(item.id === 'yesExit'){
                puntos = 0;
                exit.style.display = 'none';
                location.href = 'home.html';
            }else if(item.id === 'noExit'){
                exit.style.display = 'none';
            };
        });
    });
});
document.getElementById('butAgain').addEventListener('click',()=>{
    handsDis.style.display = 'block';
    resultDis.style.display = 'none';
    jaken.style.display = 'none';
    jaken.style.fontSize = '5em'
});
hands.forEach((hand)=>{
    hand.addEventListener('click', ()=>{
        let nuRandom = Math.trunc(Math.random()*3);
        houseSelect(nuRandom);
        selectHand(hand.id);
        handsDis.style.display = 'none';
        jaken.style.display = 'block';
        jaken.innerHTML = '';
        let c = 0;
        const time = setInterval(()=>{
            jaken.innerHTML = `<h1>${jajaken[c].nu}</h1>
            <p>${jajaken[c].jkp}</p>`;
            console.log(c)
            if( c >= 2){ 
                clearInterval(time);
                jaken.style.cssText = 'color:transparent; position:absolute; font-size:0.1px;';
                resultDis.style.display = 'flex';
                resltHands(hand,nuRandom);
            }
            c++;
        },1000); 
    });
});
// Home select Game----------------------------------------

