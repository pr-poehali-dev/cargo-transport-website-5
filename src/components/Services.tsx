import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Services = () => {
  const services = [
    {
      icon: 'Truck',
      title: 'Автомобильные перевозки',
      description: 'Быстрая доставка любых грузов по России с гарантией сохранности',
      features: ['Полная страховка', 'Отслеживание в реальном времени', 'Любые габариты']
    },
    {
      icon: 'Package',
      title: 'Сборные грузы',
      description: 'Экономичная доставка небольших партий товаров по всей России',
      features: ['Выгодные тарифы', 'Консолидация грузов', 'Регулярные рейсы']
    },
    {
      icon: 'ShoppingCart',
      title: 'Доставка на маркетплейсы',
      description: 'Поставки товаров на склады Wildberries, Ozon, Яндекс.Маркет',
      features: ['Приёмка по стандартам', 'Маркировка товаров', 'Быстрые сроки']
    },
    {
      icon: 'Shield',
      title: 'Страхование грузов',
      description: 'Полная защита вашего груза на всех этапах перевозки',
      features: ['100% компенсация', 'Работа со страховыми', 'Юридическая поддержка']
    },
    {
      icon: 'MapPin',
      title: 'Доставка в Казахстан',
      description: 'Надёжные перевозки грузов в Казахстан с таможенным оформлением',
      features: ['Таможенное оформление', 'Сертификация товаров', 'Логистическое сопровождение']
    },
    {
      icon: 'Globe',
      title: 'Доставка в Беларусь',
      description: 'Перевозки в Беларусь с полным пакетом документов',
      features: ['Быстрое оформление', 'Все документы', 'Контроль на границе']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/5 px-5 py-2.5 rounded-md mb-4 border border-primary/10">
          <Icon name="Package" className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">Наши услуги</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Полный спектр логистических решений
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Предлагаем комплексный подход к транспортировке грузов любой сложности
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="border-2 border-gray-200 hover:border-accent/40 transition-all duration-300 hover:shadow-lg group bg-white"
          >
            <CardHeader>
              <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-4 border border-primary/10">
                <Icon name={service.icon} className="h-7 w-7 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-primary">{service.title}</CardTitle>
              <CardDescription className="text-base text-gray-600">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon name="Check" className="h-4 w-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;