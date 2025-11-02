import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Portfolio = () => {
  const projects = [
    {
      title: 'Доставка строительных материалов',
      route: 'Москва → Санкт-Петербург',
      weight: '20 тонн',
      duration: '2 дня',
      icon: 'Building2',
      description: 'Перевозка бетонных блоков и арматуры для крупного объекта'
    },
    {
      title: 'Транспортировка оборудования',
      route: 'Екатеринбург → Новосибирск',
      weight: '15 тонн',
      duration: '3 дня',
      icon: 'Cpu',
      description: 'Промышленное оборудование с особыми условиями хранения'
    },
    {
      title: 'Перевозка продуктов питания',
      route: 'Краснодар → Москва',
      weight: '12 тонн',
      duration: '1 день',
      icon: 'Package',
      description: 'Рефрижераторная доставка свежих овощей и фруктов'
    },
    {
      title: 'Доставка мебели и техники',
      route: 'Нижний Новгород → Казань',
      weight: '8 тонн',
      duration: '1 день',
      icon: 'Sofa',
      description: 'Бережная перевозка мебели для торгового центра'
    },
    {
      title: 'Транспортировка металлопроката',
      route: 'Челябинск → Уфа',
      weight: '25 тонн',
      duration: '2 дня',
      icon: 'Hammer',
      description: 'Перевозка стальных труб и листового металла'
    },
    {
      title: 'Экспресс-доставка документов',
      route: 'Москва → Владивосток',
      weight: '50 кг',
      duration: '3 дня',
      icon: 'FileText',
      description: 'Срочная доставка важных документов авиатранспортом'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-4">
          <Icon name="Briefcase" className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-accent">Наши проекты</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Примеры выполненных перевозок
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Более 10 000 успешно выполненных заказов по всей России
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Card key={index} className="border-2 hover:border-accent/40 transition-all hover:shadow-lg group">
            <CardContent className="p-6">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon name={project.icon} className="h-7 w-7 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              
              <div className="space-y-2 border-t pt-4 mt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="MapPin" className="h-4 w-4 text-accent" />
                  <span className="font-medium">{project.route}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Icon name="Weight" className="h-4 w-4 text-accent" />
                    <span>{project.weight}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" className="h-4 w-4 text-accent" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Выполненных заказов</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Доставка в срок</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Сохранность грузов</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
