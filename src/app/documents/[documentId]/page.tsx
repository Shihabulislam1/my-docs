import React from "react";
interface DocumentIdPageProps {
  params: {
    documentId: string;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const documentId = params.documentId;
  return <div>DocumentIdPage: {documentId}</div>;
};

export default DocumentIdPage;
