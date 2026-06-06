import { useState, useEffect } from 'react';
import { MapPin, GraduationCap } from 'lucide-react';

// Nội dung chạy chữ máy tính gõ
const TYPEWRITER_TEXTS = [
  'Sinh viên K70 CNTT',
  'Tân binh đẹp trai và đầy tham vọng',
  'Future Developer',
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
    <span className="text-purple-400 font-mono">
      {displayed}
      <span className="animate-blink text-purple-500">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section id="gioi-thieu" className="relative w-full min-h-[550px] bg-dark-950 text-dark-200 overflow-hidden flex items-center border-b border-dark-800/50">

      {/* 1. Phần nội dung bên TRÁI */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-16">
        <div className="lg:col-span-7 space-y-6 max-w-2xl">

          {/* Logo */}
          <div className="w-14 h-14 bg-dark-900 rounded-2xl shadow-xl flex items-center justify-center p-2 border border-dark-800">
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          {/* Tiêu đề chính */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Xin chào, tôi là <br />
            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
              Nguyễn Viết Thông
            </span>
          </h1>

          {/* Hiệu ứng gõ chữ Typewriter */}
          <div className="text-xl md:text-2xl font-semibold h-8">
            <Typewriter />
          </div>

          {/* Câu trích dẫn */}
          <p className="text-dark-400 text-lg md:text-xl italic font-medium leading-relaxed border-l-4 border-purple-500/50 pl-4 mt-4">
            "Một 'tân binh' đầy tham vọng tại K70 ngành Công nghệ Thông tin, UET."
          </p>

          <hr className="border-dark-800 my-6" />

          {/* Thông tin liên hệ */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-dark-500 tracking-wider uppercase">
              Thông tin liên hệ
            </h4>

            <div className="flex items-center gap-3 text-dark-300 hover:text-purple-400 transition-colors">
              <GraduationCap size={18} className="text-purple-400" />
              <a href="mailto:25020410@vnu.edu.vn" className="text-sm font-medium font-mono">25020410@vnu.edu.vn</a>
            </div>

            <div className="flex items-center gap-3 text-dark-300 hover:text-purple-400 transition-colors">
              <MapPin size={18} className="text-purple-400" />
              <a href="tel:0979721940" className="text-sm font-medium font-mono">0979721940</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Phần ảnh nền UET bên PHẢI (Đã kích sáng, căn lề chuẩn) */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[50%] z-0 pointer-events-none select-none opacity-65 md:opacity-75">
        <div className="relative w-full h-full">
          {/* Lớp phủ mờ Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/30 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent z-10" />

        <img
          src={`${import.meta.env.BASE_URL}uet-background.jpg`}
          alt="UET Background"
          className="w-full h-full object-contain object-right lg:object-center contrast-[105%] brightness-125"
        />
        </div>
      </div>

    </section>
  );
}