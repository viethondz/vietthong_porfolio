import { useState, useEffect } from 'react';
import { Mail, Phone } from 'lucide-react';

// Nội dung chạy chữ máy tính gõ
const TYPEWRITER_TEXTS = [
  'Sinh viên K70 CNTT',
  'Tân binh tiềm năng đến từ Thanh Hóa',
  'Web Developer ',
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
            "Một 'tân binh' đầy tham vọng tại K70 ngành Công nghệ Thông tin, UET, nhưng thiếu đi sự may mắn =))."
          </p>

          <hr className="border-dark-800 my-6" />

          {/* Thông tin liên hệ */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold text-dark-500 tracking-wider uppercase">
              Thông tin liên hệ
            </h4>

            {/* Đã sửa thành icon Mail chuẩn */}
            <div className="flex items-center gap-3 text-dark-300 hover:text-purple-400 transition-colors">
              <Mail size={18} className="text-purple-400" />
              <a href="mailto:25020410@vnu.edu.vn" className="text-sm font-medium font-mono">25020410@vnu.edu.vn</a>
            </div>

            {/* Đã sửa thành icon Phone chuẩn */}
            <div className="flex items-center gap-3 text-dark-300 hover:text-purple-400 transition-colors">
              <Phone size={18} className="text-purple-400" />
              <a href="tel:0979721940" className="text-sm font-medium font-mono">0979721940</a>
            </div>

            {/* BỔ SUNG: Cụm nút liên hệ Facebook và GitHub (Có hiệu ứng hover phát sáng) */}
            <div className="flex items-center gap-4 pt-3.5 mt-2 border-t border-dark-800/60 w-fit">
              <a 
                href="https://www.facebook.com/profile.php?id=61578721869929" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-400 hover:text-[#1877F2] hover:drop-shadow-[0_0_8px_rgba(24,119,242,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a 
                href="https://github.com/viethondz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-dark-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Phần ảnh nền UET bên PHẢI (Đã sửa lỗi tràn viền và che gradient) */}
      <div className="absolute right-0 top-0 h-full w-full lg:w-[50%] z-0 pointer-events-none">
        <div className="relative w-full h-full">
    
          {/* ĐƯA ẢNH LÊN TRƯỚC: Để làm lớp nền */}
          <img
            src={`${import.meta.env.BASE_URL}uet-background.jpg`}
            alt="UET Background"
            className="w-full h-full object-cover object-right contrast-[105%]"
          />

          {/* ĐƯA GRADIENT XUỐNG SAU: Để đè lên ảnh, tạo hiệu ứng hòa vào nền tối */}
          {/* Lớp phủ mờ Gradient từ trái sang phải */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/40 to-transparent" />
    
          {/* Lớp phủ mờ Gradient từ dưới lên trên (dành cho mobile) */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent lg:hidden" />

        </div>
      </div>  

    </section>
  );
}