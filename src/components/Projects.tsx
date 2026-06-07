import { useState } from 'react';
import {
  FolderTree, ShieldAlert, TerminalSquare, Users, Palette, Scale,
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
    objective: 'Trình bày cấu trúc thư mục tối ưu và quy tắc đặt tên tệp thống nhất. Thực hành làm chủ các lệnh quản lý tệp tin trên HĐH Windows.',
    icon: <FolderTree size={24} />,
    color: 'text-sky-400',
    borderColor: 'border-sky-500/20',
    bgAccent: 'bg-sky-500/10',
    details: (
      <div className="space-y-6">
        
        {/* Khung Thông tin Môn học & Cấu trúc thư mục */}
        <div className="bg-dark-900/50 p-5 rounded-xl border border-dark-800 text-sm md:text-base text-dark-300 shadow-inner">
          <p className="mb-4 pb-4 border-b border-dark-800/60">
            <strong className="text-white">Môn học:</strong> Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo
          </p>
          
          <div className="flex items-center gap-2 mb-3">
            <strong className="text-sky-400 text-xs font-semibold tracking-wider uppercase">
              [+] Sơ đồ cấu trúc thư mục thực hành:
            </strong>
          </div>
          
          {/* Cây thư mục (Directory Tree) hiển thị trực quan */}
          <div className="font-mono text-sm space-y-2 ml-1 bg-dark-950 p-4 rounded-lg border border-dark-800 shadow-sm overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <span className="text-dark-400">🖴</span> 
              <span className="text-emerald-400 font-bold">New Volume (D:)</span>
            </div>
            
            <div className="flex items-center gap-2 ml-6 text-sky-300 whitespace-nowrap">
              <span className="text-dark-500">└─ 📁</span> 
              <span>ThucHanh_NguyenVietThong</span> 
              <span className="text-dark-500 text-xs italic font-sans ml-2">(Thư mục gốc)</span>
            </div>
            
            <div className="flex items-center gap-2 ml-12 text-sky-200 whitespace-nowrap">
              <span className="text-dark-500">└─ 📁</span> 
              <span>TaiLieu</span> 
              <span className="text-dark-500 text-xs italic font-sans ml-2">(Thư mục lưu trữ)</span>
            </div>
            
            <div className="flex items-center gap-2 ml-16 text-dark-200 whitespace-nowrap">
              <span className="text-dark-500">├─ 📄</span> 
              <span>GhiChuQuanTrong.txt</span>
              <span className="text-dark-500 text-xs italic font-sans ml-2">(Tệp gốc đã đổi tên)</span>
            </div>
            
            <div className="flex items-center gap-2 ml-16 text-dark-400 whitespace-nowrap">
              <span className="text-dark-500">└─ 📄</span> 
              <span className="line-through decoration-dark-500">DiChuyen.txt</span> 
              <span className="text-rose-500/70 text-xs italic font-sans ml-2">(Đã bị Cut/Xóa vĩnh viễn)</span>
            </div>
          </div>
        </div>

        {/* Tiêu đề phần Nhật ký */}
        <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> NHẬT KÝ THAO TÁC KỸ THUẬT CHI TIẾT
        </div>

        {/* Danh sách các bước */}
        <ol className="space-y-4 text-dark-200 text-sm leading-relaxed">
          {/* Bước 1 */}
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">1.</span>
            <div>
              <strong className="text-white">Khởi tạo cây thư mục gốc:</strong> Sử dụng File Explorer, truy cập phân vùng đĩa và thiết lập hệ thống thư mục an toàn:{" "}
              <code className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded px-1.5 py-0.5 text-xs font-mono">
                New Volume (D:) → ThucHanh_NguyenVietThong
              </code>
              . Phân nhánh phân cấp logic sang thư mục con{" "}
              <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">
                TaiLieu
              </code>
              .
            </div>
          </li>

          {/* Bước 2 */}
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">2.</span>
            <div>
              <strong className="text-white">Quản lý vòng đời tệp tin văn bản:</strong> Khởi tạo tệp gốc{" "}
              <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">
                GhiChu.txt
              </code>
              , tái cấu trúc định danh, đổi tên thành{" "}
              <code className="bg-emerald-950/40 text-emerald-400 border border-emerald-900/50 rounded px-1.5 py-0.5 text-xs font-mono">
                GhiChuQuanTrong.txt
              </code>{" "}
              bằng chuẩn PascalCase không dấu nhằm tối ưu hóa tính tương thích shell script.
            </div>
          </li>

          {/* Bước 3 */}
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">3.</span>
            <div>
              <strong className="text-white">Điều phối luồng dữ liệu (Copy & Paste):</strong> Thực hiện nhân bản dữ liệu. Bản sao lưu của tệp được sao chép và cô lập an toàn trong thư mục{" "}
              <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">
                TaiLieu
              </code>
              .
            </div>
          </li>

          {/* Bước 4 */}
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">4.</span>
            <div>
              <strong className="text-white">Thao tác di chuyển (Cut & Paste):</strong> Tạo tệp{" "}
              <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">
                DiChuyen.txt
              </code>{" "}
              và thực hiện cắt (Cut) để chuyển vào vùng lưu trữ mới. Tệp gốc tại thư mục mẹ bị triệt tiêu hoàn toàn.
            </div>
          </li>

          {/* Bước 5 */}
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">5.</span>
            <div>
              <strong className="text-white">Xóa an toàn & Khôi phục (Recycle Bin/Destructive Deletion):</strong> Thử nghiệm xóa tạm thời đưa tệp vào Thùng rác và dùng lệnh <strong>Restore</strong> để khôi phục. Thực hành cơ chế xóa vĩnh viễn ({" "}
              <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">
                Shift + Delete
              </code>{" "}
              ) tệp DiChuyen.txt bỏ qua bộ nhớ đệm, ngăn chặn các kỹ thuật phục hồi dữ liệu trái phép.
            </div>
          </li>
        </ol>

        {/* NÚT BẤM CHUYỂN HƯỚNG SANG FILE PDF */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai1cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-400 border border-sky-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-sky-500 hover:text-white hover:border-sky-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>

      </div>
    ),
  },
  {
    id: 2,
    title: 'Bài 2: Đánh giá rủi ro bảo mật của AI trong lập trình',
    shortTitle: 'Bảo mật AI Coding',
    objective: 'Đánh giá mức độ ảnh hưởng của AI coding assistants (như GitHub Copilot) đến chất lượng và độ an toàn của mã nguồn.',
    icon: <ShieldAlert size={24} />,
    color: 'text-rose-400',
    borderColor: 'border-rose-500/20',
    bgAccent: 'bg-rose-500/10',
    details: (
      <div className="space-y-6">
        {/* Khung Thông tin Báo cáo */}
        <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-800 text-sm md:text-base text-dark-300">
          <p className="mb-1"><strong className="text-white">Môn học:</strong> Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo</p>
          <p className="mb-1"><strong className="text-white">Sinh viên:</strong> Nguyễn Viết Thông (IT1-K70)</p>
          <p><strong className="text-white">Trọng tâm:</strong> Đánh giá lỗ hổng bảo mật sinh ra bởi Generative AI</p>
        </div>

        {/* Tiêu đề phần Nghiên cứu */}
        <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> PHƯƠNG PHÁP & TÀI LIỆU NGHIÊN CỨU
        </div>

        {/* Danh sách các bước */}
        <ol className="space-y-4 text-dark-200 text-sm leading-relaxed">
          <li className="flex gap-4">
            <span className="text-rose-500 font-bold min-w-[16px]">1.</span>
            <div>
              <strong className="text-white">Nghiên cứu học thuật thực nghiệm:</strong> Khai thác 5 bài báo khoa học chất lượng cao từ các thư viện uy tín như <code className="bg-dark-800 text-rose-300 rounded px-1.5 py-0.5 text-xs font-mono">ACM</code> và <code className="bg-dark-800 text-rose-300 rounded px-1.5 py-0.5 text-xs font-mono">arXiv</code> để đo lường rủi ro của GitHub Copilot bằng số liệu thực tế.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-rose-500 font-bold min-w-[16px]">2.</span>
            <div>
              <strong className="text-white">Đối chiếu tiêu chuẩn ngành:</strong> Phân tích dựa trên 5 bộ tài liệu quy chuẩn quốc tế bao gồm <code className="bg-dark-800 text-rose-300 rounded px-1.5 py-0.5 text-xs font-mono">GitHub Copilot Trust Center</code>, danh sách <code className="bg-dark-800 text-rose-300 rounded px-1.5 py-0.5 text-xs font-mono">OWASP Top 10 for LLMs</code> và các bộ khung đánh giá bảo mật của MITRE, NIST.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-rose-500 font-bold min-w-[16px]">3.</span>
            <div>
              <strong className="text-white">Kết luận khách quan:</strong> Tổng hợp các luồng quan điểm khác nhau để rút ra nhận định về nguy cơ chèn mã độc ngầm và đề xuất quy trình phòng ngừa rủi ro cho quy trình phát triển phần mềm.
            </div>
          </li>
        </ol>

        {/* NÚT BẤM CHUYỂN HƯỚNG SANG FILE PDF */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai2cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-400 border border-rose-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-rose-500 hover:text-white hover:border-rose-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>
      </div>
    ),
  },

  {
    id: 3,
    title: 'Bài 3: Phát triển kỹ năng viết Prompt hiệu quả',
    shortTitle: 'Kỹ năng Prompting',
    objective: 'Phân tích và tối ưu hóa các kỹ thuật viết Prompt (Chain-of-thought, Role-Playing) cho các tác vụ học thuật phức tạp.',
    icon: <TerminalSquare size={24} />,
    color: 'text-fuchsia-400',
    borderColor: 'border-fuchsia-500/20',
    bgAccent: 'bg-fuchsia-500/10',
    details: (
      <div className="space-y-6">
        
        {/* Khung Thông tin Báo cáo */}
        <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-800 text-sm md:text-base text-dark-300">
          <p className="mb-1"><strong className="text-white">Lớp học phần:</strong> VNU1001_E252015</p>
          <p><strong className="text-white">Nhiệm vụ:</strong> Ứng dụng Prompt Engineering vào giải quyết các bài toán kỹ thuật chuyên sâu.</p>
        </div>

        {/* Tiêu đề */}
        <div className="flex items-center gap-2 text-fuchsia-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> CÁC TÁC VỤ THỰC NGHIỆM PROMPT
        </div>

        {/* Cấu trúc chia cột */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-dark-950 border border-dark-800 p-4 rounded-lg">
            <h4 className="text-fuchsia-300 font-bold mb-2">1. Lập trình JavaFX</h4>
            <p className="text-dark-300">Tóm tắt tài liệu Concurrency API. Xử lý đa luồng (Task, Service) để tránh treo UI Thread, khắc phục lỗi IllegalStateException.</p>
          </div>
          <div className="bg-dark-950 border border-dark-800 p-4 rounded-lg">
            <h4 className="text-fuchsia-300 font-bold mb-2">2. OOP Đa hình</h4>
            <p className="text-dark-300">Viết prompt yêu cầu AI tạo ví dụ code thực tế để phân biệt rõ ràng cơ chế Ghi đè (Override) và Nạp chồng (Overload).</p>
          </div>
          <div className="bg-dark-950 border border-dark-800 p-4 rounded-lg">
            <h4 className="text-fuchsia-300 font-bold mb-2">3. Toán cao cấp</h4>
            <p className="text-dark-300">Tạo bộ câu hỏi ôn tập Đại số tuyến tính (Ma trận, Hệ phương trình) với yêu cầu xuất file bằng định dạng LaTeX chuẩn.</p>
          </div>
        </div>

        <p className="text-dark-200 text-sm mt-4 italic border-l-2 border-fuchsia-500/50 pl-3">
          * Đã áp dụng 3 nguyên tắc cốt lõi: Ràng buộc kỹ thuật cụ thể (Specificity), Tư duy theo bước (Chain-of-thought) và Gán vai chuyên gia (Role-Playing).
        </p>

        {/* NÚT BẤM CHUYỂN HƯỚNG */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai3cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-fuchsia-500 hover:text-white hover:border-fuchsia-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    title: 'Bài 4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    shortTitle: 'Team Collaboration',
    objective: 'Thiết lập không gian làm việc ảo không đồng bộ cho nhóm phát triển phần mềm Quản lý Thư viện.',
    icon: <Users size={24} />,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/20',
    bgAccent: 'bg-emerald-500/10',
    details: (
      <div className="space-y-6">
        
        {/* Khung Thông tin */}
        <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-800 text-sm md:text-base text-dark-300">
          <p className="mb-1"><strong className="text-white">Vai trò:</strong> Nhóm trưởng / Lập trình viên Java</p>
          <p><strong className="text-white">Dự án:</strong> Phát triển phần mềm Quản lý Thư viện mini (JavaFX)</p>
        </div>

        {/* Tiêu đề */}
        <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> TÍCH HỢP HỆ SINH THÁI CÔNG CỤ
        </div>

        {/* Danh sách */}
        <ul className="space-y-4 text-dark-200 text-sm leading-relaxed">
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">✓</span>
            <div>
              <strong className="text-white">Quản lý Agile với Trello:</strong> Tổ chức bảng Kanban (Backlog, Doing, Review, Done). Áp dụng màu nhãn (Đỏ: Code, Xanh: DB, Vàng: Báo cáo) và Checklist để breakdown các module code lớn.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">✓</span>
            <div>
              <strong className="text-white">Giao tiếp qua Discord:</strong> Xây dựng server riêng. Tối ưu hóa luồng thảo luận bằng cách phân quyền kênh <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">#thong-bao-chung</code>, tạo Thread cho các bug khó và dùng kênh Voice để pair-programming fix lỗi.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-emerald-500 font-bold min-w-[16px]">✓</span>
            <div>
              <strong className="text-white">Kiểm soát rủi ro bằng Google Docs:</strong> Khắc phục tình trạng xung đột nội dung do 4 người sửa file cùng lúc bằng cách áp đặt sử dụng <strong className="text-emerald-400">Chế độ Đề xuất (Suggesting)</strong>. Ban hành quy tắc định danh file chuẩn: <code className="bg-dark-800 text-dark-300 rounded px-1.5 py-0.5 text-xs font-mono">[MãTask]_[Tên nội dung]_[Tên người làm]</code>.
            </div>
          </li>
        </ul>

        {/* NÚT BẤM CHUYỂN HƯỚNG */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai4cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>
      </div>
    ),
  },

  {
    id: 5,
    title: 'Bài 5: Ứng dụng AI trong sáng tạo nội dung số',
    shortTitle: 'AI Digital Content',
    objective: 'Sử dụng hệ sinh thái AI đa nền tảng để thiết kế Infographic truyền thông chuyên sâu về sức khỏe tâm lý.',
    icon: <Palette size={24} />,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/20',
    bgAccent: 'bg-amber-500/10',
    details: (
      <div className="space-y-6">
        
        {/* Khung Thông tin */}
        <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-800 text-sm md:text-base text-dark-300">
          <p className="mb-1"><strong className="text-white">Chủ đề:</strong> Digital Detox - "Cai nghiện" smartphone để cứu lấy não bộ</p>
          <p><strong className="text-white">Định dạng sản phẩm:</strong> Infographic truyền thông</p>
        </div>

        {/* Tiêu đề */}
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> QUY TRÌNH PHỐI HỢP CÔNG CỤ AI
        </div>

        <ul className="space-y-4 text-dark-200 text-sm leading-relaxed">
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold min-w-[16px]">•</span>
            <div>
              <strong className="text-white">Gemini (Xử lý dữ liệu text):</strong> Đóng vai chuyên gia tâm lý học hành vi để cấu trúc dàn ý siêu cô đọng: 3 dấu hiệu hội chứng "Rung túi áo", 2 tác hại não bộ và 3 tips cai nghiện.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold min-w-[16px]">•</span>
            <div>
              <strong className="text-white">OpenArt (Tạo sinh hình ảnh):</strong> Sử dụng prompt nghệ thuật siêu thực: <code className="bg-dark-800 text-amber-300 rounded px-1.5 py-0.5 text-xs font-mono italic">"Một bộ não bị quấn chặt bởi cáp sạc phát sáng neon, phong cách cinematic"</code> để tạo điểm nhấn ẩn dụ cho thiết kế.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-amber-500 font-bold min-w-[16px]">•</span>
            <div>
              <strong className="text-white">Canva Magic Design:</strong> Đóng vai trò Input đầu vào từ 2 nền tảng trên, tự động đề xuất bố cục. Dành 80% thời gian làm "Biên tập viên" để căn chỉnh Typography, kiểm chứng fact-check và giải quyết bài toán bản quyền.
            </div>
          </li>
        </ul>

        {/* NÚT BẤM CHUYỂN HƯỚNG */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai5cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>
      </div>
    ),
  },

  {
    id: 6,
    title: 'Bài 6: Sử dụng AI có trách nhiệm và đạo đức trong học tập',
    shortTitle: 'AI Ethics & Policy',
    objective: 'Nghiên cứu chính sách học thuật của trường Đại học và áp dụng quy trình kiểm định chống Đạo văn Công nghệ (AI-Plagiarism).',
    icon: <Scale size={24} />,
    color: 'text-violet-400',
    borderColor: 'border-violet-500/20',
    bgAccent: 'bg-violet-500/10',
    details: (
      <div className="space-y-6">
        
        {/* Khung Thông tin */}
        <div className="bg-dark-900/50 p-4 rounded-lg border border-dark-800 text-sm md:text-base text-dark-300">
          <p className="mb-1"><strong className="text-white">Cơ sở lý luận:</strong> Chính sách quản lý học thuật của Đại học Quốc gia Hà Nội (VNU).</p>
          <p><strong className="text-white">Bài luận thực hành:</strong> Tác động của AI đến xu hướng việc làm Gen Z (2025-2030).</p>
        </div>

        {/* Tiêu đề */}
        <div className="flex items-center gap-2 text-violet-400 font-semibold text-xs tracking-wider uppercase">
          <span className="text-sm">↗</span> NGUYÊN TẮC LIÊM CHÍNH HỌC THUẬT
        </div>

        {/* Danh sách */}
        <ul className="space-y-4 text-dark-200 text-sm leading-relaxed">
          <li className="flex gap-4">
            <span className="text-violet-500 font-bold min-w-[16px]">-</span>
            <div>
              <strong className="text-white">Ranh giới sử dụng:</strong> VNU khuyến khích dùng AI để nghiên cứu, gợi mở ý tưởng nhưng cấm tuyệt đối việc lừa dối quyền tác giả (sao chép 100% nội dung sinh tự động mà không qua tư duy chuyển hóa).
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-violet-500 font-bold min-w-[16px]">-</span>
            <div>
              <strong className="text-white">Quy trình 3 bước kiểm định:</strong> Sử dụng mô hình ngôn ngữ để lập dàn ý bài tiểu luận 2000 từ. Sau đó thực hiện đánh giá: (1) Tính chính xác & vĩ mô, (2) Sự lặp lại logic, (3) Hành động tinh chỉnh dữ liệu thực tế của người học.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="text-violet-500 font-bold min-w-[16px]">-</span>
            <div>
              <strong className="text-white">Sự minh bạch (Transparency):</strong> Đảm bảo mọi sự hỗ trợ từ ChatGPT, Gemini hay Copilot đều được ghi nhận rõ ràng vào mục Tài liệu tham khảo theo quy chuẩn kỹ thuật.
            </div>
          </li>
        </ul>

        {/* NÚT BẤM CHUYỂN HƯỚNG */}
        <div className="pt-6 mt-6 border-t border-dark-800/80 flex justify-start">
          <a 
            href={`${import.meta.env.BASE_URL}bai6cns.pdf`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-400 border border-violet-500/30 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-violet-500 hover:text-white hover:border-violet-500 hover:scale-105 transition-all duration-300 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:animate-bounce"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            Mở toàn bộ Báo cáo PDF
          </a>
        </div>
      </div>
    )
  }
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
    <section id="du-an" className="relative py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section header */}
        <div className="mb-16">
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
