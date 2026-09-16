"use client";

import Image from "next/image";
import { useState } from "react";

export default function ChildhoodReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="childhood-section">
      <div
        className={`childhood-card ${revealed ? "is-revealed" : ""}`}
        onClick={() => setRevealed(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            setRevealed(true);
          }
        }}
      >
        {!revealed ? (
          <>
            <p className="eyebrow">Our little beginnings</p>

            <div className="childhood-photos">
              <div className="childhood-photo">
                <Image
                  src="/Wedding-Invitation/images/ashwarya-childhood.jpeg"
                  alt="Ashwarya as a child"
                  width={500}
                  height={600}
                />
              </div>

              <div className="childhood-photo">
                <Image
                  src="/Wedding-Invitation/images/deepak-childhood.jpeg"
                  alt="Deepak as a child"
                  width={500}
                  height={600}
                />
              </div>
            </div>

            <h2>These kids are getting married.</h2>
            <p className="tap-hint">Tap to see them grown up ↗</p>
          </>
        ) : (
          <>
            <p className="eyebrow">Look at them now</p>

            <div className="couple-photo">
              <Image
                src="/Wedding-Invitation/images/couple.jpeg"
                alt="Ashwarya and Deepak together"
                width={900}
                height={700}
              />
            </div>

            <h2>And this is where their story comes together.</h2>
            <p className="couple-names">Deepak &amp; Ashwarya</p>
          </>
        )}
      </div>
    </section>
  );
}