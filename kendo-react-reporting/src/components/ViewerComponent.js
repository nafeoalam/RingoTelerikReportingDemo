import React, { useRef } from "react";
// import { TelerikReportViewer } from "@progress/telerik-react-report-viewer";
import { TelerikReportViewer} from "@progress/telerik-react-report-viewer";


const ViewerComponent = ({ reportName, clientName }) => {
  console.log(clientName)

  let clientNamesArray = []

  if(clientName != null){
    clientNamesArray = clientName.split(',');
    console.log(clientNamesArray)
   }

  const viewerRef = useRef(null);
  
  
  return (
    <TelerikReportViewer
      key={reportName} // Using reportName as key to trigger remount if reportName changes
      ref={viewerRef}
      serviceUrl="http://localhost:59655/api/reports/render/"
      reportSource={{
        report: reportName + ".trdp", // Dynamic report name based on selection
        parameters: {
          ClientName:clientNamesArray
          // Status: ["Approved","Closed"]
        },
      
      }}
      viewerContainerStyle={{
        position: "absolute",
        top: "10%",  // Adjust top positioning as necessary
        left: 0,
        right: 0,
        bottom: "5%",
        overflow: "auto",
        fontFamily: "ms sans serif",
        zIndex: 1  // Ensure the viewer is above other elements if needed
      }}
      scaleMode="SPECIFIC"
      scale={1.2}
      enableAccessibility={false}
    />
  );
};

export default ViewerComponent;
