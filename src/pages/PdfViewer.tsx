import { PDFViewer } from "@react-pdf/renderer";
import ExportPDF from "../pdf/ExportPDF";

const PdfViewer = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
        showToolbar
      >
        <ExportPDF />
      </PDFViewer>
    </div>
  );
};

export default PdfViewer;




