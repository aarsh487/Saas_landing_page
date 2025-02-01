"use client";
import { Button } from "@/components/Button";
import React, { useEffect } from "react";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import { useAnimate, motion } from "motion/react";

export const Hero = () => {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);

    rightDesignAnimate([
        [
            rightDesignScope.current,
            { opacity: 1 },
            { duration: 0.5, delay: 1.5 },
          ],
          [ rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 } ]
    ])
  }, []);
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -100, y: 100 }}
          drag
          className="absolute -left-32 top-16 lg:block hidden"
        >
          <Image src={designExample1Image} draggable='false' alt="design example image" />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={ { opacity: 0, x: 100, y: 100 } }
          drag
          className="absolute -right-64 -top-16 lg:block hidden"
        >
          <Image src={designExample2Image} draggable='false' alt="design example image" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨$7.5M seed round raised
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools should&apos;t slow you down. Layers combines powwerful
          features with an intuitive interface that keeps you in your creative
          flow
        </p>
        <form className="flex border border-white/50 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};
