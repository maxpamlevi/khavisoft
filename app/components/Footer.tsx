export default function Footer() {
    return (
        <footer className="w-full py-8 bg-white/50 border-t border-gray-200">
            <div className="container mx-auto px-6 text-center text-gray-600 text-sm">
                <p>&copy; {new Date().getFullYear()} Khavisoft. Bảo lưu mọi quyền.</p>
                <p className="mt-2">Kiến tạo tương lai quản trị doanh nghiệp & sự hiện diện trực tuyến.</p>
            </div>
        </footer>
    );
}
