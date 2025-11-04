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
              className="h-16 w-auto mb-4"
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
                +7 (901) 037-09-63
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-4 w-4 text-secondary" />
                koroleva26.07@mail.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" className="h-4 w-4 text-secondary" />
                г. Иваново
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2025 Карго Фьюжен. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="https://vk.com/kargoks" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="ВКонтакте">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.38 14.14h-1.39c-.56 0-.73-.45-1.73-1.47-.87-.87-1.26-.98-1.48-.98-.3 0-.39.09-.39.5v1.34c0 .36-.12.58-1.06.58-1.55 0-3.27-.94-4.48-2.69-1.81-2.58-2.3-4.52-2.3-4.91 0-.22.09-.43.5-.43h1.39c.38 0 .52.17.67.58.75 2.2 2.01 4.13 2.52 4.13.2 0 .28-.09.28-.6v-2.33c-.06-1.11-.65-1.2-.65-1.6 0-.17.14-.35.37-.35h2.17c.31 0 .43.17.43.54v3.14c0 .31.14.43.23.43.2 0 .36-.12.73-.49 1.12-1.26 1.93-3.2 1.93-3.2.1-.22.28-.43.66-.43h1.39c.42 0 .51.21.42.54-.15.75-1.8 3.09-1.8 3.09-.17.28-.23.41 0 .72.17.23.73.72 1.11 1.15.68.77 1.21 1.41 1.35 1.86.14.44-.08.67-.5.67z"/>
              </svg>
            </a>
            <a href="https://t.me/kargofujen" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="Telegram">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
            </a>
            <a href="https://wa.me/79010370963" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-secondary transition-colors" title="WhatsApp">
              <Icon name="MessageCircle" className="h-5 w-5" />
            </a>
            <a href="tel:+79010370963" className="text-white/60 hover:text-secondary transition-colors" title="Позвонить">
              <Icon name="Phone" className="h-5 w-5" />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;