import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services } from '../mock';
import { CheckCircle, Video, Users, Presentation, Zap } from 'lucide-react';

const whatsappLink = "https://wa.me/610415661366?text=" + encodeURIComponent("Olá, gostaria de mais informações de como marcar o meu primeiro atendimento.");

const serviceIcons = [Video, Users, Presentation];

const Services = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589492342521-1cc18248fffc"
            alt="Track and field"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Serviços</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="services-title">
            Serviços de
            <span className="text-green-500"> Consultoria</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Psicologia do esporte, coaching mental e treinamento cognitivo para atletas e equipes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] || Video;
              return (
                <Card key={service.id} className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-green-900/30 hover:border-green-500/50 transition-all" data-testid={`service-card-${index}`}>
                  <div className="grid md:grid-cols-3">
                    <div className="bg-green-500/10 p-8 flex items-center justify-center">
                      <Icon className="w-20 h-20 text-green-500" />
                    </div>
                    <div className="md:col-span-2 p-8">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                        <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <ul className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
            Benefícios do
            <span className="text-green-500"> Acompanhamento</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Melhora de Desempenho', text: 'Otimização dos processos psicológicos que podem levar ao aumento de desempenho esportivo' },
              { title: 'Controle Emocional', text: 'Controlar a ansiedade e o nervosismo antes e durante competições' },
              { title: 'Foco Total', text: 'Foco e concentração na competição inteira, inibindo tudo o que causa distração' },
              { title: 'Motivação e Disciplina', text: 'Desenvolvimento de liderança, motivação e disciplina no treinamento' },
              { title: 'Autonomia', text: 'Atletas independentes que conseguem se autogerenciar' },
              { title: 'Bem-Estar', text: 'Bem estar, saúde mental e qualidade de vida' }
            ].map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 hover:border-green-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-white mb-12">
            Dúvidas
            <span className="text-green-500"> Frequentes</span>
          </h2>
          <div className="space-y-6">
            {[
              { q: 'Como acontecem os atendimentos?', a: 'Todos os atendimentos são realizados de forma online. O link da sessão é enviado para o paciente no primeiro contato.' },
              { q: 'Qual a abordagem utilizada?', a: 'Neurociência Cognitiva e Psicologia Comportamental, sempre baseadas em evidências científicas.' },
              { q: 'Atende crianças?', a: 'Atendemos jovens a partir dos 12 anos.' },
              { q: 'Atende plano de saúde?', a: 'No momento, não faço atendimentos por plano de saúde.' }
            ].map((faq, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 hover:border-green-500/50 transition-all" data-testid={`faq-card-${index}`}>
                <h3 className="text-lg font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Pronto para Agendar Sua Primeira Sessão?
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e agende seu primeiro atendimento
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-black hover:bg-gray-900 text-white text-lg px-10 py-7 rounded-xl font-bold" data-testid="services-cta-btn">
              <Zap className="w-5 h-5 mr-2" />
              Agendar pelo WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
