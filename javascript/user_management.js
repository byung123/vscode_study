const names = [ "김준일", "김준이", "김준삼"];
console.log(names.join("-"));

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
                <th><input type="checkbox" onchange="handleUserCheck(event)" value="${id}"></th>
                <td>${index + 1}</td>
                <td>${id}</td>
                <td>${name}</td>
                <td>${username}</td>
                <td>${password}</td>
                <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
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
            if(inputMode === 1) {
                userList = [ ...userList, {...user, id: getNewId() } ];
            }

            if(inputMode === 2) {
                let findIndex = -1;
                for(let i = 0; i < userList.length; i++) {
                    if(userList[i].id === user.id) {
                        findIndex = i;
                        break;
                    }
                }
                if(findIndex === -1) {
                    alert("사용자 정보 수정 중 오류 발생. 관리자에세 문의하세요");
                    return;
                }
                userList[findIndex] = user;
            }

            saveUserList();  // 로컬에 저장
            renderTable();
            clearInputValue();

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
      const checkBoxList = document.querySelectorAll("input[type='checkbox']");
      for(let checkBox of checkBoxList) {   // 자바 스크립트 반복문은 : 대신 of를 쓴다
        if(checkBox === e.target) {
            continue;
        }
        checkBox.checked = false;
      }

      if(e.target.checked) {
        inputMode = 2;
        const [findUser] = userList.filter(user => user.id === parseInt(e.target.value));
        setInputValue(findUser);
        user = {
            ...findUser
        }
        return;
      }

      inputMode = 1;
      clearInputValue();
}

function setInputValue(user) {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");

    nameInput.value = user.name;
    usernameInput.value = user.username;
    passwordInput.value = user.password;
}

function clearInputValue() {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    inputMode = 1;
          
    nameInput.value = emptyUser.name;
    usernameInput.value = emptyUser.username;
    passwordInput.value = emptyUser.password;
    user = {
         ...emptyUser
     }
}