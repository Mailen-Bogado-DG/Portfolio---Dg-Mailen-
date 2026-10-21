"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mebPhotos } from "@/data/meb-photos";

const media = [
  ...mebPhotos.slice(0, 8).map(photo => ({ ...photo, video: false })),
  { src: "/images/projects/meb/video-1.mp4", alt: "Video de Meb Personalizados", video: true },
  ...mebPhotos.slice(8, 24).map(photo => ({ ...photo, video: false })),
  { src: "/images/projects/meb/video-2.mp4", alt: "Video de productos personalizados", video: true },
  ...mebPhotos.slice(24).map(photo => ({ ...photo, video: false })),
];

export function MebCarousel() {
  const [paused, setPaused] = useState(false);
  const region = useRef<HTMLElement>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPaused(motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const videos = region.current?.querySelectorAll("video");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        video.muted = true;
        if (entry.isIntersecting && !paused) void video.play().catch(() => {});
        else video.pause();
      });
    });
    videos?.forEach(video => observer.observe(video));
    return () => observer.disconnect();
  }, [paused]);

  return <section ref={region} className="meb-carousel" aria-label="Fotos y videos de Meb Personalizados" aria-roledescription="carrusel">
    <div className="meb-carousel-stage">
      <div className="meb-carousel-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
        {[0, 1].map(copy => <div className="meb-carousel-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
          {media.map(item => <div className="meb-carousel-slide" key={item.src}>
            {item.video ? <video src={item.src} muted loop playsInline preload="metadata" aria-label={item.alt} />
              : <Image src={item.src} alt={copy === 0 ? item.alt : ""} fill sizes="(max-width: 600px) 85vw, 600px" />}
          </div>)}
        </div>)}
      </div>
    </div>
    <div className="meb-carousel-controls">
      <button type="button" onClick={() => setPaused(current => !current)}>{paused ? "Reanudar movimiento" : "Pausar movimiento"}</button>
    </div>
  </section>;
}
