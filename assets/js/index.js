const detective = document.querySelector('.detective-book');
const history = document.querySelector('.history-book');
const producer = document.querySelector('.producer');
const controlLogin = document.getElementById('control-login');
const userAva = document.getElementById('user-avt');
const btnLogout = document.getElementById('btn-logout');

var list3 = [
    {
        name: 'cambridge',
        link: './assets/images/Producer/cambridge.jpg'
    },

    {
        name: 'harvard',
        link: './assets/images/Producer/harvard.jpg'
    },

    {
        name: 'nha nam',
        link: './assets/images/Producer/nha-nam.jpg'
    },

    {
        name: 'Oxford',
        link: './assets/images/Producer/oxford.jpg'
    },

    {
        name: 'paragon',
        link: './assets/images/Producer/paragon.jpg'
    },

    {
        name: 'penguin',
        link: './assets/images/Producer/penguin.jpg'
    },
    {
        name: 'KimDong',
        link: './assets/images/Producer/KimDong.png'
    },
    {
        name: 'PhuongNam',
        link: './assets/images/Producer/PhuongNam.png'
    },
    {
        name: 'Fahasa',
        link: './assets/images/Producer/Fahasa.png'
    }
]

let currentUser = localStorage.getItem('user') || null;
if (currentUser) {
    controlLogin.classList.add('hide');
    userAva.classList.add('show');
    btnLogout.classList.add('show');
} else {
    controlLogin.classList.add('show');
    userAva.classList.add('hide');
    btnLogout.classList.add('hide');
}

function loadBook(list, bookType) {
    for (let i = 0; i < list.length; i++) {
        let box = document.createElement('a');
        box.classList.add('bookcontainer');
        box.href = list[i].link;
        let heading = document.createElement('h4');
        heading.innerText = list[i].name;
        let making = document.createElement('img');
        making.src = list[i].image;
        let cost = document.createElement('strong')
        cost.innerText = addDot((`${list[i].price}`)) + "đ";

        box.appendChild(making);
        box.appendChild(heading);
        box.appendChild(cost);
        bookType.appendChild(box);
    }
}

list3.map(item => {
    let template =
        `<div class="swiper-slide">
        <img src=${item.link} />
    </div>`

    producer.innerHTML += template
})

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 8,
            spaceBetween: 30
        }
    }
});

fetch('assets/js/data.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.detectiveBook.length; i++) {
            let box = document.createElement('a');
            box.classList.add('bookcontainer');
            box.href = data.detectiveBook[i].link;
            let heading = document.createElement('h4');
            heading.innerText = data.detectiveBook[i].name;
            let making = document.createElement('img');
            making.src = data.detectiveBook[i].listBookImg[0];
            let cost = document.createElement('strong')
            cost.innerText = addDot((`${data.detectiveBook[i].price}`)) + "đ";

            box.appendChild(making);
            box.appendChild(heading);
            box.appendChild(cost);
            detective.appendChild(box);
        }

        for (let i = 0; i < data.historyBook.length; i++) {
            let box = document.createElement('a');
            box.classList.add('bookcontainer');
            box.href = data.historyBook[i].link;
            let heading = document.createElement('h4');
            heading.innerText = data.historyBook[i].name;
            let making = document.createElement('img');
            making.src = data.historyBook[i].listBookImg[0];
            let cost = document.createElement('strong')
            cost.innerText = addDot((`${data.historyBook[i].price}`)) + "đ";

            box.appendChild(making);
            box.appendChild(heading);
            box.appendChild(cost);
            history.appendChild(box);
        }
    })
    .catch (error => console.error('Lỗi khi tải file data.json:', error));

function addDot(a) {
    let priceTest = "";
    let count = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        priceTest += a[i];
        count++
        if (count == a.length) {
            break;
        }
        else if (count % 3 == 0) {
            priceTest += ".";
        }
    }
    return a = priceTest.split("").reverse().join("");
}

function logOut() {
    localStorage.removeItem('user');
    window.location.reload();
}