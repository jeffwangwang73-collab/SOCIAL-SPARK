
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostSelector: React.FC = () => {
  const navigate = useNavigate();

  const options = [
    { label: '发布帖子', desc: '图文与投票', icon: 'edit_note', color: 'bg-orange-100', text: 'text-orange-500' },
    { label: '记录动态', desc: '记录此时此刻', icon: 'shutter_speed', color: 'bg-yellow-100', text: 'text-yellow-600' },
    { label: '撰写评测', desc: '分享真实体验', icon: 'rate_review', color: 'bg-green-100', text: 'text-green-600' },
    { label: '上传视频', desc: '展示你的藏品', icon: 'smart_display', color: 'bg-purple-100', text: 'text-purple-500' }
  ];

  return (
    <div className="h-screen w-full bg-white/40 backdrop-blur-3xl flex flex-col p-8">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute -top-20 -left-20 size-80 bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 size-96 bg-orange-200/20 rounded-full blur-[120px]"></div>
      </div>

      <header className="relative z-10 pt-16 pb-12 flex flex-col items-center">
        <div className="w-12 h-1.5 bg-primary/30 rounded-full mb-10"></div>
        <h1 className="text-3xl font-black text-text-main tracking-tight leading-tight text-center">
          今天想 <span className="text-primary">点亮</span> 什么？
        </h1>
        <p className="text-text-sub font-bold text-sm mt-3 opacity-80">选择一种方式，分享你的生活温度</p>
      </header>

      <main className="relative z-10 flex-1 grid grid-cols-2 gap-4 items-center">
        {options.map((opt, i) => (
          <div 
            key={opt.label} 
            onClick={() => navigate('/home')}
            className="group flex flex-col justify-between p-6 h-full aspect-[4/5] bg-white rounded-[2.5rem] shadow-xl border border-gray-50 active:scale-95 transition-all cursor-pointer animate-in fade-in slide-in-from-bottom duration-500"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`size-20 rounded-full ${opt.color} ${opt.text} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500`}>
              <span className="material-symbols-outlined text-4xl icon-filled">{opt.icon}</span>
            </div>
            <div className="text-left w-full">
              <h4 className="font-bold text-lg text-text-main">{opt.label}</h4>
              <p className="text-[10px] font-black text-text-sub/50 uppercase tracking-widest mt-1">{opt.desc}</p>
            </div>
          </div>
        ))}
      </main>

      <footer className="relative z-10 py-10 flex justify-center">
        <button 
          onClick={() => navigate(-1)}
          className="size-16 rounded-full bg-primary text-white shadow-glow flex items-center justify-center transform active:scale-90 hover:rotate-90 transition-all"
        >
          <span className="material-symbols-outlined text-3xl font-bold">close</span>
        </button>
      </footer>
    </div>
  );
};

export default PostSelector;
