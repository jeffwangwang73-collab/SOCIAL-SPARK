
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Login from './pages/Login';
import AgeGate from './pages/AgeGate';
import Onboarding from './pages/Onboarding';
import PostSelector from './pages/PostSelector';
import HelpRequest from './pages/HelpRequest';
import Matching from './pages/Matching';
import Chat from './pages/Chat';
import Reputation from './pages/Reputation';

const Layout: React.FC<{ children: React.ReactNode; hideNav?: boolean }> = ({ children, hideNav }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '首页', path: '/home', icon: 'home' },
    { label: '同城', path: '/community', icon: 'map' },
    { label: '消息', path: '/chat-list', icon: 'chat_bubble' },
    { label: '我的', path: '/profile', icon: 'person' },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col max-w-md mx-auto bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24">
        {children}
      </div>
      
      {!hideNav && (
        <nav className="fixed bottom-0 max-w-md w-full bg-white/80 backdrop-blur-xl border-t border-gray-100 z-50 px-6 py-2 pb-safe">
          <div className="flex justify-between items-center h-14">
            {navItems.slice(0, 2).map((item) => (
              <button 
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-0.5 transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-text-sub'}`}
              >
                <span className={`material-symbols-outlined ${location.pathname === item.path ? 'icon-filled' : ''}`}>{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            ))}
            
            <div className="relative -mt-10">
              <button 
                onClick={() => navigate('/post-selector')}
                className="size-16 rounded-full bg-primary text-white shadow-glow flex items-center justify-center transform active:scale-90 transition-all border-4 border-white"
              >
                <span className="material-symbols-outlined text-4xl">add</span>
              </button>
            </div>

            {navItems.slice(2).map((item) => (
              <button 
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-0.5 transition-colors ${location.pathname === item.path ? 'text-primary' : 'text-text-sub'}`}
              >
                <span className={`material-symbols-outlined ${location.pathname === item.path ? 'icon-filled' : ''}`}>{item.icon}</span>
                <span className="text-[10px] font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AgeGate onVerify={() => setIsVerified(true)} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
        
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/community" element={<Layout><Community /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />
        
        <Route path="/post-selector" element={<Layout hideNav><PostSelector /></Layout>} />
        <Route path="/help-request" element={<Layout hideNav><HelpRequest /></Layout>} />
        <Route path="/matching" element={<Layout hideNav><Matching /></Layout>} />
        <Route path="/chat" element={<Layout hideNav><Chat /></Layout>} />
        <Route path="/reputation" element={<Layout hideNav><Reputation /></Layout>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
