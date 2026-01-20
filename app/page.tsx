import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThreeBackground from './components/ThreeBackground';
import ServiceCard from './components/ServiceCard';
import ContactSection from './components/ContactSection';
import { Database, Monitor, ChevronRight } from 'lucide-react';
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
            <div className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-100 text-sm font-medium text-primary shadow-sm">
              Giải pháp Doanh nghiệp Thế hệ mới
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Thúc đẩy <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Tăng trưởng</span> thông qua Đổi mới
            </h1>

            <p className="text-xl text-gray-600 max-w-lg">
              Chúng tôi xây dựng hệ thống ERP mạnh mẽ và website tuyệt đẹp giúp thúc đẩy hiệu quả và gắn kết cho doanh nghiệp hiện đại.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link className="px-8 py-4 rounded-full bg-primary hover:bg-secondary text-white font-semibold transition-all shadow-lg shadow-primary/25 hover:shadow-secondary/25" href={"https://demo.khavi.io.vn/"}>
                Bắt đầu dùng thử miễn phí
              </Link>
              <button className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-900 font-semibold transition-all flex items-center justify-center group hover:bg-gray-50 hover:border-gray-300 shadow-sm">
                Xem hồ sơ năng lực
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side spacer or additional 3D element could go here, for now it lets the background shine through */}
          <div className="hidden lg:block"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative z-10 bg-gray-50/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Chuyên môn của chúng tôi</h2>
            <p className="text-gray-600 text-lg">
              Giải pháp số toàn diện được thiết kế riêng cho nhu cầu độc nhất của bạn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ServiceCard
              title="ERP Doanh nghiệp"
              description="Tối ưu hóa vận hành với giải pháp ERP tùy chỉnh. Quản lý tài nguyên, theo dõi hàng tồn kho và phân tích dữ liệu thời gian thực."
              icon={<Database className="w-8 h-8" />}
              delay={0.1}
            />
            <ServiceCard
              title="Thiết kế Web Cao cấp"
              description="Thu hút khách hàng với website hiệu năng cao, trực quan tuyệt đẹp. Chúng tôi kết hợp thẩm mỹ với tính năng."
              icon={<Monitor className="w-8 h-8" />}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* About/Why Us Section */}
      <section id="about" className="py-24 z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Tại sao chọn Khavisoft?</h2>
              <p className="text-gray-600 text-lg mb-6">
                Chúng tôi không chỉ viết code; chúng tôi xây dựng hệ sinh thái số. Đội ngũ kết hợp chuyên môn kỹ thuật với tầm nhìn sáng tạo để tạo ra sản phẩm trường tồn với thời gian.
              </p>
              <ul className="space-y-4">
                {[
                  "Kiến trúc Mở rộng",
                  "Thiết kế lấy Người dùng làm trung tâm",
                  "Hỗ trợ chuyên dụng 24/7",
                  "Quy trình Phát triển Linh hoạt"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden bg-gradient-to-tr from-red-50 to-orange-50 border border-red-100 flex items-center justify-center shadow-inner">
              <div className="text-center p-8">
                <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
                <p className="text-gray-600 mb-8">Dự án Hoàn thành</p>

                <h3 className="text-4xl font-bold text-gray-900 mb-2">98%</h3>
                <p className="text-gray-600">Sự hài lòng của Khách hàng</p>
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
