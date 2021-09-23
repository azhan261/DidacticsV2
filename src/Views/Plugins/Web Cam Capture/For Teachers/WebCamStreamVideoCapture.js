import React from 'react'
import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom'
import Webcam from "react-webcam";

function WebCamStreamVideoCapture() {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(() => {
      mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing]);
  
    const handleDownload = React.useCallback(() => {
      if (recordedChunks.length) {
        const blob = new Blob(recordedChunks, {
          type: "video/webm"
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "react-webcam-stream-capture.webm";
        a.click();
        window.URL.revokeObjectURL(url);
        setRecordedChunks([]);
      }
    }, [recordedChunks]);
  
    return (
      <>
        <div style = {{height : "250px"}}> 
        <Webcam audio={false} ref={webcamRef} />
        {capturing ? (
          <div className = "buttonNewTheme">
          <button  onClick={handleStopCaptureClick}><i className="fa fa-pause-circle-o fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Stop Recording</span></button>
          </div>
        ) : (
          <div className = "buttonNewTheme">
          <button onClick={handleStartCaptureClick}><i className="fa fa-play-circle-o fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Start Recording</span></button>
          </div>
         
        )}
        {recordedChunks.length > 0 && (
          <div className = "buttonNewTheme">
          <button onClick={handleDownload}><i className="fa fa-arrow-circle-o-down fa-lg"></i><span style = {{paddingLeft : "15px", fontWeight : "bold"}}>Download Recording</span></button>
          </div>
        )}
        </div>
      </>
    );
}

export default WebCamStreamVideoCapture
