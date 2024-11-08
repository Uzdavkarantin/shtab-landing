export const About = () => {
  return (
    <div className="bg-primary p-4 py-10" id="about">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col mb-10">
          <div className="md:w-1/3 w-full mb-10">
            <h1 className="flex items-center text-primary-foreground uppercase">
              <div className="bg-primary-foreground w-5 h-[1px] mr-2"></div>
              Biz haqimizda
            </h1>
          </div>
          <div className="lg:w-2/3 w-full text-white">
            <h1 className="sm:text-4xl text-3xl mb-5">
              Markaziy eksport shtabining asosiy vazifalari:
            </h1>

            <div className="flex flex-wrap">
              <div className="flex flex-wrap w-full">
                <div className="md:py-6">
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">VAZIFA 1</h2>
                      <p className="leading-relaxed">
                        Meva – sabzavot va oziq-ovqat mahsulotlarining xorijdagi narxlari
                        to&apos;g&apos;risida ma&apos;lumotlarni umumlashtirish va hududiy shtablar
                        orqali eksportchi korxonalarga yetkazish
                      </p>
                    </div>
                  </div>
                  <div className="flex relative pb-12">
                    <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">VAZIFA 2</h2>
                      <p className="leading-relaxed">
                        Xorijiy import qiluvchi korxonalar ro&apos;yxatlarini shakllantirish
                      </p>
                    </div>
                  </div>
                  <div className="flex relative">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary inline-flex items-center justify-center text-primary relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div className="flex-grow pl-4">
                      <h2 className="font-bold title-font text-sm mb-1 tracking-wider">VAZIFA 3</h2>
                      <p className="leading-relaxed">
                        Xorijiy davlatlardagi yirik ulgurji markazlari to&apos;g&apos;risidagi
                        ma&apos;lumotlarni olish va ulardagi qishloq xo&apos;jaligi mahsulotlari
                        savdosi bilan shug&apos;ullanuvchi savdo agentlarining ro&apos;yxatini
                        shakllantirish
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
