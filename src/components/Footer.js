export default function Footer() {
    return (
      <footer className="bg-[#1A1A1A] text-white">
        {/* Newsletter Section */}
        <div className="border-b border-[#242424]">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-space items-center gap-4">
              <input 
                type="email" 
                placeholder="Get the latest deals and more..." 
                className="w-full md:w-96 px-6 py-3 bg-[#242424] rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="w-full md:w-auto px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
  
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Logo Section */}
            <div>
              <h3 className="text-2xl font-normal mb-6">WOLLD Cards</h3>
              <p className="text-gray-400">
                Your trusted source for gift cards and digital products.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-normal mb-6">WOLLD Cards</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
  
            {/* Payment Methods */}
            <div>
              <h4 className="text-lg font-normal mb-6">WOLLD Cards Accepts</h4>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Bitcoin" className="w-full h-8 object-contain" />
                </div>
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg" alt="Ethereum" className="w-full h-8 object-contain" />
                </div>
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg" alt="USDT" className="w-full h-8 object-contain" />
                </div>
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png" alt="LTC" className="w-full h-8 object-contain" />
                </div>
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png" alt="Paypal" className="w-full h-8 object-contain" />
                </div>
                <div className="bg-[#242424] p-3 rounded-lg hover:bg-[#2a2a2a] transition-colors">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Paystack_Logo.png/320px-Paystack_Logo.png" alt="Paystack" className="w-full h-8 object-contain" />
                </div>
              </div>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-[#242424] text-center text-gray-400">
            <p>© 2024 WOLLD Cards. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  