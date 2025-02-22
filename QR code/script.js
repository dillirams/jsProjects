

let imgBox = document.getElementById("imgBox");
let qrImg = document.getElementById("qrImg");
let text = document.getElementById("text");
const btn=document.getElementById("btn");
console.log(text.value);


const getQr = ()=>{
    qrImg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +  text.value;
}
btn.addEventListener('click',()=>{
    getQr();
})