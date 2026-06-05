import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, GraduationCap, Target } from 'lucide-react';

const TYPEWRITER_TEXTS = [
  'Software Architect',
  'DevOps Engineer',
  'Future Builder',
];

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const currentText = TYPEWRITER_TEXTS[textIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayed(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-blink text-neon-500">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(51,78,104,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(51,78,104,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/50 to-dark-950" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-navy-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Terminal-style label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-dark-800/60 border border-dark-600/40 rounded-full animate-fade-in">
          <span className="w-2 h-2 bg-neon-500 rounded-full animate-pulse" />
          <span className="font-mono text-xs text-dark-300">portfolio_v1.0 --status=online</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-dark-50 mb-4 animate-fade-in-up">
          Nguyễn Viết Thông
        </h1>

        {/* Typewriter role */}
        <div className="text-2xl md:text-3xl font-semibold mb-6 h-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Typewriter />
        </div>

        {/* Student info */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <InfoBadge icon={<GraduationCap size={14} />} text="K70 - CNTT, UET-ĐHQGHN" />
          <InfoBadge icon={<MapPin size={14} />} text="MSV: 25020410" />
          <InfoBadge icon={<Target size={14} />} text="Architect + DevOps" />
        </div>

        {/* Description */}
        <p className="text-dark-400 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          Sinh viên ngành Công nghệ Thông tin, hướng đến việc thiết kế kiến trúc
          và vận hành các hệ thống phần mềm. Xây dựng hồ sơ năng lực số chuyên nghiệp
          từ môn "Nhập môn Công nghệ số và Ứng dụng AI".
        </p>

        {/* CTA */}
        <div className="mt-10 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-neon-500/10 border border-neon-500/30 rounded-lg text-neon-400 font-medium hover:bg-neon-500/20 hover:border-neon-500/50 transition-all duration-300 animate-glow"
          >
            Khám phá dự án
            <ChevronDown size={18} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-dark-500" />
      </div>
    </section>
  );
}

function InfoBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-800/50 border border-dark-700/40 rounded-lg">
      <span className="text-neon-500">{icon}</span>
      <span className="text-sm text-dark-200 font-medium">{text}</span>
    </div>
  );
}
