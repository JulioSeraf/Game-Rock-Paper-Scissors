const hands = document.querySelectorAll('.inside');
const yourPicked = document.querySelector('.yourPicked');

class ObjHands{
    constructor(id,st,es){
        this.id = id;
        this.styl = st;
        this.estru = yourPicked.classList.add('but-select');
    }
}

// button Rules-----------------------------------------------------------
document.getElementById('rulesbut').addEventListener('click',()=>{
    let rules = document.querySelector('.rules');
    rules.style.display = 'block';
    document.getElementById('close-but').addEventListener('click',()=>{
        rules.style.display = 'none';
    });
});
const resDisplay = ()=>{
    setTimeout(()=>{document.querySelector('.result').style.display = 'flex';
    document.querySelector('.selectHand').style.display = 'none';}, 100);
    clearTimeout();
    
}
hands.forEach((hand)=>{
    hand.addEventListener('click', ()=>{
       switch(hand.id){
        case 'paper':
            resDisplay();
        break;
        case 'sciss':
        break;
        case 'rock':
        break;
       }
    });
});
