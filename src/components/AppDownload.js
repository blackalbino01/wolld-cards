export default function AppDownload() {
    return (
      <section className="relative bg-gradient-to-r from-[#F15A29] to-[#E31C79] py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '30px 30px'
          }} />
        </div>
  
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Content */}
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-white text-4xl md:text-5xl font-normal mb-6">
                DOWNLOAD OUR APP
              </h2>
              <p className="text-white/90 text-lg mb-12 max-w-xl">
                Find what they really want! From our App you can give the choice of hundreds of Gift Cards right from your mobile.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
                <button className="bg-black/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-black/30 transition-all duration-300 w-full sm:w-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </button>
  
                <button className="bg-black/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-black/30 transition-all duration-300 w-full sm:w-auto">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
  
            {/* Mobile App Preview */}
            <div className="md:w-1/2 relative">
              <div className="relative transform rotate-12 hover:rotate-6 transition-transform duration-500">
                <img 
                  src="https://www.apple.com/v/app-store/b/images/overview/icon_appstore__ev0z770zyxoy_large_2x.png"
                  alt="Mobile App Preview"
                  className="w-full max-w-sm mx-auto rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }