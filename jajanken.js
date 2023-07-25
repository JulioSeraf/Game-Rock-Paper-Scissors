const hands = document.querySelectorAll('.inside');
const jajankenDis = document.querySelector('.jajankenGame');
hands.forEach((hand)=>{
    hand.addEventListener('click',()=>{
        let homeHand = Math.trunc(Math.random()*3);
        selectHand(hand.id);
        houseSelect(homeHand);
        jajankenDis.style.display = 'none';
        
    })
})