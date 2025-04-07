import Image from "next/image";
import CountdownTimer from "./components/CountdownTimer";
import TestimonialCarousel from "./components/TestimonialCarousel";
import PhotosCarousel from "./components/PhotosCarousel";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="relative flex items-center justify-center text-white h-[40vh] min-h-[30vh] mt-20">
        <div className="flex items-center justify-center">
          <Image
            src="/assets/img/cabeçalho.jpg"
            alt="Background Eleutheria"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75 hover:brightness-100 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              ELEUTHERIA 2025
            </h1>
            <h2 className="text-xl md:text-2xl mb-6">
              “Eis a vontade de Deus: A vossa Santificação” - I Tessalonicenses
              4, 3
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-8">
              Dias 20, 21 e 22 de Junho de 2025
            </p>
            <div className="md:hidden">
              <a
                href="/formulario"
                className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
              >
                INSCREVA-SE
              </a>
            </div>
          </div>
        </div>
      </section>

      <CountdownTimer />

      {/* Seção Sobre */}
      <section id="Sobre" className="w-full p-16">
        <div className="max-w-full mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Sobre Nós</h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 items-center">
            <div className="hidden md:block relative w-36 h-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/assets/img/coração.jpg"
                alt="Símbolo Eleutheria"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Texto Central */}
            <div className=" space-y-6 text-lg text-justify">
              <p className="leading-relaxed">
                O Eleutheria é um retiro católico organizado pela juventude da
                Paróquia Santa Luzia de Hortolândia/SP, destinado a jovens de 14
                a 30 anos.
              </p>

              <p className="leading-relaxed">
                Neste encontro, você terá a oportunidade de:
              </p>

              <ul className="list-disc pl-6">
                <li>Desenvolver uma relação mais profunda com Deus</li>
                <li>Se abster das preocupações cotidianas</li>
                <li>Descobrir o sentido da sua vida</li>
                <li>Encontrar a verdadeira alegria</li>
                <li>Compartilhar experiências com outros jovens</li>
              </ul>

              <p>
                O Eleutheria é um momento único para você ter um encontro
                genuíno com a bondade e a misericórdia de Deus.
              </p>

              <p>
                Se você está procurando por um momento de reflexão, oração e
                encontro com Deus, o Eleutheria é o lugar certo para você!
              </p>

              <h2 className="text-3xl font-bold text-center mb-12 mt-12">
                O que é Eleutheria?
              </h2>

              <p>
                "Eleutheria" é uma palavra grega (Ελευθερία) que significa
                "liberdade". No contexto cristão, especialmente no catolicismo,
                o termo "Eleutheria" é usado para se referir à liberdade
                espiritual que vem da relação com Deus.
              </p>

              <p>
                Nesse sentido, a Eleutheria não se refere apenas à liberdade
                física ou política, mas sim à liberdade interior que permite que
                as pessoas vivam de acordo com a vontade de Deus e alcancem a
                plenitude da vida.
              </p>
            </div>

            {/* Imagem Direita */}
            <div className="hidden md:block relative w-full h-full">
              <div className="absolute right-0 w-36 h-full">
                <Image
                  src="/assets/img/coração.jpg"
                  alt="Símbolo Eleutheria"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="Testemunhos">
        <TestimonialCarousel />
      </section>

      {/* Seção Vídeo */}
      <div className="py-16 px-4 md:min-h-80 w-full">
        <h2 className="text-3xl font-bold text-center mb-8">Música Tema</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl h-auto mx-auto">
          <iframe
            src="https://www.youtube.com/embed/M4-_U2wbLXY"
            className="w-full min-h-[380px] border-0"
            allowFullScreen
          />
        </div>
      </div>

      {/* Fotos */}
      <section id="Fotos">
        <PhotosCarousel />
      </section>

      {/* Seção Mapa */}
      <section id="Local">
        <div className="py-16 px-4">
          <h3 className="text-3xl font-bold text-center mb-8">Local</h3>
          <div className="max-w-4xl mx-auto aspect-square md:aspect-video flex flex-col items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d459.6789342124309!2d-47.4856583!3d-22.8235209!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c620e16ce44f5f%3A0xa87cd1be60590d50!2sCapela%20de%20Santo%20Antonio!5e0!3m2!1spt-BR!2sbr!4v1743472401460!5m2!1spt-BR!2sbr"
              className="w-full h-full border-0"
              allowFullScreen
            />
            <p>Centro de Formação Religioso – Luiza G. Freguglia</p>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <Contato />

      {/* Footer */}
      <Footer />
    </div>
  );
}
