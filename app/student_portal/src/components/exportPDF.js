import React from "react";
import ReactToPrint from "react-to-print";
import ReportFooter from "../components/ReportFooter";

class ExportPdfComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Export HTMl Table in PDF File</h1>

                <ReportFooter
                    ref={(response) => (this.componentRef = response)}
                />

                <ReactToPrint
                    content={() => this.componentRef}
                    trigger={() => (
                        <button className="btn btn-primary">
                            Print to PDF!
                        </button>
                    )}
                />
            </div>
        );
    }
}

export default ExportPdfComponent;
