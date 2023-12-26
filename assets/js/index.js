const detective = document.querySelector('.detective-book');
const history = document.querySelector('.history-book');
const producer = document.querySelector('.producer');


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


fetch('assets/js/data.json')
  .then(response => response.json())
  .then(data => {
    function loadBook(list, bookType) {
        for (let i = 0; i < list.length; i++) {
            let box = document.createElement('a');
            box.classList.add('bookcontainer');
            box.href = list[i].link;
            let heading = document.createElement('h4');
            heading.innerText = list[i].name;
            let making = document.createElement('img');
            making.src = list[i].listBookImg[0];
            let cost = document.createElement('strong')
            cost.innerText = addDot((`${list[i].price}`)) + "đ";
        
            box.appendChild(making);
            box.appendChild(heading);
            box.appendChild(cost);
            bookType.appendChild(box);
        }
    }


    loadBook(data.books, detective);
    

    
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
})
  .catch(error => console.error('Lỗi khi tải file data.json:', error));





  fetch('assets/js/data2.json')
  .then(response => response.json())
  .then(data => {
    function loadHistory(list, bookType) {
        for (let i = 0; i < list.length; i++) {
            let box = document.createElement('a');
            box.classList.add('bookcontainer');
            box.href = list[i].link;
            let heading = document.createElement('h4');
            heading.innerText = list[i].name;
            let making = document.createElement('img');
            making.src = list[i].listBookImg[0];
            let cost = document.createElement('strong')
            cost.innerText = addDot((`${list[i].price}`)) + "đ";
        
            box.appendChild(making);
            box.appendChild(heading);
            box.appendChild(cost);
            bookType.appendChild(box);
        }
    }


    loadHistory(data.historybook, history);
    

    
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
})
  .catch(error => console.error('Lỗi khi tải file data.json:', error));  




for (let j = 0; j < 2; j++) {
    for (let i = 0; i < list3.length; i++) {
        let pic = document.createElement('img');
        pic.src = list3[i].link;
        producer.appendChild(pic);
    }
}

