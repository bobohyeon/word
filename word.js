function hidewords(){
    const idEnArr = document.querySelectorAll("#idEn div");
    console.log(idEnArr); 
 
    setTimeout(()=>{
        for (const en of idEnArr) {
            en.classList.add("flip");
        }
    },5000);
}

function correctWord(){
    const idEnArr = document.querySelectorAll("#idEn div");
    const inputArr = document.querySelectorAll(".answer input");

    for(let i = 0; i<idEnArr.length; i++){
        const asw = idEnArr[i].innerText;
        const userInput = inputArr[i].value;
    
    if(asw === userInput){
        idEnArr[i].classList.remove("flip");
        inputArr[i].classList.remove("wrong");
    } else{
        inputArr[i].classList.toggle("wrong", false);
        inputArr[i].offsetWidth;
        inputArr[i].classList.toggle("wrong", true);
    }
}
}