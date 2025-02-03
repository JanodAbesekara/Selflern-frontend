import React, { useState } from "react";
import Navbar from "../Componenet/Navbar";
import DropboxChooser from "react-dropbox-chooser";

const DROPBOX_APP_KEY = "dtn9kriiez9h447";

function Homepage() {
  const [file, setFile] = useState([]);

  const onSuccess = (selectedFiles) => {
    console.log(selectedFiles);

    const filterLinks = selectedFiles
      .filter((file) => file.link)
      .map((file) => file.link);

    setFile(filterLinks);

    
  };

  const onCancel = () => {
    console.log("User cancelled files ");
  };

  return (
    <div>
      <Navbar />
      <h1 className="to-cyan-700">Homepage</h1>

      <button className="border-2 bg-blue-500 p-2 align-center mx-20">
        <DropboxChooser
          appKey={DROPBOX_APP_KEY}
          onDrop={(files) => setFile(files)}
          success={onSuccess}
          cancel={onCancel}
          multiselect={true}
        />
      </button>

      <div>
        <h2>Files</h2>
        {file.map((file) => (
          <p key={file}>{file}</p>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
