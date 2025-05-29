interface SimpleColorBlockProps {
  name: string;
  value: string;
  className?: string;
}

export function ColorBlock({ name, value, className }: SimpleColorBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={`h-12 w-12 rounded border ${className}`} />
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-muted-foreground text-sm">{value}</div>
      </div>
    </div>
  );
}
