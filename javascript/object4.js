// 비구조 할당, 구조 분해
function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
    }

    const names = ["박현주", "이성희", "권오광", "권혁진"];

    const { username, password, email } = user; 
    console.log(username);
    console.log(password);
    console.log(email);

    const [ a, b ] = names; // names의 0번째, 1번째 인덱스를 가져옴
    console.log(a);
    console.log(b);

    //rest 
    const { name, ...rest2 } = user;
    console.log(rest2);

    console.log(names.slice(1, 2)); // 첫번째 인덱스에서 차감한 만큼의 값을 가져옴
    console.log(names.slice(2, 4)); 
}

main();