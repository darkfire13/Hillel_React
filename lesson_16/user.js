let formContainerEl = document.getElementById('formContainer');

let users = JSON.parse(localStorage.getItem('users')) || [];

const MODE = {
    add: 'Add',
    edit: 'Edit',
};

let editUserId = null;

function handleAddUser() {
    document.getElementById('userData').innerHTML = '';

    showForm('', '', '', MODE.add);
}

function showForm(name, phone, age, mode) {
    const formHtml = `
        <input type="text" class="form-control" id="nameInput" placeholder="name" value="${name}"><br>
        <input type="text" class="form-control" id="phoneInput" placeholder="phone" value="${phone}"><br>
        <input type="text" class="form-control" id="ageInput" placeholder="age" value="${age}"><br>
        <button class="btn btn-primary" onclick="submitForm()">${
            mode === MODE.add ? 'Add' : 'Edit'
        }</button>
    `;

    formContainerEl.innerHTML = formHtml;
}

function submitForm() {
    console.log('submitForm');
    let name = document.getElementById('nameInput').value;
    let phone = document.getElementById('phoneInput').value;
    let age = document.getElementById('ageInput').value;

    if (editUserId) {
        // Edit user
        const user = users.find((u) => u.id === editUserId);
        user.name = name;
        user.phone = phone;
        user.age = age;
        editUserId = null;
    } else {
        // Add new user
        const id = users.length ? +users[users.length - 1].id + 1 : 1;
        users.push({ id, name, phone, age });
    }

    // Add new data to LS
    localStorage.setItem('users', JSON.stringify(users));
    renderTable();
    formContainerEl.innerHTML = '';
}

function viewUser(id) {
    const user = users.find((u) => u.id === id);

    document.getElementById('userData').innerHTML = JSON.stringify(user);

    formContainerEl.innerHTML = '';
}

function editUser(id) {
    document.getElementById('userData').innerHTML = '';
    editUserId = id;
    const user = users.find((u) => u.id === id);
    showForm(user.name, user.phone, user.age, MODE.edit);
}

function deleteUser(id) {
    const isRemoveUser = confirm('Are you sure you want to delete user?');

    if (isRemoveUser) {
        users = users.filter((u) => u.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        renderTable();
        document.getElementById('userData').innerHTML = '';
        alert('User deleted successfully!');
    }
}

function renderTable() {
    const tbody = document.querySelector('#userTable tbody');

    tbody.innerHTML = '';

    users.forEach((user) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.phone}</td>
            <td>${user.age}</td>
            <td>
                <button class="btn btn-primary" onclick="viewUser(${user.id})">View</button>
                <button class="btn btn-primary" onclick="editUser(${user.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

renderTable();
