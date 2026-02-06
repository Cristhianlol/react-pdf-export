import { useState } from "react";
import PdfViewer from "./PdfViewer";

type PdfType = "status" | "purchase";

const PdfPage = () => {
  const [pdfType, setPdfType] = useState<PdfType>("status");

  return (
    <div style={{ padding: 20 }}>
      <h2>Documentos PDF</h2>

      <div style={{ marginBottom: 12 }}>
        <button onClick={() => setPdfType("status")}>
          Ver Status Exportación
        </button>

        <button onClick={() => setPdfType("purchase")} style={{ marginLeft: 8 }}>
          Ver Pedido de Compra
        </button>
      </div>

      <PdfViewer type={pdfType} />
    </div>
  );
};

export default PdfPage;



