const img=document.querySelectorAll("img");
var indexValue=0;

 
function slideShow(){
    for(var i=0;i<img.length;i++){
        img[i].style.display="none";
    }
    indexValue++;
    if(indexValue > img.length){
        indexValue=1;
    }
    img[indexValue-1].style.display="block";
}

slideShow();
