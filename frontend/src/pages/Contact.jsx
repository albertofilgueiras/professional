import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';
import { Phone, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve."
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const whatsappLink = `https://wa.me/610415661366?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20como%20marcar%20o%20meu%20primeiro%20atendimento.`;

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">Contato</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6" data-testid="contact-title">
            Entre em
            <span className="text-green-500"> Contato</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Agende sua primeira sessão ou tire suas dúvidas
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Envie uma Mensagem</CardTitle>
                  <CardDescription className="text-gray-400">
                    Preencha o formulário abaixo e entraremos em contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-gray-800/50 border-green-900/30 text-white placeholder:text-gray-500 focus:border-green-500"
                        data-testid="contact-name-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className="bg-gray-800/50 border-green-900/30 text-white placeholder:text-gray-500 focus:border-green-500"
                        data-testid="contact-email-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className="bg-gray-800/50 border-green-900/30 text-white placeholder:text-gray-500 focus:border-green-500"
                        data-testid="contact-phone-input"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-gray-300">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Como podemos ajudar?"
                        rows={5}
                        required
                        className="bg-gray-800/50 border-green-900/30 text-white placeholder:text-gray-500 focus:border-green-500"
                        data-testid="contact-message-input"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" data-testid="contact-submit-btn">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* WhatsApp CTA */}
              <Card className="bg-gradient-to-br from-green-900/40 to-black border-green-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Preferência pelo WhatsApp?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Entre em contato direto pelo WhatsApp para agendar sua primeira sessão de forma rápida e prática.
                  </p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6" data-testid="whatsapp-cta-btn">
                      <Phone className="w-5 h-5 mr-2" />
                      Agendar pelo WhatsApp
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Telefone / WhatsApp</h4>
                      <a href={whatsappLink} className="text-green-400 hover:underline">
                        +61 0415 661 366
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Instagram className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Instagram</h4>
                      <a
                        href="https://www.instagram.com/albertofilgueiras.phd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:underline"
                      >
                        @albertofilgueiras.phd
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-green-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Localização</h4>
                      <p className="text-gray-300">Cairns, Austrália</p>
                      <p className="text-sm text-gray-400 mt-1">Atendimentos online</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hours */}
              <Card className="bg-gradient-to-br from-gray-900 to-black border-green-900/30">
                <CardHeader>
                  <CardTitle className="text-white">Horário de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Todos os atendimentos são realizados online. Entre em contato para agendar o melhor horário para você.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
