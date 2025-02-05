import React, { useState } from "react";
import Navbar from "../Componenet/Navbar";
import DropboxChooser from "react-dropbox-chooser";
import Axios from "axios";

const DROPBOX_APP_KEY = "dtn9kriiez9h447";

function Homepage() {
  const [files, setFiles] = useState([]);
  const [inputText, setInputText] = useState(""); // Fixed default value
  const [getOutput, setGetOutput] = useState(""); // Fixed default value

  // ✅ Dropbox File Selection Handler
  const onSuccess = async (selectedFiles) => {
    console.log("Selected Files:", selectedFiles);

    // Convert files into correct format
    const fileObjects = selectedFiles.map((file) => ({
      id: file.id,
      name: file.name,
      link: file.link
        .replace("www.dropbox.com", "dl.dropboxusercontent.com")
        .split("&dl=0")[0],
    }));

    setFiles(fileObjects);

    console.log(fileObjects);

    try {
      const response = await Axios.post(
        "http://127.0.0.1:4000/pdf-link",
        { files: fileObjects },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log("Upload Response:", response.data);
    } catch (error) {
      console.error("Upload Failed:", error);
    }
  };


  const onCancel = () => {
    console.log("User cancelled file selection");
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      const response = await Axios.post("http://localhost:8000/ask", {
        query: inputText,
      });

      console.log("Response:", response.data);
      setGetOutput(response.data.response); 
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-cyan-700">Homepage</h1>

   
      <DropboxChooser
        appKey={DROPBOX_APP_KEY}
        success={onSuccess}
        cancel={onCancel}
        multiselect={true}
      >
        <button className="border-2 bg-blue-500 p-2 mx-20">Choose Files</button>
      </DropboxChooser>

    
      <div>
        <h2>Selected Files</h2>
        {files.map((file) => (
          <p key={file.id}>
            <strong>{file.name}</strong>:{" "}
            <a href={file.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </p>
        ))}
      </div>

      <br />
      <br />

 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your query"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            border: "2px solid black",
            width: "500px",
            marginLeft: "100px",
            padding: "5px",
          }}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "white",
            marginLeft: "20px",
            padding: "5px 15px",
          }}
        >
          Submit
        </button>
      </form>

      <br />
      <br />


      <textarea
        value={getOutput} // Display response
        readOnly
        style={{
          border: "2px solid black",
          height: "200px",
          width: "50%",
          marginLeft: "100px",
          padding: "10px",
        }}
      ></textarea>

      <br />
      <br />
    </div>
  );
}

export default Homepage;
