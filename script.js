const searchInput = document.querySelector('#search');
const dej = document.querySelectorAll('.dej');
searchInput.addEventListener('keyup', function(event){
    const word = event.target.value.toLowerCase();
    
    dej.forEach(item => {
        item.querySelector('h3').textContent.toLowerCase().includes(word) 
        || item.querySelector('ul').textContent.toLowerCase().includes(word) 
        ? (item.style.display = "block") : (item.style.display = "none");
    })

})
