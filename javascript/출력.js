var num = 10;
var sNum = "10";
console.log(num === sNum);


var num2;
console.log(!num2); // !를 붙이면 boolean 형태로 바꿔줌?
console.log(!!num2); // !! 2개를 붙이면 값이 true인지 false인지 확인해줌
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> false 

    var str = "test";
    !!str -> true
    str = "";
    !!str -> false - 문자열 안에 아무것도 없으므로

    var array = [1, 2, 3];
    !!array -> true - array 안에 값이 들어있기 때문
    array = [];
    !!array -> true - 배열은 값이 들어잇지 않아도 true 이다
    !!array.length -> false - 배열의 길이로 false기 때문에 길이를 이용해야 한다
    array.length == 0 -> false
*/
var num = 0;
console.log(!!num);
var str = " "; // 공백이 있든 없든 !!str은 false
console.log(!!str);
var array = [];
console.log(!!array);
console.log(!!array.length);
var a;
console.log(!!a);
var b = null;
console.log(!!b);
var c = 0 / 0;
console.log(c); // NaN (연산의 오류) : 계산할 수 없다는 뜻
console.log(!!c);

if(num === 0) {
    console.log("num은 0입니다");
}

if(!num) {
    console.log("num은 0입니다");
}

if(!num) {
    var num2 = 20;
    console.log("num은 0입니다");
    if(!!num2) {
        console.log("num2는 값이 있습니다")
    }
}

if(!str) {
    console.log("빈 문자열입니다.");
}

if(!b) {
    console.log("Null입니다.");
}