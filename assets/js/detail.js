let mainImg = document.querySelector("#main-img");
let listImg = document.querySelectorAll(".list-img img");
let prevBtn = document.getElementsByClassName("prev")[0];
let nextBtn = document.getElementsByClassName("next")[0];
let currentImgIndex = 0;

// change current img
function updateMainImg(index) {
    // remove active
    document.querySelectorAll(".list-img div").forEach(item =>{
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
prevBtn.addEventListener("click", e=>{
    if (currentImgIndex === 0) {
        currentImgIndex = listImg.length - 1;
    }else{
        currentImgIndex--;
    }
    updateMainImg(currentImgIndex);
})
nextBtn.addEventListener("click", e=>{
    if (currentImgIndex === listImg.length - 1) {
        currentImgIndex = 0;
    }else{
        currentImgIndex++;
    }
    updateMainImg(currentImgIndex);
})
updateMainImg(0)

let add = document.getElementById("add-btn");
let minus = document.getElementById("minus-btn");
let number = document.getElementById("number").value;

add.addEventListener("click", e=>{
    number++;
    
})
