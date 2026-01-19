function hidewords() {
    const idEnArr = document.querySelectorAll("#idEn div");
    console.log(idEnArr);

    //시작버튼 누르면 5초뒤에 뒤집어지기
    setTimeout(() => {
        for (const en of idEnArr) {
            en.classList.add("flip");
        }
    }, 5000);
}

function correctWord() {
    const idEnArr = document.querySelectorAll("#idEn div");
    const inputArr = document.querySelectorAll(".answer input");

    //단어카드와 input에 쓴 글자 -> 배열에 넣어주고
    //배열순서대로 텍스트 비교
    for (let i = 0; i < idEnArr.length; i++) {
        const asw = idEnArr[i].innerText;
        const userInput = inputArr[i].value;

        if (asw === userInput) {
            idEnArr[i].classList.remove("flip");
            inputArr[i].classList.remove("wrong");
        } else {
            //틀렸을 때, 애니메이션처리 CSS -> 퍼옴
            inputArr[i].classList.toggle("wrong", false);
            inputArr[i].offsetWidth;
            inputArr[i].classList.toggle("wrong", true);
        }
    }
}