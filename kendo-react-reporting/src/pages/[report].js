// pages/[report].js
import { useRouter } from "next/router";
import Head from "next/head";
import dynamic from "next/dynamic";
import { process } from "@progress/kendo-data-query";
import { useState } from "react";
import "@progress/kendo-theme-default/dist/all.css";

const ViewerComponent = dynamic(() => import("../components/ViewerComponent"), {
  ssr: false,
});

const ReportPage = () => {
  const router = useRouter();
  const { report, clientName } = router.query; // Accessing dynamic route and query parameters

  const [selected, setSelected] = useState(report); // Initialize with a default report
  const [gridDataState, setGridDataState] = useState(() => ({
    data: process([], { sort: [{ field: "Name", dir: "asc" }] }), // Assuming initial data setup
  }));

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div>
      <div>
        <div label="React Report Viewer">
          <ViewerComponent
            reportName={selected ?? report}
            clientName={clientName}
            data={gridDataState.data}
          ></ViewerComponent>

          {/* <select value={selected} onChange={handleChange}>
            <option value="Multiselect">Multiselect</option>

            <option value="chartsTrial">chartsTrial</option>
            <option value="RequisitionAnalysisReport">
              RequisitionAnalysisReport
            </option>
            <option value="SubReport">SubReport</option>
          </select>
          <div>Selected: {selected}</div> */}
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
