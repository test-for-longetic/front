"use client";

import { useRouter } from "next/navigation";
import { UploadHeader } from "@/components/upload/UploadHeader";
import { UploadDropzone } from "@/components/upload/UploadDropzone";
import { UploadSteps } from "@/components/upload/UploadSteps";
import { UploadActions } from "@/components/upload/UploadActions";

export default function UploadPage() {
  const router = useRouter();

  const handleUpload = () => {
    router.push("/reports");
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <UploadHeader />

      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <UploadDropzone />
        <UploadSteps />
        <UploadActions onUpload={handleUpload} />
      </section>
    </div>
  );
}
