import "./stylesheets/kevinRedemptive.css";

export function KevinDownloadPlaybook() {

    function onButtonClick() {
        const pdf = "The-FaithTech-Playbook.pdf";
        const link = document.createElement("a")
        link.href = pdf;
        link.download = "FaithTech Playbook.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <button class="kevin-download-playbook-button"onClick={onButtonClick}> Download Playbook</button>
        </>
    );
};