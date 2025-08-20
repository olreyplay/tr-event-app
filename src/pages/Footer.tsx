import { Instagram, Facebook, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 text-center">
      <p className="text-sm text-gray-600">
        © 2025 Grill & Chill. All rights reserved.
      </p>
      <div className="mt-4">
        <p className="text-sm text-gray-600 mb-2">Follow us:</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com/"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com/"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
          <a
            href="mailto:hello@grillandchill.com"
            className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
