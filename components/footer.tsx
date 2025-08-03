import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-500">Buildro</h3>
            <p className="text-gray-400">
              Professional construction and renovation services with over 15 years of experience.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Remodeling
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Repairs & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-yellow-500">
                  News
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Construction Ave</li>
              <li>Building City, BC 12345</li>
              <li>(555) 123-4567</li>
              <li>info@buildro.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Buildro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
