import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Brain, Target, Zap, TrendingUp, Heart, ChevronLeft, ChevronRight, X, GraduationCap, Award, BookOpen, Play, Briefcase, ShoppingCart } from 'lucide-react';

const whatsappLink = "https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações de como marcar o meu primeiro atendimento.");

const carouselImages = [
  { src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/b1ny74e0_Filgueiras_Flamengo.png", alt: "Alberto Filgueiras no Clube de Regatas do Flamengo" },
  { src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/7lm63nux_image.png", alt: "Alberto Filgueiras com a Seleção Brasileira de Voleibol de Praia" },
  { src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/42c0bl9a_image.png", alt: "Alberto Filgueiras no Dunbar Rovers FC" },
  { src: "https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rgiuzvqm_image.png", alt: "Alberto Filgueiras palestrando para o Cairns Taipans" }
];

const scrollLogos = [
  { name: 'Comitê Olímpico Brasileiro', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/bdp32jau_image.png' },
  { name: 'Clube de Regatas do Flamengo', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/r8pkqqrb_image.png' },
  { name: 'Team Nogueira', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rhiwo5gh_image.png' },
  { name: 'Federação de Karatê do Estado do RJ', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/ffszwvc7_image.png' },
  { name: 'Clube de Futebol do Zico', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/vbkci487_image.png' },
  { name: 'Team Octógono', logo: 'https://images.tapology.com/gyms/logos/10770/profile/10770-academia-octogono.jpg?1764027205' },
  { name: 'Cairns Taipans', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Cairns_Taipans_logo.svg' },
  { name: 'Dunbar Rovers FC', logo: 'https://dunbarroversfc.com/wp-content/uploads/2018/02/logo-home-final-small.png' },
  { name: 'CQUniversity', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBraUGiNLpKnf5iKa7cwO6PkzrSe9uZbhew&s' },
  { name: 'University of Gloucestershire', logo: 'https://penpostgrad.com/wp-content/uploads/2024/12/UOG-LOGO-WITH-CREST-01.png' },
  { name: 'UERJ', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Rio_de_Janeiro_State_University_logo.png' },
  { name: 'CBF Academy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCTHasvByU1LE32rxCe92LVnQinNhro70sw&s' },
  { name: 'Universidade Santa Ursula', logo: 'https://www.developmentaid.org/files/organizationLogos/universidade-santa-ursula-246313.jpg' },
  { name: 'UNISUAM', logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0022/9306/brand.gif?itok=J2a5AdqZ' }
];

const institutionsList = [
  { name: 'Comitê Olímpico Brasileiro', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/bdp32jau_image.png' },
  { name: 'Clube de Regatas do Flamengo', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/r8pkqqrb_image.png' },
  { name: 'Team Nogueira', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rhiwo5gh_image.png' },
  { name: 'Federação de Karatê do Estado do Rio de Janeiro', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/ffszwvc7_image.png' },
  { name: 'Clube de Futebol do Zico', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/vbkci487_image.png' },
  { name: 'Team Octógono', logo: 'https://images.tapology.com/gyms/logos/10770/profile/10770-academia-octogono.jpg?1764027205' },
  { name: 'Cairns Taipans', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Cairns_Taipans_logo.svg' },
  { name: 'Dunbar Rovers FC', logo: 'https://dunbarroversfc.com/wp-content/uploads/2018/02/logo-home-final-small.png' },
  { name: 'Central Queensland University (Australia)', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBraUGiNLpKnf5iKa7cwO6PkzrSe9uZbhew&s' },
  { name: 'University of Gloucestershire (United Kingdom)', logo: 'https://penpostgrad.com/wp-content/uploads/2024/12/UOG-LOGO-WITH-CREST-01.png' },
  { name: 'UERJ', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Rio_de_Janeiro_State_University_logo.png' },
  { name: 'CBF Academy', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdCTHasvByU1LE32rxCe92LVnQinNhro70sw&s' },
  { name: 'Universidade Santa Ursula', logo: 'https://www.developmentaid.org/files/organizationLogos/universidade-santa-ursula-246313.jpg' },
  { name: 'UNISUAM', logo: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0022/9306/brand.gif?itok=J2a5AdqZ' }
];

const education = [
  { degree: 'PhD em Psicologia', institution: 'PUC-Rio / Western University, Canadá' },
  { degree: 'Pós-Doutorado em Ciências do Esporte e Reabilitação', institution: 'Universidade de Camberra, Austrália' },
  { degree: 'Pós-Doutorado em Educação Física', institution: 'Universidade Católica de Brasília' },
  { degree: 'Licença C de Treinador de Futebol', institution: 'Football Australia / Asian Football Confederation' },
  { degree: 'Mestrado em Psicologia', institution: 'Pontifícia Universidade Católica do Rio de Janeiro' },
  { degree: 'Bacharelado em Psicologia', institution: 'Universidade Federal do Rio de Janeiro' }
];

const achievements = [
  '75+ publicações científicas em revistas internacionais',
  'Publicações em PNAS, Frontiers in Psychology, Journal of Sports Sciences',
  '20 anos de experiência em psicologia do esporte',
  'Trabalho com atletas de futebol, MMA, karatê, vôlei, basquete e outros esportes',
  'Docente em cursos de pós-graduação em universidades do Brasil, UK e Austrália'
];

const videos = [
  { id: 'cDdVcEp6OXk' },
  { id: 'S0GjsohIpPU' },
  { id: '5Js8edSVRro' }
];

const books = [
  { title: 'O Cérebro em Alta Performance', cover: 'https://m.media-amazon.com/images/I/61GK4G5GkIL._SX445_.jpg', link: 'https://a.co/d/01aO55XF', desc: 'Descubra como a neurociência pode transformar sua performance. Bases científicas do treinamento mental e da preparação psicológica para atletas.' },
  { title: 'Psicologia do Esporte: Representações Sociais & Interdisciplinaridade', cover: 'https://m.media-amazon.com/images/I/61Nl8ajKdwL._SY425_.jpg', link: 'https://a.co/d/00NlcZkJ', desc: 'Obra interdisciplinar que explora as representações sociais no contexto esportivo, conectando psicologia, sociologia e educação física.' },
  { title: 'Curso de Psicologia aplicada à Educação Física', cover: 'https://m.media-amazon.com/images/I/41M3VT9Vg0S._SY466_.jpg', link: 'https://a.co/d/02KyHJPr', desc: 'Material essencial para profissionais de educação física que desejam compreender os fundamentos psicológicos aplicados à prática esportiva.' },
  { title: 'Psicologia do Esporte e do Exercício: Modelos Teóricos, Pesquisa e Intervenção', cover: 'https://m.media-amazon.com/images/I/71EA1htMvwL._SY466_.jpg', link: 'https://a.co/d/06Sma8zJ', desc: 'Referência completa abrangendo modelos teóricos, métodos de pesquisa e estratégias de intervenção em psicologia do esporte.' }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('popup_dismissed');
    if (!dismissed) {
      const t = setTimeout(() => setShowPopup(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const closePopup = () => { setShowPopup(false); sessionStorage.setItem('popup_dismissed', 'true'); };
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Popup - no blur */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-[100]" data-testid="discount-popup">
          <div className="relative bg-gradient-to-br from-gray-900 to-black border border-green-500/50 rounded-2xl p-6 max-w-sm shadow-2xl shadow-green-900/30">
            <button onClick={closePopup} className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors" data-testid="popup-close-btn">
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <div className="bg-green-600 text-white text-2xl font-black py-2 px-4 rounded-xl mb-3 inline-block">10% OFF</div>
              <p className="text-white font-semibold mb-1">Programa Cérebro em Alta Performance</p>
              <p className="text-gray-400 text-sm mb-4">Aproveite pelos próximos 30 dias!</p>
              <a href={"https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações sobre o Programa Cérebro em Alta Performance.")} target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold" data-testid="popup-cta-btn">
                  <Zap className="w-4 h-4 mr-2" />Quero Aproveitar
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1490108474814-221f6198acc5" alt="Soccer field" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider" data-testid="hero-subtitle">
                  Psicólogo do Esporte, Mental Coaching e Consultoria Esportiva
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-2 leading-tight" data-testid="hero-title">Alberto Filgueiras</h1>
              <p className="text-xl md:text-2xl text-green-400 font-semibold mb-4" data-testid="hero-phd">PhD em Neurociência Cognitiva</p>
              <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-xl" data-testid="hero-description">Preparação Mental para o alto rendimento com equilíbrio e bem-estar</p>
              <p className="text-base text-gray-400 mb-10 max-w-xl italic" data-testid="hero-specialist">Um dos maiores especialistas em psicologia e neurociência aplicada ao esporte e à alta performance do Brasil</p>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 rounded-xl font-bold shadow-lg shadow-green-900/50 hover:shadow-green-900/70 transition-all sport-glow" data-testid="hero-whatsapp-btn">
                  <Zap className="w-6 h-6 mr-2" />Agendar Consulta
                </Button>
              </a>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center"><div className="w-1 h-3 bg-green-500 rounded-full mt-2" /></div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-10" />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group" data-testid="stat-experience"><div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">20+</div><div className="text-gray-400 font-medium">Anos de Experiência</div></div>
            <div className="group" data-testid="stat-publications"><div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">75+</div><div className="text-gray-400 font-medium">Publicações Científicas</div></div>
            <div className="group" data-testid="stat-athletes"><div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">500+</div><div className="text-gray-400 font-medium">Atletas Atendidos</div></div>
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

      {/* Auto-scrolling Logo Carousel */}
      <section className="py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4 mb-8"><h3 className="text-center text-lg text-gray-400 font-medium uppercase tracking-wider">Instituições Parceiras e Passagens</h3></div>
        <div className="relative" data-testid="logo-carousel">
          <div className="flex animate-scroll-logos">
            {[...scrollLogos, ...scrollLogos].map((inst, idx) => (
              <div key={idx} className="flex-shrink-0 mx-6 flex items-center justify-center" style={{ minWidth: '120px' }}>
                <div className="bg-[#DBDBDB] rounded-xl p-3 hover:bg-[#c9c9c9] transition-colors"><img src={inst.logo} alt={inst.name} className="h-14 w-14 object-contain" title={inst.name} /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-900 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="features-title">Treinamento Mental e<span className="text-green-500"> Inteligência Emocional</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Trabalho especializado para atletas, clubes e equipes esportivas</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Brain, title: 'Controle Mental', text: 'Domine a ansiedade e mantenha o controle emocional em momentos de alta pressão', id: 'mental' },
              { icon: Target, title: 'Foco Total', text: 'Concentração máxima eliminando todas as distrações durante a competição', id: 'focus' },
              { icon: Heart, title: 'Equilíbrio', text: 'Apoio ao equilíbrio entre saúde mental, bem-estar e performance atlética de alto nível', id: 'balance' },
              { icon: TrendingUp, title: 'Crescimento', text: 'Desenvolvimento integral com motivação, disciplina e qualidade de vida', id: 'growth' }
            ].map((f) => (
              <Card key={f.id} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20" data-testid={`feature-card-${f.id}`}>
                <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors"><f.icon className="w-8 h-8 text-green-500" /></div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">{f.title}</h3>
                <p className="text-gray-400 leading-relaxed">{f.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials (moved before education) */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="credentials-card">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed text-center">
              <span className="text-green-400 font-bold">Psicólogo do Esporte CRP 05/43557</span>, Mental Coach e Treinador de Futebol Licenciado pela <span className="text-green-400 font-semibold">Confederação Asiática de Futebol (AFC)</span>.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4 text-center">
              Passagens pelo <span className="text-white font-semibold">Comitê Olímpico Brasileiro</span>, <span className="text-white font-semibold">Team Nogueira</span>, <span className="text-white font-semibold">Federação de Karatê do Estado do Rio de Janeiro</span>, <span className="text-white font-semibold">Clube de Regatas do Flamengo</span>, <span className="text-white font-semibold">Clube de Futebol do Zico</span>, <span className="text-white font-semibold">Team Octógono</span>, <span className="text-white font-semibold">Cairns Taipans</span> e <span className="text-white font-semibold">Dunbar Rovers FC</span>.
            </p>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8"><GraduationCap className="w-8 h-8 text-green-500 mr-3" /><h2 className="text-3xl font-bold text-white">Formação Acadêmica</h2></div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 hover:border-green-500/50 transition-all" data-testid={`education-card-${index}`}>
                <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
                <p className="text-green-400 text-sm">{item.institution}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Carousel */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #22c55e 1px, transparent 1px)', backgroundSize: '50px 50px'}} /></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full"><span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Experiência</span></div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">EXPERIÊNCIA<span className="text-green-500"> PROFISSIONAL</span></h2>
          </div>
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900" data-testid="experience-carousel">
              {carouselImages.map((img, idx) => (
                <div key={idx} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: currentSlide === idx ? 1 : 0 }}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"><p className="text-white text-lg font-medium">{img.alt}</p></div>
                </div>
              ))}
              <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600/80 text-white p-3 rounded-full transition-colors" data-testid="carousel-prev"><ChevronLeft className="w-6 h-6" /></button>
              <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600/80 text-white p-3 rounded-full transition-colors" data-testid="carousel-next"><ChevronRight className="w-6 h-6" /></button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, idx) => (<button key={idx} onClick={() => setCurrentSlide(idx)} className={`h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-green-500 w-8' : 'bg-white/50 w-3'}`} />))}
              </div>
            </div>
          </div>

          {/* Institutions with logos and names */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {institutionsList.map((inst, index) => (
                <div key={index} className="flex flex-col items-center text-center group" data-testid={`institution-${index}`}>
                  <div className="bg-[#DBDBDB] rounded-xl p-3 mb-2 group-hover:bg-[#c9c9c9] transition-colors">
                    <img src={inst.logo} alt={inst.name} className="h-12 w-12 object-contain" />
                  </div>
                  <span className="text-gray-400 text-xs leading-tight">{inst.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8"><Award className="w-8 h-8 text-green-500 mr-3" /><h2 className="text-3xl font-bold text-white">Destaques e Conquistas</h2></div>
          <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="achievements-card">
            <ul className="space-y-4">
              {achievements.map((a, i) => (<li key={i} className="flex items-start"><div className="bg-green-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0"><Award className="w-5 h-5 text-green-500" /></div><span className="text-gray-300 text-base">{a}</span></li>))}
            </ul>
          </Card>
        </div>
      </section>

      {/* YouTube Videos */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8"><Play className="w-8 h-8 text-green-500 mr-3" /><h2 className="text-3xl font-bold text-white">Divulgação Científica</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-green-900/30 hover:border-green-500/50 transition-all" data-testid={`video-embed-${i}`}>
                <div className="aspect-video"><iframe src={`https://www.youtube.com/embed/${v.id}`} title={`Divulgação Científica ${i + 1}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8"><BookOpen className="w-8 h-8 text-green-500 mr-3" /><h2 className="text-3xl font-bold text-white">Áreas de Pesquisa</h2></div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: 'Cognição e Performance Esportiva', d: 'Funções executivas, tomada de decisão e processamento cognitivo em atletas' },
              { t: 'Saúde Mental no Esporte', d: 'Ansiedade, depressão, estresse e bem-estar psicológico em contextos esportivos' },
              { t: 'Testes Psicológicos Transculturais', d: 'Validação e adaptação de instrumentos psicológicos em diferentes culturas' }
            ].map((r, i) => (
              <Card key={i} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 text-center hover:border-green-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">{r.t}</h3><p className="text-gray-400 text-sm">{r.d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1" alt="Beach volleyball" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">PRONTO PARA<br /><span className="text-black">DOMINAR SUA MENTE?</span></h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">Agende sua primeira sessão e transforme sua performance através da psicologia do esporte</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-black/50 transition-all" data-testid="cta-whatsapp-btn"><Zap className="w-6 h-6 mr-3" />Agendar Consulta Agora</Button>
          </a>
        </div>
      </section>

      {/* Quem Sou Eu (moved to end) */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="bio-card">
            <h2 className="text-3xl font-bold text-white mb-6">Quem Sou Eu</h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>Sou Alberto Filgueiras, PhD FHEA, psicólogo, pesquisador e professor universitário com mais de 20 anos de experiência na área da Psicologia do Esporte, do Exercício e Psicoterapia. Minha formação acadêmica é sólida e contínua, o que me faz trabalhar sempre com técnicas fundamentadas em evidências científicas.</p>
              <p>Como professor, atuei em grandes universidades do Brasil (PUC-RJ, UERJ e Universidade Católica de Brasília), da Austrália (University of Canberra e atualmente CQUniversity), e do Reino Unido (University of Gloucestershire). Como psicólogo do esporte e psicoterapeuta, tenho passagens pelo Clube de Regatas do Flamengo, pelo Comitê Olímpico Brasileiro, pela Federação de Karatê do Estado do Rio de Janeiro, pela Team Nogueira, além de atendimentos individuais em diversos esportes como futebol, basquete, vôlei, vôlei de praia, MMA, karatê, rúgbi, atletismo e tênis.</p>
              <p>Eu sou um profissional que forma outros profissionais, faço parte do corpo docente dos maiores cursos de formação na área, incluindo a pós-graduação em psicologia do esporte e do exercício da Universidade Federal de São Carlos e da formação em psicologia do futebol pela CBF Academy.</p>
              <p>Minha abordagem combina Neurociência Cognitiva e Psicologia Comportamental, sempre baseada em evidências científicas e adaptada às necessidades específicas de cada atleta ou equipe.</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Books */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8"><BookOpen className="w-8 h-8 text-green-500 mr-3" /><h2 className="text-3xl font-bold text-white">Livros</h2></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book, i) => (
              <Card key={i} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 overflow-hidden hover:border-green-500/50 transition-all group" data-testid={`book-card-${i}`}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-800"><img src={book.cover} alt={book.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" /></div>
                <div className="p-4">
                  <h3 className="text-sm font-bold text-white mb-2 leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">{book.desc}</p>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-xs py-2"><ShoppingCart className="w-3 h-3 mr-1" />Comprar na Amazon</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
