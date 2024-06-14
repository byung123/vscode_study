console.log(a); // 선언을 뒤에 했는데 출력이 된다(호이스팅) -> console.log 하기 전에 선언이 먼저 됨 : 호이스팅 현상

var a;
var a = 10;     // 선언만 먼저 되기 때문에 그대로 undefined가 됨.
console.log(a);

var b = 10;
console.log(b);

var b = 20;     // 재선언이 가능하다 하지만 나중에 불푠한점이 많아서 var로 선언하는 것은 지양한다 -> var대신 let 사용
console.log(b);

 
// console.log(c); // let은 호이스킹과 재선언 둘 다 안됨. 재할당만 가능하다
let c = 30;
c= "40";
console.log(c);

const d = 50;   /// csnst 는 상수 선언
console.log(d);
// const d = 60;  // 상수라서 재선언 또는 재할당이 안됨
// console.log(d);


