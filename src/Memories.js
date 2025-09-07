import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PAGES = [
  {
    type: "cover",
    content: "Once upon a time in 2016, two friends started a journey that would last forever 💖",
  },
  {
    type: "year",
    year: 2016,
    img: "/photos/2016.jpeg",
    caption: "The beginning of our amazing friendship 💖",
  },
  {
    type: "year",
    year: 2017,
    img: "/photos/2017.jpeg",
    caption: "Our friendship got stronger and we became so close that our teachers tried to make us sit separately 😆",
  },
  {
    type: "year",
    year: 2018,
    img: "/photos/2018.jpeg",
    caption:
      "Fighting just before our birthdays, still talking on birthdays, bringing each other lunch boxes, feeling jealous for being with other friends, complaining to the teacher — can’t forget all these moments 😅❤️",
  },
  {
    type: "year",
    year: 2019,
    img: "/photos/2019_2.jpeg",
    caption: "We got separated for intermediate, but this didn’t stop our friendship. Always calling and meeting whenever we could 📞💛",
  },
  {
    type: "year",
    year: 2020,
    img: "/photos/2020.jpeg",
    caption: "Even though we were apart, we kept our bond alive. Friendship survived all distances 💪💖",
  },
  {
    type: "year",
    year: 2021,
    img: "/photos/2021.jpeg",
    caption:
      "We met only once or twice the whole year, but the birthday you celebrated for me was one of my best 🎉✨ Thank you for always trying to do your best for me 💕",
  },
  {
    type: "year",
    year: 2022,
    img: "/photos/2022.jpeg",
    caption: "Another year of fun memories, laughter, and small joys together 😄🌸",
  },
  {
    type: "year",
    year: 2023,
    img: "/photos/2023.jpeg",
    caption: "Celebrating friendship, adventures, and countless happy moments 🥰🎉",
  },
  {
    type: "year",
    year: 2024,
    img: "/photos/2024.jpeg",
    caption: "Growing stronger together every year, cherishing all the little memories 🌹💛",
  },
  {
    type: "year",
    year: 2025,
    img: "/photos/2025.jpeg",
    caption: "This year, celebrating YOU in the best way 🎂💖 Let’s be together for a lifetime ❤️",
  },
  {
    type: "letter",
    content: `Dear Dhanu 💕,

I honestly don’t even know where to start.From the very beginning, you’ve been my best friend — and I can say this without doubt:
 you’ll always be my first priority among friends.

Even though we technically met in 8th class, it never felt like just “school friendship.” You’ve always been there for me, doing everything you could —
 even the tiniest things — just to make me feel happy. And that’s what makes you so, so special to me.

2016 was where it all started 💖. By 2017, our friendship had grown so much that even teachers tried to separate us — but we both know nothing could stop us 😆.
 2018 was just chaos in the best way… fighting just before our birthdays, but still making up and talking on the day, sharing lunch boxes,
  you being jealous when I spent time with other friends, and even complaining to teachers if they scolded me 😅.

2019 and 2020 were tougher, since we got separated for intermediate. But even then, we still tried to call each other whenever we could, and met whenever we got the chance.
 That’s how I know our friendship is real — distance couldn’t break it 💛.

2021 was different again… we hardly met, maybe once or twice, but that birthday you celebrated for me will always be one of my favorites 🎉✨.
 You always tried your best for me, no matter what, and I can never thank you enough for that 💕.

2022, 2023, 2024 — each of those years were filled with so many little things.
 Inside jokes, random laughs, celebrations, small moments that just made me realize how lucky I am to have you in my life 😄🌸🥰🌹.

And now 2025… this year, I just want to celebrate our friendship.
 🎂💖 Thank you for being my best friend through everything, for sticking with me all these years. And… let’s promise to stay like this forever, for a lifetime ❤️.

You’ve been my best friend from 2016 to now, and I know that no matter what, nothing can change that.
 You’ve always been there since 8th class, trying to do everything you could for me, even in small ways — and I’ve never taken that for granted.
 
I just want you to know… you’re irreplaceable. And I’m so, so grateful for you.

With all my love,
— Komaliii 💖`,
  },
  {
    type: "end",
    content: "✨ The End… but our story continues forever ✨",
  },
];

export default function Memories() {
  const [index, setIndex] = useState(0);

  const nextPage = () => setIndex((prev) => Math.min(prev + 1, PAGES.length - 1));
  const prevPage = () => setIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-yellow-100 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.7 }}
          className="text-center bg-white/70 p-6 rounded-2xl shadow-2xl w-[450px] min-h-[550px] flex flex-col items-center justify-center"
        >
          {PAGES[index].type === "cover" && (
  <div className="flex flex-col items-center justify-center">
    {/* Main Title */}
    <h1 className="text-3xl font-bold mb-4 text-pink-700">
      {PAGES[index].content}
    </h1>

    {/* Subtitle */}
    <p className="text-lg italic text-purple-600 mb-6">
      ✨ A Friendship Story ✨
    </p>

    {/* Emojis / Decorative Row */}
    <div className="text-3xl space-x-3">
      <span>👩‍🤝‍👩</span>
      <span>🌸</span>
      <span>💖</span>
      <span>🌟</span>
    </div>

    <img
  src="/photos/friendship.png"
  alt="Friendship Illustration"
  className="friendship-img"
/>

  </div>
)}


          {PAGES[index].type === "year" && (
            <>
              <h1 className="text-3xl font-bold mb-3">{PAGES[index].year}</h1>
              <img
  src={PAGES[index].img}
  alt={`Memory ${PAGES[index].year}`}
  className="memory-img"
/>

              <p className="text-lg italic">{PAGES[index].caption}</p>
            </>
          )}

          {PAGES[index].type === "letter" && (
            <>
              <h1 className="text-3xl font-bold mb-4">💌 A Letter For You</h1>
              <p className="text-left whitespace-pre-line leading-relaxed">{PAGES[index].content}</p>
            </>
          )}

          {PAGES[index].type === "end" && (
            <h1 className="text-3xl font-bold">{PAGES[index].content}</h1>
          )}
        </motion.div>
      </AnimatePresence>

    {/* Prev Button */}
<button
  onClick={prevPage}
  disabled={index === 0}
  className={`nav-btn prev-btn ${index === 0 ? "disabled" : ""}`}
>
  ⬅
</button>

{/* Next Button */}
<button
  onClick={nextPage}
  disabled={index === PAGES.length - 1}
  className={`nav-btn next-btn ${index === PAGES.length - 1 ? "disabled" : ""}`}
>
  ➡
</button>

    </div>
  );
}
