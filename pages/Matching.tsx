
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Matching: React.FC = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer(t => (t > 0 ? t - 1 : 0));
    }, 1000);

    const matchTimer = setTimeout(() => {
      navigate('/chat');
    }, 3500);

    return () => {
      clearInterval(countdown);
      clearTimeout(matchTimer);
    };
  }, [navigate]);

  return (
    <div className="relative h-screen w-full bg-background-light flex flex-col items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 blur-[2px]" 
        style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnJIOV5x1iJW7m49asniZIYHacPbhVFlgKwWpK2jFS34HgrlSC1KubLBf30Adht4WON4CeH1E82k9HvCc2Cdu3oFnCr5Hk3G8qU_Qw916kSL64z4SnN7xaX1TP6kpPWuc-gZ8wU9EFGdDWw21PgPXw5hiByZddf9IX4YaVVJL6rMvqzBus7kgZ2gzSSzBawNHOd9CtBnB50xWGPtbR33gKTRGGY6MwKFJ4eIVFTNdUky7BSul_2pIfwgNsEXm3LGF1q5LYGIlt1g')`}}
      />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="relative size-64 flex flex-col items-center justify-center mb-12">
          <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-ring"></div>
          <div className="relative size-56 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-full shadow-soft border border-white/50">
             <span className="text-6xl font-black text-primary tabular-nums tracking-tighter">{timer}s</span>
             <p className="text-[10px] font-black text-text-sub uppercase tracking-widest mt-2">等待接单</p>
          </div>
        </div>

        <h2 className="text-2xl font-black text-text-main tracking-tight mb-3">正在为您广播寻火信号...</h2>
        <p className="text-text-sub font-bold text-sm">已通知附近 <span className="text-primary mx-1">12</span> 位温暖的路人</p>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 px-8">
        <button className="w-full h-14 bg-white/90 backdrop-blur-md text-primary font-black rounded-full shadow-lg border border-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">history</span>
          <span>延长等待</span>
        </button>
        <button onClick={() => navigate(-1)} className="text-primary/60 font-bold text-sm">取消求助</button>
      </div>
    </div>
  );
};

export default Matching;
