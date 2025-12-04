import Link from "next/link";

export function HubFooter() {
    return (
        <footer className="bg-white border-t border-gray-100 text-canvas-ink py-16 text-sm">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold tracking-tight">Antigravity</h3>
                        <p className="text-canvas-muted">Hecho con ❤️ en México.</p>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="font-bold">Productos</h4>
                        <ul className="space-y-2 text-canvas-muted">
                            <li><Link href="/bodas" className="hover:text-canvas-ink transition-colors">Bodas</Link></li>
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">XV Años</Link></li>
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Corporativo</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h4 className="font-bold">Empresa</h4>
                        <ul className="space-y-2 text-canvas-muted">
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Sobre Nosotros</Link></li>
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Contacto</Link></li>
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Agendar Demo</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="font-bold">Legal</h4>
                        <ul className="space-y-2 text-canvas-muted">
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Aviso de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-canvas-ink transition-colors">Términos de Uso</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-12 pt-8 text-center text-xs text-canvas-muted">
                    © {new Date().getFullYear()} Antigravity. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
