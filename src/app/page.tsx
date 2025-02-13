import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="mt-20">
        <section
          id="home"
          className="h-screen flex items-center justify-center bg-gray-100"
        >
          <h1 className="text-4xl font-bold">Bienvenido a mi Web</h1>
        </section>
        <section
          id="about"
          className="h-screen flex items-center justify-center bg-gray-200"
        >
          <h2 className="text-3xl font-semibold">Sobre mí</h2>
        </section>
        <section
          id="services"
          className="h-screen flex items-center justify-center bg-gray-300"
        >
          <h2 className="text-3xl font-semibold">Servicios</h2>
        </section>
        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-gray-400"
        >
          <h2 className="text-3xl font-semibold">Contacto</h2>
        </section>
      </main>
    </div>
  );
}
