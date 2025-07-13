import React from "react";

interface CardsProps {
  title: string;
}

const Cards: React.FC<CardsProps> = ({ title }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 m-2 md:m-0 md:px-2 lg:px-0">
        <article className="relative overflow-hidden rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
          <img
            alt=""


            src="/assets/Cards/sie7e_ecuador.jpg"
            className="absolute inset-0 h-full w-full object-cover"

          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-30 sm:pt-48 lg:pt-64">
            <div className="p-4 pt-30 sm:p-6">
                <h3 className="mt-0.5 text-lg text-secondary font-semibold ">
                  SIE7E Ecuador
                </h3>
              <p className="line-clamp-5 text-sm/relaxed text-white/95 --font-urbanist">
                En este e-commerce nos enfocamos en hacer uso bloques nativos para tener <span className="font-semibold">optimizar la experiencia de usuario y velocidad de carga</span>.
              </p>

              <a href="https://www.sie7e.ec/" target="_blank" rel="noopener noreferrer" className="text-white text-center block mt-4 border-b border-white w-auto ">Visitar la tienda</a>
              <span className="absolute top-4 right-4 text-white text-sm bg-primary-arlo px-2 py-1 rounded-full">Vtex IO</span>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
          <img
            alt=""
            src="/assets/Cards/wiseman_colombia.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-30 sm:pt-48 lg:pt-64">
            <div className="p-4 pt-30 sm:p-6">
                <h3 className="mt-0.5 text-lg text-secondary font-semibold text-right md:text-left">
                  Wiseman Colombia
                </h3>
              <p className="line-clamp-5 text-sm/relaxed text-white/95  text-right md:text-left">
                Teniamos el reto de crear un par de componentes personalizados sin afectar el rendimiento de la tienda.  <b>¡Lo logramos!</b>
              </p>
              <a href="https://www.wiseman.com.co/" target="_blank" rel="noopener noreferrer" className="text-white text-center block mt-4 border-b border-white w-auto ">Visitar la tienda</a>
              <span className="absolute top-4 right-4 text-white text-sm bg-primary-arlo px-2 py-1 rounded-full">Vtex IO</span>
            </div>
          </div>
        </article>
        <article className="relative overflow-hidden rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-300">
          <img
            alt=""
            src="/assets/Cards/tigo_colombia.jpg"
            className="absolute inset-0 h-full w-full object-cover"

          />
          <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-30 sm:pt-48 lg:pt-64">
            <div className="p-4 pt-30 sm:p-6">
                <h3 className="mt-0.5 text-lg text-secondary font-semibold ">
                  TIGO Colombia
                </h3>
              <p className="line-clamp-5 text-sm/relaxed text-white/95 ">

                Sin lugar a dudas ha sido mi mayor reto profesional. <span className="font-semibold">Estoy grabando un episodio de Podcast</span> para compartir esta experiencia
              </p>
              <a href="https://compras.tigo.com.co/" target="_blank" rel="noopener noreferrer" className="text-white text-center block mt-4 border-b border-white w-auto ">Visitar la tienda</a>
              <span className="absolute top-4 right-4 text-white text-sm bg-primary-arlo px-2 py-1 rounded-full">Vtex Legacy</span>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default Cards;
