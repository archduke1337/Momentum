import { cn } from '@/lib/utils';
import { ImageIcon } from 'lucide-react';

interface MediaPlaceholderProps {
  className?: string;
  label?: string;
  aspect?: string;
}

export function MediaPlaceholder({ className, label, aspect = 'aspect-[16/9]' }: MediaPlaceholderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-2 border border-dashed border-border bg-surface/50 text-muted-foreground',
        aspect,
        className,
      )}
    >
      <ImageIcon className="size-6 opacity-40" aria-hidden="true" />
      {label && <span className="text-[11px] font-medium tracking-wider uppercase opacity-50">{label}</span>}
    </div>
  );
}
