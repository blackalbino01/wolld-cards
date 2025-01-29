'use client'
import { useState } from 'react';

const giftCards = [
    {
      id: 1,
      name: 'Adidas',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
      category: 'Fashion'
    },
    {
      id: 2,
      name: 'Airbnb',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
      category: 'Travel'
    },
    {
      id: 3,
      name: 'Amazon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      category: 'Shopping'
    },
    {
      id: 4,
      name: 'Best Buy',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg',
      category: 'Electronics'
    },
    {
      id: 5,
      name: 'Bitcoin',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
      category: 'Cryptocurrency'
    },
    {
      id: 6,
      name: 'Careem',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Careem_logo.svg',
      category: 'Transportation'
    },
    {
      id: 7,
      name: 'EA',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Electronic-Arts-Logo.svg',
      category: 'Gaming'
    },
    {
      id: 8,
      name: 'FlexePin',
      image: 'https://www.flexepin.com/wp-content/uploads/2021/02/flexepin_logo.svg',
      category: 'Payment'
    },
    {
      id: 9,
      name: 'Google Play',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg',
      category: 'Apps'
    },
    {
      id: 10,
      name: 'GameStop',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/GameStop.svg',
      category: 'Gaming'
    },
    {
      id: 11,
      name: 'Hulu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg',
      category: 'Streaming'
    },
    {
      id: 12,
      name: 'iTunes',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/ITunes_logo.svg',
      category: 'Entertainment'
    },
    {
      id: 13,
      name: 'League of Legends',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d8/League_of_Legends_2019_vector.svg',
      category: 'Gaming'
    },
    {
      id: 14,
      name: 'Mastercard',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg',
      category: 'Payment'
    },
    {
      id: 15,
      name: 'Minecraft',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Minecraft_Logo.svg',
      category: 'Gaming'
    },
    {
      id: 16,
      name: 'Netflix',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      category: 'Streaming'
    },
    {
      id: 17,
      name: 'Nike',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg',
      category: 'Fashion'
    },
    {
      id: 18,
      name: 'Nintendo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg',
      category: 'Gaming'
    },
    {
      id: 19,
      name: 'PlayStation',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/00/PlayStation_logo.svg',
      category: 'Gaming'
    },
    {
      id: 20,
      name: 'PUBG',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/PUBG_Logo.svg',
      category: 'Gaming'
    },
    {
      id: 21,
      name: 'Roblox',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg',
      category: 'Gaming'
    },
    {
      id: 22,
      name: 'Shein',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c4/Shein_Logo_2021.svg',
      category: 'Fashion'
    },
    {
      id: 23,
      name: 'Spotify',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      category: 'Music'
    },
    {
      id: 24,
      name: 'Steam',
      image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg',
      category: 'Gaming'
    },
    {
      id: 25,
      name: 'Starbucks',
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
      category: 'Food & Beverage'
    },
    {
      id: 26,
      name: 'Uber',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
      category: 'Transportation'
    },
    {
      id: 27,
      name: 'Visa',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg',
      category: 'Payment'
    },
    {
      id: 28,
      name: 'Walmart',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg',
      category: 'Shopping'
    },
    {
      id: 29,
      name: 'Xbox',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Xbox_one_logo.svg',
      category: 'Gaming'
    }
  ];

  
  export default function GiftCardGrid() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    // Extract unique categories
    const categories = ['All', ...new Set(giftCards.map(card => card.category))].sort();
  
    // Filter cards based on search and category
    const filteredCards = giftCards.filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  
    return (
      <section className="bg-[#1A1A1A] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-normal mb-8">
              Browse entire WOLLD Cards Store Gift Cards
            </h2>
  
            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
              <div className="relative w-full md:w-64">
                <input
                  type="text"
                  placeholder="Search gift cards..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
  
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-2 bg-[#242424] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Grid Display */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {filteredCards.map(card => (
              <div 
                key={card.id} 
                className="bg-[#242424] rounded-lg p-4 hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-square flex items-center justify-center bg-white rounded-lg mb-2 overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={`${card.name} Gift Card`}
                    className="w-3/4 h-3/4 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-white text-sm text-center">
                  {card.name} Gift Card
                </p>
              </div>
            ))}
          </div>
  
          {/* No Results Message */}
          {filteredCards.length === 0 && (
            <div className="text-center text-gray-400 mt-8">
              No gift cards found matching your search criteria.
            </div>
          )}
        </div>
      </section>
    );
  }
  