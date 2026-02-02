'use client'

import { useActionState } from 'react'
import { submitConsultation } from '../actions/contact'
import { Send, Loader2, Phone, Mail } from 'lucide-react'

const initialState = {
    success: false,
    message: '',
}

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(submitConsultation, initialState)

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto glass-card rounded-2xl shadow-2xl shadow-primary/20 overflow-hidden border border-primary/20">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 bg-gradient-to-br from-primary to-secondary text-white">
                            <h2 className="text-3xl font-bold mb-6">Liên hệ tư vấn</h2>
                            <p className="text-red-100 mb-8 leading-relaxed">
                                Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ phân tích và đề xuất giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/15 rounded-lg backdrop-blur-sm">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Hotline</h3>
                                        <p className="text-red-100">+84 123 456 789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-white/15 rounded-lg backdrop-blur-sm">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                                        <p className="text-red-100">contact@khavisoft.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 bg-black/40 backdrop-blur-sm">
                            <form action={formAction} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                                        Họ và tên <span className="text-primary">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-black/20 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-500"
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                                            Số điện thoại <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-black/20 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-500"
                                            placeholder="0912..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                                            Email <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-black/20 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-500"
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium text-gray-200 mb-2">
                                        Nội dung cần tư vấn
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-lg border border-primary/30 bg-black/20 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none placeholder:text-gray-500"
                                        placeholder="Tôi quan tâm đến giải pháp ERP..."
                                    ></textarea>
                                </div>

                                {state.message && (
                                    <div className={`p-4 rounded-lg text-sm ${state.success ? 'bg-green-500/20 text-green-300 border border-green-500/30' : 'bg-red-500/20 text-red-300 border border-red-500/30'}`}>
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-secondary text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isPending ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                            Đang gửi...
                                        </>
                                    ) : (
                                        <>
                                            Gửi yêu cầu
                                            <Send className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
