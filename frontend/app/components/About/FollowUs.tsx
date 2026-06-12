"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  "/instagram/1.jpg",
  "/instagram/2.jpg",
  "/instagram/3.jpg",
  "/instagram/4.jpg",
  "/instagram/1.jpg",
  "/instagram/2.jpg",
];

export default function FollowUs() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mb-10 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
          Social Media
        </p>

        <h2 className="mt-3 text-4xl font-bold">Follow Us on Instagram</h2>

        <p className="mt-4 text-gray-500">
          Stay updated with our newest arrivals and gift ideas.
        </p>

        <Link
          href="https://instagram.com/geftorashop"
          target="_blank"
          className="mt-6 inline-block font-semibold underline"
        >
          @geftorashop
        </Link>
      </div>

      <motion.div
        className="flex w-max gap-6"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 25,
        }}
      >
        {[...posts, ...posts].map((post, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            className="relative h-72 w-72 flex-shrink-0 overflow-hidden rounded-3xl"
          >
            <Image
              src={post}
              alt={`Instagram post ${index + 1}`}
              fill
              className="object-cover transition duration-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
