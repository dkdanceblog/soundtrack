type Props = { title: string; artist: string; year: number; date: string; sleeve?: string };

// The house record: a paper sleeve printed with the birth date, the record pulled out.
// Decorative; the song text next to it carries the meaning.
export function RecordObject({ year, date, sleeve = "саундтрек дня рождения" }: Props) {
  const [day, month] = date.split(".");
  return (
    <div className="carrier" aria-hidden="true">
      <div className="lp-disc"><div className="lp-label"><img src="brand/ring-cream.webp" alt="" /></div></div>
      <div className="lp-sleeve">
        <p className="lp-top"><span>ДК ДАНС</span><span>{sleeve}</span></p>
        <p className="lp-date"><b>{day}.{month}</b><b>{year}</b></p>
        <div className="lp-ring" />
      </div>
    </div>
  );
}
