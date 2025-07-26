import { useState } from 'react'
import './App.css'
import React, { useState, useEffect } from 'react';

// --- SVG Icon Components ---
// Using inline SVGs to keep the component self-contained and avoid external dependencies.

const GamepadIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <path d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
    <path d="M6.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z" />
    <path d="M12 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z" />
  </svg>
);

const TrophyIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.87 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.13 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2Z" />
  </svg>
);

const ClapperboardIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
    <path d="m6.2 5.3 3.1 3.9" />
    <path d="m12.4 3.6 3.1 4" />
    <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  </svg>
);

const UsersIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);


// --- Mock Data ---
// In a real application, this data would come from an API.
const featuredGames = [
  { id: 1, title: 'CyberRevolt 2088', genre: 'Action RPG', imageUrl: 'https://placehold.co/600x400/9333ea/ffffff?text=CyberRevolt+2088' },
  { id: 2, title: 'Starfall Odyssey', genre: 'Space Sim', imageUrl: 'https://placehold.co/600x400/1e40af/ffffff?text=Starfall+Odyssey' },
  { id: 3, title: 'Aethelgard\'s Echo', genre: 'Fantasy Adventure', imageUrl: 'https://placehold.co/600x400/be123c/ffffff?text=Aethelgard\'s+Echo' },
  { id: 4, title: 'Neon Grid Racers', genre: 'Arcade Racing', imageUrl: 'https://placehold.co/600x400/059669/ffffff?text=Neon+Grid+Racers' },
  { id: 5, title: 'The Silent Forest', genre: 'Survival Horror', imageUrl: 'https://placehold.co/600x400/4a5568/ffffff?text=The+Silent+Forest' },
];

const featureCards = [
    {
        icon: <TrophyIcon className="w-10 h-10 mb-4 text-amber-400" />,
        title: "Competitive Tournaments",
        description: "Join weekly tournaments with huge prize pools. Climb the leaderboards and become a legend."
    },
    {
        icon: <ClapperboardIcon className="w-10 h-10 mb-4 text-rose-400" />,
        title: "Live Streams",
        description: "Watch your favorite pro players and content creators stream live, right here on our platform."
    },
    {
        icon: <UsersIcon className="w-10 h-10 mb-4 text-sky-400" />,
        title: "Community Hub",
        description: "Connect with fellow gamers, find squads, and discuss the latest updates and strategies."
    }
];


// --- Components ---

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-30 py-4 px-4 sm:px-8 bg-black bg-opacity-20 backdrop-blur-sm">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center gap-2">
        <GamepadIcon className="w-8 h-8 text-violet-400 animate-pulse" />
        <h1 className="text-2xl font-bold text-white tracking-wider">PixelPulse</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
        <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">Games</a>
        <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">Tournaments</a>
        <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">Streams</a>
        <a href="#" className="text-gray-300 hover:text-violet-400 transition-colors duration-300">Community</a>
      </nav>
      <button className="px-4 py-2 text-sm font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-all duration-300 transform hover:scale-105">
        Login
      </button>
    </div>
  </header>
);

const HeroSection = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gray-900">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 via-violet-900 to-gray-900 animate-gradient-x"></div>
            
            {/* Mouse-tracking Spotlight */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
                }}
            ></div>

            <div className="relative z-10 p-4">
                <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tighter" style={{ textShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
                    Your Next Gaming Obsession
                </h2>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    Discover a universe of endless entertainment. Compete, conquer, and connect with millions of players.
                </p>
                <button className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-lg hover:shadow-violet-400/50 transition-all duration-300 transform hover:scale-105">
                    Explore Games
                </button>
            </div>
        </section>
    );
};

const GameCard = ({ game }) => (
    <div className="flex-shrink-0 w-72 md:w-80 m-4 group perspective-1000">
        <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            {/* Front of Card */}
            <div className="absolute w-full h-full backface-hidden">
                <img src={game.imageUrl} alt={game.title} className="w-full h-full object-cover rounded-xl shadow-lg" />
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl flex items-end p-4">
                    <h3 className="text-white text-2xl font-bold">{game.title}</h3>
                </div>
            </div>
            {/* Back of Card */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-800 rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
                <h3 className="text-white text-2xl font-bold mb-2">{game.title}</h3>
                <p className="text-violet-300 font-semibold mb-4">{game.genre}</p>
                <p className="text-gray-400 text-sm mb-6">Experience the next generation of {game.genre.toLowerCase()} gaming.</p>
                <button className="px-6 py-2 font-bold text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors duration-300">
                    Play Now
                </button>
            </div>
        </div>
    </div>
);

const GamesCarousel = () => (
    <section className="py-20 bg-gray-900">
        <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Games</h2>
            <div className="flex overflow-x-auto py-4 -mx-4 hide-scrollbar">
                {featuredGames.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
                 {/* Duplicate for seamless loop illusion */}
                 {featuredGames.map(game => (
                    <GameCard key={`${game.id}-clone`} game={game} />
                ))}
            </div>
        </div>
    </section>
);

const FeatureSection = () => (
    <section className="py-20 bg-gray-800 bg-opacity-40">
        <div className="container mx-auto px-4">
             <h2 className="text-4xl font-bold text-center text-white mb-16">More Than Just Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featureCards.map((feature, index) => (
                     <div key={index} className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl text-center border border-gray-700 hover:border-violet-500 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex justify-center items-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);


const Footer = () => (
    <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
            <p>&copy; 2025 PixelPulse. All Rights Reserved.</p>
            <p className="text-sm mt-2">The ultimate destination for gamers worldwide.</p>
        </div>
    </footer>
);


function App() {
  return (
    <div className="bg-gray-900">
      <style>{`
        /* Animated gradient for the hero section background */
        @keyframes gradient-x {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 15s ease infinite;
        }


        /* 3D Transform styles for the flipping game cards */
        .perspective-1000 {
            perspective: 1000px;
        }

        .transform-style-3d {
            transform-style: preserve-3d;
        }

        .rotate-y-180 {
            transform: rotateY(180deg);
        }

        .backface-hidden {
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden; /* For Safari */
        }


        /* Utility to hide scrollbars */
        .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <GamesCarousel />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}

export default App;
