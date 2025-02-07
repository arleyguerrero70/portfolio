import React from "react";

interface HeroProps {
  title: string;
}

const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <section className="bg-secondary-black my-2 mx-2 rounded-[10px] md:mt-20 md:mx-0">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>

            <div className="max-w-lg md:max-w-none">
              <h2 className="text-3xl font-semibold text-primary-arlo sm:text-4xl">
                ¡Hola! Soy Arley Guerrero
              </h2>
              <h1 className="text-2xl font-semibold text-primary-arlo sm:text-3xl">
                Desarrollador Frontend en VTEX & Shopify
              </h1>
              <p className="mt-4 text-m text-primary-white --font-urbanist sm:text-base">

                Tengo más de <b>3 años de experiencia</b> en la creación y evolución de ecommerce.
                <br />
                Mi enfoque es desarrollar interfaces optimizadas y escalables
                para mejorar la conversión, el rendimiento y la experiencia de usuario.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img
              src="src/assets/Home/arley_guerrero_hero.jpg"
              className="rounded-[50%] grayscale hover:grayscale-0 transition-all duration-300"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
