import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-white to-white" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="text-left">
            <img 
              src="https://cdn.poehali.dev/files/756a1bfc-d221-4430-a160-c6e522fbc424.png" 
              alt="Карго Фьюжен" 
              className="h-20 w-auto mb-8"
            />

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-primary">
              Надёжные грузоперевозки по России
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-600 leading-relaxed max-w-xl font-light">
              Профессиональные логистические решения для вашего бизнеса. 
              Гарантируем сохранность грузов и соблюдение сроков доставки.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-base px-10 py-7 shadow-md hover:shadow-lg transition-all">
                <Icon name="Calculator" className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-base px-10 py-7 border-2 border-primary/20 hover:border-primary hover:bg-primary/5 transition-all">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                +7 (495) 123-45-67
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {[
                { icon: 'Shield', label: 'Полное страхование' },
                { icon: 'Clock', label: 'Доставка точно в срок' },
                { icon: 'FileCheck', label: 'Все документы' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 p-12 shadow-xl">
              <img 
                src="https://cdn.poehali.dev/files/756a1bfc-d221-4430-a160-c6e522fbc424.png" 
                alt="Карго Фьюжен" 
                className="w-full"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 right-6 bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '15+', label: 'Лет опыта' },
                  { number: '500+', label: 'Единиц техники' },
                  { number: '50+', label: 'Городов РФ' }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              icon: 'Truck',
              title: 'Собственный автопарк',
              description: 'Современная техника всех типов для любых грузов'
            },
            {
              icon: 'MapPin',
              title: 'Широкая география',
              description: 'Доставка по всей России и странам СНГ'
            },
            {
              icon: 'Headphones',
              title: 'Поддержка 24/7',
              description: 'Всегда на связи для решения ваших задач'
            },
            {
              icon: 'BarChart3',
              title: 'Прозрачная отчётность',
              description: 'Полный контроль на каждом этапе доставки'
            }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-4 border border-primary/10">
                <Icon name={feature.icon} className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;