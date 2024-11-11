import axios from 'axios';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import "./testPageDatabase.css";
import { Table } from "./components/Table";
import { Modal } from './components/Modal';

export function TestPageDatabase()
{
    const[modalOpen, setModalOpen] = useState(false);
    const [response, setResponse] = useState("");
    const onMount = useRef(false);
    const [rows, setRows] = useState([ 

        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/reflection`).then(res => {
            setResponse(res.data.map((item) => item.response))
        })

        axios.get("http://localhost:3000/matrix-reflections/Data").then(res => {
            const value = res.data[0].input;
            console.log(value)
            setRows(res.data.map((item) => item.input)[0])
        })
    
    }, [])
    console.log(rows + "rows")
    // Reflection Code.
    const reflectionSave = event => {
        event.preventDefault();

        axios.put("http://localhost:3000/reflection/0", {
            response: response
        })
    }

    // Matrix Code.
    console.log("here")
    


    const handleDeleteRow = (targetIndex) => {
        const data = rows.filter((_, idx) => idx !== targetIndex)
        setRows(data)
        
        axios.patch(`http://localhost:3000/matrix-reflections/?page=Data&entry_pos=${0}`, {
            input: data
        });       
    }

    const handleEditRow = (idx) => {
        setRowToEdit(idx);
        setModalOpen(true);
    }
    
    const handleSubmit = (newRow) => {
        rowToEdit === null ?  
        
        setRows([...rows, newRow]) :
        
        setRows(rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
             return newRow
        }))
        
        let data = []
        rowToEdit === null ?  
        
        data = [...rows, newRow]:
        

        data = (rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;
             return newRow
        }))

        axios.patch(`http://localhost:3000/matrix-reflections/?page=Data&entry_pos=${0}`, {
            input: data
        });
    }

    return (
        <>
            <form onSubmit={reflectionSave}>
                <p><label>Reflection Question</label></p>
                <textarea
                    placeholder="Type your response here."
                    rows="30" 
                    cols="80"
                    value={response} 
                    onChange={(e) => setResponse(e.target.value)}>
                </textarea>
                
                <input type="submit" value="Save" />
            </form>
            

            <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
            <button onClick={() => setModalOpen(true)}>Add Entry</button>

            {modalOpen && (
                <Modal closeModal={() => {
                    setModalOpen(false);
                    setRowToEdit(null);
                }}
                onSubmit={handleSubmit}
                defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
            )}
        </>
    )
}