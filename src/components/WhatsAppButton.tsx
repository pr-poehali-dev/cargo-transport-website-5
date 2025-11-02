import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/79010370963"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-110 p-0"
      >
        <Icon name="MessageCircle" className="h-8 w-8" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Написать в WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;