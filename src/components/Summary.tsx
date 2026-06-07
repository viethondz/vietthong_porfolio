import { BookOpen, Users, AlertTriangle, Lightbulb } from 'lucide-react';

const SUMMARY_ITEMS = [
  {
    icon: <BookOpen size={20} />,
    title: 'Trải nghiệm và cảm nhận cá nhân',
    content:
      'Quá trình xây dựng Portfolio là một bước đệm giúp tôi chuyển đổi từ việc tiếp thu lý thuyết thụ động sang chủ động làm chủ các công cụ số. Việc tự tay thiết kế và cấu trúc các công cụ quản lý dự án giúp tôi rèn luyện tính kỷ luật và tư duy hệ thống – tố chất bắt buộc của một Architect/DevOps tương lai.',
    accent: 'text-neon-400',
    border: 'border-neon-500/20',
  },
  {
    icon: <Lightbulb size={20} />,
    title: 'Kiến thức và kỹ năng tâm đắc nhất',
    content: null,
    subItems: [
      {
        title: 'Kỹ năng Prompt Engineering',
        desc: 'Tôi đã học được cách giao tiếp và đặt ranh giới kỹ thuật với AI, biến nó từ một công cụ sinh chữ thành một "người phản biện" kiến trúc phần mềm hiệu quả.',
      },
      {
        title: 'Kỹ năng Hợp tác (Collaboration)',
        desc: 'Thay đổi hoàn toàn tư duy làm việc nhóm nhờ việc thiết lập thành công quy trình giao tiếp bất đồng bộ (asynchronous) trơn tru qua Discord, Trello và Google Docs.',
      },
    ],
    accent: 'text-sky-400',
    border: 'border-sky-500/20',
  },
  {
    icon: <AlertTriangle size={20} />,
    title: 'Thách thức lớn nhất và bài học',
    content:
      'Thách thức lớn nhất là nguy cơ "ảo giác" (hallucination) của AI khi sinh ra các đoạn code đa luồng sai logic (ví dụ: quên block try-finally khi dùng Lock, dễ gây Deadlock). Bài học cốt lõi rút ra là: AI chỉ cung cấp nguyên liệu thô; tư duy phản biện, kỹ năng debug độc lập và nguyên tắc kiểm chứng (Independent Verification) mới là yếu tố quyết định chất lượng và sự an toàn của hệ thống.',
    accent: 'text-amber-400',
    border: 'border-amber-500/20',
  },
];

export default function Summary() {
  return (
    <section id="tong-ket" className="relative py-24">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dark-600/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <div className="mb-16">
          <h2 className="section-title mt-1">Trang Tổng Kết</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-500 to-navy-600 rounded-full mt-4" />
        </div>

        {/* Summary cards */}
        <div className="space-y-6">
          {SUMMARY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              // CHỈ THAY ĐỔI LẠI ĐOẠN CLASSNAME NÀY ĐỂ KÍCH HOẠT ĐỘ PHÁT SÁNG THEO TỪNG MÀU
              className={`bg-dark-800/40 border ${item.border} rounded-xl p-6 transition-all duration-300 cursor-pointer hover:bg-dark-800/60 hover:-translate-y-1 ${
                idx === 0 
                  ? 'hover:border-neon-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]' 
                  : idx === 1 
                  ? 'hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.4)]' 
                  : 'hover:border-amber-400 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={item.accent}>{item.icon}</div>
                <h3 className="text-dark-50 font-semibold text-lg">{item.title}</h3>
              </div>

              {item.content && (
                <p className="text-dark-300 leading-relaxed">{item.content}</p>
              )}

              {item.subItems && (
                <div className="space-y-4">
                  {item.subItems.map((sub, subIdx) => (
                    <div key={subIdx} className="bg-dark-900/50 border border-dark-700/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={14} className={item.accent} />
                        <span className="text-dark-100 font-semibold text-sm">{sub.title}</span>
                      </div>
                      <p className="text-dark-400 text-sm leading-relaxed">{sub.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-dark-700/30 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-neon-500 text-lg">&lt;/&gt;</span>
          </div>
          <p className="text-dark-500 text-sm font-mono">
            Built with React + Tailwind CSS
          </p>
          <p className="text-dark-600 text-xs font-mono mt-1">
            Nguyễn Viết Thông &middot; UET-ĐHQGHN &middot; 2025
          </p>
        </div>
      </div>
    </section>
  );
}