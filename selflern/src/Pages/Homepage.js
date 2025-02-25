import React, { useState } from "react";
import Navbar from "../Componenet/Navbar";
import DropboxChooser from "react-dropbox-chooser";
import API from "../Context/AxioxConfigure";

const DROPBOX_APP_KEY = "dtn9kriiez9h447";

function Homepage() {
  // const [files, setFiles] = useState([]);
  const [inputText, setInputText] = useState("");
  const [getOutput, setGetOutput] = useState("");

  const onSuccess = async (selectedFiles) => {
    console.log("Selected Files:", selectedFiles);

    const fileObjects = selectedFiles.map((file) => ({
      id: file.id,
      name: file.name,
      link: file.link
        .replace("www.dropbox.com", "dl.dropboxusercontent.com")
        .split("&dl=0")[0],
    }));

    // setFiles(fileObjects);

    console.log(fileObjects);

    try {
      const response = await API.post(
        "/pdf-link",
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
    e.preventDefault();

    try {
      const response = await API.post("/ask", {
        query: inputText,
      });

      console.log("Response:", response.data);
      setGetOutput(response.data.response);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <div className="">
      <Navbar />

      <div className=" flex justify-center">
        <DropboxChooser
          appKey={DROPBOX_APP_KEY}
          success={onSuccess}
          cancel={onCancel}
          multiselect={true}
        >
          <button className=" bg-blue-500 my-10  rounded-2xl px-10 py-3 w-56 text-gray-100 shadow-md  shadow-black ">
            Choose Files
          </button>
        </DropboxChooser>

        {/* <div>
          {files.map((file) => (
            <p key={file.id}>
              <strong>{file.name}</strong>:{" "}
              <a href={file.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </p>
          ))}
        </div> */}
      </div>

      <br />
      <br />

      <input
        value={getOutput}
        readOnly
        className="border-2 border-zinc-10 w-11/12 h-96 ml-3  rounded-xl md:ml-12 sm:ml-8 lg:ml-20 lg:max-h-screen
         text-9xl text-2xl px-8 py-4 bg-neutral-200"
      />

      <br />
      <br />
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Enter your query"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="border-zinc-800 border-2 ml-5 w-full mr-5 px-4 rounded-xl lg:w-10/12 lg:ml-24"
        />
        <button
          type="submit"
          className=" rounded-2xl bg-blue-600 px-5 py-3  text-zinc-50 text-base shadow-md  shadow-black mx-4"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Homepage;
