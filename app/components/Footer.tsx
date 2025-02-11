import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSectionProps {
  title: string;
  links?: FooterLink[];
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, children }) => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    {links ? (
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-sm sm:text-base hover:text-gray-800 transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ) : (
      children
    )}
  </div>
);

const socialLinks = [
  { href: "/", icon: <Facebook size={20} /> },
  { href: "/", icon: <Instagram size={20} /> },
  { href: "/", icon: <Twitter size={20} /> },
  { href: "/", icon: <Linkedin size={20} /> },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <FooterSection
            title="Nuestra Empresa"
            links={[
              { label: "Nosotros", href: "/" },
              { label: "Preguntas frecuentes", href: "/" },
              { label: "Términos y condiciones", href: "/" },
              { label: "Políticas de privacidad", href: "/" },
              { label: "Contacto", href: "/" },
            ]}
          />

          <FooterSection
            title="Servicios"
            links={[
              { label: "Comprar propiedad", href: "/" },
              { label: "Vender propiedad", href: "/" },
              { label: "Alquilar propiedad", href: "/" },
              { label: "Evaluación de propiedades", href: "/" },
            ]}
          />

          <FooterSection
            title="Recursos"
            links={[
              { label: "Guía del comprador", href: "/" },
              { label: "Guía del vendedor", href: "/" },
              { label: "Blog inmobiliario", href: "/" },
              { label: "Noticias del mercado", href: "/" },
            ]}
          />

          <FooterSection title="Contáctanos">
            <div className="text-sm sm:text-base space-y-2">
              <p>Av. Libertador 4567, Buenos Aires, Argentina</p>
              <p>Teléfono: +54 11 4567-8901</p>
              <p>Email: info@novainmobiliaria.com</p>
              <div className="flex space-x-4 mt-4">
                {socialLinks.map((social, index) => (
                  <Link key={index} href={social.href} className="text-gray-400 hover:text-gray-600 transition-colors">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </FooterSection>
        </div>
        <div className="border-t border-gray-200 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Nova Inmobiliaria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
