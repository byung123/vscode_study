function createuser(username, password, name, email) {
    return {
        "username": username,     // 원래는 키-밸류 값으로 쌍 형태로 줘야함 (username: username 이런식)
        "password": password,     // 여기선 키 값을 문자열로?
        "name": name,
        "email": email
    }
}

function createuser2(username, password, name, email) {
    return {
        ["username"]: username,     // 원래는 키-밸류 값으로 쌍 형태로 줘야함 (username: username 이런식)
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

function createuser3(username, password, name, email) {
    return {
        username,     // 키와 밸류 값이 같은 경우 생략 가능 (username: username) 생략
        password,
        name,
        email
    }
}

function main() {
    const username = "admin";
    const password = "1234";
    const name = "김준일";
    const email = "aaa@gmail.com";

    let user = createuser(username, password, name, email);
    let user2 = createuser2(username, password, name, email);
    let user3 = createuser3(username, password, name, email);

    console.log(user)    // 모든 결과가 동일하게 나옴
    console.log(user2)
    console.log(user3)

}

main();