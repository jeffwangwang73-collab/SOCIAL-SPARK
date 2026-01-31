
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light min-h-screen">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-background-light/90 backdrop-blur-sm">
        <span className="material-symbols-outlined text-text-main">chevron_left</span>
        <h1 className="text-lg font-bold tracking-tight">个人主页</h1>
        <button onClick={() => navigate('/reputation')} className="flex items-center justify-center size-10 rounded-full hover:bg-black/5">
          <span className="material-symbols-outlined text-text-main">settings</span>
        </button>
      </header>

      <main className="flex flex-col gap-8 pt-4 pb-10">
        <section className="flex flex-col items-center px-6">
          <div className="relative mb-5">
            <div className="size-28 rounded-full border-4 border-white shadow-warm overflow-hidden bg-gray-200 ring-2 ring-primary/20">
              <img className="size-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9WYx71rgiyB_L-4gosvL7KMsRgZh89WJUIt1JB3w01lsmog946J19nNECCQARz5LhwNbu0t6RR1_BdsBAqmbBb_Wk8_G_VmqoYL7V31XXDuFO3aW1oLUlmfcbvq3MepDeYqKGMKWux74syXJNvahpQw_oeQrbFCsKsDaOTxXOop_FR6t7sulU6eT-_OROUEl2_QGULaWwC1JeHjTWPhCC8uZvIb69jj9J7ZTe_gfD1n6EBaOtS9qhHWIY3QurTwDsHYrB0CRTQg" />
            </div>
            <div className="absolute bottom-2 right-2 size-5 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
          </div>
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl font-bold text-text-main leading-none">烟雨平生</h2>
              <div 
                onClick={() => navigate('/reputation')}
                className="flex items-center gap-1 bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 cursor-pointer"
              >
                <span className="material-symbols-outlined text-primary text-[14px] icon-filled">verified</span>
                <span className="text-[10px] font-bold text-primary">黄金等级(105)</span>
              </div>
            </div>
            <p className="text-text-sub text-sm font-medium flex items-center justify-center gap-1.5">
              <span className="size-1.5 rounded-full bg-green-500 inline-block"></span>
              刚刚 · 北京朝阳
            </p>
          </div>
        </section>

        <section className="px-6 flex flex-wrap justify-center gap-2.5">
          {['老烟枪', '喜欢薄荷', '深夜党'].map(tag => (
            <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-primary/30 text-text-main text-xs font-bold shadow-sm">
              {tag}
            </span>
          ))}
          <button className="size-8 rounded-full border border-dashed border-text-sub/40 flex items-center justify-center text-text-sub">
            <span className="material-symbols-outlined text-[18px]">add</span>
          </button>
        </section>

        <section className="px-5">
          <div className="flex gap-4">
            {['帮助 12', '被帮助 8', '团购 5'].map((stat, idx) => (
              <div key={idx} className="flex-1 bg-white p-4 rounded-xl shadow-soft border border-gray-50 flex flex-col items-center gap-1">
                <span className="text-text-sub text-[10px] font-bold uppercase tracking-widest">{stat.split(' ')[0]}</span>
                <span className="text-2xl font-black text-text-main tabular-nums">{stat.split(' ')[1]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="text-lg font-bold">我的内容</h3>
            <span className="text-xs text-text-sub font-bold flex items-center">全部 <span className="material-symbols-outlined text-[16px]">chevron_right</span></span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: '动态', icon: 'shutter_speed', color: 'bg-orange-100', text: 'text-orange-500' },
              { label: '帖子', icon: 'edit_note', color: 'bg-blue-100', text: 'text-blue-500' },
              { label: '收藏', icon: 'favorite', color: 'bg-pink-100', text: 'text-pink-500' },
              { label: '订单', icon: 'shopping_bag', color: 'bg-purple-100', text: 'text-purple-500' }
            ].map(item => (
              <div key={item.label} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className={`size-12 rounded-2xl ${item.color} ${item.text} flex items-center justify-center transition-transform group-active:scale-90 shadow-sm`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <span className="text-xs font-bold text-text-main">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 pb-12">
          <h3 className="text-lg font-bold mb-5 px-1">工具箱</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: '我的钱包', icon: 'account_balance_wallet', desc: '余额与账单' },
              { name: '邀请好友', icon: 'person_add', desc: '获得奖励' },
              { name: '联系客服', icon: 'support_agent', desc: '帮助中心' },
              { name: '系统设置', icon: 'settings', desc: '偏好选项' }
            ].map(tool => (
              <div key={tool.name} className="p-4 rounded-2xl bg-white shadow-soft border border-gray-50 flex items-center gap-3 cursor-pointer active:bg-gray-50 transition-colors">
                <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[20px] icon-filled">{tool.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-bold leading-tight">{tool.name}</p>
                  <p className="text-[10px] text-text-sub font-medium">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
