let cardsArray=[
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    },
    {
        name:'dog',
        icon:'<i class="fa-solid fa-dog"></i>'
    },
    {
        name:'hippo',
        icon:'<i class="fa-solid fa-hippo"></i>'
    },
    {
        name:'fish',
        icon:'<i class="fa-solid fa-fish"></i>'
    },
    {
        name:'cat',
        icon:'<i class="fa-solid fa-cat"></i>'
    },
    {
        name:'spider',
        icon:'<i class="fa-solid fa-spider"></i>'
    },
    {
        name:'frog',
        icon:'<i class="fa-solid fa-frog"></i>'
    }
];


let flippedCards=[]; 
let matchedPairs=0;

shuffleCards();
const gameBoard=document.getElementById('gameBoard');
displayCards();

function shuffleCards(){
    for(let i=cardsArray.length-1;i>=0;i--){
        let randIndex=Math.floor(Math.random()*(i+1));
        [cardsArray[i],cardsArray[randIndex]]=[cardsArray[randIndex],cardsArray[i]];
    }
};

function displayCards(){
    cardsArray.forEach((curr,index,arr)=>{
        const card=document.createElement('div');
        card.setAttribute('id',index);
        card.classList.add('cardBack');
        card.classList.add('active');
        gameBoard.append(card);
        card.addEventListener('click',flipcard);
    })
};


function flipcard(){
    if (flippedCards.length<2 && this.classList.contains('active')){
        let cardId=this.getAttribute('id');
        console.log(this)
        flippedCards.push(this);
        this.classList.remove('cardBack');
        this.innerHTML=cardsArray[cardId].icon;
        if(flippedCards.length==2){
            setTimeout(checkMatch,1000);
        }
    }
}

function checkMatch(){
    const card1Id=flippedCards[0].getAttribute('id');
    const card2Id=flippedCards[1].getAttribute('id');
    if(cardsArray[card1Id].name==cardsArray[card2Id].name){
        flippedCards[0].style.border='none';
        flippedCards[0].style.backgroundColor='pink';
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.remove('active');
        flippedCards[1].style.border='none';
        flippedCards[1].style.backgroundColor='pink';
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.remove('active');
        matchedPairs++;
        checkGameOver()
    }
    else{
        flippedCards[0].innerHTML='';
        flippedCards[0].classList.add('cardBack');
        flippedCards[1].innerHTML='';
        flippedCards[1].classList.add('cardBack');
    }
    flippedCards=[]
}

function checkGameOver(){
    if(matchedPairs==cardsArray.length/2){
        while(gameBoard.firstChild){
            gameBoard.removeChild(gameBoard.firstChild)
        }
        gameBoard.innerHTML='You Won!!';
        gameBoard.classList.remove('game')
        gameBoard.classList.add('won')
    }
}