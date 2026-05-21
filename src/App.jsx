import { useEffect, useState } from 'react';
import {
  BadgeCheck,
  BookOpen,
  Camera,
  Check,
  ChevronDown,
  Download,
  Gift,
  Heart,
  Image,
  Lock,
  Mail,
  MessageCircleHeart,
  Palette,
  Printer,
  Ribbon,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Sticker,
  Ticket,
  Trophy,
  WandSparkles,
  Zap,
} from 'lucide-react';

const quickProof = ['Editável no Canva', 'Acesso imediato', 'Pode imprimir', 'Feito para emocionar'];

const collectionMoments = [
  ['Primeiro encontro', Camera],
  ['Primeira viagem', Ticket],
  ['Foto favorita', Heart],
  ['Data especial', Star],
  ['Piada interna', MessageCircleHeart],
  ['Conquista juntos', Trophy],
];

const gallery = [
  ['Capa do casal', 'Um começo com nome, data e clima de presente.'],
  ['Figurinhas editáveis', 'Fotos, frases e momentos em formato colecionável.'],
  ['Páginas afetivas', 'Espaços para memórias, conquistas e detalhes de vocês.'],
  ['Versão para entrega', 'Baixe para imprimir ou enviar como surpresa digital.'],
];

const included = [
  'Modelo digital editável no Canva',
  'Capa romântica personalizada',
  'Páginas internas com estética de coleção',
  'Figurinhas para fotos do casal',
  'Página de escalação do amor',
  'Página de melhores momentos',
  'Página de conquistas juntos',
  'Frases especiais para personalizar',
  'Guia simples de impressão',
];

const valueCards = [
  ['Não é só uma foto', 'É a história de vocês organizada como uma coleção afetiva.', BookOpen],
  ['Não parece template comum', 'A mistura de álbum, presente e romance cria uma entrega memorável.', Sparkles],
  ['Não exige design', 'Você troca textos e imagens no Canva, sem começar do zero.', WandSparkles],
];

const benefits = [
  ['Presente personalizado', 'Cada página leva nomes, fotos, datas e detalhes reais.', Heart],
  ['Digital e rápido', 'Receba o acesso e comece a editar sem esperar entrega física.', Zap],
  ['Pronto para imprimir', 'Use como PDF, imagem ou presente impresso.', Printer],
  ['Clima de Dia dos Namorados', 'Visual doce, emocional e com cara de surpresa.', Gift],
  ['Toque de figurinha', 'A nostalgia aparece no formato, não como tema de futebol puro.', Sticker],
  ['Experiência divertida', 'Montar o álbum também vira parte do presente.', Palette],
];

const steps = [
  ['01', 'Compre o modelo', 'Você recebe o acesso digital logo após a confirmação.'],
  ['02', 'Abra no Canva', 'O arquivo já vem diagramado, com páginas e figurinhas prontas.'],
  ['03', 'Troque pelas fotos de vocês', 'Personalize nomes, frases, datas e momentos especiais.'],
  ['04', 'Baixe e entregue', 'Envie online ou imprima para fazer uma surpresa mais completa.'],
];

const bonus = [
  ['Frases românticas prontas', 'Textos para preencher o álbum sem travar na escrita.', MessageCircleHeart],
  ['Figurinhas extras', 'Elementos decorativos para deixar tudo com cara de coleção.', Sticker],
  ['Ideias de entrega surpresa', 'Sugestões simples para transformar o envio em momento especial.', Ribbon],
  ['Guia de impressão', 'Orientações para baixar e imprimir com acabamento bonito.', Printer],
];

const testimonials = [
  {
    name: "Mariana Alves",
    age: "24 anos",
    username: "@mari.alves",
    avatar: "/avatar-mariana.png",
    tag: "Presente de 1 Ano",
    text: "Meu namorado ama futebol e ficou muito emocionado quando viu nosso álbum. Foi o presente mais criativo que já dei! A qualidade da figurinha lendária dourada ficou incrível.",
    rating: 5,
    date: "Compra verificada"
  },
  {
    name: "Lucas Santos",
    age: "28 anos",
    username: "@lucas_santos9",
    avatar: "/avatar-lucas.png",
    tag: "Aniversário de Namoro",
    text: "Fiz para o nosso aniversário de namoro e ela simplesmente chorou vendo as fotos. É muito fácil de personalizar pelo Canva e a impressão fica profissional demais.",
    rating: 5,
    date: "Compra verificada"
  },
  {
    name: "Camila Ribeiro",
    age: "31 anos",
    username: "@camilaribeiro",
    avatar: "/avatar-camila.png",
    tag: "Dia dos Namorados",
    text: "Estava cansada de presentes prontos e sem graça. O Copa do Amor uniu o romance do álbum com a nossa história de forma muito lúdica. Ela amou colar cada figurinha!",
    rating: 5,
    date: "Compra verificada"
  },
  {
    name: "Beatriz Costa",
    age: "25 anos",
    username: "@bia_costa",
    avatar: "/avatar-beatriz.png",
    tag: "Surpresa Romântica",
    text: "Editei tudo super rápido pelo celular mesmo. A entrega digital é na hora e o guia de impressão ajuda muito a escolher o papel certo. Valeu cada centavo!",
    rating: 5,
    date: "Compra verificada"
  }
];

const trustItems = [
  ['Pagamento seguro', ShieldCheck],
  ['Acesso imediato', Zap],
  ['Produto digital', Download],
  ['Editável no Canva', Palette],
  ['Suporte por e-mail', Mail],
];

const faqs = [
  ['Preciso saber usar o Canva?', 'Não. O arquivo já vem pronto para você trocar fotos, nomes, frases e datas.'],
  ['O produto é físico?', 'Não. É um produto digital editável. Você pode imprimir se quiser entregar em mãos.'],
  ['Recebo quando?', 'O acesso é liberado após a confirmação do pagamento.'],
  ['Consigo editar pelo celular?', 'Sim. Você pode editar pelo aplicativo do Canva ou pelo navegador.'],
  ['Posso usar minhas próprias fotos?', 'Sim. A ideia é justamente transformar as fotos e momentos reais do casal em figurinhas.'],
  ['Dá para enviar online?', 'Sim. Você pode baixar o arquivo e enviar por mensagem, e-mail ou imprimir.'],
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(timer);
    };
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 flex flex-col ${isScrolled
          ? 'bg-ink/95 backdrop-blur-xl border-b border-white/10 shadow-soft'
          : 'bg-transparent border-transparent'
        }`}
    >
      <div className="bg-sun text-ink py-1.5 px-4 flex justify-center items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-wide">
        <span>Oferta de lançamento expira em</span>
        <div className="flex items-center gap-0.5 bg-ink/90 text-white px-1.5 py-0.5 rounded shadow-inner">
          <span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center text-xl font-black uppercase text-white tracking-wide">
          LOVE <span className="text-sun ml-1.5">CUP</span>
        </a>
        <a
          href="https://pay.lowify.com.br/checkout?product_id=Ts6yg0"
          className="rounded-xl bg-sun px-4 py-3 text-xs font-black uppercase tracking-wide text-ink shadow-glow transition hover:-translate-y-0.5 sm:px-5"
        >
          Quero agora
        </a>
      </div>
    </header>
  );
}

function CtaButton({ children, variant = 'primary', className = '' }) {
  const styles =
    variant === 'ghost'
      ? 'border border-white/20 bg-white/8 text-white hover:bg-white/14'
      : 'bg-sun text-ink shadow-glow hover:-translate-y-0.5';

  return (
    <a
      href="https://pay.lowify.com.br/checkout?product_id=Ts6yg0"
      className={`premium-cta inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-center text-sm font-black uppercase tracking-wide transition ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, children, dark = false, align = 'center' }) {
  const centered = align === 'center';

  return (
    <div data-reveal className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-black uppercase tracking-widest ${dark ? 'bg-white/10 text-blush' : 'bg-blush text-love'
            }`}
        >
          <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl font-blackish uppercase leading-[1.04] sm:text-5xl ${dark ? 'text-white' : 'text-ink'}`}>
        {children}
      </h2>
    </div>
  );
}

function SoftCard({ children, className = '' }) {
  return <div data-reveal className={`premium-card rounded-3xl border border-rose-100 bg-white p-6 shadow-soft ${className}`}>{children}</div>;
}

function StickerTile({ label, Icon }) {
  return (
    <div data-reveal className="premium-card group rounded-2xl border border-rose-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blush text-love">
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-sm font-black uppercase leading-tight text-ink">{label}</p>
    </div>
  );
}

function LoveCupMockup() {
  return (
    <div data-reveal className="mockup-stage relative mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
      {/* Efeito de luz (glow) atrás da imagem para destacá-la e tirar o aspecto "ofuscado" */}
      <div className="absolute inset-0 z-0 bg-sun/30 blur-[80px] rounded-[2rem] transform scale-105" />

      <div style={{ '--rotate': '-11deg' }} className="float-card absolute -left-6 bottom-2 md:bottom-4 z-20 w-24 md:w-28 shadow-glow">
        <img
          src="/figurinha lendária.png"
          alt="Figurinha Lendária"
          className="w-full rounded-2xl shadow-soft"
        />
      </div>

      <div style={{ '--rotate': '8deg' }} className="float-card float-card-delay absolute -right-4 -top-4 md:-top-6 z-20 rounded-2xl bg-love p-3 text-white shadow-soft ring-4 ring-white/20">
        <p className="text-[10px] font-black uppercase tracking-wider">Cupom do amor</p>
        <p className="mt-1 text-xl font-black md:text-2xl">11,90</p>
      </div>

      <div className="album-shell relative z-10 rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(255,200,0,0.15)] bg-ink/50">
        <img
          src="/mockup1.png"
          alt="Love Cup Mockup"
          className="w-full h-auto object-contain relative z-10"
        />
      </div>
    </div>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-5 flex items-center justify-between rounded-xl bg-white/10 p-3 border border-white/20">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sun text-lg font-black text-ink shadow-glow">
            {minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-sun font-black text-lg">:</span>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sun text-lg font-black text-ink shadow-glow">
            {seconds.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="flex flex-col ml-1">
          <span className="text-[10px] font-black uppercase text-sun tracking-wider leading-none">Oferta expira em</span>
          <span className="text-xs font-semibold text-white/80 leading-tight mt-0.5">Minutos e segundos</span>
        </div>
      </div>
    </div>
  );
}

function OfferCard() {
  return (
    <div data-reveal className="offer-card rounded-[2rem] border border-white/12 bg-gradient-to-br from-love via-ink to-ink p-6 text-white shadow-soft sm:p-8">
      <div className="inline-flex rounded-xl bg-white/12 px-3 py-2 text-[11px] font-black uppercase tracking-widest text-blush">
        Oferta de lançamento
      </div>
      <h3 className="mt-5 text-3xl font-blackish uppercase leading-tight sm:text-4xl">
        Seu álbum Love Cup por <span className="text-sun">R$11,90</span>
      </h3>
      <p className="mt-4 font-semibold leading-7 text-white/78">
        Pagamento único, acesso vitalício e edição livre para transformar as memórias de vocês em presente.
      </p>
      <div className="mt-4 flex items-end gap-3">
        <span className="text-lg font-black text-white/45 line-through">R$47,00</span>
        <span className="rounded-lg bg-blush px-2 py-1 text-xs font-black uppercase text-love">economize hoje</span>
      </div>
      <CountdownTimer />
      <CtaButton className="mt-6 w-full">
        <ShoppingBag className="h-5 w-5" /> Quero meu álbum agora
      </CtaButton>
    </div>
  );
}

function App() {
  const [purchase, setPurchase] = useState(null);
  const [showPurchase, setShowPurchase] = useState(false);
  const [viewers, setViewers] = useState(142);

  useEffect(() => {
    setViewers(Math.floor(Math.random() * (180 - 120 + 1)) + 120);
    const interval = setInterval(() => {
      setViewers((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        const next = prev + change;
        return Math.min(Math.max(next, 110), 195);
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fakePurchases = [
      { name: 'Mariana Alves', city: 'São Paulo - SP', time: 'há 2 minutos' },
      { name: 'Lucas Santos', city: 'Rio de Janeiro - RJ', time: 'há 4 minutos' },
      { name: 'Camila Ribeiro', city: 'Belo Horizonte - MG', time: 'há 1 minuto' },
      { name: 'Beatriz Costa', city: 'Curitiba - PR', time: 'há 6 minutos' },
      { name: 'Guilherme Souza', city: 'Porto Alegre - RS', time: 'há 3 minutos' },
      { name: 'Amanda Lima', city: 'Salvador - BA', time: 'há 5 minutos' },
      { name: 'Gabriel Rodrigues', city: 'Brasília - DF', time: 'há 30 segundos' },
      { name: 'Larissa Ferreira', city: 'Fortaleza - CE', time: 'há 7 minutos' },
      { name: 'Felipe Albuquerque', city: 'Recife - PE', time: 'há 2 minutos' }
    ];

    let nextTimeout;
    let hideTimeout;

    const showNextPurchase = () => {
      const randomPurchase = fakePurchases[Math.floor(Math.random() * fakePurchases.length)];
      setPurchase(randomPurchase);
      setShowPurchase(true);

      // Hide after 5 seconds
      hideTimeout = setTimeout(() => {
        setShowPurchase(false);
        // Wait 12 seconds before showing the next purchase
        nextTimeout = setTimeout(showNextPurchase, 12000);
      }, 5000);
    };

    // Show the first purchase after 6 seconds
    const initialTimeout = setTimeout(showNextPurchase, 6000);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(nextTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  useEffect(() => {
    const revealItems = [...document.querySelectorAll('[data-reveal]')];
    const revealNow = (item) => {
      item.classList.add('is-visible');
      observer.unobserve(item);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealNow(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px 10% 0px', threshold: 0.01 },
    );

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 70}ms`);
      observer.observe(item);
      const rect = item.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96) {
        revealNow(item);
      }
    });

    const hero = document.querySelector('[data-hero]');
    const onMove = (event) => {
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3);
      const y = ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3);
      hero.style.setProperty('--mx', x);
      hero.style.setProperty('--my', y);
    };

    hero?.addEventListener('pointermove', onMove);

    return () => {
      observer.disconnect();
      hero?.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <main id="top" className="bg-cream pb-28 text-slate-900 lg:pb-0">
      <Header />

      <section data-hero className="hero-scene relative overflow-hidden bg-ink px-4 pb-16 pt-28 text-white sm:px-6 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 opacity-35 romantic-pattern" />
        <div className="hero-glow absolute -right-24 top-16 h-72 w-72 rounded-full bg-love/25 blur-3xl" />
        <div className="hero-glow hero-glow-soft absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-blush/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blush/40 to-transparent" />

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div data-reveal className="text-center lg:text-left">
            <span className="eyebrow-chip inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-widest text-blush">
              <Gift className="h-4 w-4 text-sun" /> Presente romântico em formato de coleção
            </span>
            <h1 className="hero-title mt-7 text-4xl font-blackish uppercase leading-[0.98] sm:text-6xl">
              A história de vocês, transformada em <span className="text-sun">figurinhas do amor</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg font-semibold leading-8 text-white/78 lg:mx-0">
              Um álbum digital editável no Canva para criar um presente personalizado, emocional e divertido sem parecer mais uma lembrança comum.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border-2 border-white/10 bg-black/40 shadow-2xl w-full max-w-[340px] mx-auto lg:mx-0">
              <style>{`
                wistia-player[media-id='cm95azddj8']:not(:defined) {
                  background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/cm95azddj8/swatch');
                  display: block;
                  filter: blur(5px);
                  padding-top: 177.78%;
                }
              `}</style>
              <wistia-player media-id="cm95azddj8" aspect="0.5625"></wistia-player>
            </div>
            <div className="mt-4 flex items-center justify-center lg:justify-start gap-2.5 text-xs font-bold text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
              </span>
              <span>
                <span className="text-sun font-black">{viewers} pessoas</span> assistindo a este vídeo agora
              </span>
            </div>
            <div className="mt-8 grid gap-3 sm:flex sm:justify-center lg:justify-start">
              <CtaButton>Criar meu Love Cup</CtaButton>
              <a
                href="#galeria"
                className="premium-cta inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 text-sm font-black uppercase tracking-wide text-white transition hover:bg-white/14"
              >
                <Image className="h-4 w-4" /> Ver como fica
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {quickProof.map((item) => (
                <div key={item} className="proof-pill rounded-2xl border border-white/10 bg-white/7 px-3 py-3 text-center text-[11px] font-black uppercase text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <LoveCupMockup />
          </div>
        </div>
      </section>

      <section className="bg-blush px-4 py-16 sm:px-6 lg:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>
            O presente que parece feito em segredo para <span className="text-love">vocês dois</span>
          </SectionTitle>
          <p className="mt-6 text-xl font-semibold leading-relaxed text-ink/75">
            Em vez de entregar só mais um item bonito, você entrega uma experiência: abrir páginas, reconhecer momentos e colecionar a própria história.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle eyebrow="Por que funciona">
          Presentes comuns somem. Memórias bem contadas ficam.
        </SectionTitle>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-3">
          {valueCards.map(([title, text, Icon]) => (
            <SoftCard key={title} className="relative overflow-hidden">
              <div className="absolute right-4 top-4 text-7xl font-black text-blush/70">♥</div>
              <div className="relative grid h-13 w-13 place-items-center rounded-2xl bg-ink text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-8 text-xl font-black uppercase text-ink">{title}</h3>
              <p className="relative mt-3 font-semibold leading-7 text-slate-600">{text}</p>
            </SoftCard>
          ))}
        </div>

        <div className="mx-auto max-w-5xl mt-16 relative group" data-reveal>
          {/* Efeito de luz (glow) colorido atrás do banner */}
          <div className="absolute -inset-2 md:-inset-4 rounded-[3rem] bg-gradient-to-r from-sun via-love to-blush opacity-30 blur-2xl transition duration-700 group-hover:opacity-60 group-hover:blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-white bg-cream p-2 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition duration-500 transform group-hover:-translate-y-2">
            <div className="absolute inset-0 opacity-45 sticker-paper pointer-events-none" />
            <div className="relative">
              <img
                src="/canvaeditavel.png"
                alt="Modelo Editável no Canva"
                className="w-full h-auto rounded-[1.5rem] object-cover shadow-md"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col items-center justify-center py-24 px-6 text-center">
                <Palette className="h-12 w-12 text-love animate-pulse mb-3" />
                <p className="font-black uppercase text-ink text-sm">Imagem canvaeditavel.png</p>
                <p className="text-xs text-slate-500 font-semibold mt-1">Coloque o arquivo "canvaeditavel.png" na pasta public para exibir aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <SectionTitle eyebrow="Virou coleção">
            Cada capítulo do casal ganha uma figurinha
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-3xl text-lg font-semibold leading-8 text-slate-600">
            O toque de álbum aparece nos selos, páginas e cards colecionáveis. O centro da experiência continua sendo o amor, as fotos e os detalhes de vocês.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {collectionMoments.map(([label, Icon]) => (
              <StickerTile key={label} label={label} Icon={Icon} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <SectionTitle eyebrow="Por dentro do álbum">
            Páginas desenhadas para contar a sua história
          </SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600">
            Dê uma espiadinha em como as páginas duplas organizam os melhores momentos do casal de forma divertida e com estética de coleção.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2" data-reveal>
            <div className="overflow-hidden rounded-[2.5rem] border-[4px] border-white shadow-soft bg-white p-2 transition duration-500 hover:-translate-y-2 group">
              <div className="aspect-[1.414/1] rounded-[2rem] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/paginaberta1.png"
                  alt="Página Interna 1"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center text-slate-400 p-6 text-center">
                  <Image className="h-10 w-10 mb-3 opacity-40" />
                  <p className="text-sm font-black uppercase text-ink">paginaberta1.png</p>
                  <p className="text-xs font-semibold mt-1">Coloque a foto do álbum aberto aqui</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.5rem] border-[4px] border-white shadow-soft bg-white p-2 transition duration-500 hover:-translate-y-2 group">
              <div className="aspect-[1.414/1] rounded-[2rem] bg-slate-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/paginaberta2.png"
                  alt="Página Interna 2"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden flex-col items-center text-slate-400 p-6 text-center">
                  <Image className="h-10 w-10 mb-3 opacity-40" />
                  <p className="text-sm font-black uppercase text-ink">paginaberta2.png</p>
                  <p className="text-xs font-semibold mt-1">Coloque a foto do álbum aberto aqui</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="galeria" className="overflow-hidden bg-ink px-4 py-16 text-white sm:px-6 lg:py-24">
        <SectionTitle dark eyebrow="Prévia visual">
          Uma estética de presente, com alma de álbum
        </SectionTitle>
        <div className="gallery-scroll mx-auto mt-12 flex max-w-6xl snap-x gap-5 overflow-x-auto pb-6">
          {gallery.map(([title, text], index) => (
            <div key={title} className="min-w-[82%] snap-center rounded-[2rem] border border-white/10 bg-white/8 p-4 sm:min-w-[360px]">
              <div className="relative h-80 overflow-hidden rounded-[1.5rem] bg-transparent">
                <img
                  src={`/0${index + 1}.png`}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-2xl font-black uppercase">{title}</h3>
              <p className="mt-2 font-semibold leading-7 text-white/68">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionTitle align="left" eyebrow="O que é">
              Love Cup é um álbum digital editável para contar o amor de vocês
            </SectionTitle>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              Ele combina a nostalgia das figurinhas com uma linguagem romântica de presente. Você personaliza no Canva, baixa e entrega do jeito que fizer mais sentido: impresso, digital ou como parte de uma surpresa.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(([title, text, Icon]) => (
              <SoftCard key={title} className="p-5">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-blush text-love">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-black uppercase text-ink">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text}</p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle eyebrow="Como funciona">
          Da compra à surpresa em quatro passos
        </SectionTitle>
        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-4">
          {steps.map(([number, title, text]) => (
            <div key={number} className="rounded-3xl border border-rose-100 bg-cream p-6">
              <div className="mb-8 inline-flex rounded-2xl bg-love px-4 py-3 text-xl font-black text-white">{number}</div>
              <h3 className="text-xl font-black uppercase text-ink">{title}</h3>
              <p className="mt-3 font-semibold leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-love px-4 py-16 text-white sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionTitle dark align="left">
            Tudo que vem no seu kit digital
          </SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 font-bold text-white">
                <Check className="h-5 w-5 shrink-0 rounded-full bg-sun p-1 text-ink" /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle eyebrow="Bônus">
          Pequenos extras para deixar a entrega mais especial
        </SectionTitle>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {bonus.map(([title, text, Icon]) => (
            <SoftCard key={title}>
              <div className="mb-8 grid h-12 w-12 place-items-center rounded-xl bg-ink text-sun">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-black uppercase text-ink">{title}</h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{text}</p>
            </SoftCard>
          ))}
        </div>
      </section>

      <section className="bg-blush px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle eyebrow="Quem já presenteou">
          Reações que você quer provocar
        </SectionTitle>
        <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item) => (
            <div key={item.name} className="premium-card flex flex-col justify-between rounded-3xl bg-white p-6 shadow-soft transition hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover border-2 border-love/20"
                  />
                  <div>
                    <h4 className="font-black text-sm uppercase text-ink leading-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 font-semibold">{item.username} • {item.age}</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-0.5 text-sun">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-sun" />
                  ))}
                </div>

                <p className="mt-4 text-sm font-semibold leading-relaxed text-ink/85">
                  “{item.text}”
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-rose-50/50 pt-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 text-[10px] font-black uppercase text-pitch">
                  <span className="h-1.5 w-1.5 rounded-full bg-pitch" />
                  {item.tag}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle align="left" eyebrow="Compra segura">
              Digital, simples e sem complicação
            </SectionTitle>
            <p className="mt-5 text-lg font-semibold leading-8 text-slate-600">
              Você compra uma vez, acessa o modelo e edita quando quiser. O produto é digital, então não depende de frete.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {trustItems.map(([title, Icon]) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-rose-100 bg-cream p-5">
                <Icon className="h-6 w-6 text-love" />
                <p className="font-black uppercase text-ink">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="oferta" className="relative overflow-hidden px-4 py-16 sm:px-6 lg:py-24 bg-cover bg-center" style={{ backgroundImage: "url('/pattern2026.jpg')" }}>
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-white p-8 shadow-2xl md:p-12 text-ink grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-xl bg-blush px-4 py-2 text-[11px] font-black uppercase tracking-widest text-love border border-rose-100">
              Oferta de lançamento
            </span>
            <h2 className="mt-6 text-4xl font-blackish uppercase leading-tight sm:text-5xl text-ink">
              Garanta o seu <span className="text-love">Love Cup</span> hoje
            </h2>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-slate-600">
              Um presente criativo para Dia dos Namorados, aniversário de namoro ou qualquer data em que a história de vocês mereça virar lembrança.
            </p>
          </div>
          <OfferCard />
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6 lg:py-24">
        <SectionTitle>Dúvidas frequentes</SectionTitle>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group rounded-2xl border border-rose-100 bg-white p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-ink">
                {question}
                <ChevronDown className="h-5 w-5 shrink-0 text-love transition group-open:rotate-180" />
              </summary>
              <p className="mt-4 font-semibold leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-ink px-4 py-10 text-white sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-black uppercase">Love <span className="text-sun">Cup</span></p>
            <p className="mt-2 text-sm font-semibold text-white/62">Um álbum de figurinhas romântico para colecionar memórias.</p>
          </div>
          <div className="flex justify-center gap-5 text-sm font-bold text-white/70">
            <a href="#galeria">Prévia</a>
            <a href="#oferta">Oferta</a>
            <a href="#top">Topo</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-rose-100 bg-white/96 p-3 shadow-[0_-18px_40px_rgba(8,15,38,0.14)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-3">
          <div className="min-w-20">
            <p className="text-[10px] font-black uppercase text-slate-400 line-through decoration-love decoration-2">De R$47,00</p>
            <p className="text-xl font-black text-love">R$11,90</p>
          </div>
          <a href="https://pay.lowify.com.br/checkout?product_id=Ts6yg0" className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-sun px-4 text-center text-xs font-black uppercase tracking-wide text-ink shadow-glow">
            <ShoppingBag className="h-4 w-4" /> Quero meu Love Cup
          </a>
        </div>
      </div>

      {/* Social Proof Popup */}
      <div
        className={`fixed left-4 lg:left-6 z-[60] flex items-center gap-3 rounded-2xl border border-rose-100 bg-white/95 p-3.5 shadow-[0_10px_30px_rgba(8,15,38,0.12)] backdrop-blur-md transition-all duration-500 max-w-[90%] sm:max-w-sm ${
          showPurchase && purchase
            ? 'bottom-24 lg:bottom-6 translate-y-0 opacity-100'
            : 'bottom-20 lg:bottom-0 translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-love text-white shadow-md">
          <ShoppingBag className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sun opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sun"></span>
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-black text-ink uppercase leading-tight tracking-wide flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-emerald-500 fill-emerald-50" /> Compra Aprovada!
          </p>
          <p className="mt-0.5 text-[11px] font-semibold text-slate-600 truncate">
            <span className="font-black text-ink">{purchase?.name}</span> ({purchase?.city})
          </p>
          <p className="text-[10px] font-medium text-slate-400 mt-0.5">
            Adquiriu o Love Cup {purchase?.time}
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
