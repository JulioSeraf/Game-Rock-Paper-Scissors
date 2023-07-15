const gameJanken = document.getElementById('janken');
const gameJajanken = document.getElementById('jajanken');
const playGame = document.querySelectorAll('.playGame');
gameJanken.addEventListener('click',()=>{
    gameJajanken.classList.remove('selectGame');
    gameJanken.className = 'selectGame';
    playGame[0].style.display = 'block';
    playGame[1].style.display = 'none';
    playGame[0].addEventListener('click',()=>{
        location.href = 'index.html';
    })
});

gameJajanken.addEventListener('click',()=>{
    gameJanken.classList.remove('selectGame');
    gameJajanken.className = 'selectGame';
    playGame[0].style.display = 'none';
    playGame[1].style.display = 'block';
});
