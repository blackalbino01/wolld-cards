export default function PaymentMethods() {
    const paymentMethods = [
      {
        id: 1,
        name: 'Bitcoin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      },
      {
        id: 2,
        name: 'Ethereum',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Ethereum-icon-purple.svg',
      },
      {
        id: 3,
        name: 'USDT',
        image: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
      },
      {
        id: 4,
        name: 'Litecoin',
        image: 'https://upload.wikimedia.org/wikipedia/commons/f/f8/LTC-400.png',
      },
      {
        id: 5,
        name: 'PayPal',
        image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png',
      },
      {
        id: 6,
        name: 'Paystack',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Paystack_Logo.png/320px-Paystack_Logo.png',
      }
    ];
  
    return (
      <section className="bg-[#1A1A1A] py-16 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-normal mb-4">
              Payment Methods
            </h2>
            <p className="text-gray-400 text-lg">
              We accept the following payment methods
            </p>
          </div>
  
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {paymentMethods.map(method => (
              <div 
                key={method.id}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#242424] rounded-full p-4 flex items-center justify-center mb-2 hover:bg-[#2a2a2a] transition-colors">
                  <img 
                    src={method.image}
                    alt={method.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-400 text-sm">{method.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  