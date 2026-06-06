import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

// Sửa 1 & 2: Viết hoa tên mảng và đổi 'name' thành 'label'
const NAV_ITEMS = [
  { label: 'Giới thiệu', href: '#gioi-thieu' },
  { label: 'Bản thân', href: '#ban-than' }, 
  { label: 'Dự án', href: '#du-an' },
  { label: 'Tổng kết', href: '#tong-ket' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // Sửa 4: Đổi mặc định thành '#gioi-thieu'
  const [activeSection, setActiveSection] = useState('#gioi-thieu');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    );
    
    // Sửa 3: Cập nhật lại các ID cần theo dõi khi cuộn trang
    ['gioi-thieu', 'ban-than', 'du-an', 'tong-ket'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-dark-950/90 backdrop-blur-xl border-b border-dark-700/30 shadow-lg shadow-dark-950/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Đổi href logo trỏ về #gioi-thieu thay vì #hero */}
        <a href="#gioi-thieu" className="flex items-center gap-2 group font-mono">
          {/* --- ĐÃ THAY BẰNG ICON CÁ VOI XỊN XÒ --- */}
          <Shield 
            size={24} 
            className="text-neon-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" 
          />
          {/* -------------------------------------- */}
  
          <span className="text-lg md:text-xl font-extrabold tracking-wide bg-gradient-to-r from-white via-slate-200 to-neon-400 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
            Nguyễn Viết Thông
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href ? 'active text-neon-400' : ''}`}
            >
              <span className="font-mono text-xs text-neon-500/60 mr-1">
                {String(NAV_ITEMS.indexOf(item) + 1).padStart(2, '0')}
              </span>
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-dark-300 hover:text-neon-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-dark-700/30 animate-slide-down">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`py-2 text-sm font-medium transition-colors ${
                  activeSection === item.href ? 'text-neon-400' : 'text-dark-300 hover:text-dark-50'
                }`}
              >
                <span className="font-mono text-neon-500/60 mr-2 text-xs">
                  {String(NAV_ITEMS.indexOf(item) + 1).padStart(2, '0')}
                </span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}