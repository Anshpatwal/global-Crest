'use client';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/app/lib';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';



type ProductDetailProps = {
    params: {
        id: string;
    };
};

export default function ProductDetail({ params }: ProductDetailProps) {
    const item = products.find((p) => p.id === params.id);

    if (!item) {
        return <p className="p-6 text-center text-red-500">Product not found.</p>;
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-b from-slate-50 to-indigo-50 p-6">
                <Link
                    href="/products"
                    className="inline-block mb-6 text-teal-500 hover:underline"
                >
                    ← Back to Products
                </Link>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <Image
                        src={item.image}
                        alt={item.name}
                        width={800}
                        height={500}
                        className="object-cover w-full h-96"
                    />
                    <div className="p-8 space-y-4">
                        <h1 className="text-3xl font-bold text-slate-900">{item.name}</h1>
                        <p className="text-slate-600">{item.description}</p>
                        <div className="pt-4 border-t border-gray-200">
                            <h4 className="text-xl font-semibold text-slate-900 mb-2">Specifications:</h4>
                            <pre className="whitespace-pre-wrap text-slate-700">{item.details}</pre>
                        </div>
                        <button className="mt-6 bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all">
                            Request Quote
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
