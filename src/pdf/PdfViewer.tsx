import { PDFViewer } from "@react-pdf/renderer";
import ExportPDF from "../pdf/ExportPDF";

const PdfViewer = () => (
  <PDFViewer style={{ width: "100%", height: "100vh" }}>
    <ExportPDF />
  </PDFViewer>
);

export default PdfViewer;
