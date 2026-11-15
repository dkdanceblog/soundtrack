"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  url: string;
  alt: string;
  fileName: string;
  canShare: boolean;
  onShare: () => void;
  onClose: () => void;
  title?: string;
  extra?: ReactNode;
};

/** Full-screen "card is ready" sheet: big preview, one obvious save/send action. */
export function CardModal({ url, alt, fileName, canShare, onShare, onClose, title = "Карточка готова!", extra }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = overflow; };
  }, [onClose]);

  return createPortal(
    <div className="card-modal" role="dialog" aria-modal="true" aria-label={title} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="card-modal-box">
        <button ref={closeRef} className="card-modal-close" type="button" onClick={onClose} aria-label="Закрыть">×</button>
        <p className="card-modal-title">{title}</p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} />
        <div className="card-modal-actions">
          {canShare
            ? <button className="btn-cta" type="button" onClick={onShare}>Сохранить или отправить</button>
            : <a className="btn-cta" href={url} download={fileName}>Скачать картинку</a>}
          {canShare && <a className="card-modal-link" href={url} download={fileName}>Скачать PNG</a>}
          {extra}
        </div>
        <p className="card-modal-hint">{canShare ? "В меню выбери «Сохранить изображение» — и выкладывай в сторис." : "Картинка 1080×1920 — как раз для сторис."}</p>
      </div>
    </div>,
    document.body,
  );
}
