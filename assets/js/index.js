const detective = document.querySelector('.detective-book');
const history = document.querySelector('.history-book');
const producer = document.querySelector('.producer');


var list1 = [
    {
        name: 'Sherlock holmes 1',
        image: './assets/images/Detective/Sher1/main.png',
        price: "150000",
        link: 'detail.html#Sher1',
    },

    {
        name: 'Sherlock holmes 2',
        image: './assets/images/Detective/Sher2/main.png',
        price: "150000",
        link: 'detail.html#Sher2',
    },

    {
        name: 'Sherlock holmes 3',
        image: './assets/images/Detective/Sher3/main.png',
        price: "150000",
        link: 'detail.html#Sher3',
    },

    {
        name: 'Con chim khát tổ',
        image: './assets/images/Detective/Con chim khat to/main.jpg',
        price: "170000",
        link: 'detail.html#conchimkhatto',
    },

    {
        name: 'Con chó săn nhà Baskerville',
        image: './assets/images/Detective/Con chó săn nhà Baskerville/main.jpg',
        price: "60000",
        link: 'detail.html#Hound',
    },

    {
        name: 'Mật mã Da Vinci',
        image: './assets/images/Detective/Mật mã Da Vinci/main.jpg',
        price: "160000",
        link: 'detail.html#DaVinci',
    }
]

var list2 = [
    {
        name: 'Heart Berries',
        image: './assets/images/History book/heart berries/heart berries.png',
        price: "120000",
        link: 'detail.html#heart',
    },

    {
        name: 'Steel',
        image: './assets/images/History book/steel/Steel.png',
        price: "150000",
        link: 'detail.html#steel',
    },
    
    {
        name: 'Liar club',
        image: './assets/images/History book/the liars club/the liars club.png',
        price: "120000",
        link: 'detail.html#liar',
    },

    {
        name: 'Elon Musk',
        image: './assets/images/History book/Elon Musk/main.jpg',
        price: "200000",
        link: 'detail.html#ElonMusk',
    },

    {
        name: 'The history book',
        image: './assets/images/History book/the history book/main.jpg',
        price: "90000",
        link: 'detail.html#Thehistory',
    },

    {
        name: 'Midnight in Chernobyl',
        image: './assets/images/History book/midnight/main.jpg',
        price: "130000",
        link: 'detail.html#Midnight',
    },
]

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

loadBook(list1, detective);
loadBook(list2, history);