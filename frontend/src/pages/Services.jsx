import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { services } from '../mock';
import { CheckCircle, Video, Users, Presentation } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serviços de Consultoria
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Psicologia do esporte, coaching mental e treinamento cognitivo para atletas e equipes
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-xl transition-all">
                <div className="grid md:grid-cols-3">
                  <div className="bg-blue-50 p-8 flex items-center justify-center">
                    {index === 0 && <Video className="w-20 h-20 text-blue-600" />}
                    {index === 1 && <Users className="w-20 h-20 text-blue-600" />}
                    {index === 2 && <Presentation className="w-20 h-20 text-blue-600" />}
                  </div>
                  <div className="md:col-span-2 p-8">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Benefícios do Acompanhamento
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Melhora de Desempenho</h3>
              <p className="text-gray-600">
                Otimização dos processos psicológicos que podem levar ao aumento de desempenho esportivo
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Controle Emocional</h3>
              <p className="text-gray-600">
                Controlar a ansiedade e o nervosismo antes e durante competições
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Foco Total</h3>
              <p className="text-gray-600">
                Foco e concentração na competição inteira, inibindo tudo o que causa distração
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Motivação e Disciplina</h3>
              <p className="text-gray-600">
                Desenvolvimento de liderança, motivação e disciplina no treinamento
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autonomia</h3>
              <p className="text-gray-600">
                Atletas independentes que conseguem se autogerenciar
              </p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bem-Estar</h3>
              <p className="text-gray-600">
                Bem estar, saúde mental e qualidade de vida
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Como acontecem os atendimentos?</h3>
              <p className="text-gray-700">
                Todos os atendimentos são realizados de forma online. O link da sessão é enviado para o paciente no primeiro contato.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Qual a abordagem utilizada?</h3>
              <p className="text-gray-700">
                Neurociência Cognitiva e Psicologia Comportamental, sempre baseadas em evidências científicas.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atende crianças?</h3>
              <p className="text-gray-700">
                Atendemos jovens a partir dos 12 anos.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atende plano de saúde?</h3>
              <p className="text-gray-700">
                No momento, não faço atendimentos por plano de saúde.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Agendar Sua Primeira Sessão?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Entre em contato pelo WhatsApp e agende seu primeiro atendimento
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              Entrar em Contato
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;