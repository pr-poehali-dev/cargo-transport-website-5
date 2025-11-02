import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const OnlineCounter = () => {
  const [onlineCount, setOnlineCount] = useState(0);

  useEffect(() => {
    const getRandomCount = () => Math.floor(Math.random() * 8) + 3;
    setOnlineCount(getRandomCount());

    const interval = setInterval(() => {
      setOnlineCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newCount = prev + change;
        return Math.max(3, Math.min(10, newCount));
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 right-6 z-40 bg-white border-2 border-primary/20 rounded-xl px-4 py-3 shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Icon name="Users" className="h-5 w-5 text-primary" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full animate-pulse border-2 border-white"></span>
        </div>
        <div>
          <div className="text-xs text-muted-foreground font-medium">Сейчас на сайте</div>
          <div className="text-lg font-bold text-primary">{onlineCount}</div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCounter;