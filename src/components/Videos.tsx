"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { videoContent } from "@/lib/content";
import {
  parseYoutubeId,
  youtubeEmbedUrl,
  youtubeThumbnail,
  youtubeWatchUrl,
} from "@/lib/youtube";
import { ExternalLink, Play } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

type ParsedVideo = {
  id: string;
  title: string;
  description?: string;
};

export default function Videos() {
  const videos = useMemo(() => {
    const parsed: ParsedVideo[] = [];

    for (const video of videoContent.videos) {
      const id = parseYoutubeId(video.youtubeId);
      if (!id) continue;
      parsed.push({
        id,
        title: video.title,
        description: video.description,
      });
    }

    return parsed;
  }, []);

  const [activeId, setActiveId] = useState<string | null>(
    videos[0]?.id ?? null
  );

  if (videos.length === 0) return null;

  const activeVideo =
    videos.find((video) => video.id === activeId) ?? videos[0];

  return (
    <AnimatedSection
      id="videos"
      className="border-t border-black/5 bg-ink/[0.02] py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-accent">
              {videoContent.eyebrow}
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-ink md:text-5xl">
              {videoContent.title}
            </h2>
          </div>
          <div className="flex max-w-md flex-col gap-3">
            <p className="text-sm leading-relaxed text-ink/60">
              {videoContent.description}
            </p>
            {videoContent.channelUrl ? (
              <a
                href={videoContent.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
              >
                View all on YouTube
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start">
          <ol
            className="order-2 flex flex-col gap-3 lg:order-1 lg:max-h-[min(70vh,32rem)] lg:overflow-y-auto lg:pr-2"
            aria-label="Video playlist"
          >
            {videos.map((video, index) => {
              const isActive = video.id === activeVideo.id;

              return (
                <li key={video.id}>
                  <button
                    type="button"
                    onClick={() => setActiveId(video.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`group flex w-full gap-4 border p-3 text-left transition-colors ${
                      isActive
                        ? "border-accent bg-white shadow-sm"
                        : "border-ink/10 bg-white/70 hover:border-ink/20 hover:bg-white"
                    }`}
                  >
                    <div className="relative h-16 w-28 shrink-0 overflow-hidden bg-ink/5">
                      <Image
                        src={youtubeThumbnail(video.id)}
                        alt=""
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-accent/20"
                            : "bg-ink/0 group-hover:bg-ink/10"
                        }`}
                      >
                        <Play
                          className={`h-5 w-5 ${
                            isActive ? "text-accent" : "text-white drop-shadow"
                          }`}
                          fill="currentColor"
                          aria-hidden
                        />
                      </span>
                    </div>
                    <div className="min-w-0 flex-1 py-0.5">
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/40">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-1 font-medium leading-snug text-ink">
                        {video.title}
                      </p>
                      {video.description ? (
                        <p className="mt-1 line-clamp-2 text-sm text-ink/55">
                          {video.description}
                        </p>
                      ) : null}
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="overflow-hidden border border-ink/10 bg-black shadow-lg">
              <div className="relative aspect-video w-full">
                <iframe
                  key={activeVideo.id}
                  src={youtubeEmbedUrl(activeVideo.id)}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-serif text-2xl text-ink">
                  {activeVideo.title}
                </h3>
                {activeVideo.description ? (
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/60">
                    {activeVideo.description}
                  </p>
                ) : null}
              </div>
              <a
                href={youtubeWatchUrl(activeVideo.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
              >
                Open on YouTube
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
