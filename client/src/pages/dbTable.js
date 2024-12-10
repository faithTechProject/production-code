import axios from 'axios';
import dbStyles from './dbTable.module.css';

export function fillTable(index, data , pageName) {
    var container = document.getElementById('table'+index);
    container.firstChild.lastChild.innerHTML = "";
    container.firstChild.className = `${dbStyles.table}`;
    var tData = data[index].input; // The data grabbed from the database
    //console.log(tData)
    
    for (let i=0; i<tData.length; i++) { // loops through each row in the data
        var row = document.createElement("tr"); // Create a row element
            var keyData = document.createElement("td"); // Create data element
            keyData.className = `${dbStyles.cell}`;
            var textbox = document.createElement("textarea");
            textbox.className = `${dbStyles.textarea}`;
            textbox.value = tData[i].solution;
            textbox.onchange = (e) => updateRow(e, index, i, data, pageName);
            keyData.appendChild(textbox);
            row.appendChild(keyData);

        // Delete Buttons
        var buttonSlot = document.createElement("td");
        buttonSlot.className = `${dbStyles.deleteRow}`;
        buttonSlot.innerHTML = "DELETE";
        buttonSlot.onclick = () => deleteRow(index, i, data, pageName);
        row.appendChild(buttonSlot);

        container.firstChild.lastChild.appendChild(row); // Add row to table

        // Add Row Button
        if (container.children.length>1) {
            container.removeChild(container.lastElementChild);
        }
        var addButton = document.createElement("button");
        addButton.className = `${dbStyles.addRow}`;
        addButton.innerHTML = "ADD ROW";
        addButton.onclick = () => addRow(index, data, pageName);
        container.appendChild(addButton);
    }
}

export function updateRow(e, tableID, i, data, pageName) { // Saves data when a row is edited
    data[tableID].input[i].solution = e.target.value;
    saveData(data[tableID].input,tableID, pageName);
}

export function deleteRow(tableID, row, data , pageName) {
    if (data[tableID].input.length == 1) {return;} // Prevents table from being fully empty
    data[tableID].input.splice(row,1); // Deletes row
    for (let i=0; i<data[tableID].input.length; i++) {
        data[tableID].input[i].id = i;
    }
    saveData(data[tableID].input,tableID, pageName);
    fillTable(tableID, data , pageName); // Rebuids table

    axios.delete(`http://localhost:3000/analysis/?brainstorm_id=${row}&brainstorm_table_id=${tableID}`)
}

export function addRow(tableID, data, pageName) {
    const newRow = {"id": data[tableID].input.length, "solution": ""}
    
    // Adds row to table
    data[tableID].input.push(newRow); 
    
    saveData(data[tableID].input, tableID, pageName);
    fillTable(tableID, data , pageName); // Rebuild table
    saveAnalysisData(data, tableID)
}

export function saveData(inputData, table , pageName) { // Saves data
    axios.patch(`http://localhost:3000/matrix-reflections/?page=${pageName}&entry_pos=${table}`, {
        input: inputData
    });
}

export function saveAnalysisData(data, tableID)
{
    axios.post(`http://localhost:3000/analysis`, {
        id: data[0].input.length + data[1].input.length + data[2].input.length + data[3].input.length,
        page: 'Discern',
        brainstorm_id: data[tableID].input.length - 1,
        brainstorm_table_id: tableID,
        explanation: '',
        category: 'unassigned',
    });
}

export function updateHeight(slot, id, row) {
    console.log(getComputedStyle(document.getElementById('table'+id).getElementsByClassName('deleteButton')[row]).getPropertyValue('height'));

}