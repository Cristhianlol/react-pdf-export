import { PDFDownloadLink } from "@react-pdf/renderer";
import ExportPDF from "../pdf/ExportPDF.tsx";

const DownloadPdf: React.FC = () => {
  return (
    <PDFDownloadLink
      document={<ExportPDF />}
      fileName="status-exportacion.pdf"
    >
      {({ loading }) =>
        loading ? "Descargar PDF" : "Descargar PDF"
      }
    </PDFDownloadLink>
  );
};

export default DownloadPdf;
