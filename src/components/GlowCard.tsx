import React, { useRef } from "react";
import Image from "next/image";

interface GlowCardProps {
  card: {
    imgPath: string;
    title: string;
    desc: string;
    review: string;
    logoPath: string;
    responsibilities: string[];
  };
  index: number;
  children: React.ReactNode;
}

const GlowCard = ({ card, children, index }: GlowCardProps) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (index: number) => (e: React.MouseEvent) => {
    const card = cardRefs.current[index];

    if (!card) return;

    // Get the mouse position relative to card
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    //calc the angle from the center of the card
    let angle: number = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

    angle = (angle + 360) % 360;

    card.style.setProperty("--start", (angle + 60).toString());
  };
  return (
    <div
      ref={(el: HTMLDivElement | null) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <Image
            key={i}
            src="/images/star.png"
            alt="star"
            className="size-4"
            width={400}
            height={400}
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50 text-lg">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
