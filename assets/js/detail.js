// set listBook detail
let listBook = [
    {
        key: "#heart",
        name: "Heart berries",
        author:"Terese Marie Mailhot",
        translator: "Hoàng Khiêm",
        desc: "The debut book from the  Terese Marie, a Canadian writer. Writer is going to witness Mailhot and her complicated childhood and tumultuous motherhood. We are going to witness all of Maillot mental health and identity",
        price: 120000,
        listBookImg: ["./assets/images/History book/heart berries/heart berries.png", "./assets/images/History book/heart berries/side image heart 1.png", "./assets/images/History book/heart berries/side image heart 2.png", "./assets/images/History book/heart berries/side image heart 3.png"]
    },
    {
        key: "#steel",
        name: "Steel",
        author: "Nikolai Alekseyevich Ostrovsky",
        translator: "Quang Lộc",
        desc: "The book written by Nikolai A. Ostrovsky. The story about main young man name Pavel Korchagin. Pavel symbolises mans in the revolution in Russian. His transformation from young boy to a teenager and then becomes a tough grown man. His journey suffer lot of pain and he has to do dangerous missions to become a man do everything that country offer him",
        price: 150000,
        listBookImg: ["./assets/images/History book/steel/Steel.png", "./assets/images/History book/steel/steel side image 1.png", "./assets/images/History book/steel/steel side image 2.png", "./assets/images/History book/steel/steel side image 3.png"]
    },
    {
        key: "#liar",
        name: "Liar club",
        author:"Mary Karr",
        translator: "Hữu Quân",
        desc: "The book written by Mary Karr. The story tell her childhood in 1960s in a small industrial town in Texas.Her town is the place where alcohol abuse and phychological problems are common issues",
        price: 120000,
        listBookImg: ["./assets/images/History book/the liars club/the liars club.png", "./assets/images/History book//the liars club/the liar club side image 1.png", "./assets/images/History book//the liars club/the liar club side image 2.png", "./assets/images/History book//the liars club/the liar club side image 3.png"]
    },
    {
        key: "#Sher1",
        name: "Sherlock holmes 1",
        author:"Arthur Conan Doyle",
        translator: "Quang Lộc",
        desc: "This is the first edition of Sherlock Holmes series which are written by Sir Conan Doyle. Thrilled, Detective, Interesting novel with lot of plot-twist and creative, extraordinary ways of solving crime",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher1/main.png", "./assets/images/Detective/Sher1/side image 1.png", "./assets/images/Detective/Sher1/side image 2.png", "./assets/images/Detective/Sher1/side image 3.png"]
    },
    {
        key: "#Sher2",
        name: "Sherlock holmes 2",
        author:"Arthur Conan Doyle",
        translator: "Hữu Quân",
        desc: "This is the second edition of Sherlock Holmes series after the previous Sherlock Holmes 1. We are going to immerse into a Sherlock Holmes world with a lot of bizzare adventure with Sherlock Holmes and his fellow friend, Dr Watson. This adventure is going to break your mind a lot.",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher2/main.png", "./assets/images/Detective/Sher2/side image 1.png", "./assets/images/Detective/Sher2/side image 2.png", "./assets/images/Detective/Sher2/side image 3.png"]
    },
    {
        key: "#Sher3",
        name: "Sherlock holmes 3",
        author:"Arthur Conan Doyle",
        translator: "Hoàng Khiêm",
        desc: "This is the third and last edition of Sherlock Holmes series after the previous Sherlock Holmes 1. More bizzare, More excitement, More crime, More action. That is the slogan of this edition",
        price: 150000,
        listBookImg: ["./assets/images/Detective/Sher3/main.png", "./assets/images/Detective/Sher3/side image 1.png", "./assets/images/Detective/Sher3/side image 2.png", "./assets/images/Detective/Sher3/side image 3.png"]
    },
    {
        key: "#ElonMusk",
        name: "Elon Musk",
        author:"Walter Isaacson",
        translator: "Nhiều dịch giả",
        desc: "From the author of Steve Jobs and other bestselling biographies, this is the astonishingly intimate story of the most fascinating and controversial innovator of our era—a rule-breaking visionary who helped to lead the world into the era of electric vehicles, private space exploration, and artificial intelligence. Oh, and took over Twitter.",
        price: 200000,
        listBookImg: ["./assets/images/History book/Elon Musk/main.jpg", "./assets/images/History book/Elon Musk/side image 1.jpg", "./assets/images/History book/Elon Musk/side image 2.jpg", "./assets/images/History book/Elon Musk/side image 3.jpg"]
    },
    {
        key: "#conchimkhatto",
        name: "Con chim khát tổ",
        author:"JK Rowling",
        translator: "Hồ Thị Như Mai",
        desc: "Khi cô người mẫu xinh đẹp nhiều tai tiếng ngã chết từ ban công căn hộ sang trọng của cô, mọi người, kể cả giới cảnh sát đều cho rằng đây là một vụ tự tử. Chỉ riêng người anh trai cô lặng lẽ ôm mối nghi ngờ tìm đến thám tử tư Cormoran Strike yêu cầu điều tra thêm. Chàng thám tử Strike phong trần gai góc vốn là cựu quân nhân. Chiến tranh đã để lại trong anh vết thương thể xác lẫn tinh thần. Vụ điều tra này giúp anh nhẹ bớt gánh nặng tài chính hiện tại, nhưng cái giá phải trả là anh phải dấn ngày càng sâu vào thế giới phức tạp của cô người mẫu, nơi những điều đen tối dần hé lộ và mối nguy hiểm rình rập anh ngày càng lớn dần...",
        price: 170000,
        listBookImg: ["./assets/images/Detective/con chim khat to/main.jpg", "./assets/images/Detective/con chim khat to/side image 1.jpg", "./assets/images/Detective/con chim khat to/side image 2.jpg", "./assets/images/Detective/con chim khat to/side image 3.jpg"]
    },
    {
        key: "#Hound",
        name: "Con chó săn nhà Baskerville",
        author:"Conan Doyle",
        translator: "Thiếu Khanh",
        desc: "This adventure concerns the mysterious death of Sir Charles Baskerville, and the possibility that the heir to his fortune might be the object of murder. Before the novel begins, Sir Charles Baskerville had died suddenly, perhaps the victim of a ghostly hound believed to haunt his family because of an age-old curse. The Baskerville estate is located out in the remote moor of Devonshire.",
        price: 60000,
        listBookImg: ["./assets/images/Detective/Con chó săn nhà Baskerville/main.jpg", "./assets/images/Detective/Con chó săn nhà Baskerville/side image 1.jpg", "./assets/images/Detective/Con chó săn nhà Baskerville/side image 2.jpg", "./assets/images/Detective/Con chó săn nhà Baskerville/side image 3.jpg"]
    },
    {
        key: "#DaVinci",
        name: "Mật mã Da Vinci",
        author:"Dan Brown",
        translator: "Dương Tường",
        desc: "The race to uncover the oldest secret has begun . . . \nAn eminent man is brutally murdered in the world’s most famous museum. Around his body are a ring of codes, hastily drawn in blood. He died to protect a long-kept secret which Professor Robert Langdon must now uncover. It will be a race against time to decipher this final message. Can he get there before the killers do?",
        price: 160000,
        listBookImg: ["./assets/images/Detective/Mật mã Da Vinci/main.jpg", "./assets/images/Detective/Mật mã Da Vinci/side image 1.jpg", "./assets/images/Detective/Mật mã Da Vinci/side image 2.jpg", "./assets/images/Detective/Mật mã Da Vinci/side image 3.jpg"]
    },
    {
        key: "#Thehistory",
        name: "The history book",
        author:"DK",
        translator: "Lê Thị Oanh",
        desc: "Part of the fascinating Big Ideas series, this book tackles tricky topics and themes in a simple and easy to follow format. Learn about History in this overview guide to the subject, great for novices looking to find out more and experts wishing to refresh their knowledge alike! The History Book brings a fresh and vibrant take on the topic through eye-catching graphics and diagrams to immerse yourself in.",
        price: 90000,
        listBookImg: ["./assets/images/History book/the history book/main.jpg", "./assets/images/History book/the history book/side image 1.jpg", "./assets/images/History book/the history book/side image 2.jpg", "./assets/images/History book/the history book/side image 3.jpg"]
    },
    {
        key: "#Midnight",
        name: "Midnight in Chernobyl",
        author:"Adam Higginbotham",
        translator: "Hoàng Khiêm",
        desc: "This book written by Adam Higginbotham show us some unspoken stories behind the nuclear incidents in Soviet Ukraine in 1986 which had caused much of damage to the citizen and the environment. Addition, it show us more about the destruction that nuclear would bring to people which was so horrible. Maybe you can look for yourself in this book to know more and understand more about nuclear in this book.",
        price: 130000,
        listBookImg: ["./assets/images/History book/midnight/main.jpg", "./assets/images/History book/midnight/side image 1.jpg", "./assets/images/History book/midnight/side image 2.jpg", "./assets/images/History book/midnight/side image 3.jpg"]
    },
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
    let author = document.getElementById("author");
    let translator = document.getElementById("translator");
    bookName.innerText = bookDetail.name;
    desc.innerText = bookDetail.desc;
    author.innerText += " " +  bookDetail.author;
    translator.innerText += " " + bookDetail.translator;
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