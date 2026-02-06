import { PDFViewer } from "@react-pdf/renderer";

import ExportStatusPDF from "../pdf/ExportPDF";
import ExportPurchaseOrderPDF from "../pdf/ExportPurchaseOrderPDF";

type Props = {
  type: "status" | "purchase";
};

const PdfViewer = ({ type }: Props) => {
  return (
    <div style={{ width: "100vw", height: "80vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%", border: "none" }}>
        {type === "status" ? (
          <ExportStatusPDF />
        ) : (
          <ExportPurchaseOrderPDF />
        )}
      </PDFViewer>
    </div>
  );
};

export default PdfViewer;





