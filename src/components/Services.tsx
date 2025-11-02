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
      icon: 'Container',
      title: 'Контейнерные перевозки',
      description: 'Международные и межрегиональные контейнерные перевозки',
      features: ['Морской транспорт', 'Железнодорожные перевозки', 'Мультимодальные решения']
    },
    {
      icon: 'Warehouse',
      title: 'Складская логистика',
      description: 'Современные складские комплексы с системой хранения',
      features: ['Температурный режим', 'Сертифицированное хранение', 'Обработка грузов']
    },
    {
      icon: 'Zap',
      title: 'Экспресс-доставка',
      description: 'Срочная доставка грузов в кратчайшие сроки',
      features: ['Доставка за 24 часа', 'Курьерская служба', 'Документы и посылки']
    },
    {
      icon: 'Shield',
      title: 'Страхование грузов',
      description: 'Полная защита вашего груза на всех этапах перевозки',
      features: ['100% компенсация', 'Работа со страховыми', 'Юридическая поддержка']
    },
    {
      icon: 'Globe',
      title: 'Международная доставка',
      description: 'Перевозки в страны СНГ и дальнего зарубежья',
      features: ['Таможенное оформление', 'Сертификация товаров', 'Логистическое сопровождение']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <Icon name="Package" className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Наши услуги</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Полный спектр логистических решений
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Предлагаем комплексный подход к транспортировке и хранению грузов любой сложности
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="border-2 hover:border-secondary transition-all duration-300 hover:shadow-xl group"
          >
            <CardHeader>
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <Icon name={service.icon} className="h-7 w-7 text-secondary group-hover:text-white" />
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="CheckCircle2" className="h-4 w-4 text-secondary flex-shrink-0" />
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
