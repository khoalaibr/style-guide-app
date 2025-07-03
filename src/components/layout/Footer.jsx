import React from 'react'
import { Separator } from '@/components/ui/separator'
import { Github, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">StyleKit</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                Tu biblioteca de componentes reutilizables para proyectos React con Tailwind CSS.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Enlaces Rápidos</h4>
              <nav className="flex flex-col space-y-2">
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </a>
                <a href="/style-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Guía de Estilos
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentación
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-foreground">Síguenos</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="my-6" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2025 StyleKit. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2 sm:mt-0">
              Construido con React y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

