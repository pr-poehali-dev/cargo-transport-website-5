import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://cdn.poehali.dev/files/756a1bfc-d221-4430-a160-c6e522fbc424.png" 
              alt="Карго Фьюжен" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm text-white/70">
              Надёжные грузоперевозки по России и СНГ с 2010 года
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-secondary transition-colors">Автоперевозки</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Контейнерные перевозки</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Складская логистика</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors">Экспресс-доставка</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#about" className="hover:text-secondary transition-colors">О нас</a></li>
              <li><a href="#map" className="hover:text-secondary transition-colors">География</a></li>
              <li><a href="#track" className="hover:text-secondary transition-colors">Отследить груз</a></li>
              <li><a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-4 w-4 text-secondary" />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-secondary" />
                info@cargofusion.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4 text-secondary" />
                Москва, ул. Логистическая, 1
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 Карго Фьюжен. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              <Icon name="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-secondary transition-colors">
              <Icon name="Linkedin" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
