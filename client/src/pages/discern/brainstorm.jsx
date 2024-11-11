import { Link } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/discernBrainstorm.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Table } from './mindTable'; 
import { Modal} from './mindModal';

export function DiscernBrainstorm() {
        const[modalOpen, setModalOpen] = useState(false);
        const [response, setResponse] = useState("");
        const onMount = useRef(false);
        const [rows, setRows] = useState([ 
    
            {solution: ""},
        ]);
        const [rowToEdit, setRowToEdit] = useState(null);
    
        useEffect(() => {
            axios.get(`http://localhost:3000/reflection`).then(res => {
                setResponse(res.data.map((item) => item.response))
            })
    
            axios.get("http://localhost:3000/matrix-reflections/Brainstorm").then(res => {
                const value = res.data[0].input;
                console.log(value)
                setRows(res.data.map((item) => item.input)[0])
            })
        
        }, [])
        console.log(rows + "rows")
        // Reflection Code.
        const reflectionSave = event => {
            event.preventDefault();
    
            axios.put("http://localhost:3000/reflection/1", {
                response: response
            })
        }
    
        // Matrix Code.
        console.log("here")
        
    
    
        const handleDeleteRow = (targetIndex) => {
            const data = rows.filter((_, idx) => idx !== targetIndex)
            setRows(data)
            
            axios.patch(`http://localhost:3000/matrix-reflections/?page=Brainstorm&entry_pos=${0}`, {
                input: data
            });
        }
    
        const handleEditRow = (idx) => {
            setRowToEdit(idx);
            setModalOpen(true);
        }
        
        const handleSubmit = (id, newRow) => {
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
    
            axios.patch(`http://localhost:3000/matrix-reflections/?page=Brainstorm&entry_pos=${id}`, {
                input: data
            });
        }

    return (
        <>
            <div id="oTopImage">
                <h3 class="oTitle"><sc>BRAINSTORM</sc></h3>
            </div>
            <div className='body'>
                <h1>Generate Solutions</h1>
                <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <button onClick={() => setModalOpen(true)}>Add Entry</button>
                <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <button onClick={() => setModalOpen(true)}>Add Entry</button>
                <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
                <button onClick={() => setModalOpen(true)}>Add Entry</button>

                {modalOpen && (
                    <Modal closeModal={() => {
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
                    id={0}
                />
                )}
            </div>
            <div className='bottomLinks'>
                <Link to="/discern/overview">Discern Overview</Link>
                <Link to="/discern/analysis">Analysis</Link>
            </div>
        </>
    )
}