import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Brain, Target, Zap, TrendingUp, Heart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const whatsappLink = "https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações de como marcar o meu primeiro atendimento.");

const carouselImages = [
  {
    src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/b1ny74e0_Filgueiras_Flamengo.png",
    alt: "Alberto Filgueiras no Clube de Regatas do Flamengo"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/7lm63nux_image.png",
    alt: "Alberto Filgueiras com a Seleção Brasileira de Voleibol de Praia"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/hph9r6id_Dunbar.jpg",
    alt: "Alberto Filgueiras no Dunbar Rovers FC"
  },
  {
    src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rgiuzvqm_image.png",
    alt: "Alberto Filgueiras palestrando para o Cairns Taipans"
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490108474814-221f6198acc5"
            alt="Soccer field"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider" data-testid="hero-subtitle">
                Psicólogo do Esporte, Mental Coaching e Consultoria Esportiva
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight animate-slide-in" data-testid="hero-title">
              Alberto Filgueiras
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"> PhD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl" data-testid="hero-description">
              Preparação Mental para o alto rendimento com equilíbrio e bem-estar
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 rounded-xl font-bold shadow-lg shadow-green-900/50 hover:shadow-green-900/70 transition-all sport-glow" data-testid="hero-whatsapp-btn">
                  <Zap className="w-6 h-6 mr-2" />
                  Agendar Consulta
                </Button>
              </a>
              <Link to="/servicos">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-xl border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold" data-testid="hero-services-btn">
                  Serviços
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group" data-testid="stat-experience">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">20+</div>
              <div className="text-gray-400 font-medium">Anos de Experiência</div>
            </div>
            <div className="group" data-testid="stat-publications">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">75+</div>
              <div className="text-gray-400 font-medium">Publicações Científicas</div>
            </div>
            <div className="group" data-testid="stat-athletes">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400 font-medium">Atletas Atendidos</div>
            </div>
            <div className="group" data-testid="stat-countries">
              <div className="flex justify-center gap-3 mb-3 group-hover:scale-110 transition-transform">
                <img src="https://flagcdn.com/w40/br.png" alt="Brasil" className="h-8 rounded shadow" />
                <img src="https://flagcdn.com/w40/ca.png" alt="Canadá" className="h-8 rounded shadow" />
                <img src="https://flagcdn.com/w40/gb.png" alt="Reino Unido" className="h-8 rounded shadow" />
                <img src="https://flagcdn.com/w40/au.png" alt="Austrália" className="h-8 rounded shadow" />
              </div>
              <div className="text-gray-400 font-medium">Países de Atuação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="features-title">
              Treinamento Mental e
              <span className="text-green-500"> Excelência Emocional</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Trabalho especializado para atletas, clubes e equipes esportivas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20" data-testid="feature-card-mental">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Brain className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Controle Mental</h3>
              <p className="text-gray-400 leading-relaxed">
                Domine a ansiedade e mantenha o controle emocional em momentos de alta pressão
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20" data-testid="feature-card-focus">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Foco Total</h3>
              <p className="text-gray-400 leading-relaxed">
                Concentração máxima eliminando todas as distrações durante a competição
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20" data-testid="feature-card-balance">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Heart className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Equilíbrio</h3>
              <p className="text-gray-400 leading-relaxed">
                Apoio ao equilíbrio entre saúde mental, bem-estar e performance atlética de alto nível
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20" data-testid="feature-card-growth">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Crescimento</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvimento integral com motivação, disciplina e qualidade de vida
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Carousel Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Experiência</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              TRAJETÓRIA
              <span className="text-green-500"> PROFISSIONAL</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900" data-testid="experience-carousel">
              {carouselImages.map((img, idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{ opacity: currentSlide === idx ? 1 : 0 }}
                >
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white text-lg font-medium">{img.alt}</p>
                  </div>
                </div>
              ))}

              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600/80 text-white p-3 rounded-full transition-colors" data-testid="carousel-prev">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600/80 text-white p-3 rounded-full transition-colors" data-testid="carousel-next">
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-green-500 w-8' : 'bg-white/50 w-3'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="credentials-card">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <span className="text-green-400 font-bold">Psicólogo do Esporte CRP 05/43557</span>, Mental Coach e Treinador de Futebol Licenciado pela{' '}
                <span className="text-green-400 font-semibold">Confederação Asiática de Futebol (AFC)</span>.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
                Passagens pelo{' '}
                <span className="text-white font-semibold">Comitê Olímpico Brasileiro</span>,{' '}
                <span className="text-white font-semibold">Team Nogueira</span>,{' '}
                <span className="text-white font-semibold">Federação de Karatê do Estado do Rio de Janeiro</span>,{' '}
                <span className="text-white font-semibold">Clube de Regatas do Flamengo</span>,{' '}
                <span className="text-white font-semibold">Clube de Futebol do Zico</span>,{' '}
                <span className="text-white font-semibold">Team Octógono</span>,{' '}
                <span className="text-white font-semibold">Cairns Taipans</span> e{' '}
                <span className="text-white font-semibold">Dunbar Rovers FC</span>.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1" alt="Beach volleyball" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            PRONTO PARA<br />
            <span className="text-black">DOMINAR SUA MENTE?</span>
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Agende sua primeira sessão e transforme sua performance através da psicologia do esporte
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-black/50 transition-all" data-testid="cta-whatsapp-btn">
              <Zap className="w-6 h-6 mr-3" />
              Agendar Consulta Agora
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
