import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";

function GoogleDrivePicker() {
  const [openPicker, authResponse] = useDrivePicker();

  const handleOpenPicker = () => {
    openPicker({
      clientId: "xxxxxxxxxxxxxxxxx",
      developerKey: "xxxxxxxxxxxx",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };
  return (
    <div>
      <button onClick={() => handleOpenPicker()} className="bg-blue-500 p-2 border-rounded-lg mx-20 hover:bg-blue-600 text-white">Open Picker</button>
    </div>
  );
}

// Request ID: 17540051941931667875
// client ID :- 389001587018-bvofqpdugths6m2svk9gr37s2t20kilt.apps.googleusercontent.com
// api key :- AIzaSyD0gbNBFwWSsQ-JPmGtjuGIgJAAq9tXoGU
export default GoogleDrivePicker;
