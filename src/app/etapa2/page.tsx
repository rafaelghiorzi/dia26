"use client";

import { useState } from "react";

export default function Home() {
  const [style, setStyle] = useState({});

  const handleClick = () => {
    const x = Math.floor(Math.random() * window.innerWidth - 10);
    const y = Math.floor(Math.random() * window.innerHeight - 10);
    setStyle({ position: "absolute", top: `${y}px`, left: `${x}px` });
  };
  return (
    <main className="flex flex-col h-screen items-center justify-center text-center">
      <h1 className="text-xl font-semibold">Outra coisa super importante!</h1>
      <h1 className="text-lg font-medium mb-4">
        Você é amor da minha vida e eu te amarei para sempre
      </h1>

      <p className="italic text-gray-600 mb-2">Escolha uma resposta</p>
      <a
        href="/etapa()"
        className="bg-blue-900 text-white rounded-lg py-2 px-3 mb-2"
      >
        Eu também te amarei pra sempre
      </a>
      <button
        className="bg-orange-400 rounded-lg py-2 px-3"
        style={style}
        onClick={handleClick}
      >
        Talvez eu goste de você
      </button>
    </main>
  );
}
