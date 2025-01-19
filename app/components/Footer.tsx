import Link from 'next/link'
import { Twitter, Github, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">ForeverMarket</h3>
            <p className="text-sm">Bet on the World's Events</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors duration-200">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 ForeverMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

