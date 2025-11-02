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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
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
              className={activeSection === 'home' ? 'text-secondary' : ''}
            >
              Главная
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('services')}
              className={activeSection === 'services' ? 'text-secondary' : ''}
            >
              Услуги
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'text-secondary' : ''}
            >
              О компании
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('track')}
              className={activeSection === 'track' ? 'text-secondary' : ''}
            >
              Отследить груз
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('contacts')}
              className={activeSection === 'contacts' ? 'text-secondary' : ''}
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
