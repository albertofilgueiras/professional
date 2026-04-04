import React from 'react';
import { Card } from '../components/ui/card';
import { Play } from 'lucide-react';

const courseDescription = `A disciplina "Psicologia e Processos Básicos" faz parte do currículo do curso de Psicologia da Universidade do Estado do Rio de Janeiro (UERJ). Estas aulas foram ministradas pelo Prof. Alberto Filgueiras entre 2020 e 2022, cobrindo os principais tópicos da psicologia cognitiva e dos processos psicológicos fundamentais. O curso aborda desde os mecanismos básicos de sensação e percepção até os processos mais complexos de linguagem e funções executivas, oferecendo uma base sólida para a compreensão do funcionamento da mente humana.`;

const lectures = [
  {
    id: 'ko3nVJ2oK1o',
    title: 'Primeira Aula',
    desc: 'Introdução à disciplina de Psicologia e Processos Básicos, apresentando o plano de ensino, a ementa do curso, os objetivos de aprendizagem e uma visão geral dos processos cognitivos que serão estudados ao longo do semestre.'
  },
  {
    id: 'i7u56PJ2eF4',
    title: 'Sensação e Percepção',
    desc: 'Estudo dos mecanismos sensoriais e perceptivos que permitem ao ser humano captar e interpretar os estímulos do ambiente. Aborda os limiares sensoriais, os sistemas sensoriais e as teorias da percepção.'
  },
  {
    id: 'rB7q3JUSmc4',
    title: 'Reconhecimento de Objetos e Faces',
    desc: 'Análise dos processos cognitivos envolvidos no reconhecimento visual de objetos e faces, incluindo as teorias de reconhecimento de padrões, prosopagnosia e o papel das áreas cerebrais especializadas.'
  },
  {
    id: 'qBCc_5XGIlM',
    title: 'Percepção, Psicologia Ecológica e Movimento',
    desc: 'Exploração da abordagem ecológica de James Gibson para a percepção, enfatizando a relação entre percepção e ação, affordances e a percepção direta do ambiente.'
  },
  {
    id: 'WG-uvFJz5UA',
    title: 'Atenção e Desempenho',
    desc: 'Estudo dos mecanismos atencionais e sua relação com o desempenho cognitivo. Aborda atenção seletiva, dividida e sustentada, além de modelos teóricos como o filtro de Broadbent e a teoria do spotlight.'
  },
  {
    id: '_CB-qwf8mSQ',
    title: 'Memória, Aprendizagem e Esquecimento',
    desc: 'Introdução aos sistemas de memória, processos de codificação, armazenamento e recuperação de informações. Discute as teorias do esquecimento, interferência e a curva do esquecimento de Ebbinghaus.'
  },
  {
    id: 'V3x6dR0_O_w',
    title: 'Sistemas de Memória de Longo Prazo',
    desc: 'Análise aprofundada dos diferentes sistemas de memória de longo prazo: memória episódica, semântica, procedural e o modelo de Tulving. Discussão sobre consolidação e reconsolidação de memórias.'
  },
  {
    id: '-Qj5Cnggmkk',
    title: 'Memória no Cotidiano',
    desc: 'Aplicações práticas dos estudos sobre memória: memória autobiográfica, memória de testemunhas oculares, falsas memórias e estratégias mnemônicas para otimizar a aprendizagem.'
  },
  {
    id: 'mIKsadH5Dsw',
    title: 'Compreensão da Linguagem',
    desc: 'Estudo dos processos cognitivos envolvidos na compreensão da linguagem falada e escrita, incluindo parsing sintático, processamento semântico e modelos de compreensão de textos.'
  },
  {
    id: 'oTUNeGFzLgU',
    title: 'Psicolinguística',
    desc: 'Fundamentos da psicolinguística: aquisição da linguagem, relação entre linguagem e pensamento, bilinguismo e os correlatos neurais do processamento linguístico.'
  },
  {
    id: 'LF0BYPis_aQ',
    title: 'Produção de Linguagem',
    desc: 'Análise dos processos de produção linguística, desde a formulação da mensagem até a articulação. Aborda lapsos de fala, o modelo de Levelt e os distúrbios da produção da linguagem.'
  },
  {
    id: 'MeZ9Mak9hVo',
    title: 'Funções Executivas e Resolução de Problemas',
    desc: 'Estudo das funções executivas (planejamento, inibição, flexibilidade cognitiva, memória de trabalho) e dos processos de resolução de problemas, raciocínio e tomada de decisão.'
  }
];

const CursoProcessosBasicos = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Curso Online Gratuito</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="curso-title">
            Psicologia e<span className="text-green-500"> Processos Básicos</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Curso completo ministrado pelo Prof. Alberto Filgueiras na UERJ
          </p>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30 p-8" data-testid="course-description">
            <div className="flex items-center mb-6">
              <Play className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-white">Sobre o Curso</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">{courseDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">12 Aulas</span>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">UERJ</span>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">2020-2022</span>
              <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-sm">Gratuito</span>
            </div>
          </Card>
        </div>
      </section>

      {/* Lectures */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-black text-white mb-12 text-center">
            Aulas<span className="text-green-500"> Disponíveis</span>
          </h2>
          <div className="space-y-8">
            {lectures.map((lecture, i) => (
              <Card key={i} className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-green-900/30 hover:border-green-500/50 transition-all" data-testid={`lecture-${i}`}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${lecture.id}`}
                      title={lecture.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center mb-3">
                      <span className="bg-green-600 text-white rounded-lg w-8 h-8 flex items-center justify-center mr-3 font-bold text-sm">{i + 1}</span>
                      <h3 className="text-xl font-bold text-white">{lecture.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{lecture.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CursoProcessosBasicos;
