import axios from 'axios';
import dbStyles from './dbTable.module.css';

export function fillTable(id, data , pageName) {
    var container = document.getElementById(id);
    container.firstChild.lastChild.innerHTML = "";
    container.firstChild.className = `${dbStyles.table}`;
    var tData = data[id].input; // The data grabbed from the database
    for (let i=0; i<tData.length; i++) { // loops through each row in the data
        var row = document.createElement("tr"); // Create a row element
        Object.keys(tData[i]).forEach(key => { // Add each entry to the row
            var keyData = document.createElement("td"); // Create data element
            keyData.className = `${dbStyles.cell}`;
            var textbox = document.createElement("textarea");
            textbox.className = `${dbStyles.textarea}`;
            textbox.value = tData[i][key];
            textbox.onchange = (e) => updateRow(e, id, i, key, data , pageName);
            keyData.appendChild(textbox);
            row.appendChild(keyData);
        })
        // Delete Buttons
        var buttonSlot = document.createElement("td");
        buttonSlot.className = `${dbStyles.deleteRow}`;
        buttonSlot.innerHTML = "DELETE";
        buttonSlot.onclick = () => deleteRow(id, i, data, pageName);
        row.appendChild(buttonSlot);

        container.firstChild.lastChild.appendChild(row); // Add row to table

        // Add Row Button
        if (container.children.length>1) {
            container.removeChild(container.lastElementChild);
        }
        var addButton = document.createElement("button");
        addButton.className = `${dbStyles.addRow}`;
        addButton.innerHTML = "ADD ROW";
        addButton.onclick = () => addRow(id, data, pageName);
        container.appendChild(addButton);
    }
}

export function test(button) {
    console.log(button);
}

export function updateRow(e, tableID, row, column, data , pageName) { // Saves data when a row is edited
    data[tableID].input[row][column] = e.target.value;
    saveData(data[tableID].input,tableID, pageName);
}

export function deleteRow(tableID, row, data , pageName) {
    if (data[tableID].input.length == 1) {return;} // Prevents table from being fully empty
    data[tableID].input.splice(row,1); // Deletes row
    saveData(data[tableID].input,tableID, pageName);
    fillTable(tableID, data , pageName); // Rebuids table
}

export function addRow(tableID, data , pageName) {
    var newRow = JSON.parse(JSON.stringify(data[tableID].input[0])); // Recreates row from the first row
    Object.keys(newRow).forEach(key => { // Empties new row
        newRow[key] = "";
    })
    data[tableID].input.push(newRow); // Adds row to table
    saveData(data[tableID].input,tableID, pageName);
    fillTable(tableID, data , pageName); // Rebuild table
}

export function saveData(inputData, table , pageName) { // Saves data
    axios.patch(`http://localhost:3000/matrix-reflections/?page=${pageName}&entry_pos=${table}`, {
        input: inputData
    });
}

export function updateHeight(slot, id, row) {
    console.log(getComputedStyle(document.getElementById(id).getElementsByClassName('deleteButton')[row]).getPropertyValue('height'));

}