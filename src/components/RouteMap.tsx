import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const RouteMap = () => {
  const cities = [
    { name: 'Москва', x: 48, y: 35, isHub: true },
    { name: 'Санкт-Петербург', x: 46, y: 20, isHub: true },
    { name: 'Минск', x: 42, y: 32, isHub: true, country: 'BY' },
    { name: 'Казань', x: 58, y: 36, isHub: false },
    { name: 'Екатеринбург', x: 68, y: 34, isHub: true },
    { name: 'Новосибирск', x: 84, y: 37, isHub: true },
    { name: 'Астана', x: 76, y: 44, isHub: true, country: 'KZ' },
    { name: 'Алматы', x: 80, y: 52, isHub: true, country: 'KZ' },
    { name: 'Владивосток', x: 96, y: 48, isHub: false },
    { name: 'Иркутск', x: 90, y: 40, isHub: false },
    { name: 'Красноярск', x: 88, y: 36, isHub: false },
    { name: 'Омск', x: 76, y: 38, isHub: false },
    { name: 'Челябинск', x: 70, y: 40, isHub: false },
    { name: 'Самара', x: 60, y: 42, isHub: false },
    { name: 'Ростов-на-Дону', x: 52, y: 48, isHub: false },
    { name: 'Краснодар', x: 50, y: 50, isHub: false },
    { name: 'Волгоград', x: 56, y: 46, isHub: false },
    { name: 'Нижний Новгород', x: 54, y: 36, isHub: false }
  ];

  const routes = [
    { from: 'Москва', to: 'Санкт-Петербург' },
    { from: 'Москва', to: 'Минск' },
    { from: 'Москва', to: 'Казань' },
    { from: 'Москва', to: 'Нижний Новгород' },
    { from: 'Москва', to: 'Ростов-на-Дону' },
    { from: 'Казань', to: 'Екатеринбург' },
    { from: 'Екатеринбург', to: 'Челябинск' },
    { from: 'Екатеринбург', to: 'Омск' },
    { from: 'Челябинск', to: 'Астана' },
    { from: 'Омск', to: 'Новосибирск' },
    { from: 'Новосибирск', to: 'Красноярск' },
    { from: 'Красноярск', to: 'Иркутск' },
    { from: 'Иркутск', to: 'Владивосток' },
    { from: 'Астана', to: 'Алматы' },
    { from: 'Нижний Новгород', to: 'Самара' },
    { from: 'Самара', to: 'Волгоград' },
    { from: 'Ростов-на-Дону', to: 'Краснодар' }
  ];

  const stats = [
    { icon: 'MapPin', value: 'Россия, Казахстан, Беларусь', label: 'География доставки' },
    { icon: 'Route', value: 'Все регионы', label: 'Активных маршрутов' },
    { icon: 'Truck', value: 'Современный', label: 'Автопарк' },
    { icon: 'Clock', value: 'Круглосуточно', label: 'Работа без выходных' }
  ];

  return (
    <div className="container mx-auto px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/8 via-accent/8 to-secondary/8 rounded-3xl -z-10"></div>
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <Icon name="Map" className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">География</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Карта маршрутов и география доставки
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Обширная сеть логистических маршрутов по всей России и странам СНГ
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-2 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 aspect-[16/10]">
                <svg className="w-full h-full" viewBox="0 0 100 60">
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {routes.map((route, index) => {
                    const fromCity = cities.find(c => c.name === route.from);
                    const toCity = cities.find(c => c.name === route.to);
                    if (!fromCity || !toCity) return null;

                    return (
                      <line
                        key={index}
                        x1={fromCity.x}
                        y1={fromCity.y}
                        x2={toCity.x}
                        y2={toCity.y}
                        stroke="hsl(var(--secondary))"
                        strokeWidth="0.3"
                        opacity="0.4"
                        strokeDasharray="1,1"
                      />
                    );
                  })}

                  {cities.map((city, index) => (
                    <g key={index}>
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.isHub ? "2" : "1.2"}
                        fill={city.isHub ? "hsl(var(--secondary))" : "hsl(var(--primary))"}
                        filter={city.isHub ? "url(#glow)" : ""}
                      />
                      <circle
                        cx={city.x}
                        cy={city.y}
                        r={city.isHub ? "3" : "2"}
                        fill={city.isHub ? "hsl(var(--secondary))" : "hsl(var(--primary))"}
                        opacity="0.2"
                        className="animate-ping"
                        style={{ animationDuration: '2s' }}
                      />
                      <text
                        x={city.x}
                        y={city.y - 3}
                        fontSize="2"
                        fill="hsl(var(--foreground))"
                        textAnchor="middle"
                        fontWeight={city.isHub ? "700" : "500"}
                      >
                        {city.name}
                      </text>
                    </g>
                  ))}
                </svg>

                <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-secondary" />
                      <span>Логистические хабы</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>Города доставки</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm rounded-lg p-3 border">
                  <div className="text-sm font-semibold text-primary">
                    🇷🇺 Россия • 🇰🇿 Казахстан • 🇧🇾 Беларусь
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {stats.map((stat, index) => (
            <Card key={index} className="border-2 hover:border-secondary transition-all">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={stat.icon} className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 bg-gradient-to-br from-primary to-secondary text-white">
            <CardContent className="p-6">
              <Icon name="TrendingUp" className="h-8 w-8 mb-3 opacity-80" />
              <h3 className="text-lg font-semibold mb-2">Расширяем географию</h3>
              <p className="text-sm opacity-90">
                Каждый месяц мы открываем новые маршруты и увеличиваем покрытие городов
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RouteMap;