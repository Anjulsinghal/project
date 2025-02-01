import { Sun } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-green-400" />
              <span className="ml-2 text-xl font-semibold">Mentary</span>
            </div>
            <p className="text-gray-400">
              At Mentary, we believe in the power of renewable energy to create a more sustainable future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Solar Panel Installation</li>
              <li>Wind Turbine Installation</li>
              <li>Solar Panel Maintenance</li>
              <li>Energy Efficiency Audits</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Address: 1234 Main St, Anytown, USA 12345</li>
              <li>Phone: +1 (333) 000-0000</li>
              <li>Email: hi@mentary.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to stay up-to-date with the latest news,
              tips, and trends in the industry
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-slate-800 border-slate-700 focus:outline-none focus:ring-1 focus:ring-green-400"
              />
              <button className="bg-green-400 text-slate-900 px-4 py-2 rounded-r-md hover:bg-green-500 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex justify-between items-center">
          <p className="text-gray-400">Copyright © 2023 Mentary</p>
          <p className="text-gray-400">Designed by TokoTema</p>
        </div>
      </div>
    </footer>
  );
}