const text=document.getElementById("text");
const btn=document.getElementById("btn");


async function logMovies(){

    const response=await fetch("https://cat-fact.herokuapp.com/facts");
    const movies=await response.json();
    console.log(movies[0].text);
    text.innerText=movies[0].text;
};


btn.addEventListener("click", logMovies);

