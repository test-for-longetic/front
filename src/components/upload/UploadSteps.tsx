import { UploadStep } from "./UploadStep";

    export function UploadSteps() {
    return (
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <UploadStep
          title="1. Upload"
          description="Add a lab report file from your device."
        />
        <UploadStep
          title="2. Review"
          description="Check extracted biomarkers and correct anything if needed."
        />
        <UploadStep
          title="3. Save"
          description="Store the report and use it in history, trends, and summaries."
        />
      </div>
    );
  }