'use client'
import Image from 'next/image';
import Link from 'next/link';
import { certificates } from '@/app/lib';

type CertificateDetailProps = {
  params: { id: string };
};

export default function CertificateDetail({ params }: CertificateDetailProps) {
  const cert = certificates.find(c => c.id === params.id);
  if (!cert) {
    return <p className="p-6 text-center text-red-500">Certificate not found.</p>;
  }

  return (
    <div className="bg-gradient-to-b from-slate-50 to-indigo-50 min-h-screen p-6">
      <Link href="/certificates" className="inline-block mb-6 text-teal-500 hover:underline">← Back to Certifications</Link>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <Image
          src={cert.image}
          alt={cert.title}
          width={800}
          height={500}
          className="object-cover w-full h-64"
        />
        <div className="p-8 space-y-4">
          <h1 className="text-3xl font-bold text-slate-900">{cert.title}</h1>
          <p className="text-slate-600">Issued by: <strong>{cert.issuer}</strong></p>
          <p className="text-slate-600">Date of Issue: <strong>{cert.date}</strong></p>
          <div className="pt-4 border-t border-gray-200">
            <h4 className="text-xl font-semibold text-slate-900 mb-2">Description:</h4>
            <p className="text-slate-700 whitespace-pre-wrap">{cert.description}</p>
          </div>
          <button className="mt-6 bg-gradient-to-r from-teal-500 to-indigo-500 px-6 py-3 rounded-xl text-white font-semibold hover:shadow-lg transition-all">
            Download Certificate
          </button>
        </div>
      </div>
    </div>
  );
}