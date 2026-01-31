
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chat: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#fdfbf7]">
      <header className="bg-white/90 backdrop-blur-md pt-12 pb-4 px-4 flex items-center justify-between border-b border-gray-50 z-20">
        <button onClick={() => navigate('/home')} className="size-10 rounded-full flex items-center justify-center active:bg-black/5">
          <span className="material-symbols-outlined text-text-main">arrow_back_ios_new</span>
        </button>
        <div className="flex-1 flex flex-col items-center">
          <div className="flex items-center gap-1.5">
            <h1 className="font-bold text-text-main">抽烟的老王</h1>
            <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
          <p className="text-[10px] font-bold text-text-sub">150m · 刚刚活跃</p>
        </div>
        <button className="size-10 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-text-main">more_horiz</span>
        </button>
      </header>

      <main className="flex-1 p-5 space-y-8 overflow-y-auto no-scrollbar pt-8">
        <div className="flex justify-center">
          <span className="px-4 py-1 rounded-full bg-white border border-gray-100 text-[10px] font-bold text-text-sub shadow-sm">
            已连接，请保持礼貌交流，互助传递温暖
          </span>
        </div>

        <div className="flex items-end gap-3 max-w-[85%]">
          <img className="size-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_egnt49S0zZYB-BGbPqTiUsc7Yi87TAzLS9OdQ8_uqTMLYw_cdW0No72n1HiHbQCzQgU7wUnzW4DPJC4F22N2hLTjN8R9YehwioSf9_HhXMZYaJAOqgFIwBc0ZkKvhLGZXGTAal6CXXImvgDvISrHb7QTaH2-bfIQjRG-RKSsWjhSqeEMjjqM6iorhR-kkKteTTwIPe0LUBXj7yJkvaHHysy9uge3YylxYLepWIfjzu3YpFqbBhjjuf0Bh3yYv4jqDZGAL0hpTg" />
          <div className="bg-white p-4 rounded-[1.5rem] rounded-bl-sm shadow-soft text-sm font-medium leading-relaxed">
            兄弟，带火了吗？我的打火机刚坏了。
          </div>
        </div>

        <div className="flex items-end gap-3 max-w-[85%] ml-auto flex-row-reverse">
          <div className="bg-primary/10 border border-primary/20 p-4 rounded-[1.5rem] rounded-br-sm shadow-soft text-sm font-bold text-text-main leading-relaxed">
            带了，我就在附近，马上过去。
          </div>
        </div>

        <div className="flex items-end gap-3 max-w-[85%]">
          <img className="size-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_egnt49S0zZYB-BGbPqTiUsc7Yi87TAzLS9OdQ8_uqTMLYw_cdW0No72n1HiHbQCzQgU7wUnzW4DPJC4F22N2hLTjN8R9YehwioSf9_HhXMZYaJAOqgFIwBc0ZkKvhLGZXGTAal6CXXImvgDvISrHb7QTaH2-bfIQjRG-RKSsWjhSqeEMjjqM6iorhR-kkKteTTwIPe0LUBXj7yJkvaHHysy9uge3YylxYLepWIfjzu3YpFqbBhjjuf0Bh3yYv4jqDZGAL0hpTg" />
          <div className="bg-white p-1 rounded-2xl shadow-soft">
            <div className="w-56 aspect-[4/3] rounded-xl overflow-hidden mb-2 relative">
               <img className="size-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLfnw_wibNyxUcOCGN_ytHxcrF07LF3ZCw6sRVzmNbvN5oM-81LpYES5kPLwsqi1t2Zg4CO7ZAXs-OnI304OrSck0XFlGvorPRPhTurh-gT6IKHrnKI5aI1C3mv6k0xcMWaCACeFLQhA2jzFYQDyXvk4fgX7yLJCbWS39xFEXhmLvBnXAr8bsdwyLiwzfaNLBrt2bOhXUbf-8kBEBAt_JncxSKQayy9FkT96ne77zi6X-U5K5kLvFBw54EmHxkg2T9kyuJBXyuDA" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="size-8 bg-primary rounded-full shadow-glow animate-bounce flex items-center justify-center text-white border-2 border-white">
                   <span className="material-symbols-outlined text-sm">location_on</span>
                 </div>
               </div>
            </div>
            <p className="px-3 pb-3 text-sm font-bold text-text-main">我就在这个便利店门口。</p>
          </div>
        </div>
      </main>

      <footer className="bg-white rounded-t-[2.5rem] shadow-[0_-8px_40px_rgba(0,0,0,0.06)] p-6 pb-10 space-y-5 border-t border-gray-50">
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
          {['[已出发]', '[2分钟到]', '[穿什么颜色]', '[稍微等一下]'].map(tag => (
            <button key={tag} className="shrink-0 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 text-xs font-bold text-text-sub hover:bg-primary/10 transition-colors">
              {tag}
            </button>
          ))}
        </div>
        
        <div className="flex gap-3">
          <div className="flex-1 h-12 bg-gray-50 rounded-full flex items-center px-4 border border-gray-100 focus-within:bg-white focus-within:border-primary/30 transition-all">
            <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium" placeholder="发送消息..." />
            <span className="material-symbols-outlined text-gray-400">add_circle</span>
          </div>
          <button className="size-12 rounded-full bg-primary text-white shadow-glow flex items-center justify-center active:scale-90 transition-all">
            <span className="material-symbols-outlined icon-filled ml-0.5">send</span>
          </button>
        </div>

        <div className="flex gap-3 pt-2">
          <button 
            onClick={() => navigate('/home')}
            className="flex-1 h-14 bg-primary text-white font-black rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">check_circle</span>
            <span>标记完成</span>
          </button>
          <button className="px-5 h-14 border-2 border-gray-100 rounded-full flex flex-col items-center justify-center gap-0.5 text-text-sub">
             <span className="material-symbols-outlined text-[18px]">close</span>
             <span className="text-[10px] font-bold">结束</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Chat;
