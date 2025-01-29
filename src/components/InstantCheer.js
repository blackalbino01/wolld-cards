export default function InstantCheer() {
    return (
      <section className="bg-[#1A1A1A] py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Send Some Instant Cheer */}
          <div className="text-center mb-20">
            <h2 className="text-white text-3xl font-normal mb-4">
              Send Some Instant Cheer
            </h2>
            <p className="text-gray-400 text-lg">
              Celebrate special moments with the ones you love...
            </p>
          </div>
  
          {/* iTunes Feature Section */}
          <div className="relative overflow-hidden bg-gradient-to-r from-[#242424] to-[#1A1A1A] rounded-2xl">
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <div className="relative h-full">
                <img 
                  src="https://images.unsplash.com/photo-1607344645866-009c320b63e0?q=80" 
                  alt="iTunes Gift Cards"
                  className="object-cover h-full w-full opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#242424] via-transparent to-transparent" />
              </div>
            </div>
  
            <div className="relative z-10 p-12 md:p-16 max-w-2xl">
              <h3 className="text-white text-3xl md:text-4xl font-normal mb-6">
                iTunes Gift Cards, for everything and everyone
              </h3>
              <p className="text-gray-400 text-lg mb-8">
                For all things Apple: products, accessories, apps, games, music, movies, TV shows, iCloud, and more.
              </p>
              <button className="bg-white text-black px-8 py-3 rounded-full text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Shop Apple Gift Cards
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }