
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showSheet, setShowSheet] = useState(false);

  const seekers = [
    { top: '35%', left: '20%', score: 105, size: 4 },
    { top: '60%', right: '25%', score: 98, size: 3 },
    { top: '28%', right: '15%', score: 112, size: 3.5 },
    { top: '55%', left: '8%', score: 85, size: 2.5 },
  ];

  return (
    <div className="relative h-screen w-full bg-background-light overflow-hidden">
      {/* Map Layer */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-80 contrast-[0.85]" 
           style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaFLCVPktTAM6CTptVlRMOHP34f9rn8Kyk0g_l9BJz5kJ2U-kpyaikNKVYku8DtV_jIrhKhbTM4Q86pY6IPMwwAFPUPaz7iBM51QCKOaQM8-o4IG7pjMS1CL2Aw8A56Kx6_C5c0d_1yadQN2vGpPYFP8_WvEDGVf6IWnoVI1KVAqPqQrWlkLWgcKmfUVzorYnLkCHwd1UnjRFIwwqcHx3jSMN_vUjlveJ7n0d51P3CWZKjxVVq6x8P4woHES-QzJY7O3aVxA7PiA')`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white/90"></div>
      </div>

      {/* Markers */}
      {seekers.map((s, i) => (
        <div 
          key={i} 
          style={{ top: s.top, left: s.left, right: s.right }}
          className="absolute flex flex-col items-center gap-1.5 transition-transform hover:scale-110 cursor-pointer"
        >
          <div className="bg-white/90 backdrop-blur px-2.5 py-0.5 rounded-full shadow-md border border-primary/20 flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-[12px] icon-filled">verified</span>
            <span className="text-[10px] font-bold text-text-main">{s.score}</span>
          </div>
          <div className="relative">
            <div className="bg-primary rounded-full shadow-glow" style={{ width: `${s.size * 4}px`, height: `${s.size * 4}px` }}></div>
            <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-60"></div>
          </div>
        </div>
      ))}

      {/* User Central Marker */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="size-16 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrVWqUSppjA-M2gI--MUuP1GELsEeR6N_-fhEf9R0spdukthdGnKWevVVJ8mjzs-EXbtplNs8Al7sGZFdnMeFL90d-lh1Y4KxlUXjgg7BciT_0cfxTJrgoG8yJ7pAH6GQYNAgdIrmJIZugnuUzq6mEPH2Gz_X5NL3Zl_Izb3mfzgkL7YXIw6-vJPiq1avWbhUZESgzCGBCxsjYc5GfSkLesp_oHwQ5BED0G9BcPOKON8mjZrohH4AI7ARIIOfjjvoAVab50qrDrA" className="size-full object-cover" />
          </div>
          <div className="absolute -inset-4 rounded-full border-2 border-primary/10 animate-pulse-ring"></div>
        </div>
      </div>

      {/* Header UI */}
      <div className="absolute top-14 left-4 right-4 z-30 flex flex-col gap-4 animate-in slide-in-from-top duration-700">
        <div className="flex items-center gap-3">
          <div className="flex-1 h-12 glass-panel rounded-full flex items-center px-4 shadow-sm">
            <span className="material-symbols-outlined text-primary mr-3">search</span>
            <span className="text-sm font-medium text-gray-400">搜索附近热点...</span>
          </div>
          <button className="size-12 glass-panel rounded-full flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-text-sub">tune</span>
          </button>
        </div>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
          {['附近的人', '吸烟点', '正在活跃'].map((tag, i) => (
            <button key={tag} className={`shrink-0 px-4 h-9 rounded-full text-xs font-bold shadow-sm transition-all ${i === 0 ? 'bg-primary text-white' : 'bg-white/80 backdrop-blur-md text-text-sub border border-white/50'}`}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Controls */}
      <div className="absolute bottom-32 right-4 z-30 flex flex-col gap-3">
        <button className="size-11 glass-panel rounded-full flex items-center justify-center shadow-lg text-text-main">
          <span className="material-symbols-outlined text-[22px]">my_location</span>
        </button>
        <button className="size-11 glass-panel rounded-full flex items-center justify-center shadow-lg text-text-main">
          <span className="material-symbols-outlined text-[22px]">layers</span>
        </button>
      </div>

      {/* Bottom Main Button */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-40">
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setShowSheet(true)}
            className="size-20 rounded-full bg-primary text-white shadow-glow flex items-center justify-center animate-pulse-ring transform hover:scale-105 transition-all border-4 border-white"
          >
            <span className="material-symbols-outlined text-[40px] icon-filled">local_fire_department</span>
          </button>
          <span className="text-[10px] font-black tracking-widest text-text-sub/70 mt-3 uppercase">寻火</span>
        </div>
      </div>

      {/* Help Selection Sheet */}
      {showSheet && (
        <div className="absolute inset-0 z-50 flex items-end">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowSheet(false)}></div>
          <div className="relative w-full bg-[#fdfbf7] rounded-t-[2.5rem] p-6 pb-12 animate-in slide-in-from-bottom duration-300 shadow-2xl">
            <div className="w-10 h-1.5 bg-gray-200 rounded-full mx-auto mb-8"></div>
            <h3 className="text-center text-xl font-bold mb-1">需要一点帮助吗？</h3>
            <p className="text-center text-sm text-text-sub mb-10">选择一种方式开启暖心互动</p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { label: '借个火', icon: 'local_fire_department', color: 'bg-primary' },
                { label: '求支烟', icon: 'smoking_rooms', color: 'bg-stone-500' },
                { label: '聊会儿', icon: 'forum', color: 'bg-orange-500' }
              ].map((act) => (
                <div key={act.label} onClick={() => navigate('/help-request')} className="flex flex-col items-center gap-3 cursor-pointer group active:scale-95 transition-all">
                  <div className={`size-[5.5rem] rounded-full ${act.color} text-white shadow-lg flex items-center justify-center border-[5px] border-white/60`}>
                    <span className="material-symbols-outlined text-[42px] icon-filled">{act.icon}</span>
                  </div>
                  <span className="text-sm font-bold text-text-main">{act.label}</span>
                </div>
              ))}
            </div>
            <button onClick={() => setShowSheet(false)} className="w-full text-text-sub font-bold text-base py-2">取消</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
