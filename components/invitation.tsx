"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Image from "next/image";
import { AnimatedDivider } from "./animated-divider";

// HeartRain Component
type HeartType = {
    id: number;
    left: number;
    size: number;
    opacity: number;
    duration: number;
    color: string;
  };
  
  const HeartRain = () => {
    const [hearts, setHearts] = useState<HeartType[]>([]);
  
    useEffect(() => {
      generateHearts();
  
      const interval = setInterval(() => {
        generateHearts(1);
      }, 300);
  
      return () => clearInterval(interval);
    }, []);
  
    const generateHearts = (count = 15) => {
      const newHearts: HeartType[] = [];
  
      for (let i = 0; i < count; i++) {
        newHearts.push({
          id: Date.now() + Math.random(),
          left: Math.random() * 100,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          duration: Math.random() * 10 + 10,
          color: Math.random() > 0.5 ? 'text-pink-300' : 'text-pink-400'
        });
      }
  
      setHearts(prevHearts => [...prevHearts, ...newHearts]);
  
      setTimeout(() => {
        setHearts(prevHearts =>
          prevHearts.filter(heart => heart.id !== newHearts[0]?.id)
        );
      }, (newHearts[0]?.duration || 15) * 1000);
    };
  
    return (
      <div className="fixed inset-0 pointer-events-none z-10">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={`absolute ${heart.color} animate-heartfall`}
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}rem`,
              opacity: heart.opacity,
              animationDuration: `${heart.duration}s`,
              transform: `rotate(${Math.random() * 60 - 30}deg)`
            }}
          >
            <Heart fill="currentColor" size={24} />
          </div>
        ))}
      </div>
    );
  };

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  
  // Heart rain state
  const [showHearts] = useState(true);
  
  // Set the wedding date - May 8, 2025
  const weddingDate = new Date('july 30, 2025 09:30:00').getTime();

 

  
  // Calculate time remaining
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, [weddingDate]);
  
//   // Toggle music play/pause
//   const toggleMusic = () => {
//     setIsPlaying(!isPlaying);
//     // In a real implementation, you would play/pause music here
//   };
  
//   // Toggle heart animation
//   const toggleHearts = () => {
//     setShowHearts(!showHearts);
//   };
  
  // CSS for heart animation
  useEffect(() => {
    // Add keyframes animation for falling hearts
    const style = document.createElement('style');
    style.textContent = `
      @keyframes heartfall {
        0% {
          transform: translateY(-10vh) rotate(0deg) scale(1);
        }
        25% {
          transform: translateY(25vh) rotate(10deg) scale(0.9) translateX(10px);
        }
        50% {
          transform: translateY(50vh) rotate(-10deg) scale(1.1) translateX(-10px);
        }
        75% {
          transform: translateY(75vh) rotate(20deg) scale(0.9) translateX(15px);
        }
        100% {
          transform: translateY(100vh) rotate(-20deg) scale(1);
        }
      }
      .animate-heartfall {
        animation-name: heartfall;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulseZoom {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      .animate-pulse-zoom {
        animation: pulseZoom 5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white font-serif">
      {/* Heart Rain Animation */}
      {showHearts && <HeartRain />}
      
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="./images/DSC01320.jpg"
          alt="Wedding background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          className="z-0 animate-zoomSlow animate-pulse-zoom"
        />
        <div className="relative z-10 text-center px-4">

          <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-Satisfy text-yellow-400 mb-6" >Nirmal & Madhuri</h1>
          <p className="text-xl md:text-2xl text-yellow-500 italic mb-6" style={{ fontFamily: '"Dancing Script", cursive' }}>Invite you to witness the beginning of their forever</p>
          <p className="text-lg md:text-xl text-yellow-500 mb-8" style={{ fontFamily: '"Dancing Script", cursive' }}>With grateful hearts, we celebrate our love with you</p>
        </div>
        </div>
        {/* Wave effect at bottom */}
        <div className="absolute bottom-[-6] w-full h-16 bg-white z-20" style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%"
        }}></div>
      </section>
      
      {/* Invitation Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-800 mb-6">
            Daughter of Mr. & Mrs. Malani  and son of Mr. & Mrs. Gamage,
            request the pleasure of the company of
          </p>
          <p className="text-lg md:text-xl mb-8">
            Mr. & Mrs. / Miss <span className="text-yellow-600 font-semibold">Gamage Liyanage</span> on
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mb-8">
            <div className="text-3xl font-semibold">WEN</div>
            <div className="text-4xl font-bold">
              JULY<br />30
            </div>
            <div className="text-3xl font-semibold">2025</div>
          </div>
          
          <p className="text-lg mb-2">From 9.30 am to 4.00 pm.</p>
          <p className="text-sm mb-6">(Poruwa Ceremony at 10.00 am.)</p>
          
          <p className="text-lg mb-2">at</p>
          <h3 className="text-2xl font-semibold mb-2 underline">Hotel Paraduwa</h3>
          <p className="text-sm mb-12">(Paraduwa, Akuressa.)</p>
        </div>
      </section>

                 {/* Animated Divider */}
                 <AnimatedDivider  />
      
      {/* Countdown Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Counting the Moments Until Our Forever</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-20 h-20 md:w-24 md:h-24 border border-yellow-600 rounded flex flex-col items-center justify-center bg-white">
              <div className="text-2xl md:text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-xs">DAYS</div>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 border border-yellow-600 rounded flex flex-col items-center justify-center bg-white">
              <div className="text-2xl md:text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs">HOURS</div>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 border border-yellow-600 rounded flex flex-col items-center justify-center bg-white">
              <div className="text-2xl md:text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs">MINUTES</div>
            </div>
            <div className="w-20 h-20 md:w-24 md:h-24 border border-yellow-600 rounded flex flex-col items-center justify-center bg-white">
              <div className="text-2xl md:text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs">SECONDS</div>
            </div>
          </div>
        </div>
      </section>

           {/* Animated Divider */}
           <AnimatedDivider  />
      
      {/* Download Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">Keep a Cherished Memory of Our Special Day</h2>
          
          <button className="px-6 py-3 border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 transition-colors rounded">
            Download Invitation (PDF)
          </button>
        </div>
      </section>

            {/* Animated Divider */}
            <AnimatedDivider />
      
      {/* RSVP Section */}

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Kindly RSVP to Confirm Your Attendance</h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10">
            <div className="flex items-center gap-2">
              <span>Nirmal -</span>
              <span className="text-yellow-600">0769917532</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Ramesh -</span>
              <span className="text-yellow-600">0788203115</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-400 text-white text-center">
        <p className="text-sm mb-2">© 2025 Madhuri & Nirmal</p>
        <p className="text-sm">With love as we begin our journey together</p>
      </footer>
    </div>
  );
}
