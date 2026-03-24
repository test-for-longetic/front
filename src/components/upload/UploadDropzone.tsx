type UploadDropzoneProps = {
  selectedFileName?: string | null;
  onFileSelect: (file: File | null) => void;
};

export function UploadDropzone({
  selectedFileName,
  onFileSelect,
}: UploadDropzoneProps) {
  return (
    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-950 p-8 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-lg text-white">
        +
      </div>

      <h2 className="mt-4 text-lg font-semibold text-white">
        Drop your file here
      </h2>

      <p className="mt-2 text-sm text-zinc-500">
        Supported formats: PDF, PNG, JPG, CSV
      </p>

      <div className="mt-6">
        <input
          type="file"
          accept=".pdf,.png,.jpg,.jpeg,.csv"
          onChange={(e) => onFileSelect(e.target.files?.[0] ?? null)}
          className="mx-auto block text-sm text-zinc-400 file:mr-4 file:rounded-full file:border-0 file:bg-zinc-100 file:px-4 file:py-2 file:text-sm file:font-medium file:text-zinc-950 hover:file:bg-white"
        />
      </div>

      {selectedFileName ? (
        <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
          Selected file:{" "}
          <span className="font-medium text-white">{selectedFileName}</span>
        </div>
      ) : null}
    </div>
  );
}