
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AgeGate: React.FC<{ onVerify: () => void }> = ({ onVerify }) => {
  const navigate = useNavigate();

  const handleVerify = () => {
    onVerify();
    navigate('/login');
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center p-6 bg-neutral-900">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.4]" 
        style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbRCUPGtKMuhlV7qwma0SlggIUqijHgTY2xqUTdpTw0CeRGKLBxgic31tqJe_BIZ0HEQbaXOMIdTJFOnNzaVn0EoW02qzdBTduVUaUDvxLiwOnHFLbQp_1NT0UYK2aKbzFZEBWUfQjJ_Gnc9i2c1r9iuAQ-Yu0w3STc4_hS4bBR3GBEDJr4m5EX9aVNtqt3enq6qsA74L_G9nnVTCUEiR1hImQyF5CiK1xxn-2sF6kAlap0KdlavCYgoUXswdHiljY6vbppzZERg')`}}
      />
      <div className="relative z-10 w-full max-w-[340px] bg-[#fefdf9] rounded-[32px] shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="mb-6 relative w-24 h-24 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 bg-[#eff2e6] rounded-full opacity-60"></div>
          <span className="material-symbols-outlined text-[64px] text-[#8a9a5b] icon-filled">verified_user</span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] pt-1">
            <span className="font-bold text-sm text-white drop-shadow-sm">18+</span>
          </div>
        </div>
        <h2 className="text-text-main text-xl font-bold mb-3">温馨提示</h2>
        <p className="text-text-sub text-[15px] leading-relaxed mb-8 px-2">为了共建和谐社区，<br/>本社区仅限成年烟友进入。</p>
        <div className="flex flex-col w-full gap-3">
          <button 
            onClick={handleVerify}
            className="w-full h-12 bg-primary rounded-full text-white font-bold shadow-lg shadow-orange-100/50 active:scale-95 transition-all"
          >
            我已满18岁
          </button>
          <button className="w-full h-10 border border-gray-100 rounded-full text-gray-400 text-sm font-medium">
            未成年离开
          </button>
        </div>
        <div className="mt-6">
          <p className="text-[10px] text-stone-400 font-light italic">吸烟有害健康，请文明交流</p>
        </div>
      </div>
    </div>
  );
};

export default AgeGate;
