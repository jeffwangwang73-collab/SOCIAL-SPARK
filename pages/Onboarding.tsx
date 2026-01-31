
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const types = [
    { name: '卷烟', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkXuZdOj2_zdLpGsGl2CFovxF5-EIO6DeVlNpRGKndPYYmB59I9BXJ0T4-16vjAM3Ywr36ak9Nzl9AzDNUxWtakOqk-wbAC9mbf3Oa8cQ4fIB9PgxfBZfO5MPauuPDkx-9dE5HDV-XlrRXZn6jb1oalbRRhOGBBUGAo0OCLkVH9PewlDMlznZlSGRBJMA60NpSM5hQwUVL61xZYMiwjMmlzCqGm3snfW_63CuuCHT1DV8ZEQmDrZIqTKk7DlqPky86DoZSgsWa9Q' },
    { name: '雪茄', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNdduwdH9zwTMvu6ghi4Z1310MhB3DGIfGDoHId24kZFbqANJWeQd7G47cZQa-ZkiVbMLzTTwwmmW9QwC6fRdseGwDOrfQNUSyWZWH2AU9lQxhSsD6ZQdEDd9KI71akmmfV2YLnnB1MmUEld2BR--5wmCVV3bzekPR14ZLtT1rZkaCyN42trpXzFkLoROuBWp1uViRvhO4b32VZgafzAwes5vKhb18b2RyYW-YK6V9Kl8YMpZYOWUmY-dGP3nAiSeNgTt32oIAZA' },
    { name: '电子烟', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCh9Y1XMyqSUuqTSUOMAHEumhCPOWPcOvmKzm3wwlFiiM3DsLoEvlg35hCyjKTwO6QuvqidUtQltBTA6xeZGT1WkrwDAU8NII9yD3fmxtYE1uaBP583VYHdICMWqK2HtjiwQEajUEOJ4DoiTA0KGIPdPtJzb6OZ848xOhrIfdp9GLmGh7TFLNpTXHs1vL9jCO7n8MbjYsuSwOFuYMzpbwlpBTEcVYDqMQRxDGOgmGHJvBAWRODONGumRTgXGcZ7r-tgoltcrR51YA' },
    { name: '混合', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUnT90jkroDJsWJcJ4ZdBA5RgI34qcAw7T3RghQK2opB6hOTXKkl-x7VtuOjWBdSXlnMZ-xb29bCisREaYHCtAFmuJdZl7ihVO55Ws9rU610VmP2F79sQPmTb41KwhacTJCwwgePyBrPFgJR82B9iPIs06NZikYiFS5HOl7IEDZGQ448-9_2PUR19hfOFRsr2HroDAjUbXPddi4LVN2xE5U_y5-S1jdDhsSKKwywG7rN5mrC-t4pkHXYHh6WDdiPYApNYDbvQKw' }
  ];

  return (
    <div className="p-6 bg-background-light min-h-screen">
      <header className="flex items-center justify-between mb-8 pt-4">
        <button onClick={() => navigate(-1)} className="size-10 rounded-full flex items-center justify-center bg-white shadow-sm">
          <span className="material-symbols-outlined text-text-main">arrow_back_ios_new</span>
        </button>
        <h2 className="text-lg font-bold text-text-main tracking-tight">建立你的烟火档案</h2>
        <div className="size-10"></div>
      </header>
      
      <div className="flex flex-col items-center mb-10">
        <div className="relative group">
          <div className="size-36 rounded-full p-1.5 bg-white shadow-soft">
            <img 
              className="size-full rounded-full object-cover border border-gray-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXwZUkBersptfR2ecQGbpdeBk92WJxL6E6WodmciaPH6d9kLBqTutlres4yrDGmcRJMasxwpgsToSwkRjSn2p1vu-F8sCWH8e9yZSbL168WL2-b2GkN2zMwSBE86jmUWROuS2wtsAL4HBQEitH_sRd93oe26zKOeFqATQo8koARmIO9o9JOTqOma3QsM_35dpQP8pqteKK1R7bl5mPm2Xnwn-X36-BZGCu73lyxyJro6MTVqyDj2tXcrFE_0LV41Mo08Wk1gEI2w" 
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-white text-primary border border-gray-100 shadow-lg p-2.5 rounded-full flex items-center justify-center active:scale-90 transition-all">
            <span className="material-symbols-outlined text-[20px] icon-filled">autorenew</span>
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="space-y-3">
          <label className="text-text-main text-base font-bold px-1">昵称</label>
          <div className="relative">
            <input 
              className="w-full h-16 rounded-2xl border-none bg-white shadow-sm px-6 text-lg font-medium focus:ring-2 focus:ring-primary/20 transition-all" 
              placeholder="请输入你的昵称" 
              defaultValue="Weirdo" 
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/80">
              <span className="material-symbols-outlined text-[20px]">edit</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-baseline justify-between px-1">
            <h3 className="text-text-main text-xl font-bold">常吸烟型</h3>
            <span className="text-xs text-text-sub font-medium">单选</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {types.map((type, idx) => (
              <div 
                key={type.name} 
                className={`relative flex flex-col gap-3 p-3 rounded-2xl border-[2.5px] transition-all cursor-pointer bg-white ${idx === 0 ? 'border-primary shadow-warm' : 'border-transparent shadow-soft hover:border-primary/20'}`}
              >
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-50 relative">
                  <img src={type.img} className="size-full object-cover transition-transform hover:scale-110 duration-500" />
                </div>
                <div className="flex items-center justify-between px-1 pb-1">
                  <span className={`text-base font-bold ${idx === 0 ? 'text-text-main' : 'text-text-sub'}`}>{type.name}</span>
                  {idx === 0 && <span className="material-symbols-outlined text-primary icon-filled">check_circle</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 mb-10">
        <button 
          onClick={() => navigate('/home')}
          className="w-full h-14 bg-primary text-white font-bold rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
        >
          <span>继续</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
