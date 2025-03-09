"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-3">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-800 mb-4 font-semibold">
          PROGRAMA KIT DIGITAL FINANÇAT PELS FONS NEXT GENERATION DEL MECANISME
          DE RECUPERACIÓ I RESILIÈNCIA
        </p>

        <div className="flex flex-wrap justify-center items-center gap-20">
          <Image
            src="/l1.png"
            alt="Imagen 1"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src="/l2.png"
            alt="Imagen 2"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src="/l3.png"
            alt="Imagen 3"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src="/l4.png"
            alt="Imagen 4"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src="/l5.png"
            alt="Imagen 5"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
          <Link href="/aviso-legal" className="hover:text-gray-900">
            Aviso legal
          </Link>
          <Link href="/politica-privacidad" className="hover:text-gray-900">
            Política de privacidad
          </Link>
          <Link href="/politica-cookies" className="hover:text-gray-900">
            Política de Cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
