import { useState } from 'react';
import {
  FolderTree, Search, MessageSquareText, Users, Sparkles, ShieldCheck,
  X, ChevronRight, ArrowUpRight,
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  shortTitle: string;
  objective: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  bgAccent: string;
  details: React.ReactNode;
}

const SearchOperator = ({ op, desc }: { op: string; desc: string }) => (
  <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 py-2 border-b border-dark-700/30 last:border-0">
    <code className="font-mono text-xs text-neon-400 bg-dark-900/80 px-2 py-1 rounded break-all whitespace-pre-wrap sm:min-w-0 sm:shrink-0">
      {op}
    </code>
    <span className="text-dark-300 text-sm">{desc}</span>
  </div>
);

const Principle = ({ title, desc }: { title: string; desc: string }) => (
  <div className="flex gap-3 py-2">
    <ChevronRight size={16} className="text-neon-500 mt-0.5 shrink-0" />
    <div>
      <span className="text-dark-100 font-semibold text-sm">{title}</span>
      <p className="text-dark-400 text-sm mt-0.5">{desc}</p>
    </div>
  </div>
);

const projects: Project[] = [
  {
    id: 1,
    title: 'Bài 1: Thao tác cơ bản với tệp tin và thư mục',
    shortTitle: 'Tệp tin & Thư mục',
    objective: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp thống nhất.',
    icon: <FolderTree size={24} />,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    bgAccent: 'bg-sky-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Quy trình thực hiện:</h4>
        <ul className="space-y-2 text-dark-300 text-sm">
          <li className="flex gap-2">
            <span className="text-neon-500 font-mono text-xs mt-0.5">01</span>
            Thiết lập cấu trúc thư mục phân cấp rõ ràng trên ổ đĩa cục bộ, bắt đầu bằng thư mục gốc <code className="code-inline">ThucHanh_NguyenQuocThai</code>, bên trong phân nhánh thành các thư mục con như <code className="code-inline">TaiLieu</code>.
          </li>
          <li className="flex gap-2">
            <span className="text-neon-500 font-mono text-xs mt-0.5">02</span>
            Áp dụng quy tắc đặt tên tệp viết hoa chữ cái đầu (PascalCase) và không dấu để tránh lỗi môi trường, ví dụ: <code className="code-inline">GhiChuQuanTrong.txt</code>, <code className="code-inline">DiChuyen.txt</code>.
          </li>
        </ul>
        <div className="bg-dark-900/60 border border-dark-600/30 rounded-lg p-3">
          <p className="text-dark-400 text-xs font-mono">
            // Lưu ý: Chèn các ảnh chụp màn hình các bước New Folder, Rename, Copy/Cut từ file bài 1 vào đây
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Bài 2: Tìm kiếm và đánh giá thông tin học thuật',
    shortTitle: 'Tìm kiếm Học thuật',
    objective: 'Áp dụng toán tử nâng cao để tìm kiếm và đánh giá nguồn tin chuyên sâu.',
    icon: <Search size={24} />,
    color: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    bgAccent: 'bg-violet-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Chủ đề nghiên cứu:</h4>
        <p className="text-dark-300 text-sm">
          Tác hại của Method Overriding và Bài toán Lớp cơ sở mỏng manh (Fragile Base Class) trong Java.
        </p>

        <h4 className="text-dark-100 font-semibold mt-4">Chiến lược tìm kiếm (5 toán tử):</h4>
        <div className="space-y-0">
          <SearchOperator
            op='intitle:"fragile base class" site:ieee.org OR site:springer.com'
            desc="Lọc bài báo khoa học trên IEEE/Springer có tiêu đề chứa từ khóa."
          />
          <SearchOperator
            op='"Fragile Base Class" AND "Method Overriding" filetype:pdf'
            desc="Tìm tài liệu định dạng PDF chứa chính xác 2 cụm từ này."
          />
          <SearchOperator
            op='author:"Joshua Bloch" AND "Effective Java" inheritance'
            desc="Tìm best practices từ tác giả kiến trúc Java Core."
          />
          <SearchOperator
            op='(composition OR inheritance) AND "best practices" "Java"'
            desc="So sánh hai kỹ thuật thiết kế."
          />
          <SearchOperator
            op='"Fragile Base Class" -C++ "Java"'
            desc="Loại trừ ngôn ngữ C++ để tránh nhiễu."
          />
        </div>

        <h4 className="text-dark-100 font-semibold mt-4">Đánh giá nguồn tin:</h4>
        <p className="text-dark-300 text-sm">
          Đã đánh giá 10 nguồn tài liệu học thuật (Mikhajlov, Businge, Snyder...) dựa trên 5 tiêu chí:
          Tác giả, Cơ quan xuất bản, Phương pháp nghiên cứu, Trích dẫn, và Tính cập nhật.
          Kết quả chỉ ra rằng việc lạm dụng ghi đè phá vỡ tính đóng gói,
          khuyến nghị ưu tiên <span className="text-neon-400 font-semibold">Tổng hợp (Composition)</span> hơn Kế thừa (Inheritance).
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Bài 3: Viết Prompt hiệu quả cho các tác vụ học tập',
    shortTitle: 'Prompt Engineering',
    objective: 'Trình bày sự cải tiến Prompt và kết quả đầu ra.',
    icon: <MessageSquareText size={24} />,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgAccent: 'bg-emerald-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Kết quả:</h4>
        <p className="text-dark-300 text-sm mb-3">
          Đã áp dụng kỹ thuật Prompt Engineering (Role-playing, Chain-of-thought, Specific Constraints) cho 3 tác vụ:
        </p>

        <div className="space-y-3">
          <div className="bg-dark-900/60 border border-emerald-500/20 rounded-lg p-3">
            <span className="text-emerald-400 font-mono text-xs font-semibold">Tác vụ 1</span>
            <span className="text-dark-200 text-sm ml-2">Tóm tắt API JavaFX</span>
            <p className="text-dark-400 text-sm mt-1">
              Nâng cấp từ "Tóm tắt API" thành prompt đóng vai Senior Dev, yêu cầu giải quyết bài toán Thread-safety (updateMessage lên UI Thread).
            </p>
          </div>

          <div className="bg-dark-900/60 border border-emerald-500/20 rounded-lg p-3">
            <span className="text-emerald-400 font-mono text-xs font-semibold">Tác vụ 2</span>
            <span className="text-dark-200 text-sm ml-2">Giải thích tính đa hình</span>
            <p className="text-dark-400 text-sm mt-1">
              Yêu cầu AI giải thích sâu cơ chế <code className="code-inline">Dynamic Method Dispatch</code> ở tầng JVM thay vì định nghĩa bề mặt.
            </p>
          </div>

          <div className="bg-dark-900/60 border border-emerald-500/20 rounded-lg p-3">
            <span className="text-emerald-400 font-mono text-xs font-semibold">Tác vụ 3</span>
            <span className="text-dark-200 text-sm ml-2">Tạo đề toán Giải tích 2</span>
            <p className="text-dark-400 text-sm mt-1">
              Yêu cầu cụ thể định dạng xuất ra bằng mã LaTeX, bao quát đạo hàm hướng, vi phân toàn phần và có lời giải chi tiết.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    shortTitle: 'Hợp tác Trực tuyến',
    objective: 'Minh chứng việc phối hợp trực tuyến trong dự án "Phần mềm Quản lý Thư viện Java".',
    icon: <Users size={24} />,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgAccent: 'bg-amber-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Công cụ và Quy trình triển khai:</h4>

        <div className="space-y-3">
          <div className="bg-dark-900/60 border border-amber-500/20 rounded-lg p-3">
            <span className="text-amber-400 font-mono text-sm font-semibold">Trello</span>
            <span className="text-dark-300 text-sm ml-2">- Quản lý tiến độ</span>
            <ul className="text-dark-400 text-sm mt-2 space-y-1 ml-4 list-disc">
              <li>Xây dựng bảng Kanban 4 cột (Backlog, Doing, Review, Done)</li>
              <li>Áp dụng nhãn màu cho từng loại task (JavaFX, Database, Báo cáo)</li>
              <li>Thiết lập Due Date chặt chẽ</li>
            </ul>
          </div>

          <div className="bg-dark-900/60 border border-amber-500/20 rounded-lg p-3">
            <span className="text-amber-400 font-mono text-sm font-semibold">Discord</span>
            <span className="text-dark-300 text-sm ml-2">- Giao tiếp & Debug</span>
            <ul className="text-dark-400 text-sm mt-2 space-y-1 ml-4 list-disc">
              <li>Phân chia luồng công việc rõ ràng bằng các kênh <code className="code-inline">#thong-bao-chung</code>, <code className="code-inline">#thao-luan-code</code></li>
              <li>Sử dụng tính năng "Thread" để giải quyết tình trạng trôi thông báo khi debug</li>
            </ul>
          </div>

          <div className="bg-dark-900/60 border border-amber-500/20 rounded-lg p-3">
            <span className="text-amber-400 font-mono text-sm font-semibold">Google Workspace</span>
            <span className="text-dark-300 text-sm ml-2">- Lưu trữ & Soạn thảo</span>
            <ul className="text-dark-400 text-sm mt-2 space-y-1 ml-4 list-disc">
              <li>Thiết lập cấu trúc thư mục Drive với quyền truy cập nghiêm ngặt</li>
              <li>Áp dụng chế độ "Suggesting" (Đề xuất) trên Google Docs để giải quyết triệt để tình trạng ghi đè nội dung của nhau</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Bài 5: Sử dụng AI tạo sinh hỗ trợ sáng tạo nội dung',
    shortTitle: 'AI Sáng tạo',
    objective: 'Trưng bày Infographic "Best Practices tối ưu Java 25" sản xuất bằng AI.',
    icon: <Sparkles size={24} />,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    bgAccent: 'bg-rose-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Quy trình tích hợp:</h4>

        <div className="space-y-3">
          <div className="bg-dark-900/60 border border-rose-500/20 rounded-lg p-3">
            <span className="text-rose-400 font-mono text-sm font-semibold">Google Gemini</span>
            <p className="text-dark-400 text-sm mt-1">
              Phân tích kỹ thuật, lập dàn ý về ZGC (Z Garbage Collector), xử lý Thread Pool và sinh mã code so sánh hiệu năng String/StringBuilder.
            </p>
          </div>

          <div className="bg-dark-900/60 border border-rose-500/20 rounded-lg p-3">
            <span className="text-rose-400 font-mono text-sm font-semibold">DALL-E 3</span>
            <p className="text-dark-400 text-sm mt-1">
              Trực quan hóa khái niệm trừu tượng (vùng nhớ Eden, Survivor) bằng prompt chi tiết về màu sắc neon/dark theme.
            </p>
          </div>

          <div className="bg-dark-900/60 border border-rose-500/20 rounded-lg p-3">
            <span className="text-rose-400 font-mono text-sm font-semibold">Canva AI (Magic Design)</span>
            <p className="text-dark-400 text-sm mt-1">
              Xây dựng bố cục Infographic từ text, can thiệp thủ công 70% để cấu trúc lại hệ thống lưới và font chữ Monospace cho các block code.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'Bài 6: Sử dụng AI có trách nhiệm',
    shortTitle: 'AI Trách nhiệm',
    objective: 'Trình bày bộ nguyên tắc cá nhân về sử dụng AI trong môi trường học thuật.',
    icon: <ShieldCheck size={24} />,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/20',
    bgAccent: 'bg-cyan-500/10',
    details: (
      <div className="space-y-4">
        <h4 className="text-dark-100 font-semibold">Bộ nguyên tắc cá nhân:</h4>

        <div className="space-y-1">
          <Principle
            title="Think First, Prompt Later"
            desc="Tự vẽ UML và định hình kiến trúc trước khi dùng AI."
          />
          <Principle
            title="Quy tắc giải thích 100%"
            desc="Tuyệt đối không giữ lại bất kỳ dòng code nào (ví dụ: ReentrantLock trong xử lý đấu giá) nếu không tự giải thích được cơ chế hoạt động."
          />
          <Principle
            title="Active Refactoring"
            desc="Không copy-paste mù quáng; phải tái cấu trúc theo Google Java Style Guide."
          />
          <Principle
            title="Independent Verification"
            desc="Kiểm chứng các đề xuất phức tạp bằng tài liệu Official hoặc Unit Test."
          />
          <Principle
            title="Data Privacy"
            desc="Chỉ cung cấp pseudo-code hoặc error stack trace khi debug, bảo mật kiến trúc nội bộ."
          />
          <Principle
            title="Minh bạch trích dẫn"
            desc="Khai báo rõ ràng phần đóng góp của AI trong báo cáo."
          />
        </div>
      </div>
    ),
  },
];

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group text-left bg-dark-800/40 border ${project.borderColor} rounded-xl p-6 card-glow cursor-pointer w-full`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 ${project.bgAccent} rounded-lg ${project.color}`}>
          {project.icon}
        </div>
        <ArrowUpRight
          size={18}
          className="text-dark-500 group-hover:text-neon-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>

      <h3 className="text-dark-100 font-semibold text-lg mb-2 group-hover:text-neon-400 transition-colors duration-300">
        {project.shortTitle}
      </h3>

      <p className="text-dark-400 text-sm leading-relaxed">
        {project.objective}
      </p>

      <div className="mt-4 flex items-center gap-2 text-neon-500/60 group-hover:text-neon-400 transition-colors">
        <span className="font-mono text-xs">Xem chi tiết</span>
        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-dark-950/80 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-dark-850 border border-dark-600/40 rounded-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-dark-850/95 backdrop-blur-sm border-b border-dark-700/30 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className={`p-2 ${project.bgAccent} rounded-lg ${project.color}`}>
              {project.icon}
            </div>
            <h3 className="text-dark-50 font-semibold">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-dark-400 hover:text-dark-50 hover:bg-dark-700/50 rounded-lg transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 overflow-y-auto max-h-[calc(85vh-64px)]">
          <div className="mb-4">
            <span className="text-dark-400 text-sm font-mono uppercase tracking-wider">Mục tiêu</span>
            <p className="text-dark-200 text-sm mt-1">{project.objective}</p>
          </div>
          {project.details}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <span className="section-subtitle">// Dự án</span>
          <h2 className="section-title mt-1">Trang Dự Án</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-500 to-navy-600 rounded-full mt-4" />
          <p className="text-dark-400 mt-4 max-w-xl text-lg">
            Chi tiết các bài tập từ môn "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo".
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelected(project)} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
