"use client";
import { useState } from "react";

export default function Home() {
  const [isAgeCorrect, setIsAgeCorrect] = useState<undefined | boolean>(
    undefined
  );
  function checkAge() {
    const age = document.getElementById("age") as HTMLInputElement;
    if (age.value === "19") {
      setIsAgeCorrect(true);
    } else {
      setIsAgeCorrect(false);
    }
  }

  return (
    <section className="flex flex-col items-center text-center justify-center h-screen p-3">
      <h1>Aqui vai precisar vir um gif meu não tem como</h1>
      <h1 className="text-2xl font-semibold mb-2">Olá, meu amor!</h1>
      <h1 className="text-lg font-medium mb-4">
        Bem vinda a um pedaço do seu aniversário
      </h1>
      <p className="font-medium mb-3">
        Bom, vamos começar. Mas antes, eu preciso checar uma coisa
      </p>
      <p className="font-bold">quantos anos você tem?</p>
      <span className="mb-2">(Apenas números)</span>
      <p
        className={`text-red-600 font-extrabold mb-1 ${
          isAgeCorrect === undefined ? "hidden" : isAgeCorrect ? "hidden" : ""
        }`}
      >
        Tem certeza?
      </p>
      <input
        id="age"
        type="text"
        className="bg-gray-200 rounded-lg text-center py-3 mb-3"
      />
      <button
        className="text-white bg-blue-950 rounded-lg px-4 py-3 mb-2"
        onClick={checkAge}
      >
        Confirmar
      </button>
      <div
        className={`${
          isAgeCorrect === undefined ? "hidden" : isAgeCorrect ? "" : "hidden"
        }`}
      >
        <h1 className="mb-4">Maravilha! Vamos continuar então</h1>
        <a
          href="/etapa2"
          className="bg-green-500 text-white rounded-lg px-4 py-3"
        >
          Ir para a próxima etapa
        </a>
      </div>
    </section>
  );
}
