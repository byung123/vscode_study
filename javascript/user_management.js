const names = [ "김준일", "김준이", "김준삼"];
console.log(names.join(""));

// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;

let userList = [];
loadUserList();

let emptyUser = {
    id: 0,
    name: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => {
        return `
            <tr>
                <th><input type="checkbox" onchange="handleUserCheck(event)"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)", value="${id}">삭제</button></th>
            </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    if(e.keyCode === 13) {
        const nameInput = document.querySelector(".name-input");
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");
        
        if(e.target.name === "name") {
            usernameInput.focus();
        }
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, {...user, id: getNewId() } ];

            saveUserList();  // 로컬에 저장
            renderTable();

            nameInput.value = emptyUser.name;
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            nameInput.focus();
        }
    }
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}


function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable();
}

function deleteUser(e) {
    console.log(e.target.value);
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));
    // e.target.value는 문자형식이기 때문에 자료형을 바꿔줘야한다.
    saveUserList();
    renderTable();
}

function getNewId() {
    const userIds = userList.map(user => user.id);
    const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds);
    return maxUserId + 1;
}

function handleUserCheck(e) {
      e.target.checked;
}