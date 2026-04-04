import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { BookOpen, ShoppingCart } from 'lucide-react';

const books = [
  {
    title: 'O Cérebro em Alta Performance',
    cover: 'https://m.media-amazon.com/images/I/61GK4G5GkIL._SX445_.jpg',
    link: 'https://a.co/d/01aO55XF',
    desc: 'Uma obra que explora como a neurociência pode ser aplicada para otimizar a performance cognitiva e esportiva. O livro apresenta as bases científicas do treinamento mental, abordando temas como atenção, memória, funções executivas e regulação emocional, com estratégias práticas para atletas e profissionais que buscam excelência em suas áreas de atuação.'
  },
  {
    title: 'Psicologia do Esporte: Representações Sociais & Interdisciplinaridade',
    cover: 'https://m.media-amazon.com/images/I/61Nl8ajKdwL._SY425_.jpg',
    link: 'https://a.co/d/00NlcZkJ',
    desc: 'Uma obra interdisciplinar que explora as representações sociais no contexto esportivo, conectando psicologia, sociologia e educação física para uma compreensão mais ampla do fenômeno esportivo. Aborda como os indivíduos constroem significados sobre o esporte e como essas representações influenciam comportamentos, atitudes e práticas esportivas.'
  },
  {
    title: 'Curso de Psicologia aplicada à Educação Física',
    cover: 'https://m.media-amazon.com/images/I/41M3VT9Vg0S._SY466_.jpg',
    link: 'https://a.co/d/02KyHJPr',
    desc: 'Material didático essencial para profissionais de educação física que desejam compreender os fundamentos psicológicos aplicados à prática esportiva e ao exercício físico. Abrange temas como motivação, personalidade, desenvolvimento motor, aprendizagem motora e aspectos psicossociais da atividade física, com aplicações práticas para o dia a dia do profissional.'
  },
  {
    title: 'Psicologia do Esporte e do Exercício: Modelos Teóricos, Pesquisa e Intervenção',
    cover: 'https://m.media-amazon.com/images/I/71EA1htMvwL._SY466_.jpg',
    link: 'https://a.co/d/06Sma8zJ',
    desc: 'Referência completa em psicologia do esporte, abrangendo os principais modelos teóricos, métodos de pesquisa e estratégias de intervenção utilizados na área. Destinado a profissionais e estudantes, o livro apresenta uma visão integrada da psicologia aplicada ao esporte e ao exercício, com capítulos escritos por especialistas reconhecidos.'
  }
];

const Livros = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Publicações</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="livros-title">
            Nossos<span className="text-green-500"> Livros</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Obras publicadas pelo Prof. Alberto Filgueiras na área de psicologia do esporte e neurociência
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {books.map((book, i) => (
              <Card key={i} className="overflow-hidden bg-gradient-to-br from-gray-900 to-black border-green-900/30 hover:border-green-500/50 transition-all" data-testid={`livro-detail-${i}`}>
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-gray-800 flex items-center justify-center p-8">
                    <img src={book.cover} alt={book.title} className="max-h-80 object-contain rounded-lg shadow-xl" />
                  </div>
                  <div className="md:col-span-2 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-white mb-4">{book.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">{book.desc}</p>
                    <a href={book.link} target="_blank" rel="noopener noreferrer" className="inline-block">
                      <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-3">
                        <ShoppingCart className="w-5 h-5 mr-2" />Comprar na Amazon
                      </Button>
                    </a>
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

export default Livros;
