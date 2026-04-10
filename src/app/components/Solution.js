'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

export default function Solution() {
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
    const [sucessMsg, setsucessMsg] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        let utmData = {}

        try {
            const savedUtm = localStorage.getItem("utm");
            if (savedUtm) {
                utmData = JSON.parse(savedUtm);
            }
        } catch (e) {
            console.error("Erro ao buscar UTMs do localStorage", e);
        }
        try {
            const payload = {
                event_type: "CONVERSION",
                event_family: "CDP",
                payload: {
                    conversion_identifier: " [B2] FORM NORLESS PARKER VALVULAS",
                    name: formData.name,
                    email: formData.email,
                    mobile_phone: formData.phone || "",
                    company_name: formData.company || "",
                    cf_product: formData.product || "",
                    cf_finality: formData.finality || "",
                    traffic_source: utmData.utm_source || "",
                    traffic_medium: utmData.utm_medium || "",
                    traffic_campaign: utmData.utm_campaign || "",
                    traffic_content: utmData.utm_content || "",
                    traffic_term: utmData.utm_term || "",
                },
            };

            let res = await fetch(
                "https://api.rd.services/platform/conversions?api_key=ZbuvlkNkvmSrkbaiuNYrObuUvCDMgPRoCRgn",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );
            const result = await res.json();


            if (!res.ok) {
                console.log("Erro HTTP:", res.status);
                console.log("API Error:", result.error || result);
                setError(true);
                return;
            }
            console.log(`Lead enviado com sucesso com as utms ${utmData}`);
            setsucessMsg(true);
            const whatsMsg = `Olá, gostaria de falar com um especialista da Norless sobre válvulas pneumáticas Parker. Meu nome é ${formData.name} e estou interessado em ${formData.product}. Poderiam me ajudar?`;
            const whatsNumber = '11984471850';

            window.open(`https://wa.me/${whatsNumber}?text=${encodeURIComponent(whatsMsg)}`, '_blank');
            setSubmitted(true);

            setTimeout(() => {
                setSubmitted(false);
                setsucessMsg(false);
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
            console.error("Erro geral:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="section-padding bg-slate-50 overflow-hidden" id="orcamento">
            <div className="container-custom text-center mb-12 md:mb-16">
                <span className="text-yellow-400 font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">
                    Orçamento personalizado
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-black mb-6 leading-[1.1] tracking-tighter uppercase">
                    Envie seus dados e receba sua{' '}
                    <span className="text-orange-400 font-black">proposta </span>
                    <span className="text-yellow-400 font-black">Parker</span>
                </h2>
                <p className="text-sm text-neutral-900 max-w-2xl mx-auto font-bold uppercase tracking-wide leading-relaxed">
                    Nossa equipe retorna com a solução ideal para controle de fluxo nos seus sistemas pneumáticos.
                </p>
            </div>

            <div className="container-custom max-w-2xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-white rounded-3xl shadow-[0_40px_80px_rgba(0,51,102,0.1)] p-8 md:p-10 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-[#ffd700]" />

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-black text-black mb-4 uppercase tracking-tight">Solicitação Enviada!</h3>
                                <p className="text-neutral-900 font-medium mb-2">Obrigado, <span className="text-orange-400 font-bold">{formData.name}</span>.</p>
                                <p className="text-sm text-black/60 uppercase tracking-widest font-bold">Nossa equipe retornará em instantes.</p>
                            </motion.div>
                        ) : (
                            <>
                                <div className="mb-8">
                                    <h3 className="text-xl md:text-2xl font-black text-black uppercase tracking-tighter mb-2">Solicitar cotação</h3>
                                    <p className="text-neutral-900 text-xs font-bold uppercase tracking-widest leading-relaxed">
                                        Especialista Norless em válvulas pneumáticas Parker.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Nome Completo</label>
                                            <input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Digite seu nome"
                                                required
                                                className="w-full bg-slate-50 rounded-lg border-2 border-slate-100 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
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
                                                className="w-full bg-slate-50 rounded-lg border-2 border-slate-100 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-black text-black uppercase tracking-widest ml-1">Equipamento de Interesse</label>
                                        <input
                                            name="product"
                                            value={formData.product}
                                            onChange={handleChange}
                                            placeholder="Ex: Válvula direcional 5/2, ilha de válvulas..."
                                            required
                                            className="w-full bg-slate-50 rounded-lg border-2 border-slate-100 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
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
                                                className="w-full bg-slate-50 rounded-lg border-2 border-slate-100 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
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
                                                className="w-full bg-slate-50 rounded-lg border-2 border-slate-100 px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full group relative flex items-center justify-center gap-3 px-8 py-4 md:py-5 bg-yellow-400 text-black font-black text-[12px] tracking-[0.12em] uppercase rounded-lg transition-all duration-300 hover:bg-orange-400 hover:text-black active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
                                        >
                                            {loading ? (
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                            ) : (
                                                <>
                                                    👉 SOLICITE SUA COTAÇÃO
                                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>

                                        {error && <p className="text-center text-red-500 text-[10px] font-bold uppercase mt-3 tracking-wider">Erro ao enviar. Tente novamente.</p>}
                                        {sucessMsg && <p className="text-center text-green-600 text-[10px] font-bold uppercase mt-3 tracking-wider">Sucesso! Redirecionando...</p>}
                                    </div>

                                    <p className="text-[9px] text-slate-400 text-center uppercase tracking-widest font-bold">
                                        Seus dados estão protegidos sob nossa política de privacidade.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
