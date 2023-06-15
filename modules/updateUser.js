let oldUserData = {};

//Function for clickng the edit button
function editUser(id) {
  let editBtn = document.getElementById("edit" + id);
  editBtn.style.display = "none";

  let saveBtn = document.getElementById("save" + id);
  saveBtn.style.display = "block";

  let cancelBtn = document.getElementById("cancel" + id);
  cancelBtn.style.display = "block";

  let name = document.getElementById("name" + id);
  let email = document.getElementById("email" + id);
  let role = document.getElementById("role" + id);

  oldUserData[id] = {
    name: name.innerHTML,
    email: email.innerHTML,
    role: role.innerHTML,
  };

  let userName = oldUserData[id].name;
  let userEmail = oldUserData[id].email;
  let userRole = oldUserData[id].role;

  name.innerHTML = `<input type='text' class="editInput" id='nameInput${id}' value='${userName}'/>`;
  email.innerHTML = `<input type='text' class="editInput" id='emailInput${id}' value='${userEmail}'/>`;
  role.innerHTML = `<input type='text' class="editInput" id='roleInput${id}' value='${userRole}'/>`;
}

// Function for clicking the save button
function saveEdit(id) {
  let editBtn = document.getElementById("edit" + id);
  editBtn.style.display = "block";

  let saveBtn = document.getElementById("save" + id);
  saveBtn.style.display = "none";

  let cancelBtn = document.getElementById("cancel" + id);
  cancelBtn.style.display = "none";

  let nameInput = document.getElementById("nameInput" + id);
  let emailInput = document.getElementById("emailInput" + id);
  let roleInput = document.getElementById("roleInput" + id);

  let name = document.getElementById("name" + id);
  let email = document.getElementById("email" + id);
  let role = document.getElementById("role" + id);

  let newName = nameInput.value;
  let newEmail = emailInput.value;
  let newRole = roleInput.value;

  name.innerHTML = newName;
  email.innerHTML = newEmail;
  role.innerHTML = newRole;

  oldUserData[id].remove;
}

// Function for clicking the cancel button
function cancelEdit(id) {
  let editBtn = document.getElementById("edit" + id);
  editBtn.style.display = "block";

  let saveBtn = document.getElementById("save" + id);
  saveBtn.style.display = "none";

  let cancelBtn = document.getElementById("cancel" + id);
  cancelBtn.style.display = "none";

  let name = document.getElementById("name" + id);
  let email = document.getElementById("email" + id);
  let role = document.getElementById("role" + id);

  name.innerHTML = oldUserData[id].name;
  email.innerHTML = oldUserData[id].email;
  role.innerHTML = oldUserData[id].role;
}

// Function for deleting the particular row
function deleteRowItem(id) {
  let deleteBtn = document.querySelector("#deleteRow" + id);
  let deleteParent = deleteBtn.parentElement.parentElement;
  deleteParent.remove();
}

// Function for selecting the entire row
function selectEntireRow(id) {
  let checkboxBtn = document.querySelector("#checkbox" + id);
  let selectedRow = checkboxBtn.parentElement.parentElement;
  if (checkboxBtn.checked == true) {
    selectedRow.classList.add("checked-row");
  } else {
    selectedRow.classList.remove("checked-row");
  }
}

// Function for selecting all the users
function selectAll() {
  let AllEleSelected = document.getElementById("AllEleSelected");
  let tableRow = document.querySelectorAll(".rowCheckbox");
  tableRow.forEach((ele) => {
    if (AllEleSelected.checked) {
      ele.checked = true;
      ele.parentElement.parentElement.classList.add("checked-row");
    } else {
      ele.checked = false;
      ele.parentElement.parentElement.classList.remove("checked-row");
    }
  });
}

// Function for deleting all the users & the particular ones
function deleteEachOrAll() {
  let rowCheckbox = document.querySelectorAll(".rowCheckbox");
  rowCheckbox.forEach((ele) => {
    if (ele.checked) {
      let selectedRow = ele.parentElement.parentElement;
      selectedRow.remove();
    }
  });
  let deleteALLItems = document.getElementById("AllEleSelected");
  if (deleteALLItems.checked) {
    deleteALLItems.checked = false;
  }
}
