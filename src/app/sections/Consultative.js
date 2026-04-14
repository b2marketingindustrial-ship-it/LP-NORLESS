'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function Consultative() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    product: '',
    email: '',
    phone: '',
    finality: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sucessMsg, setSucessMsg] = useState(false);

  const inputClass = `
    w-full bg-slate-50
    rounded-lg border-2 border-slate-100
    px-4 py-3.5
    text-sm text-slate-900
    placeholder:text-slate-400
    focus:outline-none focus:border-blue-500 focus:bg-white
    transition-all duration-300
    font-medium
  `;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    let utmData = {};

    try {
      const savedUtm = localStorage.getItem('utmData');
      if (savedUtm) {
        utmData = JSON.parse(savedUtm);
      }
    } catch (err) {
      console.error('Erro ao buscar UTMs do localStorage', err);
    }

    try {
      const payload = {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: ' [B2] FORM NORLESS PARKER VALVULAS',
          name: formData.name,
          email: formData.email,
          mobile_phone: formData.phone || '',
          company_name: formData.company || '',
          cf_product: formData.product || '',
          cf_finality: formData.finality || '',
          traffic_source: utmData.utm_source || '',
          traffic_medium: utmData.utm_medium || '',
          traffic_campaign: utmData.utm_campaign || '',
          traffic_content: utmData.utm_content || '',
          traffic_term: utmData.utm_term || '',
        },
      };

      const res = await fetch(
        'https://api.rd.services/platform/conversions?api_key=ZbuvlkNkvmSrkbaiuNYrObuUvCDMgPRoCRgn',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (!res.ok) {
        console.error('Erro HTTP:', res.status, result.error || result);
        setError(true);
        return;
      }

      setSucessMsg(true);
      setSubmitted(true);
      window.open(
        `https://wa.me/11984471850?text=${encodeURIComponent(
          `Olá, gostaria de falar com um especialista da Norless sobre válvulas pneumáticas Parker. Meu nome é ${formData.name} e estou interessado em ${formData.product}.` 
        )}`,
        '_blank'
      );

      setTimeout(() => {
        setSubmitted(false);
        setSucessMsg(false);
        setFormData({
          name: '',
          company: '',
          product: '',
          email: '',
          phone: '',
          finality: '',
        });
      }, 3000);
    } catch (err) {
      console.error('Erro geral:', err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500/10 skew-x-[-15deg] translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#ffd700]/5 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-orange-400 font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">
              Norless
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tighter uppercase">
              Atendimento <span className="text-yellow-400">especializado</span> com suporte completo
            </h2>
            <p className="text-sm md:text-lg text-yellow-400 mb-6 leading-relaxed max-w-xl font-medium">
              Nossa equipe técnica está pronta para avaliar sua demanda e indicar as válvulas Parker mais
              eficientes para sua automação.
            </p>
            <p className="text-sm md:text-base text-white/80 mb-8 leading-relaxed max-w-xl font-medium">
              Preencha o formulário ao lado e receba um contato rápido, com proposta técnica e comercial
              personalizada para o seu projeto.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                <p className="text-yellow-400 font-black uppercase tracking-[0.12em] text-[10px] mb-3">Pronta resposta</p>
                <p className="text-white text-sm leading-relaxed">Contato direto com especialistas em válvulas pneumáticas.</p>
              </div>
              <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                <p className="text-yellow-400 font-black uppercase tracking-[0.12em] text-[10px] mb-3">Proposta personalizada</p>
                <p className="text-white text-sm leading-relaxed">Soluções sob medida para desempenho e segurança.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,51,102,0.15)] p-6 md:p-8 border border-slate-200">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">Solicitação enviada!</h3>
                  <p className="text-neutral-900 font-medium mb-2">Obrigado, <span className="text-orange-400 font-bold">{formData.name}</span>.</p>
                  <p className="text-sm text-black/60 uppercase tracking-widest font-bold">Nossa equipe retornará em breve.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Nome completo</label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite seu nome"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Empresa</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Sua empresa"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Equipamento de interesse</label>
                    <input
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      placeholder="Ex: válvula direcional 5/2, ilha de válvulas..."
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">E-mail</label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Telefone/WhatsApp</label>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Finalidade</label>
                    <input
                      name="finality"
                      value={formData.finality}
                      onChange={handleChange}
                      placeholder="Revenda, varejo, projeto de máquina..."
                      required
                      className={inputClass}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="
                        w-full flex items-center justify-center gap-3
                        px-8 py-4
                        bg-yellow-400 text-black
                        font-black text-[12px]
                        tracking-[0.12em] uppercase
                        rounded-xl
                        transition-all duration-300
                        hover:bg-orange-400
                        active:scale-[0.98]
                        disabled:opacity-70 disabled:cursor-not-allowed
                      "
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          Solicitar cotação
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    {error && (
                      <p className="text-center text-red-500 text-xs font-bold uppercase mt-3 tracking-wider">
                        Erro ao enviar. Tente novamente.
                      </p>
                    )}
                    {sucessMsg && (
                      <p className="text-center text-green-600 text-xs font-bold uppercase mt-3 tracking-wider">
                        Sucesso! Redirecionando...
                      </p>
                    )}
                  </div>

                  <p className="text-[9px] text-slate-500 text-center uppercase tracking-widest font-bold">
                    Seus dados estão protegidos e não serão compartilhados.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
