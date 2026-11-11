// Review label for images that are not final resort photos.
// Set SHOW_TEMP_IMAGE_BADGES to false to hide every badge at once.
export const SHOW_TEMP_IMAGE_BADGES = true;

export type TempImageSource = "ai" | "stock" | "original";

const LABELS: Record<TempImageSource, { title: string; note: string; icon: string }> = {
  ai: { title: "AI-generated image", note: "Temporary · to be replaced with a real photo", icon: "auto_awesome" },
  stock: { title: "Stock image from internet", note: "Temporary · to be replaced with a real photo", icon: "public" },
  original: { title: "Original photo · temporary", note: "To be replaced with the correct photo", icon: "swap_horiz" },
};

const POSITIONS = {
  "top-left": "top-3 left-3",
  "bottom-left": "bottom-3 left-3",
  "bottom-right": "bottom-3 right-3",
} as const;

export default function TempImageBadge({
  source,
  note,
  position = "top-left",
}: {
  source: TempImageSource;
  note?: string;
  position?: keyof typeof POSITIONS;
}) {
  if (!SHOW_TEMP_IMAGE_BADGES) return null;
  const label = LABELS[source];
  return (
    <div
      className={`absolute ${POSITIONS[position]} z-30 max-w-[calc(100%-1.5rem)] pointer-events-none flex items-start gap-2 rounded-md bg-black/75 px-2.5 py-1.5 text-white shadow-lg backdrop-blur-sm ring-1 ring-amber-400/60`}
      role="note"
    >
      <span aria-hidden="true" className="material-symbols-outlined text-[16px] leading-none text-amber-400 mt-px">{label.icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">{label.title}</span>
        <span className="text-[11px] text-white/85">{note ?? label.note}</span>
      </span>
    </div>
  );
}
