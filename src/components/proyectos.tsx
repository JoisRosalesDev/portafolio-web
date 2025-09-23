"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import html5Icon from "@/assets/html5.svg";
import tailwindIcon from "@/assets/tailwindcss.svg";
import jsIcon from "@/assets/javascript.svg";
import tsIcon from "@/assets/typescript.svg";
import reactIcon from "@/assets/react_dark.svg";
import githubIcon from "@/assets/github_dark.svg";
import astroIcon from "@/assets/astro_dark.svg";
const people = [
  {
    id: 1,
    name: "HTML5",
    image: html5Icon,
  },
  {
    id: 2,
    name: "Tailwind CSS",
    image: tailwindIcon,
  },
  {
    id: 3,
    name: "JavaScript",
    image: jsIcon,
  },
  {
    id: 4,
    name: "TypeScript",
    image: tsIcon,
  },
  {
    id: 5,
    name: "React",
    image: reactIcon,
  },

  {
    id: 6,
    name: "Astro",
    image: astroIcon,
  },
  {
    id: 7,
    name: "GitHub",
    image: githubIcon,
  },
];

export function ThreeDCardDemo() {
  return (
    <>
      <div id="proyectos" className="grid lg:grid-cols-2 max-w-6xl mx-auto">
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                YeezyVerse
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-start"
              >
                Sitio dedicado a examinar la influencia y contribución cultural
                de Kanye West en la música contemporánea.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/img/yeezyverse.webp"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://yeezyverse-jois.vercel.app/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  ir a la web →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/JoisRosalesDev/yeezyverse"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Repositorio
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        <div>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                My Condition
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 text-start"
              >
                Herramienta que identifica tu condición de salud y recomienda
                suplementos Omnilife ideales para tu bienestar.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/img/mycondition.webp"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://joisrosalesdev.github.io/mycondition/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  ir a la web →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/JoisRosalesDev/mycondition"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Repositorio
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}

export function AnimatedTooltipPreview() {
  return (
    <div
      id="tecnologias"
      className="flex flex-row items-center justify-center mb-10 w-full"
    >
      <AnimatedTooltip items={people} />
    </div>
  );
}