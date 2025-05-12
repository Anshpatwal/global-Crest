import Image from 'next/image';

export default function Footer() {
    {/* Footer Section */ }
    return <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    GlobalCrest Exports
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                    Registered Export House under DGFT, Ministry of Commerce & Industry, Government of India
                </p>
                <div className="flex items-center space-x-4">
                    <Image
                        src="/Make_in_India.png"
                        alt="Made in India"
                        width={32}
                        height={32}
                    />
                    <span className="text-slate-400 text-sm">Make in India Certified</span>
                </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">About Us</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Our Services</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Export Process</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Quality Assurance</a></li>
                </ul>
            </div>

            {/* Products */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-2">Our Products</h4>
                <ul className="space-y-3">
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Textiles</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Agricultural Goods</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Machinery Parts</a></li>
                    <li><a href="#" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">Handicrafts</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white mb-2">Contact Us</h4>
                <div className="space-y-3 text-slate-400 text-sm">
                    <div className="flex items-start gap-3">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/marker.png"
                            alt="Address"
                            width={18}
                            height={18}
                        />
                        <p>701, Export Tower,<br />Ahmedabad, Gujarat 380054</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/phone.png"
                            alt="Phone"
                            width={18}
                            height={18}
                        />
                        <a href="tel:+917912345678" className="hover:text-teal-400">+91 79 1234 5678</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/secured-letter.png"
                            alt="Email"
                            width={18}
                            height={18}
                        />
                        <a href="mailto:export@globalcrest.com" className="hover:text-teal-400">export@globalcrest.com</a>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png"
                            alt="LinkedIn"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/facebook.png"
                            alt="Facebook"
                            width={24}
                            height={24}
                        />
                    </a>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                        <Image
                            src="https://img.icons8.com/ios-filled/50/FFFFFF/instagram.png"
                            alt="Instagram"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <p className="text-slate-400 text-sm">
                        © 2024 GlobalCrest Exports. All Rights Reserved.
                    </p>
                    <div className="mt-2 flex space-x-4 justify-center">
                        <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-teal-400 text-sm">Terms of Service</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}