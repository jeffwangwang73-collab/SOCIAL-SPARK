
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HelpRequest: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-[#fdfbf7] min-h-screen">
      <header className="flex items-center justify-between mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center bg-white shadow-sm">
          <span className="material-symbols-outlined text-text-main">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold text-text-main tracking-tight">发布求助</h2>
        <div className="size-10"></div>
      </header>

      <div className="space-y-4 mb-10">
        {[
          { label: '借个火', icon: 'local_fire_department', active: true },
          { label: '借支烟', icon: 'smoking_rooms' },
          { label: '一起抽根烟聊聊', icon: 'forum' }
        ].map((item) => (
          <div 
            key={item.label}
            className={`p-5 rounded-2xl flex items-center justify-between border-2 transition-all cursor-pointer ${item.active ? 'border-primary bg-primary/5 shadow-soft' : 'border-gray-50 bg-white hover:border-primary/20'}`}
          >
            <span className={`font-bold text-base ${item.active ? 'text-text-main' : 'text-text-sub'}`}>{item.label}</span>
            <span className={`material-symbols-outlined ${item.active ? 'text-primary' : 'text-gray-200'} icon-filled`}>{item.icon}</span>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2 px-1">
          <span className="material-symbols-outlined text-primary text-xl icon-filled">volunteer_activism</span>
          <h3 className="text-base font-bold">如果需要，我可以提供：</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['万宝路冰蓝', '中华', '七星蓝莓'].map((item, i) => (
            <div key={item} className={`h-12 rounded-xl flex items-center justify-center gap-2 border shadow-sm transition-all ${i === 1 ? 'bg-primary text-white border-primary shadow-glow' : 'bg-white border-gray-100 text-text-sub'}`}>
              {i === 1 && <span className="material-symbols-outlined text-sm">check_circle</span>}
              <span className="text-sm font-bold">{item}</span>
            </div>
          ))}
          <div className="h-12 border border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-300">
            <span className="material-symbols-outlined">add</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-24">
        <div className="flex items-center gap-2 px-1">
          <span className="material-symbols-outlined text-gray-400 text-xl">edit_note</span>
          <label className="text-base font-bold">备注 <span className="text-gray-300 text-xs font-medium ml-1">(可选)</span></label>
        </div>
        <textarea 
          className="w-full h-32 bg-white border-none shadow-soft rounded-2xl p-5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
          placeholder="例如：在星巴克门口长椅，穿着黑色外套..."
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto p-6 bg-gradient-to-t from-[#fdfbf7] via-[#fdfbf7]/90 to-transparent">
        <button 
          onClick={() => navigate('/matching')}
          className="w-full h-14 bg-primary text-white font-black text-lg rounded-2xl shadow-glow active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined text-2xl">send</span>
          <span>发出求助</span>
        </button>
      </div>
    </div>
  );
};

export default HelpRequest;
