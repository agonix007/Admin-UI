const addUserDatatoDOM = (users) => {
  users.map((ele) => {
    let dataTable = document.getElementById("table-body");
    dataTable.innerHTML += `
            <tr id="${ele.id}">
                <td><input type="checkbox" id="checkbox${ele.id}" class="rowCheckbox" onclick="selectEntireRow(${ele.id})"></td>
                <td id="name${ele.id}">${ele.name}</td>
                <td id="email${ele.id}">${ele.email}</td>
                <td id="role${ele.id}">${ele.role}</td>
                <td class="choices">
                    <button type="button" id="edit${ele.id}" class="icon-button" onclick="editUser(${ele.id})">
                        <i class="fa-regular fa-pen-to-square fa-lg" style="color: #000000;"></i>
                    </button>
                    <button type="button" id="save${ele.id}" style="display: none" class="edit-button" onclick="saveEdit(${ele.id})"}>
                        Save
                    </button>
                    <button type="button" id="cancel${ele.id}" style="display: none" class="edit-button cancel" onclick="cancelEdit(${ele.id})"}>
                        Cancel
                    </button>
                    <button type="button" id="deleteRow${ele.id}" class="icon-button delete" onclick="deleteRowItem(${ele.id})">
                        <i class="fa-regular fa-trash-can fa-lg" style="color: #ec096b;"></i>
                    </button>
                </td>
            </tr>`;
  });
};
