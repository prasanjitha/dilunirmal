// import { Heart } from "lucide-react";

export const AnimatedDivider = ({ variant = "default" }) => {
    if (variant === "ornate") {
      return (
        <div className="py-6 flex justify-center items-center overflow-hidden">
          <div className="flex items-center w-full max-w-2xl mx-auto">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
            {/* <div className="mx-4 flex">
              <div className="animate-spin-slow opacity-70">
                <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-pink-400" fill="currentColor" />
                </div>
              </div>
              <div className="mx-2 animate-pulse">
                <Heart size={24} className="text-yellow-600" fill="currentColor" />
              </div>
              <div className="animate-spin-slow opacity-70">
                <div className="w-8 h-8 border-2 border-yellow-500 rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-pink-400" fill="currentColor" />
                </div>
              </div>
            </div> */}
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="py-6 flex justify-center items-center">
        <div className="flex items-center w-full max-w-full mx-auto">
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-pulse"></div>
          {/* <div className="mx-4 relative">
            <Heart 
              className="text-pink-400 animate-pulse" 
              size={28} 
              fill="currentColor"
            />
            <Heart 
              className="text-yellow-500 absolute top-0 left-0 animate-ping" 
              size={28} 
              fill="currentColor"
              style={{ animationDuration: '3s' }}
            />
          </div> */}
          <div className="flex-grow h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-pulse"></div>
        </div>
      </div>
    );
  };