'use client'
import React from 'react';
import PdfViewer from "@/components/PdfViewer/PdfViewer";

const Page = ({ params }: { params: { docName: string } }) => {
    return params.docName ? <PdfViewer pdfName={params.docName}/> : <div>File is not found</div>
};

export default Page;