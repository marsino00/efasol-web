// src/app/(pages)/aviso-legal/page.tsx
export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-gray-700">
        <h1 className="text-3xl font-bold mb-6">
          AVISO LEGAL Y CONDICIONES GENERALES DE USO
        </h1>

        {/* I. INFORMACIÓN GENERAL */}
        <h2 className="text-xl font-semibold mb-2">I. INFORMACIÓN GENERAL</h2>
        <p className="mb-4">
          En cumplimiento con el deber de información dispuesto en la Ley
          34/2002 de Servicios de la Sociedad de la Información y el Comercio
          Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los
          siguientes datos de información general de este sitio web:
        </p>
        <p className="mb-4">
          La titularidad de este sitio web,{" "}
          <a href="https://efasol.com/" className="text-blue-600 underline">
            https://efasol.com/
          </a>{" "}
          (en adelante, Sitio Web) la ostenta: Gastón Nelson Sanchez Mesa, con
          NIF: 72196387P, y cuyos datos de contacto son:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Dirección:</strong> Carrer Montsant, 6, 08272 Sant Fruitós
            de Bages, Barcelona, España
          </li>
          <li>
            <strong>Teléfono de contacto:</strong> +34 661 52 35 09
          </li>
          <li>
            <strong>Email de contacto:</strong> info@efasol.com
          </li>
        </ul>

        {/* II. TÉRMINOS Y CONDICIONES GENERALES DE USO */}
        <h2 className="text-xl font-semibold mb-2">
          II. TÉRMINOS Y CONDICIONES GENERALES DE USO
        </h2>
        <p className="mb-4">
          El objeto de las presentes Condiciones es regular el acceso y la
          utilización del Sitio Web. Se entenderá como Sitio Web la apariencia
          externa de los interfaces de pantalla, tanto de forma estática como
          dinámica, es decir, el árbol de navegación; y todos los elementos
          integrados en dichos interfaces (en adelante, Contenidos), así como
          todos aquellos servicios o recursos en línea que se ofrezcan a los
          Usuarios (en adelante, Servicios).
        </p>
        <p className="mb-4">
          Efasol se reserva la facultad de modificar, en cualquier momento y sin
          aviso previo, la presentación y configuración del Sitio Web y de los
          Contenidos y Servicios que en él pudieran estar incorporados. El
          Usuario reconoce y acepta que en cualquier momento Efasol pueda
          interrumpir, desactivar y/o cancelar cualquiera de estos elementos o
          el acceso a los mismos.
        </p>
        <p className="mb-4">
          El acceso al Sitio Web por el Usuario tiene carácter libre y, por
          regla general, es gratuito, salvo en lo relativo al coste de conexión
          a través de la red de telecomunicaciones suministrada por el proveedor
          de acceso.
        </p>
        <p className="mb-4">
          Algunos de los Contenidos o Servicios ofrecidos por Efasol o terceros
          pueden encontrarse sujetos a contratación previa, en cuyo caso se
          especificará de forma clara y se pondrá a disposición del Usuario las
          correspondientes condiciones generales o particulares.
        </p>
        <p className="mb-4">
          El acceso, navegación y uso del Sitio Web, así como la participación
          en espacios de interacción, confiere la condición de Usuario, por lo
          que, desde el inicio de la navegación, se aceptan todas las presentes
          Condiciones y sus futuras modificaciones.
        </p>

        {/* III. ACCESO Y NAVEGACIÓN: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD */}
        <h2 className="text-xl font-semibold mb-2">
          III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y
          RESPONSABILIDAD
        </h2>
        <p className="mb-4">
          Efasol no garantiza la continuidad, disponibilidad y utilidad del
          Sitio Web ni de los Contenidos o Servicios. Se hará todo lo posible
          para mantener el buen funcionamiento, pero no se responsabiliza por
          interrupciones o errores, ni garantiza que el contenido o software
          accesible esté libre de errores o cause daños al sistema informático
          del Usuario.
        </p>
        <p className="mb-4">
          En ningún caso Efasol será responsable por pérdidas, daños o
          perjuicios derivados del acceso, navegación o uso del Sitio Web.
        </p>

        {/* IV. POLÍTICA DE ENLACES */}
        <h2 className="text-xl font-semibold mb-2">IV. POLÍTICA DE ENLACES</h2>
        <p className="mb-4">
          El Sitio Web puede poner a disposición del Usuario enlaces, banners y
          botones que permiten acceder a sitios web de terceros. La presencia de
          estos enlaces no implica la aprobación o recomendación de dichos
          sitios, ni Efasol asume responsabilidad por el contenido, veracidad o
          legalidad de los mismos.
        </p>
        <p className="mb-4">
          El establecimiento de un enlace no implica relación comercial entre
          Efasol y el titular del sitio web enlazado.
        </p>

        {/* V. PROPIEDAD INTELECTUAL E INDUSTRIAL */}
        <h2 className="text-xl font-semibold mb-2">
          V. PROPIEDAD INTELECTUAL E INDUSTRIAL
        </h2>
        <p className="mb-4">
          Efasol, por sí o como parte cesionaria, es titular de todos los
          derechos de propiedad intelectual e industrial del Sitio Web y de los
          elementos integrados en él (incluyendo imágenes, sonido, audio, vídeo,
          software, textos, marcas, logotipos, etc.). Estos contenidos se
          encuentran protegidos por la normativa española, comunitaria e
          internacional.
        </p>
        <p className="mb-4">
          Queda expresamente prohibida la reproducción, distribución y
          comunicación pública, total o parcial, de los contenidos del Sitio Web
          con fines comerciales, sin la autorización expresa de Efasol.
        </p>
        <p className="mb-4">
          El Usuario se compromete a respetar estos derechos y podrá visualizar,
          imprimir o copiar los contenidos únicamente para uso personal.
        </p>

        {/* VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN */}
        <h2 className="text-xl font-semibold mb-2">
          VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN
        </h2>
        <p className="mb-4">
          Efasol se reserva el derecho de emprender acciones legales en caso de
          utilización indebida del Sitio Web y de sus Contenidos. La relación
          entre el Usuario y Efasol se regirá por la normativa española,
          sometiéndose a la jurisdicción de los tribunales competentes en
          España.
        </p>
      </div>
    </main>
  );
}
