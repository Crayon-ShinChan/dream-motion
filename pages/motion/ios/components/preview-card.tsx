"use client";

import { useEffect, useState, useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PreviewCard() {
  const [activeGame, setActiveGame] = useState(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActiveGame(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActiveGame(null);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <AnimatePresence>
        {activeGame ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="pointer-events-none absolute inset-0 z-10 bg-black/20 dark:bg-black/50"
            />
            <div className="absolute inset-0 grid place-items-center z-10">
              <motion.div
                layoutId={`card-${activeGame.title}`}
                className="max-w-lg flex h-fit mx-4 cursor-pointer flex-col items-start gap-4 overflow-hidden bg-white dark:bg-[#111110] p-4 rounded-xl dark:border dark:border-[#2a2a28]"
                ref={ref}
              >
                <div className="flex w-full items-center gap-4">
                  <motion.img
                    layoutId={`image-${activeGame.title}`}
                    height={56}
                    width={56}
                    alt="Game"
                    src={activeGame.image}
                    className="rounded-xl"
                  />
                  <div className="flex flex-grow items-center justify-between">
                    <div className="flex flex-col p-0">
                      <motion.h2
                        layoutId={`title-${activeGame.title}`}
                        className="font-medium text-sm"
                      >
                        {activeGame.title}
                      </motion.h2>
                      <motion.p
                        layoutId={`description-${activeGame.title}`}
                        className="text-sm text-[#63635d] dark:text-[#b5b3ad]"
                      >
                        {activeGame.description}
                      </motion.p>
                    </div>
                    <motion.button
                      layoutId={`button-${activeGame.title}`}
                      className="rounded-full bg-[#f1f0ef] dark:bg-[#222221] px-3 py-1 text-xs font-semibold text-[#007aff]"
                    >
                      Get
                    </motion.button>
                  </div>
                </div>
                <motion.p
                  layoutId={`long-description-${activeGame.title}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm text-[#63635d] dark:text-[#b5b3ad]"
                  transition={{ duration: 0.1 }}
                >
                  {activeGame.longDescription}
                </motion.p>
              </motion.div>
            </div>
          </>
        ) : null}
      </AnimatePresence>
      <ul className="relative flex flex-col w-full items-center my-12">
        {GAMES.map((game, index) => (
          <motion.li
            layoutId={`card-${game.title}`}
            key={game.title}
            onClick={() => setActiveGame(game)}
            className="rounded-lg flex px-8 w-full max-w-md cursor-pointer items-center gap-4 p-0"
          >
            <motion.img
              layoutId={`image-${game.title}`}
              height={56}
              width={56}
              alt="Game"
              src={game.image}
              className="rounded-xl"
            />
            <div
              className={cn(
                "flex flex-grow items-center justify-between",
                index === GAMES.length - 1
                  ? "border-none"
                  : "border-b border-[#d4d6d861] dark:border-[#2a2a28]"
              )}
            >
              <div className="flex flex-col py-4">
                <motion.h2
                  layoutId={`title-${game.title}`}
                  className="font-medium text-sm"
                >
                  {game.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${game.title}`}
                  className="text-sm text-[#63635d] dark:text-[#b5b3ad]"
                >
                  {game.description}
                </motion.p>
              </div>
              <motion.button
                layoutId={`button-${game.title}`}
                className="rounded-full bg-[#f1f0ef] dark:bg-[#222221] px-3 py-1 text-xs font-semibold text-[#007aff]"
              >
                Get
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>
    </>
  );
}

const GAMES = [
  {
    title: "The Oddysey",
    description: "Explore unknown galaxies.",
    longDescription:
      "Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png",
  },
  {
    title: "Angry Rabbits",
    description: "They are coming for you.",
    longDescription:
      "The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png",
  },
  {
    title: "Ghost town",
    description: "Find the ghosts.",
    longDescription:
      "You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp",
  },
  {
    title: "Pirates in the jungle",
    description: "Find the treasure.",
    longDescription:
      "You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png",
  },

  {
    title: "Lost in the mountains",
    description: "Find your way home.",
    longDescription:
      "You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.",
    image:
      "https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp",
  },
];
