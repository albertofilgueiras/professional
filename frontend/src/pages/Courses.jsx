import React from 'react';
import CourseCard from '../components/CourseCard';
import { courses } from '../mock';
import { GraduationCap } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cursos Online
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Aprenda com um especialista reconhecido internacionalmente em psicologia do esporte
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Take These Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Por Que Fazer Estes Cursos?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instrução de Especialista</h3>
              <p className="text-gray-600">
                Aprenda com um PhD e pós-doutor com 15+ anos de experiência internacional
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Baseado em Evidências</h3>
              <p className="text-gray-600">
                Todo conteúdo fundamentado em pesquisas científicas e publicações internacionais
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Acesso por 3 Anos</h3>
              <p className="text-gray-600">
                Acesse o conteúdo quando quiser, quantas vezes quiser, por 3 anos completos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;