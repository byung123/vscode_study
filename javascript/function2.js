const USERNAME = "admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공")
        return;
    }
    console.log("로그인 실패")
}

const login2 = login; // 자바스크립트는 변수에다가 함수를 넣을 수 있다

login("admin", "1234");
login2("admin", "1234"); // 함수를 변수로 사용해도 실행이 잘 됨 -> 즉 함수의 주소가 카피되기 때문에 사용 가능

const add2 = function add(x, y) {  // 함수 통째로 변수에 대입 가능
    return x + y;
}

console.log(add2(10, 20));

// 익명 함수
const sub2 = function (x, y) {  // 함수명을 지울 수 있음 (익명 함수)
    return x - y;
}

console.log(sub2(20, 10));

// 화살표 함수 (람다)
let div = (x, y) => {
    return !x || !y ? 0 : x / y;
}

// 화살표 함수(명령이 한 줄) -> 중괄호 + return 생략 가능
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2));

// 화살표 함수(매개변수가 하나면 괄호 생략 가능)
const print = data => console.log(data);

print("출력!");

function main() {    // 함수 안에 다른 함수를 정의
    const test = () => {
        console.log("테스트 함수 호출");
    }

    test();
}

main();
// test(); // main 함수 안에서 정의 된  것이 때문에 main 밖에선 호출해 사용하지 못함 (오류 발생)