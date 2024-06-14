const user = {  // 중괄호가 열리면 객체 
    username: "admin",
    password: "1234",
    name: {
        lastname: "김",
        firstname: "준일"
    },
    print: () => {
        console.log("사용자 이름 : " + user.username); // 객체 안의 username을 가져오기 위해 user(객체이름).을 붙임, 안그러면 전역변수를 읽어옴
        console.log(`비밀번호 : ${user.password}`); // 표현식으로 작성하는 방법 (문자열과 변수를 같이 사용하는 방법)
    }
}; 

console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.lastname);
console.log(user.name.firstname);

user.print();