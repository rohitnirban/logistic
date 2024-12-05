'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Fleet Manager',
    company: 'LogiTech Solutions',
    testimonial:
      'DriveSense has completely transformed how we monitor and manage our fleet. The real-time tracking and AI insights have saved us countless hours and reduced costs significantly.',
    image: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Operations Head',
    company: 'CargoLink',
    testimonial:
      'The tamper-proof hardware and ULIP API integration are game-changers. DriveSense ensures reliability and seamless connectivity for our logistics network.',
    image: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'IT Manager',
    company: 'Global Solutions Inc.',
    testimonial:
      'AI-driven insights from DriveSense have optimized our routes and reduced delays by 30%. Highly recommend it for any logistics team looking to innovate.',
    image: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
  },
  {
    id: 4,
    name: 'Raj Patel',
    role: 'Supply Chain Director',
    company: 'FreshFarm Logistics',
    testimonial:
      'The mobile cold storage solutions provided by DriveSense have drastically reduced our perishable wastage. A must-have for the food supply chain industry.',
    image: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
  },
  {
    id: 5,
    name: 'Aisha Khan',
    role: 'CEO',
    company: 'EcoTrans Solutions',
    testimonial:
      'DriveSense’s eco-friendly technology aligns perfectly with our sustainability goals. The ULIP API integration has made logistics management a breeze.',
    image: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg',
  },
];

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-10">
          What Our Clients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-4"
                    />
                    <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                      "{testimonial.testimonial}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-gray-800 dark:text-gray-100">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            <span className="sr-only">Next slide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
