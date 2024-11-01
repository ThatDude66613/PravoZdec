const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

// Открытие/закрытие меню при нажатии на бургер-иконку
burger.addEventListener('click', function() {
    menu.classList.toggle('active');
});

// Закрытие меню при нажатии вне его области
document.addEventListener('click', function(event) {
    const isClickInside = menu.contains(event.target) || burger.contains(event.target);

    if (!isClickInside) {
        menu.classList.remove('active');
    }
});



document.getElementById('openModal').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('modal').style.display = 'flex';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});






const carousel = document.querySelector('.team-carousel');

function scrollLeft() {
    carousel.scrollBy({ left: -250, behavior: 'smooth' });
}

function scrollRight() {
    carousel.scrollBy({ left: 250, behavior: 'smooth' });
}







const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});





document.getElementById("consultationForm").onsubmit = function(e) {
    e.preventDefault();

    fetch("https://script.google.com/macros/s/AKfycbybkOsR-DkGEQ99lAoPtEbwUk77-gI9OGLnA9avfz5QXmX-_bV3ogcKslGDNGsuHqPo/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            fio: document.getElementById("name").value,
            number: document.getElementById("phone").value,
            question: document.getElementById("message").value
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log("Полученные данные:", data); // Линия для отладки
        alert("Ваши данные успешно отправлены!");
        document.getElementById("modal").style.display = "none";
        document.getElementById("consultationForm").reset();
    })
    .catch(error => {
        console.error("Ошибка:", error); // Линия для отладки
        alert("Произошла ошибка при отправке данных");
    });
};

