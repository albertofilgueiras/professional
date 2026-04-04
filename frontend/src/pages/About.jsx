import React from 'react';
import { Card } from '../components/ui/card';
import { Award, BookOpen, GraduationCap, Briefcase, Play } from 'lucide-react';

const education = [
  { degree: 'PhD em Psicologia', institution: 'PUC-Rio / Western University, Canadá' },
  { degree: 'Pós-Doutorado em Ciências do Esporte e Reabilitação', institution: 'Universidade de Camberra, Austrália' },
  { degree: 'Pós-Doutorado em Educação Física', institution: 'Universidade Católica de Brasília' },
  { degree: 'Pós-Doutorado em Ciências do Esporte', institution: 'Universidade Católica de Brasília' },
  { degree: 'Licença C de Treinador de Futebol', institution: 'Football Australia / Asian Football Confederation' },
  { degree: 'Mestrado em Psicologia', institution: 'Pontifícia Universidade Católica do Rio de Janeiro' },
  { degree: 'Bacharelado em Psicologia', institution: 'Universidade Federal do Rio de Janeiro' }
];

const institutions = [
  { name: 'Comitê Olímpico Brasileiro', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/bdp32jau_image.png' },
  { name: 'Clube de Regatas do Flamengo', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/r8pkqqrb_image.png' },
  { name: 'Team Nogueira', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rhiwo5gh_image.png' },
  { name: 'Federação de Karatê do Estado do RJ', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/ffszwvc7_image.png' },
  { name: 'Clube de Futebol do Zico', logo: 'https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/vbkci487_image.png' },
  { name: 'Team Octógono', logo: 'https://images.tapology.com/gyms/logos/10770/profile/10770-academia-octogono.jpg?1764027205' },
  { name: 'Cairns Taipans', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f9/Cairns_Taipans_logo.svg' },
  { name: 'Dunbar Rovers FC', logo: 'https://dunbarroversfc.com/wp-content/uploads/2018/02/logo-home-final-small.png' }
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

const About = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
                <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Sobre</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="about-title">
                Alberto Filgueiras,
                <span className="text-green-500"> PhD FHEA</span>
              </h1>
              <p className="text-lg text-gray-300 mb-4">
                Psicólogo Esportivo, Pesquisador e Professor Universitário
              </p>
              <p className="text-base text-gray-400">
                Especialista em Neurociência Cognitiva, Psicologia do Esporte e Mindfulness aplicado ao alto rendimento
              </p>
            </div>
            <div className="relative">
              <img
                src="https://customer-assets.emergentagent.com/job_ea3873ad-330f-4405-b3bb-e85623059aa2/artifacts/rgiuzvqm_image.png"
                alt="Alberto Filgueiras palestrando"
                className="rounded-2xl shadow-2xl border border-green-900/30"
                data-testid="about-hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8 mb-16" data-testid="about-bio-card">
            <h2 className="text-3xl font-bold text-white mb-6">Quem Sou Eu</h2>
            <div className="space-y-4 text-gray-300 text-base leading-relaxed">
              <p>
                Sou Alberto Filgueiras, PhD FHEA, psicólogo, pesquisador e professor universitário com mais de 20 anos de experiência na área da Psicologia do Esporte, do Exercício e Psicoterapia. Minha formação acadêmica é sólida e contínua, o que me faz trabalhar sempre com técnicas fundamentadas em evidências científicas.
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
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Formação Acadêmica</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 hover:border-green-500/50 transition-all" data-testid={`education-card-${index}`}>
                  <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
                  <p className="text-green-400 text-sm">{item.institution}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience - Institutions with logos */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Experiência Profissional</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {institutions.map((inst, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 hover:border-green-500/50 transition-all text-center group" data-testid={`institution-card-${index}`}>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform overflow-hidden bg-white/10">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-white leading-tight">{inst.name}</h3>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Destaques e Conquistas</h2>
            </div>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="achievements-card">
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-500/20 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <Award className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-gray-300 text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Scientific Outreach - YouTube Videos */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Play className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Divulgação Científica</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <div key={index} className="rounded-xl overflow-hidden border border-green-900/30 hover:border-green-500/50 transition-all" data-testid={`video-embed-${index}`}>
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={`Divulgação Científica ${index + 1}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Focus */}
          <div>
            <div className="flex items-center mb-8">
              <BookOpen className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold text-white">Áreas de Pesquisa</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 text-center hover:border-green-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">Cognição e Performance Esportiva</h3>
                <p className="text-gray-400 text-sm">
                  Funções executivas, tomada de decisão e processamento cognitivo em atletas
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 text-center hover:border-green-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">Saúde Mental no Esporte</h3>
                <p className="text-gray-400 text-sm">
                  Ansiedade, depressão, estresse e bem-estar psicológico em contextos esportivos
                </p>
              </Card>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-6 text-center hover:border-green-500/50 transition-all">
                <h3 className="text-lg font-bold text-white mb-3">Testes Psicológicos Transculturais</h3>
                <p className="text-gray-400 text-sm">
                  Validação e adaptação de instrumentos psicológicos em diferentes culturas
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
