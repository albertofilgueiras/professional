import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import CourseCard from '../components/CourseCard';
import { courses, testimonials } from '../mock';
import { Award, Users, Brain, Target, Star, ArrowRight, Zap, Trophy, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1490108474814-221f6198acc5"
            alt="Soccer goalkeeper"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Psicologia Esportiva</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight animate-slide-in">
              TREINO MENTAL
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
                ALTO RENDIMENTO
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl">
              Performance máxima através da ciência. Psicologia do esporte baseada em evidências para atletas de elite.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contato">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-10 py-7 rounded-xl font-bold shadow-lg shadow-green-900/50 hover:shadow-green-900/70 transition-all sport-glow">
                  <Zap className="w-6 h-6 mr-2" />
                  Agendar Consulta
                </Button>
              </Link>
              <Link to="/cursos">
                <Button size="lg" variant="outline" className="text-lg px-10 py-7 rounded-xl border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold">
                  Conhecer Cursos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
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
            <div className="group">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-gray-400 font-medium">Anos de Experiência</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">75+</div>
              <div className="text-gray-400 font-medium">Publicações Científicas</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-gray-400 font-medium">Atletas Atendidos</div>
            </div>
            <div className="group">
              <div className="text-5xl font-black mb-3 text-green-500 group-hover:scale-110 transition-transform">3</div>
              <div className="text-gray-400 font-medium">Países de Atuação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              MAXIMIZE SEU
              <span className="text-green-500"> POTENCIAL</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Trabalho especializado para atletas, clubes e pais de atletas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Brain className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Controle Mental</h3>
              <p className="text-gray-400 leading-relaxed">
                Domine a ansiedade e mantenha o controle emocional em momentos de alta pressão
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Target className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Foco Total</h3>
              <p className="text-gray-400 leading-relaxed">
                Concentração máxima eliminando todas as distrações durante a competição
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Trophy className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Alta Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                Otimize processos mentais que levam ao máximo desempenho atlético
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 hover:border-green-500/50 transition-all group hover:shadow-2xl hover:shadow-green-900/20">
              <div className="bg-green-500/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">Crescimento</h3>
              <p className="text-gray-400 leading-relaxed">
                Desenvolvimento integral com bem-estar, saúde mental e qualidade de vida
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cursos Online
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Aprenda com um especialista reconhecido internacionalmente
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/cursos">
              <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
                Ver Todos os Cursos
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O Que Dizem Sobre o Trabalho
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Depoimentos de atletas, pais e treinadores
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Melhorar Seu Desempenho Mental?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Agende sua primeira sessão e descubra como a psicologia do esporte pode transformar sua performance
          </p>
          <Link to="/contato">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
              Agendar Consulta Agora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;