
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Community: React.FC = () => {
  const navigate = useNavigate();

  const categories = [
    { name: '品牌圈', icon: 'inventory_2', color: 'bg-orange-50', text: 'text-orange-600', desc: '发现优质品牌故事' },
    { name: '器材堂', icon: 'whatshot', color: 'bg-blue-50', text: 'text-blue-600', desc: '鉴赏精美器具' },
    { name: '品吸录', icon: 'eco', color: 'bg-yellow-50', text: 'text-yellow-600', desc: '记录每一次品味' },
    { name: '文化志', icon: 'menu_book', color: 'bg-stone-50', text: 'text-stone-600', desc: '沉淀历史底蕴' },
    { name: '城市吧', icon: 'location_city', color: 'bg-purple-50', text: 'text-purple-600', desc: '同城聚会交流' },
    { name: '健康谈', icon: 'spa', color: 'bg-green-50', text: 'text-green-600', desc: '理性与平衡' }
  ];

  return (
    <div className="p-4 bg-background-light min-h-screen">
      <div className="sticky top-0 z-20 bg-background-light/95 backdrop-blur-md py-2">
        <div className="flex w-full items-center rounded-full h-12 bg-white shadow-sm border border-gray-100 px-4">
          <span className="material-symbols-outlined text-text-sub text-xl mr-2">search</span>
          <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm" placeholder="搜索感兴趣的内容..." />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between px-1 mb-4">
          <h3 className="text-xl font-bold tracking-tight">今日精华</h3>
          <button className="text-xs text-text-sub flex items-center font-bold">查看更多 <span className="material-symbols-outlined text-[16px]">chevron_right</span></button>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 snap-x">
          {[
            { title: '如何在品鉴中寻找独特的风味？', badge: '每日精选', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBA4AgcA1AWrBttOknpiqCccdspZ9FBd-FL15O0VZXrSzahE1HxSqdnLJ1Ta9qFrQVMgk2rJqMgi96PHsKmGMf82mKfdL_l2m3MZgZTRgXpidBvdb0a2S4bHV2Og3ZzfEU3hu6R-4TvMF82lN7QUMutGRbqbMWWNnyQD_SSNdBbcvEz49LSFZfbYDcc3p2djVfKBTIWrpxOsq3Q2j9XTWjQlJulgfiBU93nklCbRd0EqFgI1FTZrVZviNzsBbHUpEt9gmoBBl_25g' },
            { title: '复古打火机收藏入门指南', badge: '热门话题', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJJbYkU3ol6DBI1oPdFHPtijYlqnsXcIYNYlP9rCdzP-ZRKFHYueLZC2rD41H_vj5lIxYPqE7s0To1BRT32C8VSD7J3rKilYPdPVEBOL8fiy0IW0TArVB7nq-WxsoW_LL6kc24QhowVIaOYV7oHK05PspDimdIyEr7y3TJKs7Ep7Ypdk9GnDpD3VUKbSjz4iQB5qJuzwTU40_HqozC0rnizBY-gxyFWnNI-bakcy3qfUp1P-0sOZgdELAZ-YIqU7xh93Gw1F9zwg' }
          ].map((item, idx) => (
            <div key={idx} className="flex-none w-72 h-44 rounded-2xl overflow-hidden relative shadow-md snap-center cursor-pointer group">
              <img className="size-full object-cover transition-transform group-hover:scale-110 duration-700" src={item.img} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-block px-2 py-0.5 rounded-full bg-primary/90 text-[10px] font-bold mb-1.5">{item.badge}</span>
                <p className="font-bold text-base leading-snug line-clamp-1">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold tracking-tight px-1 mb-5">探索社区</h3>
        <div className="grid grid-cols-2 gap-4 pb-12">
          {categories.map((cat, idx) => (
            <div key={idx} className={`p-5 h-36 rounded-2xl ${cat.color} flex flex-col justify-between cursor-pointer active:scale-95 transition-all shadow-sm border border-black/5`}>
              <div className={`size-10 rounded-full ${cat.color} shadow-sm border border-white/50 flex items-center justify-center ${cat.text}`}>
                <span className="material-symbols-outlined icon-filled">{cat.icon}</span>
              </div>
              <div>
                <h4 className={`font-bold text-lg ${cat.text}`}>{cat.name}</h4>
                <p className={`text-[10px] font-bold opacity-70 ${cat.text}`}>{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
