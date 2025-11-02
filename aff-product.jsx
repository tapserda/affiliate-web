import React, { useState } from 'react';

// Product data structure
const PRODUCTS = [
  {
    id: 1,
    name: "Kaos Polo Premium Korean",
    link: "https://s.shopee.co.id/70BwuIB9Ci",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7rasg-m31uip9skgyd74.webp",
  },
  {
    id: 2,
    name: "Kaos Luffy Kecil",
    link: "https://s.shopee.co.id/BLclsYHYN",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7rasm-m0u97zreuv7if3.webp",
  },
  {
    id: 3,
    name: "Kaos Shin-Chan",
    link: "https://s.shopee.co.id/gHtqj7uz5",
    imageUrl: "https://down-id.img.susercontent.com/file/sg-11134201-825ak-mfxke83d9p1qb1.webp",
  },
  {
    id: 4,
    name: "Kaos Washed Vintage",
    link: "https://s.shopee.co.id/3fvWDNG8w7",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lpnqt87a0ov2ea.webp",
  },
  {
    id: 5,
    name: "Jersey Platinum Unisex",
    link: "https://s.shopee.co.id/804VRHJbJL",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7rbk9-mals5qfuez3288.webp",
  },
  {
    id: 6,
    name: "Kaos Stripe Navy",
    link: "https://s.shopee.co.id/804VdPJ8bP",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7rasj-m2xc2r8k1k80ea.webp",
  },
  {
    id: 7,
    name: "Jaket Traktop Windbreaker",
    link: "https://s.shopee.co.id/5AkKzjp6dY",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lx6lgmalnwv280.webp",
  },
  {
    id: 8,
    name: "Jaket Nylon Overblock Leapard",
    link: "https://s.shopee.co.id/3qExbdX0yM",
    imageUrl: "https://down-id.img.susercontent.com/file/sg-11134201-8258y-mg64ethfzmkv0c.webp",
  },
  {
    id: 9,
    name: "Kaos Stripe Hitam Premium",
    link: "https://s.shopee.co.id/2B6jpklpzv",
    imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-8224s-mggdyxdubmdle8.webp",
  },
];

// Product Card Component
const ProductCard = ({ product }) => {
  const handleClick = () => {
    // Crucial: Open the affiliate link in a new tab
    window.open(product.link, '_blank');
  };

  return (
    <div
      className="group w-full h-full cursor-pointer rounded-xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-gray-800"
      onClick={handleClick}
    >
      {/* Product Image/Box Area */}
      <div className="relative w-full h-full p-2">
        <img
          src={product.imageUrl}
          alt={product.name}
          // The product box aesthetic is achieved by the image covering the card
          className="w-full h-full object-cover rounded-lg transition-opacity duration-300 group-hover:opacity-80"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/400x400/1f2937/9ca3af?text=Unavailable";
          }}
        />
        {/* Hover overlay text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-xl font-bold tracking-wider p-4 border-2 border-white rounded-lg align-center">
            {product.name}
          </span>
        </div>
      </div>

      {/* Product Name/Affiliate Text */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mt-1">Affiliate Link</p>
      </div>
    </div>
  );
};

// Main Application Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans p-4 sm:p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Tapserda
        </h1>
        <p className="mt-3 text-xl text-gray-400">
          checkout sekarang juga !
        </p>
      </header>

      {/* Responsive Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
        {PRODUCTS.map((product) => (
          // The outer div manages the aspect ratio/sizing in the grid
          <div key={product.id} className="min-h-[300px] h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Footer / Attribution */}
      <footer className="text-center mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          Built with React & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
};

export default App;
