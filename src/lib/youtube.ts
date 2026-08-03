/** Extract an 11-character YouTube video ID from a URL or bare ID string. */
export function parseYoutubeId(input: string): string | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const url = new URL(trimmed);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.slice(1).split("/")[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      const fromQuery = url.searchParams.get("v");
      if (fromQuery && /^[\w-]{11}$/.test(fromQuery)) return fromQuery;

      const embedMatch = url.pathname.match(/\/embed\/([\w-]{11})/);
      if (embedMatch) return embedMatch[1];

      const shortsMatch = url.pathname.match(/\/shorts\/([\w-]{11})/);
      if (shortsMatch) return shortsMatch[1];
    }
  } catch {
    return null;
  }

  return null;
}

export function youtubeThumbnail(id: string, quality: "default" | "mq" | "hq" = "mq") {
  const suffix = quality === "hq" ? "hqdefault" : quality === "mq" ? "mqdefault" : "default";
  return `https://img.youtube.com/vi/${id}/${suffix}.jpg`;
}

export function youtubeWatchUrl(id: string) {
  return `https://www.youtube.com/watch?v=${id}`;
}

export function youtubeEmbedUrl(id: string) {
  return `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1`;
}
