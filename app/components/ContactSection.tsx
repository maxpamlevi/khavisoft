'use client'

import { useActionState } from 'react' // or useFormState depending on Next.js version, assuming 14+ or 15
import { submitConsultation } from '../actions/contact'
import { Send, Loader2 } from 'lucide-react'

const initialState = {
    success: false,
    message: '',
}

export default function ContactSection() {
    const [state, formAction, isPending] = useActionState(submitConsultation, initialState)

    return (
        <section id="contact" className="py-24 relative z-10">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <div className="grid md:grid-cols-2">
                        <div className="p-8 md:p-12 bg-gradient-to-br from-primary to-secondary text-white">
                            <h2 className="text-3xl font-bold mb-6">Liên hệ tư vấn</h2>
                            <p className="text-red-100 mb-8">
                                Để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ phân tích và đề xuất giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="w-12">
                                        <div className="p-2 bg-white/10 rounded-lg w-fit">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Hotline</h3>
                                        <p className="text-red-100">+84 123 456 789</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12">
                                        <div className="p-2 bg-white/10 rounded-lg w-fit">
                                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">Email</h3>
                                        <p className="text-red-100">contact@khavisoft.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            <form action={formAction} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Họ và tên <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                        placeholder="Nguyễn Văn A"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            Số điện thoại <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            placeholder="0912..."
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                                            placeholder="example@gmail.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nội dung cần tư vấn
                                    </label>
                                    <textarea
                                        id="details"
                                        name="details"
                                        rows={4}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                                        placeholder="Tôi quan tâm đến giải pháp ERP..."
                                    ></textarea>
                                </div>

                                {state.message && (
                                    <div className={`p-4 rounded-lg text-sm ${state.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                        {state.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isPending}
                                    className="w-full py-3 px-6 rounded-lg bg-primary hover:bg-secondary text-white font-semibold shadow-lg shadow-primary/25 hover:shadow-secondary/25 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
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
