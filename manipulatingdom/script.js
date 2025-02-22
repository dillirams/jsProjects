//creating a button using javascript

let newBtn=document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

let ul=document.getElementById("lists");
ul.append(newBtn);
newBtn.style.backgroundColor="green";
newBtn.style.color="white";
// let para=document.querySelector("p");
// para.remove();

let para=document.querySelector("p");
para.classList.add("newclass");

let btn=document.getElementById("button");

// btn.onclick = () => {
//     alert("you have clicked to view the page");
// }

btn.addEventListener("dblclick", () => {

    alert("you have clicked the button twice");
});

let btn2=document.getElementById('btn');
let mode='blue';

btn2.addEventListener("click", () =>{
    if(mode=='blue'){
        mode='black';
        document.querySelector('body').style.backgroundColor ='yellow';
    }
    else{
        mode='blue';
        docoument.querySelector('body').style.backgroundColor='blue';
    }
   
})