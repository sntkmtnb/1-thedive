"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// セクションデータ
const sections = [
  {
    id: "section1",
    image: "/assets/img2.png",
    alt: "土の中の世界",
    heading: "土の下の賑やかな隣人たち。",
    body: `私たちが歩く地面の皮一枚下では、
根っこたちが手をつなぎ、
情報のやり取りをしています。

冬眠するカエル、働き者のモグラ、
そして誰かが隠したタイムカプセル。

土の匂いは、生命の匂いです。`,
    textColor: "text-[#f3f3f3]",
    textColorMd: "md:text-[#573c28]",
  },
  {
    id: "section2",
    image: "/assets/img3.png",
    alt: "化石の世界",
    heading: "時を止めた、石の図書館。",
    body: `さらに深く潜りましょう。

ここでは、時間は
「流れる」ものではなく
「積み重なる」もの。

一億年前の雨の跡、王様のいない王冠、
そして名前のない恐竜の骨。

静寂の中で、彼らは
今も物語を語り続けています。`,
    textColor: "text-[#f3f3f3]",
    textColorMd: "md:text-[#573c28]",
  },
  {
    id: "section3",
    image: "/assets/img4.png",
    alt: "地底の洞窟",
    heading: "星のない夜空と、地底の海。",
    body: `岩盤を抜けた先に広がっていたのは、
巨大な空洞でした。

天井には水晶の星々が瞬き、
足元には冷たく澄んだ
湖が広がっています。

地上の喧騒はもう届きません。
聞こえるのは、水滴が落ちる音だけ。`,
    textColor: "text-[#f3f3f3]",
    textColorMd: "md:text-[#573c28]",
  },
  {
    id: "section4",
    image: "/assets/img5.png",
    alt: "地球の核",
    heading: "はじまりの熱。",
    body: `ついに、世界の底へ辿り着きました。

この圧倒的な赤。
肌を焦がすような熱気。
ここは地球の心臓。

すべての生命は、この熱から生まれ、
そして還ってくるのです。`,
    textColor: "text-[#573c28]",
    textColorMd: "",
    isLight: true,
  },
];

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="w-full bg-[#E7DBB2]">
      {/* Hero Section */}
      <section className="section-wrapper">
        <div className="content-wrapper">
          <div className="image-container fade-in relative">
            <Image
              src="/assets/img1.png"
              alt="空と森のイラスト"
              width={1537}
              height={2731}
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, 800px"
            />
            {/* Title Overlay */}
            <div className="title-overlay">
              <h1 className="title-main">The Dive</h1>
              <p className="title-sub mt-2">根源への潜行</p>
            </div>
            {/* Text Overlay */}
            <div className="text-overlay">
              <h2 className="heading text-[#f3f3f3]">
                深く、もっと深く。
                <br />
                地球の心臓の音を聞きにいく。
              </h2>
              <p className="body-text text-[#f3f3f3] opacity-90">
                見上げれば空があるように、
                <br />
                足元には、果てしない
                <br />
                奥行きが広がっています。
                <br />
                <br />
                そこは、太陽の届かない場所。
                <br />
                <br />
                けれど、決して暗闇だけの
                <br />
                世界ではありません。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section) => (
        <section key={section.id} className="section-wrapper">
          <div className="content-wrapper">
            <div className="image-container fade-in relative">
              <Image
                src={section.image}
                alt={section.alt}
                width={1537}
                height={2732}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              {/* Text Overlay */}
              <div
                className={`text-overlay ${section.isLight ? "text-overlay-light" : ""}`}
              >
                <h2
                  className={`heading ${section.textColor} ${section.textColorMd}`}
                >
                  {section.heading}
                </h2>
                <p
                  className={`body-text ${section.textColor} ${section.textColorMd} opacity-90`}
                >
                  {section.body.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < section.body.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">© 2025 newhello.jp</p>
      </footer>
    </main>
  );
}
