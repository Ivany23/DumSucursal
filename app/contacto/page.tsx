'use client';

import React, { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { GlassCard3D } from '@/components/cards/GlassCard3D';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Send,
} from 'lucide-react';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'informacao',
    mensagem: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) return;

    // Static simulation feedback without backend
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] pt-32 pb-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          tone="light"
          accent="gradient"
          badge="Canais Institucionais"
          title="Fale Connosco"
          subtitle="Estamos ao seu dispor para esclarecer dúvidas sobre a disponibilidade de artigos, parcerias com fornecedores ou visitas empresariais ao armazém."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard3D intensity={6}>
              <div className="p-8 bg-white">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-4">
                  Atendimento Geral & Fornecedores
                </span>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">Telefone Central</span>
                      <a href="tel:+244923000000" className="text-sm font-semibold text-[#0B1B3A] hover:text-[#0066FF] transition-colors">
                        +244 923 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">Correio Eletrónico</span>
                      <a href="mailto:geral@dumsociedade.com" className="text-sm font-semibold text-[#0B1B3A] hover:text-[#0066FF] transition-colors">
                        geral@dumsociedade.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0066FF] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block font-medium">Sede & Armazém</span>
                      <p className="text-sm text-slate-700 font-normal">
                        SOCIEDADE DUM LDA, Zimpeto, Maputo — Moçambique
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <a
                    href="https://wa.me/244900000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 text-emerald-600" />
                    <span>Canal de WhatsApp Oficial</span>
                  </a>
                </div>
              </div>
            </GlassCard3D>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 font-normal leading-relaxed shadow-xs">
              <p>
                <strong className="text-slate-800 font-bold">Nota:</strong> As mensagens enviadas por este canal institucional destinam-se a esclarecimentos, cotações institucionais de lotes físicos e apoio aos visitantes do armazém.
              </p>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0066FF] flex items-center justify-center text-white mx-auto mb-6 shadow-md">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1B3A] mb-2">
                    Mensagem Recebida com Sucesso
                  </h3>
                  <p className="text-sm text-slate-600 font-normal max-w-md mx-auto mb-8">
                    Agradecemos o seu contacto com a DUM Sociedade Lda. A nossa equipa responderá com a maior brevidade.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ nome: '', telefone: '', email: '', assunto: 'informacao', mensagem: '' });
                    }}
                    className="px-6 py-3 rounded-full bg-[#0066FF] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0052CC] transition-colors cursor-pointer shadow-sm"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#0B1B3A] mb-4">
                    Envie-nos uma Mensagem
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Nome */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: João da Silva"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 transition-colors placeholder-slate-400"
                      />
                    </div>

                    {/* Telefone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+244 9..."
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 transition-colors placeholder-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                        Correio Eletrónico (Email) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="seuemail@exemplo.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 transition-colors placeholder-slate-400"
                      />
                    </div>

                    {/* Assunto */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                        Assunto
                      </label>
                      <select
                        value={formData.assunto}
                        onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 transition-colors cursor-pointer"
                      >
                        <option value="informacao">Informação sobre Produtos</option>
                        <option value="empresas">Abastecimento Empresarial</option>
                        <option value="fornecedor">Apresentação de Fornecedor</option>
                        <option value="outro">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#0066FF] mb-2">
                      A sua Mensagem *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Descreva detalhadamente como o podemos ajudar..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-[#0B1B3A] text-sm focus:outline-none focus:border-[#0066FF] focus:ring-4 focus:ring-[#0066FF]/10 transition-colors placeholder-slate-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
