const hands = document.querySelectorAll('.inside');
const yourPicked = document.querySelector('.yourPicked');
const closerBut = document.getElementById('close-but');
const rules = document.querySelector('.rules');
const handsDis = document.querySelector('.selectHand');
const resultDis = document.querySelector('.result');
cont rock = 
// class ObjHands{
//     constructor(id,st,es){
//         this.id = id;
//         this.styl = st;
//         this.estru = yourPicked.classList.add('but-select');
//     }
// }

function selectHand(){
    resDisplay();
    yourPicked.classList.remove('but-div');
    yourPicked.classList.add('but-select'); 
    yourPicked.innerHTML = `<div class="insideRes">
    <img src="images/icon-rock.svg" alt="">
  </div>`
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
       switch(hand.id){
        case 'paper':
            selectHand();     
        break;
        case 'sciss':
            selectHand();
        break;
        case 'rock':
            selectHand();
        break;
       }
    });
});
