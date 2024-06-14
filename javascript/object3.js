function modifyUser(user, target, value) {
    const newUser = {
        ...user,     // 스프레드 : 유저 객체안에 들어있는 속성(키)들과 밸류(값)들만 복사
        [target]: value  // 매개변수의 값을 키 값으로 쓰고 싶을때 대괄호를 쓰우면 된다
    };
    return newUser;
}

function main() {   
    const user = {  
        username: "admin",
        password: "1234"
    }

    // delete user.password;    

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [user, newUser];
    const newUserList = [...userList, newUser2];

    // 스프레드 -> 깊은 복사 : 안에 있는 것들만 올리는 것

    const userList2 = userList; // 얉은 복사 - 주소가 같음

    const [ a, b, c] = newUserList;

    
}

main();