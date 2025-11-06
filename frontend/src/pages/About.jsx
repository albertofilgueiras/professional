import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Award, BookOpen, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    { degree: 'PhD em Psicologia', institution: 'PUC-Rio / Western University, Canadá' },
    { degree: 'Pós-Doutorado em Ciências do Esporte', institution: 'Universidade Católica de Brasília' },
    { degree: 'Mestrado em Psicologia', institution: 'Pontifícia Universidade Católica do Rio de Janeiro' },
    { degree: 'Bacharelado em Psicologia', institution: 'Universidade Federal do Rio de Janeiro' }
  ];

  const experience = [
    { role: 'Senior Lecturer - Psychology', place: 'CQUniversity, Austrália', period: '2024 - Atual' },
    { role: 'Lecturer', place: 'University of Gloucestershire, Reino Unido', period: '2022 - 2024' },
    { role: 'Professor', place: 'Universidade do Estado do Rio de Janeiro (UERJ)', period: '2015 - 2023' },
    { role: 'Psicólogo do Esporte', place: 'Clube de Regatas do Flamengo', period: '2018 - 2020' },
    { role: 'Psicólogo do Esporte', place: 'Comitê Olímpico Brasileiro', period: '2016 - 2019' }
  ];

  const achievements = [
    '75+ publicações científicas em revistas internacionais',
    'Publicações em PNAS, Frontiers in Psychology, Journal of Sports Sciences',
    '15+ anos de experiência em psicologia do esporte',
    'Trabalho com atletas de futebol, MMA, karatê, vôlei, basquete e outros esportes',
    'Docente em cursos de pós-graduação em universidades do Brasil, UK e Austrália'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prof. Dr. Alberto Filgueiras
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Psicólogo Esportivo, Pesquisador e Professor Universitário
              </p>
              <p className="text-lg text-blue-50">
                Especialista em Neurociência Cognitiva, Psicologia do Esporte e Mindfulness aplicado ao alto rendimento
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1758599879766-f808496a12dc"
                alt="Mental training"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Quem Sou Eu</h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Sou Prof. Dr. Alberto Filgueiras, psicólogo, pesquisador e professor universitário com mais de 15 anos de experiência na área da Psicologia do Esporte, do Exercício e Psicoterapia. Minha formação acadêmica é sólida e contínua, o que me faz trabalhar sempre com técnicas fundamentadas em evidências científicas.
              </p>
              <p>
                Como professor, atuei em grandes universidades do Brasil (PUC-RJ, UERJ e Universidade Católica de Brasília), da Austrália (University of Canberra e atualmente CQUniversity), e do Reino Unido (University of Gloucestershire). Como psicólogo do esporte e psicoterapeuta, tenho passagens pelo Clube de Regatas do Flamengo, pelo Comitê Olímpico Brasileiro, pela Federação de Karatê do Estado do Rio de Janeiro, pela Team Nogueira, além de atendimentos individuais em diversos esportes como futebol, basquete, vôlei, vôlei de praia, MMA, karatê, rúgbi, atletismo e tênis.
              </p>
              <p>
                Eu sou um profissional que forma outros profissionais, faço parte do corpo docente dos maiores cursos de formação na área, incluindo a pós-graduação em psicologia do esporte e do exercício da Universidade Federal de São Carlos e da formação em psicologia do futebol pela CBF Academy.
              </p>
              <p>
                Minha abordagem combina Neurociência Cognitiva e Psicologia Comportamental, sempre baseada em evidências científicas e adaptada às necessidades específicas de cada atleta ou equipe.
              </p>
            </div>
          </Card>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Formação Acadêmica</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.degree}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Experiência Profissional</h2>
            </div>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{item.role}</h3>
                      <p className="text-gray-600">{item.place}</p>
                    </div>
                    <div className="text-blue-600 font-semibold mt-2 md:mt-0">{item.period}</div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Destaques e Conquistas</h2>
            </div>
            <Card className="p-8">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <Award className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-lg">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Áreas de Pesquisa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cognição e Performance Esportiva</h3>
              <p className="text-gray-600">
                Funções executivas, tomada de decisão e processamento cognitivo em atletas
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Saúde Mental no Esporte</h3>
              <p className="text-gray-600">
                Ansiedade, depressão, estresse e bem-estar psicológico em contextos esportivos
              </p>
            </Card>
            <Card className="p-6 text-center hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testes Psicológicos Cross-Culturais</h3>
              <p className="text-gray-600">
                Validação e adaptação de instrumentos psicológicos em diferentes culturas
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;