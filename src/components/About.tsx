import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт и надёжность',
      description: 'Многолетняя успешная работа на рынке транспортных услуг'
    },
    {
      icon: 'Users',
      title: 'Профессиональная команда',
      description: 'Квалифицированные логисты и водители с большим опытом'
    },
    {
      icon: 'Settings',
      title: 'Современное оборудование',
      description: 'Собственный автопарк современной техники последних моделей'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка',
      description: 'Круглосуточная служба клиентской поддержки и диспетчеризации'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/5 px-5 py-2.5 rounded-md mb-6 border border-primary/10">
            <Icon name="Info" className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wide uppercase">О компании</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Карго Фьюжен — ваш надёжный партнёр в логистике
          </h2>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Мы специализируемся на предоставлении комплексных логистических решений для бизнеса любого масштаба. 
            Наша миссия — обеспечить безопасную и своевременную доставку грузов с применением современных технологий 
            и индивидуального подхода к каждому клиенту.
          </p>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            За годы работы мы выстроили обширную сеть логистических маршрутов по всей России 
            и странам СНГ. Наша компания постоянно развивается, внедряя инновационные решения для оптимизации 
            транспортных процессов.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 border-2 border-gray-200 hover:border-accent/40 transition-all hover:shadow-lg bg-white">
              <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                <Icon name={advantage.icon} className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-primary">{advantage.title}</h3>
              <p className="text-sm text-gray-600">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;