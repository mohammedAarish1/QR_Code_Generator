const URL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

const qrBox = document.querySelector(".codeQR");
const imgBox = document.querySelector(".codeQR img");
const btn = document.querySelector("button");
const inputText = document.querySelector("input");
console.log(btn);


const generateQR = async () => {

    let myText = inputText.value;
    
    if (myText.length > 0) {

        imgBox.src = `${URL}${myText}`;
    } else if (myText.length === 0) {
        inputText.classList.add("error")
        setTimeout(()=>{
            inputText.classList.remove("error")
        },600)
    }
}


btn.addEventListener("click", (e) => {
    console.log(e.target);
    generateQR();
})

