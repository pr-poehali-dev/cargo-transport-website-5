import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 0.1 }} />
              <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
          
          <path
            d="M 100 400 Q 400 200, 800 350"
            fill="none"
            stroke="url(#arrow-gradient)"
            strokeWidth="60"
            opacity="0.3"
          />
          <path
            d="M 800 350 L 850 320 L 820 380 Z"
            fill="hsl(var(--secondary))"
            opacity="0.2"
          />
          
          <path
            d="M 200 600 Q 600 500, 1000 550"
            fill="none"
            stroke="url(#arrow-gradient)"
            strokeWidth="50"
            opacity="0.2"
          />
          <path
            d="M 1000 550 L 1040 530 L 1020 580 Z"
            fill="hsl(var(--secondary))"
            opacity="0.15"
          />
        </svg>
      </div>

      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-8 border border-secondary/20">
              <Icon name="TrendingUp" className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Лидер рынка грузоперевозок</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-primary">Перевозки,</span> которым можно{' '}
              <span className="text-secondary">доверять</span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-xl">
              Быстрая и надёжная доставка грузов по всей России и странам СНГ. 
              Современный подход к логистике.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-primary to-primary/90">
                <Icon name="Package" className="mr-2 h-5 w-5" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
                <Icon name="MapPin" className="mr-2 h-5 w-5" />
                Карта маршрутов
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-16">
              {[
                { number: '15+', label: 'лет на рынке' },
                { number: '500+', label: 'машин в автопарке' },
                { number: '50+', label: 'городов доставки' },
                { number: '24/7', label: 'поддержка клиентов' }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all hover:border-secondary/20">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/756a1bfc-d221-4430-a160-c6e522fbc424.png" 
                alt="Карго Фьюжен" 
                className="w-full max-w-2xl mx-auto drop-shadow-2xl"
              />
              
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            </div>

            <div className="absolute top-20 -left-20 bg-white rounded-2xl shadow-2xl p-6 border-2 border-secondary/20 animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Icon name="CheckCircle2" className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">99.8%</div>
                  <div className="text-sm text-muted-foreground">доставка в срок</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 -right-10 bg-white rounded-2xl shadow-2xl p-6 border-2 border-primary/20 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon name="Users" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">10,000+</div>
                  <div className="text-sm text-muted-foreground">довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-muted-foreground/40" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
