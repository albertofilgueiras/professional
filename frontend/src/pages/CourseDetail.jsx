import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { courses } from '../mock';
import { Clock, BookOpen, CheckCircle, CreditCard, ArrowLeft } from 'lucide-react';

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Curso não encontrado</h1>
          <Link to="/cursos">
            <Button>Voltar para Cursos</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white py-12">
          <div className="container mx-auto px-4">
            <Link to="/cursos" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Cursos
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-lg">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>{course.modules} Módulos</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{course.totalHours} horas totais</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Sobre o Curso</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{course.fullDescription}</p>
              </Card>

              {/* Benefits */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">O Que Você Vai Aprender</h2>
                <ul className="space-y-4">
                  {course.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Topics */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Conteúdo Programático</h2>
                <div className="space-y-3">
                  {course.topics.map((topic, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{topic}</h3>
                        <p className="text-sm text-gray-600 mt-1">{course.duration}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-8 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    R$ {course.price}
                  </div>
                  <div className="text-gray-600">ou {course.installments}</div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 mb-4">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Inscrever-se Agora
                </Button>

                <div className="text-center text-sm text-gray-600 mb-6">
                  Acesso completo por 3 anos
                </div>

                <div className="border-t pt-6 space-y-4">
                  <h3 className="font-bold text-gray-900 mb-4">Este curso inclui:</h3>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course.modules} módulos completos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{course.totalHours} horas de conteúdo</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Acesso por 3 anos</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Certificado de conclusão</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Material complementar</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Seu Instrutor</h2>
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1758599879766-f808496a12dc"
                  alt="Alberto Filgueiras"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prof. Dr. Alberto Filgueiras</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Psicólogo esportivo, pesquisador e professor universitário com mais de 15 anos de experiência. PhD em Psicologia e Pós-Doutor em Ciências do Esporte. Atualmente Senior Lecturer na CQUniversity, Austrália.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Trabalhou com atletas e equipes de alto rendimento no Brasil, incluindo Flamengo e Comitê Olímpico Brasileiro. Autor de 75+ publicações científicas em revistas internacionais renomadas.
                </p>
                <Link to="/sobre">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;