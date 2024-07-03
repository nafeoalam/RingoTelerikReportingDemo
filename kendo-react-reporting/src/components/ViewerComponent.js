import React, { Component } from "react";
import { TelerikReportViewer } from "@progress/telerik-react-report-viewer";

class ViewerComponent extends Component {
  viewer;

  render() {
    return (
      <TelerikReportViewer
        key={this.props.reportName} // Changes trigger remount
        ref={(el) => (this.viewer = el)}
        serviceUrl="http://localhost:59655/api/reports/"
        reportSource={{
          report: this.props.reportName, // Dynamic report name based on selection
          parameters: {
            DataParameter: JSON.stringify(this.props.data.data), // Make sure data is correctly formatted
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
  }
}

export default ViewerComponent;
