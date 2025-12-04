import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-400 py-16 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-4">
                        <h3 className="text-white text-xl font-serif font-bold">Plasmar</h3>
                        <p>Made with ❤️ in México</p>
                    </div>

                    {/* Column 2: Product */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">Producto</h4>
                        <ul className="space-y-2">
                            <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-white transition-colors">Precios</Link></li>
                            <li><Link href="#demo" className="hover:text-white transition-colors">Demo</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">Contacto</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition-colors">WhatsApp</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Instagram</Link></li>
                            <li><Link href="mailto:hola@plasmar.com" className="hover:text-white transition-colors">Email</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Legal */}
                    <div className="space-y-4">
                        <h4 className="text-white font-medium">Legal</h4>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-12 pt-8 text-center text-xs text-slate-600">
                    © {new Date().getFullYear()} Plasmar. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
