import React, {useState} from "react";
import "./Modal.css";


export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState( defaultValue || {
        name: "",
        skills: "",
        past_experiences: "",
        areas_for_growth: ""
    });



    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formState);
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
                    <label htmlFor="name">Name</label>
                    <input name="name" value={formState.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="skills">Skills</label>
                    <textarea name="skills" value={formState.skills} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="past_experiences">Past Experiences</label>
                    <textarea name="past_experiences" value={formState.past_experiences} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="areas_for_growth">Areas For Growth</label>
                    <textarea name="areas_for_growth" value={formState.areas_for_growth} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Add Entry</button>
            </form>
        </div>
    </div>
)};