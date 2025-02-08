import { useEffect, useState } from 'react';

interface BrandSliderProps {
  brands: {
    id: number;
    image: string;
    url: string;
    name: string;
  }[];
  autoPlayInterval?: number;
}

const Slider: React.FC<BrandSliderProps> = ({ brands, autoPlayInterval = 2000 }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <>
    <div>
      <h3 className='text-3xl font-semibold text-primary-arlo text-center my-6 px-2 sm:text-4xl'>También he participado en la evolución de estas marcas</h3>
    </div>
    <div className="slider-wrapper ">
      <div className="slider-container">
        <div 
          className={`slider-track ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...brands, ...brands].map((brand, index) => (
            <a
              key={`${brand.id}-${index}`}
              href={brand.url}
              className="brand-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={brand.image} alt={brand.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Slider;
