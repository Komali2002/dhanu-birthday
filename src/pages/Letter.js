import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MESSAGE = `
Dear Dhanu 💕,

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
— Komaliii 💖
`;

export default function Letter({ onClose }) {
  const [opened, setOpened] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  // Typing effect
  useEffect(() => {
    if (!opened) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + MESSAGE[i]);
      i++;
      if (i === MESSAGE.length) clearInterval(interval);
    }, 50); // slower typing for emotional effect
    return () => clearInterval(interval);
  }, [opened]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 p-6 overflow-hidden">
      {!opened ? (
        <motion.div
          className="cursor-pointer"
          onClick={() => setOpened(true)}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-center mt-4 text-lg font-semibold text-pink-900">
            Click to Open 💌
          </p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ rotateX: -90, opacity: 0, scale: 0.95 }}
          animate={{ rotateX: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-2xl bg-[#fff8f0] rounded-2xl shadow-inner shadow-pink-200 p-10 font-serif leading-relaxed text-lg text-gray-800 relative"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          <div className="text-center text-3xl mb-4">💌</div>
          <pre className="whitespace-pre-wrap">{displayedText}</pre>

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 rounded-xl bg-pink-400 text-white font-bold hover:bg-pink-500"
          >
            Close Letter
          </button>
        </motion.div>
      )}

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateY(-300px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
