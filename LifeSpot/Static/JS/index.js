let session = new Map();

function handleSession() {
    session.set("startDate", new Date().toLocaleString());
    session.set("userAgent", window.navigator.userAgent);
}

function checkAge() {
    if (sessionStorage.getItem("age")) {
        return;
    }

    let age = parseInt(prompt("Пожалуйста, введите ваш возраст"), 10);
    session.set("age", age);

    if (isNaN(age)) {
        alert("Пожалуйста, введите корректный возраст.");
        return;
    }

    if (age >= 18) {
        alert("Приветствуем на LifeSpot! \nТекущее время: " + new Date().toLocaleString());
        sessionStorage.setItem("age", age);
        let userName = prompt("Пожалуйста, введите ваше имя");
        alert(`Приветствуем, ${userName}. В вашем имени ${userName.length} символов.`);
        session.set("userName", userName);
    } else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены.");
        window.location.href = "http://www.google.com";
    }
}

let sessionLog = function logSession() {
    console.log("Session data:");
    for (let [key, value] of session) {
        console.log(`${key}: ${value}`);
    }
};

function filterContent() {
    let elements = document.getElementsByClassName('video-container');
    let query = inputParseFunction().toLowerCase();

    for (let i = 0; i < elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText.toLowerCase();
        if (!videoText.includes(query)) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

const inputParseFunction = function () {
    return document.getElementById('video-search').value;
}

if (window.location.pathname === "/") {
    checkAge();
    handleSession();
    sessionLog();
}

setTimeout(() => {
    alert("Нравится LifeSpot?\nПодпишитесь на наш Instagram @lifespot999!");
}, 60000);
