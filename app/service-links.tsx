import { listenLinks } from "./listen";

// Compact, equal links to every listening service for one song.
export function ServiceLinks({ artist, title, className = "" }: { artist: string; title: string; className?: string }) {
  return (
    <span className={`service-links ${className}`.trim()}>
      {listenLinks(artist, title).map((link) => (
        <a key={link.id} href={link.url} target="_blank" rel="noreferrer" title={`${link.label}: «${title}» — ${artist}`} aria-label={`Слушать в ${link.label}: «${title}» — ${artist}`}>{link.short}</a>
      ))}
    </span>
  );
}
