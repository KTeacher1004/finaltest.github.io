const detective = document.querySelector('.detective-book');
const history = document.querySelector('.history-book');
const producer = document.querySelector('.producer');


var list1 = [
    {
        name: 'Sherlock holmes 1',
        image: './assets/images/Detective/Sher1/main.png',
        price: "150000",
        link: 'detail.html#Sher1',
        introduction: 'In the shadowy streets of Victorian London, a brilliant detective named Sherlock Holmes and his loyal companion, Dr. John Watson, embark on their first adventure together, plunging headlong into a thrilling mystery that will test their intelligence and courage. '
    },

    {
        name: 'Sherlock holmes 2',
        image: './assets/images/Detective/Sher2/main.png',
        price: "150000",
        link: 'detail.html#Sher2',
        introduction: 'The game is afoot once more as Sherlock Holmes and Dr. Watson return in a thrilling sequel! '
    },

    {
        name: 'Sherlock holmes 3',
        image: './assets/images/Detective/Sher3/main.png',
        price: "150000",
        link: 'detail.html#Sher3',
        introduction: `Shadows deepen, secrets unravel, and a new puzzle awaits the world's greatest detective, Sherlock Holmes, in the highly anticipated third installment of his thrilling adventures. Prepare to be captivated once more as the iconic duo of Holmes and Watson delve into a web of intrigue that will challenge their minds and test their unwavering loyalty to justice.`
    }
]

var list2 = [
    {
        name: 'Heart Berries',
        image: './assets/images/History book/heart berries/heart berries.png',
        price: "120000",
        link: 'detail.html#heart',
        introduction: `Prepare to embark on a poignant and powerful journey through love, loss, and resilience as you delve into the award-winning memoir "Heart Berries," where Terese Marie Mailhot paints a captivating portrait of her life as a First Nations woman navigating the complexities of family, self-discovery, and the enduring spirit of her people.`
    },

    {
        name: 'Steel',
        image: './assets/images/History book/steel/Steel.png',
        price: "150000",
        link: 'detail.html#steel',
        introduction: `
        In the turbulent times of the Russian Civil War and the rise of the Soviet Union, witness the captivating story of Pavel Korchagin, a young man whose trials and tribulations forge him into a true hero.`
    },

    {
        name: 'Liar club',
        image: './assets/images/History book/the liars club/the liars club.png',
        price: "120000",
        link: 'detail.html#liars',
        introduction: `n Mary Karr's captivating memoir, "The Liars' Club," we embark on a poignant journey through the author's childhood in a small, oil-boom town in Southeast Texas. Through vivid storytelling and insightful reflection, Karr explores themes of family dynamics, societal expectations, and the complex relationship between truth and fiction in the formative years.`
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

loadBook(list1, detective);
loadBook(list2, history);

for (let j = 0; j < 2; j++) {
    for (let i = 0; i < list3.length; i++) {
        let pic = document.createElement('img');
        pic.src = list3[i].link;
        producer.appendChild(pic);
    }
}
function addDot(a) {
    let priceTest = "";
    let count = 0;
    for (let i = a.length - 1; i >= 0; i--) {
        priceTest+=a[i];
        count++
        if (count==a.length) {
            break;
        }
        else if (count % 3 == 0) {
            priceTest+= ".";
        }
    }
    return a = priceTest.split("").reverse().join("");
}

