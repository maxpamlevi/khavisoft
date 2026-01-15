'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    delay?: number;
}

export default function ServiceCard({ title, description, icon, delay = 0 }: ServiceCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ y: -10 }}
            className="group relative p-8 rounded-2xl bg-white border border-gray-200 shadow-sm backdrop-blur-sm overflow-hidden hover:shadow-lg hover:border-red-100 transition-all"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-lg bg-red-50 text-primary group-hover:scale-110 transition-transform">
                    {icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                    {description}
                </p>

                <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors cursor-pointer">
                    Xem thêm <ArrowRight className="ml-2 w-4 h-4" />
                </div>
            </div>
        </motion.div>
    );
}
