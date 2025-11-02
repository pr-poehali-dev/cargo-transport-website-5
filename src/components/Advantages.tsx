import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Advantages = () => {
  const advantages = [
    {
      icon: 'Shield',
      title: 'Полное страхование',
      description: 'Каждый груз застрахован на полную стоимость',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Clock',
      title: 'Точно в срок',
      description: 'Гарантируем доставку в оговоренные сроки',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'DollarSign',
      title: 'Прозрачные цены',
      description: 'Фиксированная стоимость без скрытых платежей',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'MapPin',
      title: 'Отслеживание 24/7',
      description: 'Контроль местоположения груза в реальном времени',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: 'Truck',
      title: 'Современный парк',
      description: 'Новая техника для безопасной перевозки',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Поддержка 24/7',
      description: 'Всегда на связи для решения ваших вопросов',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <div className="container mx-auto px-4 relative py-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl -z-10"></div>
      
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-accent/10 px-5 py-2.5 rounded-md mb-4 border border-accent/20">
          <Icon name="Star" className="h-4 w-4 text-accent" />
          <span className="text-sm font-semibold text-accent tracking-wide uppercase">Преимущества</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Почему выбирают нас
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Мы предлагаем лучшие условия для вашего бизнеса
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {advantages.map((advantage, index) => (
          <Card 
            key={index} 
            className="border-2 border-gray-200 hover:border-accent/40 transition-all duration-300 hover:shadow-xl group bg-white overflow-hidden"
            style={{ 
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon name={advantage.icon} className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
