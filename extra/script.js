const search = document.querySelector('#search');
const book = document.querySelectorAll('.book');

search.addEventListener('keyup', function(event) {
    const word = event.target.value.toLowerCase();
    book.forEach(item => {
        item.querySelector('h3').textContent.toLowerCase().includes(word)
        ||
        item.querySelector('ul').textContent.toLowerCase().includes(word) 
        ? (item.style.display='block'):(item.style.display='none');
    })
})

function christmasCountdown (){
    const christmasDate = new Date ("October 14, 2022 09:00");
    const now = new Date ();
    const diff = christmasDate - now;

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector('.days').textContent = displayDay;
    
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector('.hours').textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector('.minutes').textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector('.seconds').textContent = displaySecond;

    if(diff<=0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        merryChristmas();
    }

}
setInterval(christmasCountdown, 1000);
christmasCountdown();
