"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { apiRequest } from "@/lib/api";
import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialsCarousel() {
  const [testimonials, setTestimonials] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function loadTestimonials() {
      try {
        const data = await apiRequest("/api/testimonials", {
          cache: "no-store",
          signal: controller.signal,
        });

        if (data?.success && Array.isArray(data.testimonials)) {
          setTestimonials(data.testimonials);
        }
      } catch (error) {
        if (error.name !== "AbortError") console.error("Testimonials fetch error:", error);
        setTestimonials([]);
      }
    }

    loadTestimonials();
    return () => controller.abort();
  }, []);

  if (!testimonials || testimonials.length < 5) return null;

  return (
    <section className="overflow-hidden bg-[#075409] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-white/90 sm:text-base">Words of Trust</p>
          <h2 className="mt-4 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] md:text-[32px]">Trusted by People Like You</h2>
        </div>
      </div>

      <Swiper
        className="testimonials-swiper mt-12 w-full !pb-12"
        modules={[Autoplay, Pagination]}
        loop
        centeredSlides
        speed={700}
        spaceBetween={20}
        slidesPerView="auto"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        grabCursor
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="!h-auto !w-full sm:!w-[60vw] lg:!w-[48vw] lg:!max-w-[720px]" key={testimonial._id}>
            <article className="mx-5 flex h-full min-h-[250px] flex-col rounded-lg bg-white px-5 py-4 text-[#242424] shadow-sm sm:mx-0 sm:min-h-[280px] sm:px-7 sm:py-5 md:min-h-[300px] md:px-8 md:py-6">
              <span className="font-serif text-4xl font-bold leading-none text-black sm:text-5xl" aria-hidden="true">“</span>
              <p className="text-sm leading-[1.7] text-[#555555] sm:mt-2 sm:text-base sm:leading-[1.85]">{testimonial.quote}</p>
              <div className="mt-auto flex items-center gap-3 pt-5 sm:gap-4 sm:pt-8">
                <span className="relative size-11 shrink-0 overflow-hidden rounded-full bg-[#eef0ff]">
                  <Image src={testimonial.imageUrl} alt="" fill sizes="44px" className="object-cover" />
                </span>
                <p className="text-lg font-semibold text-[#181818] sm:text-xl">{testimonial.name}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
