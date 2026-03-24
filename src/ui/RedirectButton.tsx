import Link from "next/link";

type RedirectButtonProps = {
  text: string;
  url: string;
};

export function RedirectButton({ text, url }: RedirectButtonProps) {
  return (
    <Link
      href={`/${url}`}
      className="rounded-full border border-zinc-700 bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
    >
      {text}
    </Link>
  );
}
