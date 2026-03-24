import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black font-bold">
        L
      </div>

      <span className="text-sm font-semibold tracking-wide text-zinc-100">
        Labs
      </span>
    </Link>
  );
}
