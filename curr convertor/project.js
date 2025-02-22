

const URL="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_WBVwl3begeKPqKZiMmcCLwKNIyBPDy4jCb7ybbej";

const dropdowns= document.querySelectorAll(".dropdowm select");
const btn=document.getElementById("btn");


for (let select of dropdowns){
    for (currCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        
        if (select.name==="from"&&currCode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to"&&currCode==="BTN"){
            newOption.selected="selected";
        }
         select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc= `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src=newSrc; 
}

btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtVal= amount.value;
    if( amtVal===""|| amtVal<1){
        amtVal=1;
        amount.value="1";
    }
})