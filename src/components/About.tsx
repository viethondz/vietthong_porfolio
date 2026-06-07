import { User, Code, BookOpen, Heart } from 'lucide-react';

// Danh sách sở thích của bạn (bạn có thể thêm bớt tùy ý ở đây)
const HOBBIES = [
  "💻 Lập trình",
  "🎬 Xem phim",
  "🎧 Nghe nhạc",
  "🎮 Chơi game"
];

export default function About() {
  return (
    <section id="ban-than" className="w-full bg-dark-950 text-dark-200 py-16 md:py-24 border-b border-dark-800/50">
      
      {/* Container chuẩn để rộng bằng phần Giới thiệu */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24">

        {/* Tiêu đề */}
        <div className="flex items-center gap-3 mb-8">
          <User size={28} className="text-neon-500" />
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide">Về Bản Thân</h2>
        </div>

        {/* Trích dẫn */}
        <blockquote className="border-l-4 border-neon-500 bg-dark-900/40 p-6 rounded-r-xl text-lg md:text-xl italic text-neon-400 mb-12 shadow-sm">
          "Học hỏi không ngừng, nâng cấp bản thân mỗi ngày như cách cập nhật một phiên bản phần mềm."
        </blockquote>

        {/* CHIA LAYOUT LỚN: Trái (Text) - Phải (Box thông tin) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Cột Trái: Giới thiệu (Chiếm 5/12 không gian) */}
          <div className="lg:col-span-5 space-y-6 text-dark-300 leading-relaxed text-lg text-justify">
            <p>
              Mình là một sinh viên Công nghệ thông tin khóa K70 tại trường Đại học Công nghệ - ĐHQGHN (UET). Đam mê công nghệ và luôn tìm kiếm cơ hội để thử thách bản thân với những bài toán mới.
            </p>
            <p>
              Mục tiêu hiện tại của mình là nắm vững kiến thức nền tảng, thực hành thật nhiều dự án thực tế để sẵn sàng cho những cơ hội nghề nghiệp trong tương lai.
            </p>
          </div>

          {/* Cột Phải: Box Thông tin (Chiếm 7/12 không gian) */}
          <div className="lg:col-span-7 bg-dark-900/30 border border-dark-800 rounded-2xl p-6 md:p-8 shadow-lg">
            
            {/* CHIA LAYOUT NHỎ TRONG BOX: Dàn ngang thành 2 cột để chống tràn dọc */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

              {/* CỘT NHỎ 1 */}
              <div className="space-y-8">
                {/* Định hướng kĩ năng */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white font-semibold tracking-wide">
                    <Code size={20} className="text-neon-500" />
                    <h3>Định hướng kĩ năng</h3>
                  </div>
                  <div className="p-4 bg-dark-950/60 border border-dark-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:-translate-y-1">
                    Web Development
                  </div>
                </div>

                {/* Sở thích (Dùng mảng HOBBIES đã khai báo ở trên) */}
                <div>
                  <div className="flex items-center gap-2 mb-4 text-white font-semibold tracking-wide">
                    <Heart size={20} className="text-neon-500" />
                    <h3>Sở thích</h3>
                  </div>
                  <div className="space-y-3">
                    {HOBBIES.map((hobby, index) => (
                      <div key={index}className="p-4 bg-dark-950/60 border border-dark-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:-translate-y-1">
                        {hobby}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CỘT NHỎ 2 */}
              <div>
                {/* Học tập */}
                <div className="flex items-center gap-2 mb-4 text-white font-semibold tracking-wide">
                  <BookOpen size={20} className="text-neon-500" />
                  <h3>Học tập</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-dark-950/60 border border-dark-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:-translate-y-1">
                    🎓 Lớp IT1-K70
                  </div>
                  <div className="p-4 bg-dark-950/60 border border-dark-800 rounded-xl transition-all duration-300 cursor-pointer hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:-translate-y-1">
                    🏫 Khoa Công nghệ thông tin - UET
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}