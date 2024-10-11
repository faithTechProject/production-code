import axios from 'axios';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import "./testPageDatabase.css";
import { Table } from "./components/Table"; 
import { Modal } from './components/Modal';

export function TestPageDatabase()
{
    const[modalOpen, setModalOpen] = useState(false);
    
    const [reflection, setReflection] = useState([]);
    const [response, setResponse] = useState("");
    
    const onMount = useRef(false);
    
    
    function reactPost() {
        axios.post("http://localhost:3000/polls", {
            question: "What is your favorite color",
            options: ["red", "blue", "green", "orange"]
        })
        console.log("here")
    }

    function reactGet() {
        const data = axios.get("http://localhost:3000/polls")
        console.log(data)
    }

    function submit() {
        axios.post("http://localhost:3000/information", {
            first_name: "What is your favorite color",
            options: ["red", "blue", "green", "orange"]
        })
    }
    const [informations, setInformations] = useState([])
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    



    function getInfo(value) {
        axios.get(`http://localhost:3000/reflection/${value}`).then(res => {
            setInformations(res.data)
        })
        

    }

    const [matrixData, setMatrixData] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [pastExperiences, setPastExperiences] = useState("");
    const [areasForGrowth, setAreasForGrowth] = useState("");


    //function handleSubmit2() {
        //axios.post(`http://localhost:3000/skill-matrix`, {
        //    id: +id, // convert string to number.
        //    name: name,
        //    skills: skills,
        //    past_experiences: pastExperiences,
        //    areas_for_growth: areasForGrowth
    //    }//)

        //axios.get(`http://localhost:3000/skill-matrix/1`).then(res => {
        //        //setResponse(res.data)
        //        setMatrixData(res.data.map((item) => item))
        //})
    //}

    
    const [rows, setRows] = useState([ 
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
        {name: "", skills: "", past_experiences: "", areas_for_growth: ""},
    ]);

    useEffect(() => {
        console.log(onMount, "hi")
            axios.get(`http://localhost:3000/reflection/1`).then(res => {
                setResponse(res.data.map((item) => item.response))
            })

            axios.get("http://localhost:3000/matrix/matrix").then(res => {
                if (res.data.length !== 0) {
                    const a = (res.data.map((item) => item.data)[0])
                    setRows(a);
                    console.log(a + "hi")
                }
                else {
                    axios.post(`http://localhost:3000/matrix`, {
                        name: "matrix",
                        data: rows
                    });
                }
            })
    }, [])
    
    axios.put(`http://localhost:3000/matrix/matrix`, {
        name: "matrix",
        data: rows
    });

    const reflectionSave = event => {
        event.preventDefault();

        axios.put("http://localhost:3000/reflection/1", {
            response: response
        })
    }

    const handleDeleteRow = (targetIndex) => {
        console.log(rows)
        setRows(rows.filter((_, idx) => idx !== targetIndex))       
    }

    console.log(rows)
    const [rowToEdit, setRowToEdit] = useState(null);

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