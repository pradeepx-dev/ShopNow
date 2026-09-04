import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { shoppableFeed } from "../../data/homeData";
import { HeartIcon, CommentIcon, BookmarkIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";

const ShoppableFeed = ({ items = shoppableFeed }) => {
  const [likedPosts, setLikedPosts] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const scrollRef = useRef(null);
  const feedList = items?.length ? items : shoppableFeed;

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const toggleLike = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full py-10 sm:py-12 bg-gray-50/60 border-y border-gray-100 relative group/section">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        
        {/* Header & Desktop Header Navigation Controls */}
        <div className="mb-6 flex items-end justify-between">
          <div className="flex flex-col items-start">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#e91e8c]">
              Social Edit
            </span>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Inspired By Our Trendsetters
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Tap to shop exact creator looks and real-world fashion inspirations
            </p>
          </div>

          {/* Desktop Only Header Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll left desktop"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-700 hover:text-[#e91e8c] hover:border-[#e91e8c]/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              aria-label="Scroll right desktop"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Influencer Horizontal Scroll Container with Mobile Floating Side Arrows */}
        <div className="relative">
          {/* Mobile Only Floating Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="flex sm:hidden absolute -left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-lg items-center justify-center text-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll left mobile"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>

          {/* Horizontally Scrollable Row */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-2 px-1"
          >
            {feedList.map((item) => (
              <div
                key={item.id || item._id}
                className="group flex-shrink-0 w-[240px] sm:w-[270px] md:w-[290px] bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Creator Profile Header */}
                <div className="p-3 flex items-center justify-between border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                      <img
                        src={item.creator.avatar}
                        alt={item.creator.name}
                        className="w-full h-full rounded-full object-cover border border-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">
                        @{item.creator.name}
                      </h4>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {item.creator.followers} followers
                      </span>
                    </div>
                  </div>

                  <div className="text-[10px] font-semibold text-[#e91e8c] bg-pink-50 px-2 py-0.5 rounded-full">
                    Creator
                  </div>
                </div>

                {/* Influencer Outfit Image */}
                <Link to={item.link} className="relative block aspect-[4/5] overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Quick Shop Tag */}
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-gray-900 shadow-md flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                    <span className="w-2 h-2 rounded-full bg-[#e91e8c] animate-pulse" />
                    Shop Look
                  </div>
                </Link>

                {/* Social Action Bar & Caption */}
                <div className="p-3 flex flex-col justify-between flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => toggleLike(item.id, e)}
                        className="text-gray-700 hover:text-rose-600 transition-colors cursor-pointer"
                        aria-label="Like post"
                      >
                        <HeartIcon
                          className={`w-5 h-5 ${
                            likedPosts[item.id] ? "text-rose-500 fill-rose-500" : ""
                          }`}
                          filled={likedPosts[item.id]}
                        />
                      </button>
                      <button
                        className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer"
                        aria-label="Comment on post"
                      >
                        <CommentIcon className="w-5 h-5" />
                      </button>
                    </div>

                    <button
                      onClick={(e) => toggleSave(item.id, e)}
                      className="text-gray-700 hover:text-[#e91e8c] transition-colors cursor-pointer"
                      aria-label="Bookmark post"
                    >
                      <BookmarkIcon
                        className={`w-5 h-5 ${
                          savedPosts[item.id] ? "text-[#e91e8c] fill-[#e91e8c]" : ""
                        }`}
                        filled={savedPosts[item.id]}
                      />
                    </button>
                  </div>

                  <div>
                    <p className="text-[11px] font-bold text-gray-900 mb-1">
                      {likedPosts[item.id] ? "You & " : ""}{item.likes} likes
                    </p>
                    <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Only Floating Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="flex sm:hidden absolute -right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white/95 border border-gray-200 shadow-lg items-center justify-center text-gray-800 active:scale-95 transition-all cursor-pointer"
            aria-label="Scroll right mobile"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ShoppableFeed;
