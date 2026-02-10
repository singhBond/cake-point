
import React from "react";
import {
  Cake,
  Sparkles,
  Flame,
  PartyPopper,
  Balloon,
  Candy,
  Cookie,
} from "lucide-react";

export const Header = () => (
  <div className="relative overflow-hidden flex flex-col items-center text-center py-1 md:py-6 bg-linear-to-b from-pink-50 via-pink-100 to-pink-200">

    {/* Subtle light wooden texture overlay kept very faint for pink theme */}
    <div className="absolute inset-0 opacity-10 bg-repeat"
         style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2zM24 14v4h-4v-4h-2v4h-4v2h4v4h2v-4h4v-2zM12 36v-4h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z\" fill=\"%23f472b6\"/%3E%3C/g%3E%3C/svg%3E')" }}>
    </div>

    {/* Floating Balloons - all in pink shades */}
    <div className="absolute top-8 left-8 animate-float opacity-50">
      <Balloon className="w-12 h-12 text-pink-400 rotate-12" />
    </div>
    <div className="absolute top-12 left-20 animate-float-slow opacity-30">
      <Balloon className="w-10 h-10 text-pink-300 -rotate-6" />
    </div>
    <div className="absolute top-6 right-12 animate-float opacity-50">
      <Balloon className="w-10 h-10 text-pink-500 rotate-45" />
    </div>
    <div className="absolute top-20 right-8 animate-float-slow">
      <Balloon className="w-9 h-9 text-pink-600 -rotate-12" />
    </div>
    <div className="absolute top-22 left-8 animate-float">
      <Balloon className="w-11 h-11 text-rose-400 rotate-20" />
    </div>

    {/* Bakery icons - pink themed */}

    <div className="absolute top-48 right-4 opacity-50 ">
      <Candy className="w-10 h-10 text-pink-500" />
    </div>

    <div className="absolute bottom-16 left-4 opacity-30 animate-float-slow">
      <PartyPopper className="w-10 h-10 text-pink-600 rotate-12" />
    </div>

    {/* Sparkles - pink & rose tones */}
    <div className="absolute top-10 right-32  opacity-30">
      <Sparkles className="w-8 h-8 text-pink-300" />
    </div>
    <div className="absolute bottom-32 left-8  opacity-20">
      <Sparkles className="w-7 h-7 text-rose-300" />
    </div>
    <div className="absolute top-32 left-4  delay-200 opacity-30">
      <Sparkles className="w-6 h-6 text-pink-400" />
    </div>
    <div className="absolute top-32 right-4  delay-200 opacity-30">
    <Sparkles className="w-8 h-8 text-pink-500 " />
      <Sparkles className="w-6 h-6 text-rose-400  delay-200 " />
</div>
    {/* Logo */}
    <div className="relative z-10">
      <img
        src="/cakePoint.png"
        className="h-28 w-28 md:h-48 md:w-48 rounded-full"
        alt="Bakers Corner Logo"
      />
    </div>

    {/* Title */}
    <h1 className="relative z-10 text-5xl md:text-7xl font-bold text-pink-900 drop-shadow-2xl  tracking-wider">
     𝒞𝒶𝓀𝑒 𝒫𝑜𝒾𝓃𝓉
    </h1>

    {/* Tagline */}
    <h2 className="relative z-10 text-xl font-serif md:text-5xl text-pink-800 mt-1 flex items-center  justify-center">
    ᴄᴀᴋᴇs • ᴘᴀsᴛʀʏ • ᴄᴏᴏᴋɪᴇ
      
    </h2>

    {/* Contact */}
    <p className="relative z-10 text-pink-900 max-w-2xl mt-1 text-md md:text-2xl font-semibold">
      📞 Mob: 6200314654
    </p>

    {/* Timings */}
    <p className="relative z-10 text-pink-700 max-w-2xl  text-sm md:text-lg italic font-medium">
      ~ Accepting Online Orders : 10:00 AM – 9:00 PM ~
    </p>

    {/* Bottom decorative wave - soft pink */}
    <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-pink-300/60 via-pink-200/40 to-transparent" />
  </div>
);





