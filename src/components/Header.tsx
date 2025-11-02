import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/756a1bfc-d221-4430-a160-c6e522fbc424.png" 
              alt="Карго Фьюжен" 
              className="h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('home')}
              className={`font-medium ${activeSection === 'home' ? 'text-accent' : 'text-gray-700'}`}
            >
              Главная
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className={`font-medium ${activeSection === 'services' ? 'text-accent' : 'text-gray-700'}`}
            >
              Услуги
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className={`font-medium ${activeSection === 'about' ? 'text-accent' : 'text-gray-700'}`}
            >
              О компании
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('track')}
              className={`font-medium ${activeSection === 'track' ? 'text-accent' : 'text-gray-700'}`}
            >
              Отследить груз
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contacts')}
              className={`font-medium ${activeSection === 'contacts' ? 'text-accent' : 'text-gray-700'}`}
            >
              Контакты
            </Button>
          </nav>

          <Button className="hidden md:flex" onClick={() => scrollToSection('contacts')}>
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>

          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;