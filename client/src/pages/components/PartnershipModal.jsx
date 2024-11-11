import React, {useState} from "react";
import "./Modal.css";


export const Modal = ({ closeModal, onSubmit, defaultValue, id }) => {
    const [formState, setFormState] = useState( defaultValue || {
        partner: "",
        needs: "",
        project_idea: ""
    });



    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(id, e, formState);
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
                    <label htmlFor="partner">Partner</label>
                    <input name="partner" value={formState.partner} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="needs">Needs</label>
                    <textarea name="needs" value={formState.needs} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="project_idea">Project_idea</label>
                    <textarea name="project_idea" value={formState.project_idea} onChange={handleChange} />
                </div>
                <button type="submit" onClick={handleSubmit}>Add Entry</button>
            </form>
        </div>
    </div>
)};