"use client";

import { useRef, useState } from "react";

type UploadDropzoneProps = {
  selectedFileName?: string | null;
  onFileSelect: (file: File | null) => void;
};

export function UploadDropzone({
  selectedFileName,
  onFileSelect,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const isSupportedFile = (file: File) => {
    const name = file.name.toLowerCase();

    return (
      file.type.includes("pdf") ||
      file.type.includes("csv") ||
      name.endsWith(".pdf") ||
      name.endsWith(".csv")
    );
  };

  const handleFile = (file: File | null) => {
    if (!file) return;

    if (!isSupportedFile(file)) {
      alert("Only PDF and CSV files are supported.");
      return;
    }

    onFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0] ?? null;
    handleFile(file);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] ?? null);
  };

  const handleOpenFilePicker = () => {
    inputRef.current?.click();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`rounded-2xl border border-dashed p-8 text-center transition-all duration-200 ${
        isDragging
          ? "border-zinc-500 bg-zinc-900 shadow-lg"
          : "border-zinc-700 bg-zinc-950"
      }`}
    >
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-lg text-white">
        +
      </div>

      <h2 className="mt-4 text-lg font-semibold text-white">
        Drag and drop your file here
      </h2>

      <p className="mt-2 text-sm text-zinc-500">Supported formats: PDF, CSV</p>

      <div className="mt-6">
        <button
          type="button"
          onClick={handleOpenFilePicker}
          className="rounded-full border border-zinc-700 bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition-all duration-200 hover:border-white hover:bg-white hover:shadow-lg active:scale-[0.98]"
        >
          {selectedFileName ? "Change File" : "Choose File"}
        </button>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.csv,application/pdf,text/csv"
          onChange={handleInputChange}
          style={{ display: "none" }}
        />
      </div>

      {selectedFileName ? (
        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
          Selected file:{" "}
          <span className="font-medium text-white">{selectedFileName}</span>
        </div>
      ) : (
        <p className="mt-4 text-xs text-zinc-600">
          or click the button to browse files
        </p>
      )}
    </div>
  );
}