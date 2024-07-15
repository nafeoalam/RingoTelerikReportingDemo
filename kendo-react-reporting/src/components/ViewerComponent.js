import React, { useRef } from "react";
import { TelerikReportViewer } from "@progress/telerik-react-report-viewer";

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
          // ClientName: clientName ?? 'NAPA' // Make sure data is correctly formatted
          // ClientName: clientName.join(',') 
          ClientName:clientNamesArray
          // ClientName: ["Advent Corp","Daffodil","Hawkins Lab","Meadowview Community Hospital","Somerville Institute","Trust healthcare"]
        },
      }}
      viewerContainerStyle={{
        position: "absolute",
        height: "80%",
        width: "100%",
        top: "3%",
        clear: "both",
        fontFamily: "ms sans serif",
      }}
      scaleMode="SPECIFIC"
      scale={1.2}
      enableAccessibility={false}
    />
  );
};

export default ViewerComponent;
