
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full bg-[#fdfaf5] flex flex-col items-center justify-center px-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <header className="flex flex-col items-center mb-14 animate-in fade-in slide-in-from-top duration-700">
        <div className="relative w-32 h-32 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[35px] transform scale-125"></div>
          <div className="size-28 rounded-full bg-gradient-to-br from-primary to-orange-600 shadow-xl flex items-center justify-center relative overflow-hidden border-4 border-white/20">
            <span className="material-symbols-outlined text-white text-5xl icon-filled">local_fire_department</span>
          </div>
        </div>
        <h1 className="text-3xl font-black tracking-[0.25em] mb-2 pl-2">借个火</h1>
        <p className="text-[12px] font-black tracking-[0.5em] text-text-sub/50 uppercase italic">SOCIAL SPARK</p>
      </header>
      <main className="w-full space-y-4 animate-in fade-in slide-in-from-bottom duration-700">
        <div className="group flex w-full items-center h-[68px] px-6 rounded-[24px] bg-white/60 backdrop-blur-md border border-gray-100 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <span className="material-symbols-outlined text-gray-400 mr-4">smartphone</span>
          <input className="flex-1 bg-transparent border-none text-lg font-semibold placeholder:text-gray-300 outline-none focus:ring-0" placeholder="手机号" type="tel" />
        </div>
        <div className="group flex w-full items-center h-[68px] px-6 rounded-[24px] bg-white/60 backdrop-blur-md border border-gray-100 shadow-sm focus-within:ring-2 focus-within:ring-primary/20 transition-all">
          <span className="material-symbols-outlined text-gray-400 mr-4">lock_open</span>
          <input className="flex-1 bg-transparent border-none text-lg font-semibold placeholder:text-gray-300 outline-none focus:ring-0" placeholder="验证码" type="text" />
          <button className="text-sm font-bold text-[#ed8121] whitespace-nowrap ml-2">获取验证码</button>
        </div>
        <button 
          onClick={() => navigate('/onboarding')}
          className="w-full h-[68px] mt-8 rounded-[28px] bg-primary text-white font-bold text-lg shadow-lg shadow-orange-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
        >
          <span>进入温暖世界</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </main>
      <footer className="mt-16 flex flex-col items-center animate-in fade-in duration-1000 delay-500">
        <button className="size-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:text-primary transition-all bg-white shadow-sm">
          <span className="material-symbols-outlined text-3xl icon-filled">chat</span>
        </button>
        <p className="text-[10px] mt-8 text-gray-300 font-medium">登录即代表同意 <a className="underline">用户协议</a> 和 <a className="underline">隐私政策</a></p>
      </footer>
    </div>
  );
};

export default Login;
