import React, {useState} from "react";
import "../components/Modal.css";


export const Modal = ({ closeModal, onSubmit, defaultValue, id }) => {
    const [formState, setFormState] = useState( defaultValue || {
        solution: ""
    });



    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(id, formState);
        closeModal();
    }

    return (
    <div 
        className ="modal-container"
        onClick={(e) => {
        if(e.target.className === "modal-container")
            closeModal();
        }} 
    >
        <div className="modal">
            <form>
                <div>
                    <label htmlFor="solution">Solution</label>
                    <input name="solution" value={formState.name} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Add Entry</button>
            </form>
        </div>
    </div>
)};