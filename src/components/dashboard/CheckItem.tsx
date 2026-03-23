export function CheckItem({
    title,
    description,
    dueIn,
  }: {
    title: string;
    description: string;
    dueIn: string;
  }) {
    return (
      <div className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-950 p-4">
        <div>
          <p className="text-sm font-medium text-white">{title}</p>
          <p className="mt-1 text-sm text-zinc-500">{description}</p>
        </div>
        <span className="text-xs text-zinc-400">{dueIn}</span>
      </div>
    );
  }