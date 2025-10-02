import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Team', path: '/team' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Web Development', path: '/services' },
      { name: 'App Development', path: '/services' },
      { name: 'UI/UX Design', path: '/services' },
      { name: 'Digital Marketing', path: '/services' },
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: 'Documentation', path: '#' },
      { name: 'Support', path: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaFacebookF, path: '#', color: 'hover:text-blue-600' },
    { icon: FaTwitter, path: '#', color: 'hover:text-blue-400' },
    { icon: FaInstagram, path: '#', color: 'hover:text-pink-600' },
    { icon: FaLinkedinIn, path: '#', color: 'hover:text-blue-700' },
    { icon: FaGithub, path: '#', color: 'hover:text-gray-900' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-3xl font-bold mb-4 inline-block">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Soft
              </span>
              <span className="text-white">Lab</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              We are a creative startup and app development agency. We help businesses grow with innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} SoftLab. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
