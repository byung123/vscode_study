let names = ["김준일", "김준이", "김준삼"];
console.log(names);

names = names.map(name => {return name  + "님"});
console.log(names);

// 조건에 만족하는 요소를 출력
names = names.filter((name, index) => {return name === "김준이님";}); 
console.log(names);

// 조건에 만족하는 요소를 삭제
names = names.filter((name, index) => {return name !== "김준이님"}); 
console.log(names);