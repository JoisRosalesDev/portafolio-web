"use client";

export function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-neutral-900/80">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex justify-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          © 2025{" "}
          <a href="https://github.com/JoisRosalesDev" className="hover:underline">
            Jois Rosales
          </a>
          . Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
}