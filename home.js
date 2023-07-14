const gameJanken = document.getElementById('janken');
gameJanken.addEventListener('click',()=>{
    gameJanken.className = 'selectGame';
    gameJanken.innerHTML += '<button class="playGame" id="butJanken">Play</button> <button class="closeGame">close</button>'
});
