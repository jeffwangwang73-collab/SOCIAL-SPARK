
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Reputation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-background-light min-h-screen">
      <header className="flex items-center justify-between mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center bg-white shadow-sm">
          <span className="material-symbols-outlined text-text-main">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-text-main tracking-tight">信誉评分中心</h2>
        <div className="size-10"></div>
      </header>

      <div className="flex flex-col items-center mb-12">
        <div className="relative size-64 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-[60px] animate-pulse"></div>
          <svg className="absolute inset-0 size-full -rotate-90" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="45" fill="none" stroke="#eee" strokeWidth="8" strokeLinecap="round" />
             <circle cx="50" cy="50" r="45" fill="none" stroke="#f4bc1f" strokeWidth="8" strokeDasharray="283" strokeDashoffset="42" strokeLinecap="round" className="drop-shadow-glow" />
          </svg>
          <div className="relative z-10 flex flex-col items-center">
            <span className="text-7xl font-black text-text-main leading-none tabular-nums">105</span>
            <div className="bg-primary/20 px-3 py-1 rounded-full text-primary-dark font-black text-xs mt-3 tracking-widest border border-primary/20">信誉极佳</div>
          </div>
        </div>
        <p className="text-text-sub font-bold text-sm text-center mt-4 leading-relaxed max-w-[240px]">
          您的信誉犹如初升的暖阳<br/>温暖着社区的每一个角落
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white p-5 rounded-3xl shadow-soft border border-green-50">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] font-bold">trending_up</span>
            </div>
            <h4 className="font-bold text-text-main">信用加分</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold"><span className="text-text-sub">求助成功</span><span className="text-green-500 bg-green-50 px-1.5 rounded">+2</span></div>
            <div className="flex justify-between text-xs font-bold"><span className="text-text-sub">每日签到</span><span className="text-green-500 bg-green-50 px-1.5 rounded">+1</span></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl shadow-soft border border-red-50">
          <div className="flex items-center gap-2 mb-4">
            <div className="size-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px] font-bold">trending_down</span>
            </div>
            <h4 className="font-bold text-text-main">信用减分</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-bold"><span className="text-text-sub">爽约</span><span className="text-red-500 bg-red-50 px-1.5 rounded">-5</span></div>
            <div className="flex justify-between text-xs font-bold"><span className="text-text-sub">举报违规</span><span className="text-red-500 bg-red-50 px-1.5 rounded">-2</span></div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-soft mb-12">
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-black text-text-main">近期记录</h4>
          <span className="text-[10px] font-bold text-text-sub uppercase tracking-wider">查看全部</span>
        </div>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="size-11 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300">
                <span className="material-symbols-outlined">volunteer_activism</span>
              </div>
              <div>
                <p className="text-sm font-black text-text-main">完成爱心互助</p>
                <p className="text-[10px] font-bold text-text-sub">2023-10-24 14:30</p>
              </div>
            </div>
            <span className="text-sm font-black text-green-500">+2 分</span>
          </div>
        </div>
      </div>

      <button className="w-full h-16 bg-primary text-white font-black text-lg rounded-full shadow-glow flex items-center justify-center gap-2 transition-transform active:scale-95">
        <span>如何提升评分</span>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default Reputation;
