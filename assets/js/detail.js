// set listBook detail
let listBook = [
    {
        key: "#heart",
        name: "Heart berries",
        desc: "The debut book from the  Terese Marie, a Canadian writer. Writer is going to witness Mailhot and her complicated childhood and tumultuous motherhood. We are going to witness all of Maillot mental health and identity",
        price: 120000,
        listBookImg: ["./assets/images/History book/heart berries/heart berries.png", "./assets/images/History book/heart berries/side image heart 1.png", "./assets/images/History book/heart berries/side image heart 2.png", "./assets/images/History book/heart berries/side image heart 3.png"]
    },
    {
        key: "#steel",
        name: "Steel",
        desc: "The book written by Nikolai A. Ostrovsky. The story about main young man name Pavel Korchagin. Pavel symbolises mans in the revolution in Russian. His transformation from young boy to a teenager and then becomes a tough grown man. His journey suffer lot of pain and he has to do dangerous missions to become a man do everything that country offer him",
        price: 150000,
        listBookImg: ["./assets/images/History book/steel/Steel.png", "./assets/images/History book/steel/steel side image 1.png", "./assets/images/History book/steel/steel side image 2.png", "./assets/images/History book/steel/steel side image 3.png"]
    },
    {
        key: "#liars",
        name: "Liarclub",
        desc: "The book written by Mary Karr. The story tell her childhood in 1960s in a small industrial town in Texas.Her town is the place where alcohol abuse and phychological problems are common issues",
        price: 120000,
        listBookImg: ["./assets/images/History book/the liars club/the liars club.png", "./assets/images/History book//the liars club/the liar club side image 1.png", "./assets/images/History book//the liars club/the liar club side image 2.png", "./assets/images/History book//the liars club/the liar club side image 3.png"]
    },
    {
        key: "#Sher1",
        name: "Sherlock holmes 1",
        desc: "This is the first edition of Sherlock Holmes series which are written by Sir Conan Doyle. Thrilled, Detective, Interesting novel with lot of plot-twist and creative, extraordinary ways of solving crime",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher1/main.png", "./assets/images/Detective/Sher1/side image 1.png", "./assets/images/Detective/Sher1/side image 2.png", "./assets/images/Detective/Sher1/side image 3.png"]
    },
    {
        key: "#Sher2",
        name: "Sherlock holmes 2",
        desc: "This is the second edition of Sherlock Holmes series after the previous Sherlock Holmes 1. We are going to immerse into a Sherlock Holmes world with a lot of bizzare adventure with Sherlock Holmes and his fellow friend, Dr Watson. This adventure is going to break your mind a lot.",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher2/main.png", "./assets/images/Detective/Sher2/side image 1.png", "./assets/images/Detective/Sher2/side image 2.png", "./assets/images/Detective/Sher2/side image 3.png"]
    },
    {
        key: "#Sher3",
        name: "Sherlock holmes 3",
        desc: "This is the third and last edition of Sherlock Holmes series after the previous Sherlock Holmes 1. More bizzare, More excitement, More crime, More action. That is the slogan of this edition",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher3/main.png", "./assets/images/Detective/Sher3/side image 1.png", "./assets/images/Detective/Sher3/side image 2.png", "./assets/images/Detective/Sher3/side image 3.png"]
    }
]
// image variable
let mainImg = document.querySelector("#main-img");
let listImg = document.querySelectorAll(".list-img img");
let prevBtn = document.getElementsByClassName("prev")[0];
let nextBtn = document.getElementsByClassName("next")[0];
let currentImgIndex = 0;
// quantity variable
let number = document.getElementById("number");
let numValue = number.value;

let locationBook = window.location.hash;
let bookDetail = listBook.find(item => item.key === locationBook);

// change current img
function updateMainImg(index) {
    // remove active
    document.querySelectorAll(".list-img div").forEach(item => {
        item.classList.remove("active");
    })
    currentImgIndex = index;
    mainImg.src = listImg[index].getAttribute("src");
    listImg[index].parentElement.classList.add("active");
}

listImg.forEach((imgElement, index) => {
    imgElement.addEventListener("click", e => {
        updateMainImg(index)
    })
})
prevBtn.addEventListener("click", e => {
    if (currentImgIndex === 0) {
        currentImgIndex = listImg.length - 1;
    } else {
        currentImgIndex--;
    }
    updateMainImg(currentImgIndex);
})
nextBtn.addEventListener("click", e => {
    if (currentImgIndex === listImg.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    updateMainImg(currentImgIndex);
})

// quantity control
let render = (numValue) => {
    number.value = numValue;
}

let add = () => {
    numValue++;
    render(numValue);
}
let minus = () => {
    if (numValue > 1) {
        numValue--;
        render(numValue);
    }
}
number.addEventListener("input", () => {
    numValue = number.value;
    numValue = parseInt(numValue);
    numValue = (isNaN(numValue) ? 1 || numValue === 0 : numValue);
    render(numValue)
})

// buy button event
let buy = () => {
    alert("Bạn đã mua thành công! Số tiền cần trả là: " + addDot((numValue * bookDetail.price).toString()) + "đ");
}


function loadInfo() {
    let bookName = document.getElementById("name");
    let desc = document.getElementById("desc");
    let price = document.getElementById("price");
    bookName.innerText = bookDetail.name;
    desc.innerText = bookDetail.desc;
    price.innerText = addDot(bookDetail.price.toString());
    for (let i = 0; i < listImg.length; i++) {
        listImg[i].src = bookDetail.listBookImg[i];
    }
    updateMainImg(0)
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