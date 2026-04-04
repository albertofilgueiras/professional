import React from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Shield, Brain, Target, Zap, CheckCircle } from 'lucide-react';

const whatsappLink = "https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações sobre o Programa Cérebro em Alta Performance.");

const programBenefits = [
  'Aumento comprovado da fortaleza mental e autoconfiança',
  'Redução significativa da ansiedade pré-competitiva',
  'Melhor regulação emocional sob pressão',
  'Desenvolvimento de habilidades de visualização e foco',
  'Técnicas de relaxamento e controle de ativação',
  'Estratégias de enfrentamento baseadas em evidências',
  'Melhoria na tomada de decisão em momentos críticos',
  'Prevenção de burnout e lesões relacionadas ao estresse'
];

const programModules = [
  { title: 'Avaliação Inicial', desc: 'Perfil psicológico do atleta e definição de objetivos' },
  { title: 'Motivação e Comprometimento', desc: 'Técnicas para aumentar a motivação intrínseca e extrínseca' },
  { title: 'Definição de Metas', desc: 'Estabelecimento de objetivos de curto, médio e longo prazo' },
  { title: 'Atenção e Concentração', desc: 'Desenvolvimento de foco atencional e controle de distrações' },
  { title: 'Visualização Mental', desc: 'Técnicas de imagery para otimização da performance' },
  { title: 'Controle de Ativação', desc: 'Regulação do nível de arousal para performance ideal' },
  { title: 'Relaxamento Progressivo', desc: 'Técnicas de relaxamento muscular e respiratório' },
  { title: 'Controle de Ansiedade', desc: 'Estratégias cognitivo-comportamentais para manejo da ansiedade' },
  { title: 'Autoconfiança', desc: 'Construção e manutenção da autoeficácia esportiva' },
  { title: 'Regulação Emocional', desc: 'Controle e canalização de emoções durante a competição' },
  { title: 'Resiliência', desc: 'Desenvolvimento da capacidade de recuperação frente a adversidades' },
  { title: 'Comunicação Assertiva', desc: 'Habilidades interpessoais para melhorar dinâmicas de equipe' },
  { title: 'Autodiálogo Positivo', desc: 'Reestruturação cognitiva e diálogo interno construtivo' },
  { title: 'Mindfulness Esportivo', desc: 'Práticas de atenção plena aplicadas ao contexto atlético' },
  { title: 'Integração e Prática', desc: 'Aplicação combinada de todas as técnicas em cenários esportivos' },
  { title: 'Avaliação Final', desc: 'Reavaliação psicológica e plano de manutenção contínua' }
];

const CerebroAltaPerformance = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1652318694264-94cd2e2e5227" alt="Jovens jogadores de futebol" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Programa Exclusivo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight" data-testid="programa-title">
              Programa
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600"> Cérebro em Alta Performance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              16 sessões para promover o controle e regulação emocional de atletas. A ciência comprova: o aumento da fortaleza mental e da autoconfiança em atletas de todos os níveis.
            </p>

            {/* Book Bonus - right after title */}
            <div className="flex items-center gap-6 mb-10 p-5 bg-gradient-to-r from-gray-900/80 to-black/80 border border-green-900/40 rounded-2xl max-w-2xl" data-testid="hero-book-bonus">
              <a href="https://a.co/d/01aO55XF" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                <div className="relative">
                  <img src="https://m.media-amazon.com/images/I/61GK4G5GkIL._SX445_.jpg" alt="O Cérebro em Alta Performance" className="w-24 h-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform" />
                  <div className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">GRÁTIS</div>
                </div>
              </a>
              <div>
                <p className="text-green-400 font-bold text-sm uppercase tracking-wider mb-1">Bônus Exclusivo</p>
                <p className="text-white font-semibold mb-1">Ao contratar o programa, você recebe uma cópia digital do livro "O Cérebro em Alta Performance" sem custo adicional.</p>
                <a href="https://a.co/d/01aO55XF" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm hover:underline">Ver livro na Amazon</a>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 rounded-xl font-bold shadow-lg shadow-green-900/50 transition-all sport-glow" data-testid="programa-hero-cta">
                <Zap className="w-6 h-6 mr-2" />
                Quero Saber Mais
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                O Que é o Programa
                <span className="text-green-500"> Cérebro em Alta Performance?</span>
              </h2>
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>O Programa Cérebro em Alta Performance é um programa estruturado de <span className="text-green-400 font-semibold">16 sessões</span> de intervenção psicológica baseada em evidências científicas, desenhado para desenvolver o controle e a regulação emocional de atletas de todos os níveis.</p>
                <p>Fundamentado em pesquisas publicadas em periódicos internacionais como <span className="text-white font-semibold">Frontiers in Psychology</span> e <span className="text-white font-semibold">International Journal of Environmental Research and Public Health</span>, o programa utiliza técnicas da Terapia Cognitivo-Comportamental e do Mindfulness para promover habilidades psicológicas essenciais à performance esportiva.</p>
                <p>Estudos demonstram que intervenções psicológicas estruturadas melhoram significativamente o controle do estresse, a gestão da avaliação de performance e o uso de recursos psicológicos, resultando em atletas mais confiantes, resilientes e equilibrados.</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1748112442319-6780a8dd7528" alt="Jovens jogadores de futebol" className="w-full h-full object-cover rounded-2xl border border-green-900/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Benefícios<span className="text-green-500"> Comprovados</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Resultados baseados em evidências científicas internacionais</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {programBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-br from-gray-900 to-black border border-green-900/30 rounded-xl hover:border-green-500/50 transition-all" data-testid={`benefit-${index}`}>
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all text-center group">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                <Shield className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fortaleza Mental</h3>
              <p className="text-gray-400 text-sm">Desenvolvimento de resiliência e capacidade de superar adversidades no esporte</p>
            </Card>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all text-center group">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                <Brain className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Regulação Emocional</h3>
              <p className="text-gray-400 text-sm">Controle e canalização de emoções para otimização da performance</p>
            </Card>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all text-center group">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500/20 transition-colors">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Autoconfiança</h3>
              <p className="text-gray-400 text-sm">Construção sólida de autoeficácia e confiança em competição</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Estrutura do<span className="text-green-500"> Programa</span></h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">16 sessões cuidadosamente estruturadas para desenvolvimento progressivo</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {programModules.map((module, index) => (
              <div key={index} className="flex items-start p-4 bg-gradient-to-br from-gray-900/80 to-black border border-green-900/20 rounded-xl hover:border-green-500/40 transition-all group" data-testid={`module-${index}`}>
                <div className="bg-green-600 text-white rounded-lg w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 font-bold text-sm group-hover:bg-green-500 transition-colors">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-white mb-1">{module.title}</h3>
                  <p className="text-sm text-gray-400">{module.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1701872324421-f537bc8f61de" alt="Jovens jogando futebol" className="w-full h-full object-cover rounded-2xl border border-green-900/30" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Fundamentação<span className="text-green-500"> Científica</span></h2>
              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>O programa é fundamentado em estudos publicados em revistas científicas de alto impacto. Pesquisas demonstram que programas de intervenção psicológica baseados em Terapia Cognitivo-Comportamental melhoram significativamente as habilidades mentais dos atletas.</p>
                <p>Em um estudo com jovens jogadores de futebol, os resultados indicaram melhoria significativa no gerenciamento do estresse relacionado à avaliação de desempenho, bem como no uso de recursos e técnicas psicológicas após o programa de intervenção.</p>
                <p>A literatura científica destaca que variáveis como motivação, concentração, controle do estresse e autorregulação do humor são fundamentais para explicar diferenças na performance esportiva dos atletas.</p>
              </div>
              <div className="mt-6 space-y-2 text-sm text-gray-500">
                <p>Referências: Olmedilla et al. (2019) Frontiers in Psychology; Filgueiras et al. (2025) Frontiers in Psychology; Filgueiras et al. (2022) Int. J. Environ. Res. Public Health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1710789020364-a76c9517ea7e" alt="Jovens jogadores celebrando" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/90" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Pacotes com Parcelamento Próprio</h2>
          <p className="text-xl md:text-2xl mb-4 text-white/90 max-w-3xl mx-auto">O Programa Cérebro em Alta Performance é oferecido em pacotes com condições especiais de parcelamento.</p>
          <p className="text-lg mb-12 text-white/70 max-w-2xl mx-auto">Para saber mais sobre os pacotes e valores, clique abaixo e fale conosco diretamente pelo WhatsApp.</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-black/50 transition-all" data-testid="programa-cta-btn">
              <Zap className="w-6 h-6 mr-3" />
              Quero Saber Sobre os Pacotes
            </Button>
          </a>
        </div>
      </section>

    </div>
  );
};

export default CerebroAltaPerformance;
