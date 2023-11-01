import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './resume.pdf';
function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>PDF Viewer</h1>
      <iframe
        title="PDF Viewer"
        width="100%"
        height="1000"
        src={pdfFile}
      />
    </div>
  );
}

export default PDFViewer;
