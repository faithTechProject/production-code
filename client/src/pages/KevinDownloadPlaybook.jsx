import styles from "./workbook.module.css";

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
            <button class={styles.kevinDownloadPlaybookButton} onClick={onButtonClick}> Download Playbook</button>
        </>
    );
};