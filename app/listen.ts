import { yandexTrackUrl } from "./chartoteka";

// Four equal services. All are search links, except Yandex Music when a chart archive
// gave the exact track id. No service is presented as the default.
export type ListenLink = { id: "yandex" | "vk" | "spotify" | "youtube"; label: string; short: string; url: string };

export function listenQuery(artist: string, title: string) {
  return `${artist} ${title}`.replace(/[«»"“”„]/g, "").replace(/\s+/g, " ").trim();
}

export function listenLinks(artist: string, title: string): ListenLink[] {
  const q = encodeURIComponent(listenQuery(artist, title));
  return [
    { id: "yandex", label: "Яндекс Музыка", short: "ЯМ", url: yandexTrackUrl(artist, title) ?? `https://music.yandex.ru/search?text=${q}` },
    { id: "vk", label: "VK Музыка", short: "VK", url: `https://vk.com/audio?q=${q}` },
    { id: "spotify", label: "Spotify", short: "SP", url: `https://open.spotify.com/search/${q}` },
    { id: "youtube", label: "YouTube", short: "YT", url: `https://www.youtube.com/results?search_query=${q}` },
  ];
}

