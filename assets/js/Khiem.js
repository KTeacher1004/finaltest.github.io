const bigcontainer = document.querySelector('.container');

var list1 = [
    {
        name: 'Sherlock holmes 1',
        image: './assets/images/Detective/Sher1/main.png',
        price: 5.99,
        link: 'detail.html#Sher1'
    },

    {
    name: 'Sherlock holmes 2',
    image: './assets/images/Detective/Sher2/main.png',
    price: 5.99,
    link: 'detail.html#Sher2'
    },

    {
    name: 'Sherlock holmes 3',
    image: './assets/images/Detective/Sher3/main.png',
    price: 5.99,
    link: 'detail.html#Sher3'
    }
]

var list2 = [
    {
        name: 'Heart Berries',
        image: '../images/History book/heart berries/heart berries.png',
        price: 4.99,
        link: 'detail.html#heart'
    },

    {
        name: 'Steel',
        image: '../images/History book/steel/Steel.png',
        price: 5.99,
        link: 'detail.html#steel'
    },

    {
        name: 'Liar club',
        image: '../images/History book/steel/the liars club.png',
        price: 4.99,
        link: 'detail.html#liars'
    },
]




for (let i = 0; i < list1.length; i++) {
    let box = document.createElement('a');
    box.classList.add('bookcontainer'); 
    box.href = list1[i].link;
    let heading = document.createElement('h3');
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


// for (let i = 0; i < list2.length; i++) {
//     let box = document.createElement('div');
//     box.classList.add('bookcontainer');
//     let heading = document.createElement('h3');
//     let bookName = list2[i].name;
//     heading.innerHTML = bookName;
//     let making = document.createElement('img');
//     let image = list2[i].image;
//     making.src = image;

//     bigcontainer.appendChild.box
//     box.appendChild(heading);
//     box.appendChild(making);
    
    
//     document.getElementById('books2').appendChild(box);
// }

