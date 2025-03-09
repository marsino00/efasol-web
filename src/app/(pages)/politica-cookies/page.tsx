// src/app/(pages)/politica-cookies/page.tsx
export default function PoliticaCookiesPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">POLÍTICA DE COOKIES</h1>

        <h2 className="text-xl font-semibold mb-2">1. ¿Qué son las Cookies?</h2>
        <p className="mb-4">
          Las cookies son pequeños archivos de texto que se almacenan en el
          navegador del usuario cuando visita ciertas páginas web. Permiten a la
          web recordar información sobre tu visita (por ejemplo, idioma
          preferido, estadísticas de uso, etc.) para facilitar tu próxima visita
          y hacer el sitio más útil.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          2. Tipos de Cookies que Utilizamos
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Cookies técnicas o necesarias</strong>: Permiten la
            navegación y el uso de las funciones esenciales del Sitio. Sin estas
            cookies, el Sitio podría no funcionar correctamente.
          </li>
          <li>
            <strong>Cookies de preferencias o personalización</strong>:
            Recuerdan configuraciones como el idioma o la región para mejorar la
            experiencia del usuario.
          </li>
          <li>
            <strong>Cookies analíticas o de rendimiento</strong>: Recopilan
            información anónima sobre cómo los usuarios utilizan el Sitio con
            fines estadísticos, ayudándonos a mejorar la usabilidad.
          </li>
          <li>
            <strong>Cookies de terceros</strong>: Pueden ser instaladas por
            servicios externos (por ejemplo, Google Analytics, redes sociales)
            cuando el usuario interactúa con nuestro Sitio.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          3. Finalidad de las Cookies
        </h2>
        <ul className="list-disc list-inside mb-4">
          <li>Garantizar el correcto funcionamiento del Sitio.</li>
          <li>Recordar tus preferencias (idioma, configuración, etc.).</li>
          <li>
            Analizar el tráfico y el comportamiento de navegación para mejorar
            la calidad de nuestro servicio.
          </li>
          <li>
            Proporcionar contenido relevante y, en algunos casos, publicidad
            adaptada a tus intereses.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-2">
          4. Configuración y Desactivación de Cookies
        </h2>
        <p className="mb-4">
          El usuario puede permitir, bloquear o eliminar las cookies instaladas
          en su dispositivo a través de la configuración del navegador. Ten en
          cuenta que, al desactivar ciertas cookies, algunas funcionalidades del
          Sitio podrían verse afectadas.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Chrome:</strong>{" "}
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es"
              className="text-blue-600 underline"
            >
              Instrucciones
            </a>
          </li>
          <li>
            <strong>Firefox:</strong>{" "}
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies"
              className="text-blue-600 underline"
            >
              Instrucciones
            </a>
          </li>
          <li>
            <strong>Safari:</strong>{" "}
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              className="text-blue-600 underline"
            >
              Instrucciones
            </a>
          </li>
          <li>
            <strong>Edge:</strong>{" "}
            <a
              href="https://support.microsoft.com/es-es/help/4468242/microsoft-edge-browsing-data-and-privacy"
              className="text-blue-600 underline"
            >
              Instrucciones
            </a>
          </li>
        </ul>
        <p className="mb-4">
          Para más información sobre cómo gestionar o eliminar cookies, visita{" "}
          <a
            href="http://www.aboutcookies.org/"
            className="text-blue-600 underline"
          >
            www.aboutcookies.org
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mb-2">5. Cookies de Terceros</h2>
        <p className="mb-4">
          Algunas de nuestras páginas pueden mostrar contenido de terceros (por
          ejemplo, vídeos de YouTube, mapas de Google Maps) que pueden instalar
          sus propias cookies. Nosotros no tenemos control sobre la
          configuración de dichas cookies, por lo que te recomendamos revisar
          las políticas de los sitios correspondientes.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          6. Aceptación de la Política de Cookies
        </h2>
        <p className="mb-4">
          Al continuar navegando por nuestro Sitio, entendemos que aceptas el
          uso de cookies en las condiciones establecidas en esta Política de
          Cookies. Si en cualquier momento deseas retirar tu consentimiento,
          puedes eliminar las cookies almacenadas en tu navegador y modificar su
          configuración.
        </p>

        <h2 className="text-xl font-semibold mb-2">
          7. Actualizaciones y Cambios en la Política de Cookies
        </h2>
        <p className="mb-4">
          Nos reservamos el derecho de modificar esta Política de Cookies en
          cualquier momento para adaptarla a novedades legislativas o cambios en
          el funcionamiento del Sitio. Te recomendamos revisar periódicamente
          esta sección.
        </p>
      </div>
    </main>
  );
}
