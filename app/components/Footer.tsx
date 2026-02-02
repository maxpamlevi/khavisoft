import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full py-12 bg-black/50 backdrop-blur-sm border-t border-primary/20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">KHAVISOFT</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Kiến tạo tương lai quản trị doanh nghiệp & sự hiện diện trực tuyến.
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Sản phẩm</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    ERP Doanh nghiệp
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Thiết kế Web
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Quản lý Kho
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Phân tích Dữ liệu
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Công ty</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#about" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Về chúng tôi
                                </Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Liên hệ
                                </Link>
                            </li>
                            <li>
                                <Link href="https://demo.khavi.io.vn/app/home" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                    Demo
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Liên hệ</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                <span>+84 123 456 789</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                <span>contact@khavisoft.com</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                <span>Việt Nam</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-primary/20">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Khavisoft. Bảo lưu mọi quyền.
                        </p>
                        <div className="flex gap-6">
                            <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                Chính sách Bảo mật
                            </Link>
                            <Link href="#" className="text-sm text-gray-400 hover:text-primary transition-colors cursor-pointer">
                                Điều khoản Dịch vụ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
