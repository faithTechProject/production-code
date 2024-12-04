import React from 'react';
import styles from "./workbook.module.css";

export function DownloadButton({
  fileName,
  displayName,
  filePath,
  className
}) {
  function onButtonClick() {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button
      className={`${styles.kevinDownloadPlaybookButton} ${className || ''}`}
      onClick={onButtonClick}
    >
      {displayName}
    </button>
  );
}