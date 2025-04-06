let bogdan = {
    email: 'mavlytov2005bogdan@gmail.com',
    pass: '123321'
}

function colorChange(elements) {

let elemen = document.querySelectorAll(elements);

elemen.forEach( element => {
element.addEventListener('mouseenter', () => {
    element.style.transition = 'all 0.7s ease';
    element.style.backgroundColor = 'black';
    element.style.color = 'white';
});
element.addEventListener('mouseleave', () => {
    element.style.backgroundColor = 'white';
    element.style.color = 'black';
})
});
}

colorChange('.button-sign');
colorChange('.button-login');



function choise() {
    
    document.querySelector('.sign').addEventListener('click', () => {
        document.querySelector('.login').style.display = 'flex';
        document.querySelector('.sign-up').style.display = 'none';
        
    });


    document.querySelector('.up').addEventListener('click', () => {
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.sign-up').style.display = 'flex';
        
    })

}
choise();

function complet() {

document.querySelector('.button-login').addEventListener('click', () => {
    if (document.querySelector('.email').value == bogdan.email && document.querySelector('.pass').value == bogdan.pass) {
        document.querySelector('.complete').style.color = 'green';
        document.querySelector('.complete').textContent = 'Перенапралвение на сайт';
        setTimeout(() => {
            window.location.href = './site.html';
        }, 5000);
        
    }
    else {
        document.querySelector('.complete').style.color = 'red';
        document.querySelector('.complete').textContent = 'Не правильный пароль или email';
    }
});

}
complet()

