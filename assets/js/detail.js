// set listBook detail
// image variable
let mainImg = document.querySelector("#main-img");
let listImg = document.querySelectorAll(".list-img img");
let prevBtn = document.getElementsByClassName("prev")[0];
let nextBtn = document.getElementsByClassName("next")[0];
let currentImgIndex = 0;
// quantity variable
let number = document.getElementById("number");
let numValue = number.value;

// User
const controlLogin = document.getElementById('control-login');
const userAva = document.getElementById('user-avt');

let currentUser = localStorage.getItem('user') || null;
if (currentUser) {
    controlLogin.classList.add('hide');
    userAva.classList.add('show');
} else {
    controlLogin.classList.add('show');
    userAva.classList.add('hide');
}

fetch('listData.json')
    .then(response => response.json())
    .then(listBook => {
        let locationBook = window.location.hash;
        let bookDetail = listBook.books.find(item => item.key === locationBook);

        let bookName = document.getElementById("name");
        let desc = document.getElementById("desc");
        let price = document.getElementById("price");
        let author = document.getElementById("author");
        let translator = document.getElementById("translator");
        bookName.innerText = bookDetail.name;
        desc.innerText = bookDetail.desc;
        author.innerText += " " + bookDetail.author;
        translator.innerText += " " + bookDetail.translator;
        price.innerText = addDot(bookDetail.price.toString());
        for (let i = 0; i < listImg.length; i++) {
            listImg[i].src = bookDetail.listBookImg[i];
        }
        updateMainImg(0)
    })
    .catch(error => console.error('Lỗi khi tải file data.json:', error));


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