const bigcontainer = document.querySelector('.container');
const bigcontainer2 = document.querySelector('.container2');
const bigcontainer3 = document.querySelector('.container3');


var list1 = [
    {
        name: 'Sherlock holmes 1',
        image: './assets/images/Detective/Sher1/main.png',
        price: 5.99,
        link: 'detail.html#Sher1',
        introduction: 'In the shadowy streets of Victorian London, a brilliant detective named Sherlock Holmes and his loyal companion, Dr. John Watson, embark on their first adventure together, plunging headlong into a thrilling mystery that will test their intelligence and courage. '
    },

    {
    name: 'Sherlock holmes 2',
    image: './assets/images/Detective/Sher2/main.png',
    price: 5.99,
    link: 'detail.html#Sher2',
    introduction: 'The game is afoot once more as Sherlock Holmes and Dr. Watson return in a thrilling sequel! '
    },

    {
    name: 'Sherlock holmes 3',
    image: './assets/images/Detective/Sher3/main.png',
    price: 5.99,
    link: 'detail.html#Sher3',
    introduction: `Shadows deepen, secrets unravel, and a new puzzle awaits the world's greatest detective, Sherlock Holmes, in the highly anticipated third installment of his thrilling adventures. Prepare to be captivated once more as the iconic duo of Holmes and Watson delve into a web of intrigue that will challenge their minds and test their unwavering loyalty to justice.`
    }
]

var list2 = [
    {
        name: 'Heart Berries',
        image: './assets/images/History book/heart berries/heart berries.png',
        price: 4.99,
        link: 'detail.html#heart',
        introduction: `Prepare to embark on a poignant and powerful journey through love, loss, and resilience as you delve into the award-winning memoir "Heart Berries," where Terese Marie Mailhot paints a captivating portrait of her life as a First Nations woman navigating the complexities of family, self-discovery, and the enduring spirit of her people.`
    },

    {
        name: 'Steel',
        image: './assets/images/History book/steel/Steel.png',
        price: 5.99,
        link: 'detail.html#steel',
        introduction: `
        In the turbulent times of the Russian Civil War and the rise of the Soviet Union, witness the captivating story of Pavel Korchagin, a young man whose trials and tribulations forge him into a true hero.`
    },

    {
        name: 'Liar club',
        image: './assets/images/History book/steel/the liars club.png',
        price: 4.99,
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


]

for (let i = 0; i < list1.length; i++) {
    let box = document.createElement('a');
    box.classList.add('bookcontainer'); 
    box.href = list1[i].link;
    let heading = document.createElement('h4');
    heading.innerText = list1[i].name;
    let making = document.createElement('img');
    making.src = list1[i].image; 
    let cost = document.createElement('strong')
    cost.innerText = `${list1[i].price}$`

    
    box.appendChild(making);
    box.appendChild(heading);
    box.appendChild(cost);
    bigcontainer.appendChild(box);
    
  
}


for (let i = 0; i < list2.length; i++) {
    let box = document.createElement('a');
    box.classList.add('bookcontainer'); 
    box.href = list2[i].link;
    let heading = document.createElement('h4');
    heading.innerText = list2[i].name;
    let making = document.createElement('img');
    making.src = list2[i].image; 
    let cost = document.createElement('strong')
    cost.innerText = `${list2[i].price}$`

    
    box.appendChild(making);
    box.appendChild(heading);
    box.appendChild(cost);
    bigcontainer2.appendChild(box);
    
  
}


for (let i = 0; i < list3.length; i++) {
    let pic = document.createElement('img');
    pic.src = list3[i].link;
    bigcontainer3.appendChild(pic);
}
