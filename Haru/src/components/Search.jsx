import React, { useState } from 'react';

function Search() {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [a, b] = useState("Try “ Traditional Pottery”");
  const suggestions = [
    { category: 'Trending', items: ['Romance', 'wisdom', 'branding'], color: '#323232' },
    { category: 'Colours', items: ['#FFF', '#323232','#000'], color: '#323232' },
    { category: 'Categories', items: ['Fashion', 'Branding', 'Packaging'], color: '#323232' }
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder={a}
        onFocus={() =>{ setShowSuggestions(true);
          b("Search comet....")

        }}
        onBlur={() =>{ setShowSuggestions(false);
          b("Try “ Traditional Pottery”")
        }}
        className="bg-[#2D2D2D] text-[#A7A191] px-4 py-2 pr-10 rounded-full w-full"
      />
      <img
        src="../../public/img/paint.png"
        alt="Icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
      />

      {showSuggestions && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#2D2D2D] rounded-sm shadow-lg z-10">
          {suggestions.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-[#FFF5D9] px-4 py-2 text-lg font-semibold">{category.category}</h3>
              <ul className="text-[#FFF5D9] px-4 py-2 space-y-2 ">
                {category.items.map((suggestion, index) => (
                  <li
                    key={index}
                    className="inline-block py-2 px-4 cursor-pointer border border-[#FFF5D9] rounded-2xl m-2 text-[#FFF5D9] hover:bg-[#3A3A3A] transition-all"
                    style={{ backgroundColor: category.color }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
