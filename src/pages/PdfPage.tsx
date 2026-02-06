import PdfViewer from "./PdfViewer";
import DownloadPdf from "../components/DownloadPdf";

const PdfPage: React.FC = () => {
  return (
    <>
      <DownloadPdf />
      <PdfViewer />
    </>
  );
};

export default PdfPage;


