function handleButtonClick(e) {
    console.log({event: e});  // 변수명이 같으면 키 값이 동시에 잡힘
    e.target.innerHTML = "확인";
}

function handleInputChange(e) {
    if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        alert(e.target.value)
    } 
}

let isFocus = false;

function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}