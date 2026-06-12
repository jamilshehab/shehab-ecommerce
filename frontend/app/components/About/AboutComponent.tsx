"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MotionWrapper from "../common/MotionWrapper";

export default function AboutComponent() {
  return (
    <MotionWrapper>
      <section className="bg-white py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="text-sm uppercase tracking-[0.3em] text-gray-500">
                About Giftora
              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Making Every Gift More Meaningful
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Giftora brings together carefully selected gifts, Lebanese
                souvenirs, and unique products designed to make every occasion
                memorable. Whether you're celebrating a birthday, holiday, or
                simply surprising someone special, you'll find something that
                leaves a lasting impression.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                We believe that the best gifts are the ones that create
                memories, and our goal is to make finding them simple and
                enjoyable.
              </p>

              <Link
                href="/shop"
                className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-white transition hover:opacity-90"
              >
                Shop Now
              </Link>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] overflow-hidden rounded-3xl"
            >
              <Image
                src="/instagram/1.jpg"
                alt="Giftora"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
}
