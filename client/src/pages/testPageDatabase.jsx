import axios from 'axios';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
import "./testPageDatabase.css";

export function TestPageDatabase()
{
    
    const [reflection, setReflection] = useState([])
    const [response, setResponse] = useState("")
    

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
            console.log(informations)
        })
        

    }

    const [matrixData, setMatrixData] = useState([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [pastExperiences, setPastExperiences] = useState("");
    const [areasForGrowth, setAreasForGrowth] = useState("");


    function handleSubmit2() {
        setMatrixData([id, name, skills, pastExperiences, areasForGrowth]);
        axios.post(`http://localhost:3000/skill-matrix`, {
            id: +id,
            name: name,
            skills: skills,
            past_experiences: pastExperiences,
            areas_for_growth: areasForGrowth
        })
    }

    console.log(matrixData)

    

    useEffect(() => {
        
        //setMatrixData(myData.map((item) => item.matrixData))
        //console.log(myData);
        
        axios.get(`http://localhost:3000/reflection/1`).then(res => {
            //setResponse(res.data)
            setResponse(res.data.map((item) => item.response))
            //console.log(response.map((item) => item.response))
            

        })
    }, [matrixData])
    
    const reflectionSave = event => {
        event.preventDefault();
        console.log(response);

        axios.put("http://localhost:3000/reflection/1", {
            response: response
        })
    }

    function displayKey(e) {
        console.log(e)
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
            
            <table className='kevin-table' id='skillMatrix'>
                <tr>
                    <th className='kevin-th'>ID</th>
                    <th className='kevin-th'>Name</th>
                    <th className='kevin-th'>Skills</th>
                    <th className='kevin-th'>Past Experiences</th>
                    <th className='kevin-th'>Areas for Growth</th>
                </tr>
            </table>

                <table>
                    {matrixData.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.skills}</td>
                                <td>{item.pastExperiences}</td>
                                <td>{item.areasForGrowth}</td>
                                <td><button onClick={(e) => displayKey(e.key.value)}>-</button></td>
                            </tr>
                        )
                    })}
                </table>
            
            <form onSubmit={handleSubmit2}>
                <input type="text" value={id} placeholder='id' onChange={(e) => setId(e.target.value)} />
                <input type="text" value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type="text" value={skills} placeholder='skills' onChange={(e) => setSkills(e.target.value)} />
                <input type="text" value={pastExperiences} placeholder='past experiences' onChange={(e) => setPastExperiences(e.target.value)} />
                <input type="text" value={areasForGrowth} placeholder='areas for growth' onChange={(e) => setAreasForGrowth(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}