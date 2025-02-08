import React from "react";

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <footer className="bg-secondary-black pb-30 md:pb-2">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="flex justify-center">
            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Este sitio web se ha inspirado en algunos contenedores de{" "}

              <a href="https://www.hyperui.dev/" className="text-primary-arlo">
                HyperUI 🚀
              </a>{" "}
              | ArloDev © 2025.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
