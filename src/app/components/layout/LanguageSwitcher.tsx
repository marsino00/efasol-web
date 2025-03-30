"use client";

type LanguageSwitcherProps = {
  currentLocale: string;
  switchLocale: (newLocale: string) => void;
};

export default function LanguageSwitcher({
  currentLocale,
  switchLocale,
}: LanguageSwitcherProps) {
  return (
    <div className="fixed bottom-4 right-4 flex space-x-2 z-50">
      <button
        disabled={currentLocale === "ca"}
        onClick={() => currentLocale !== "ca" && switchLocale("ca")}
        className={`px-4 py-2 rounded shadow transition ${
          currentLocale === "ca"
            ? "bg-blue-600 text-white cursor-not-allowed"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
      >
        CA
      </button>
      <button
        disabled={currentLocale === "es"}
        onClick={() => currentLocale !== "es" && switchLocale("es")}
        className={`px-4 py-2 rounded shadow transition ${
          currentLocale === "es"
            ? "bg-blue-600 text-white cursor-not-allowed"
            : "bg-gray-300 text-gray-700 hover:bg-gray-400"
        }`}
      >
        ES
      </button>
    </div>
  );
}
