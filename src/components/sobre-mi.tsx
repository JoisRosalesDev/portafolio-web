"use client";

import { WobbleCard } from "@/components/ui/wobble-card";

export function WobbleCardDemo() {
  return (
    <div id="sobre-mi" className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Intereses
          </h2>
          <p className="mt-4 text-start  text-base/6 text-neutral-200">
            Busco una oportunidad de práctica profesional donde pueda aplicar
            mis conocimientos, seguir aprendiendo y asumir nuevos retos. Mi
            objetivo es aportar valor a los proyectos en los que participe y
            crecer como profesional dentro del ámbito tecnológico.
          </p>
        </div>
        <img
          src="/src/assets/tipo-programando.webp"
          width={400}
          height={400}
          alt="tipo-programando"
          className="absolute -right-4 grayscale filter -bottom-30 md:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Virtudes
        </h2>
        <ul className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200 list-disc list-inside">
          <li>Empatía</li>
          <li>Adaptabilidad</li>
          <li>Pensamiento Crítico</li>
          <li>Comunicación efectiva</li>
          <li>Resolución de problemas</li>
        </ul>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm lg:max-w-xl">
          <h2 className="max-w-sm md:max-w-lg  text-left  text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Formación Académica
          </h2>
          <p className="mt-4 text-start  text-base/6 text-neutral-200">
            Estudiante de Ingeniería en Informática, cursando el 8º semestre.
            Con experiencia en proyectos académicos colaborativos bajo
            metodologías ágiles (Scrum), desarrollando habilidades de trabajo en
            equipo, resolución de problemas y adaptación. Buen manejo de inglés.
          </p>
        </div>
        <img
          src="/src/assets/tipo-estudiando.webp"
          width={400}
          height={400}
          alt="tipo-estudiando"
          className="absolute -right-4 md:-bottom-10 lg:-bottom-30 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
