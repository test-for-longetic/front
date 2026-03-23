type UploadActionsProps = {
    onUpload: () => void;
  };
  
  export function UploadActions({ onUpload }: UploadActionsProps) {
    return (
      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:text-white"
        >
          Cancel
        </button>
  
        <button
          type="button"
          onClick={onUpload}
          className="rounded-full bg-zinc-100 px-5 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
        >
          Upload Report
        </button>
      </div>
    );
  }