import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import ServiceCard from './components/ServiceCard';
import ContactSection from './components/ContactSection';
import { Database, Monitor, ChevronRight, Package, BarChart3, CheckCircle2, Users, TrendingUp } from 'lucide-react';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen relative flex flex-col">
      <ThreeBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center pt-32 pb-20 px-6">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 text-sm font-medium text-primary shadow-sm">
              Giải pháp Doanh nghiệp Thế hệ mới
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Thúc đẩy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Tăng trưởng</span> thông qua Đổi mới
            </h1>

            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
              Chúng tôi xây dựng hệ thống ERP mạnh mẽ và website tuyệt đẹp giúp thúc đẩy hiệu quả và gắn kết cho doanh nghiệp hiện đại.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                className="px-8 py-4 rounded-full bg-cta hover:bg-cta/90 text-white font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                href="#contact"
              >
                Bắt đầu dùng thử miễn phí
              </Link>
              <Link
                className="px-8 py-4 rounded-full glass-card text-gray-900 font-semibold transition-all flex items-center justify-center group hover:border-primary/30 cursor-pointer"
                href="https://demo.khavi.io.vn/app/home"
              >
                Xem Demo
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">100+ Dự án</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">98% Hài lòng</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-300">24/7 Hỗ trợ</span>
              </div>
            </div>
          </div>

          {/* Right side - Stats showcase */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card p-8 rounded-2xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">150%</h3>
                    <p className="text-gray-300">Tăng trưởng trung bình</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/10">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">50+</h3>
                    <p className="text-gray-300">Khách hàng tin cậy</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20">
                    <BarChart3 className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">40%</h3>
                    <p className="text-gray-300">Tiết kiệm chi phí</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Chuyên môn của chúng tôi</h2>
            <p className="text-gray-300 text-lg">
              Giải pháp số toàn diện được thiết kế riêng cho nhu cầu độc nhất của bạn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <ServiceCard
              title="ERP Doanh nghiệp"
              description="Tối ưu hóa vận hành với giải pháp ERP tùy chỉnh. Quản lý tài nguyên hiệu quả."
              icon={<Database className="w-8 h-8" />}
              delay={0.1}
            />
            <ServiceCard
              title="Thiết kế Web"
              description="Website hiệu năng cao, trực quan tuyệt đẹp. Kết hợp thẩm mỹ với tính năng."
              icon={<Monitor className="w-8 h-8" />}
              delay={0.2}
            />
            <ServiceCard
              title="Quản lý Kho"
              description="Theo dõi hàng tồn kho thời gian thực. Tối ưu chuỗi cung ứng của bạn."
              icon={<Package className="w-8 h-8" />}
              delay={0.3}
            />
            <ServiceCard
              title="Phân tích Dữ liệu"
              description="Dashboard thông minh, báo cáo chi tiết. Ra quyết định dựa trên dữ liệu."
              icon={<BarChart3 className="w-8 h-8" />}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Solutions by Industry */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-white/50 to-transparent">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Giải pháp theo Ngành
            </h2>
            <p className="text-gray-300 text-lg">
              Tùy chỉnh cho từng lĩnh vực kinh doanh
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { industry: "Sản xuất", desc: "Quản lý sản xuất, nguyên vật liệu, và quy trình" },
              { industry: "Bán lẻ", desc: "Quản lý bán hàng, khách hàng, và kho hàng" },
              { industry: "Dịch vụ", desc: "Quản lý dự án, nhân sự, và khách hàng" }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-xl hover:shadow-lg transition-all cursor-pointer group border border-primary/20 hover:border-primary/50">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {item.industry}
                </h3>
                <p className="text-gray-300 mb-4">{item.desc}</p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  Tìm hiểu thêm <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Why Us Section */}
      <section id="about" className="py-24 z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Tại sao chọn Khavisoft?</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Chúng tôi không chỉ viết code; chúng tôi xây dựng hệ sinh thái số. Đội ngũ kết hợp chuyên môn kỹ thuật với tầm nhìn sáng tạo để tạo ra sản phẩm trường tồn với thời gian.
              </p>
              <ul className="space-y-4">
                {[
                  "Kiến trúc Mở rộng",
                  "Thiết kế lấy Người dùng làm trung tâm",
                  "Hỗ trợ chuyên dụng 24/7",
                  "Quy trình Phát triển Linh hoạt"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-200">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-3" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden glass-card flex items-center justify-center shadow-lg">
              <div className="text-center p-8 space-y-8">
                <div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">100+</h3>
                  <p className="text-gray-300 font-medium">Dự án Hoàn thành</p>
                </div>

                <div>
                  <h3 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">98%</h3>
                  <p className="text-gray-300 font-medium">Sự hài lòng của Khách hàng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <Footer />
    </main>
  );
}
