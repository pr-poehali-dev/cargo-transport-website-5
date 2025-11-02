import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт и надёжность',
      description: 'Более 15 лет успешной работы на рынке транспортных услуг'
    },
    {
      icon: 'Users',
      title: 'Профессиональная команда',
      description: 'Квалифицированные логисты и водители с большим опытом'
    },
    {
      icon: 'Settings',
      title: 'Современное оборудование',
      description: 'Собственный автопарк из 500+ единиц техники последних моделей'
    },
    {
      icon: 'Headphones',
      title: 'Поддержка 24/7',
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
            За годы работы мы выстроили обширную сеть логистических маршрутов, охватывающую более 50 городов России 
            и стран СНГ. Наша компания постоянно развивается, внедряя инновационные решения для оптимизации 
            транспортных процессов.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="bg-primary text-white px-8 py-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold">10,000+</div>
              <div className="text-sm opacity-90 uppercase tracking-wide">довольных клиентов</div>
            </div>
            <div className="bg-accent text-white px-8 py-4 rounded-lg shadow-md">
              <div className="text-3xl font-bold">99.8%</div>
              <div className="text-sm opacity-90 uppercase tracking-wide">доставка в срок</div>
            </div>
          </div>
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