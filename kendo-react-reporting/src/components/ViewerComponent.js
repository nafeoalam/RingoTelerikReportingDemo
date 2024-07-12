import React, { useRef } from "react";
import { TelerikReportViewer } from "@progress/telerik-react-report-viewer";

const ViewerComponent = ({ reportName, clientName }) => {
  const viewerRef = useRef(null);

  return (
    <TelerikReportViewer
      key={reportName} // Using reportName as key to trigger remount if reportName changes
      ref={viewerRef}
      serviceUrl="http://localhost:59655/api/reports/render/"
      reportSource={{
        report: reportName + ".trdp", // Dynamic report name based on selection
        parameters: {
          ClientName: clientName ?? 'NAPA', // Make sure data is correctly formatted
        },
      }}
      viewerContainerStyle={{
        position: "absolute",
        height: "90%",
        width: "90%",
        top: "6%",
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
