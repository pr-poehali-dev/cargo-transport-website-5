import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary opacity-95" />
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
            <Icon name="TrendingUp" className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">Лидер рынка грузоперевозок</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Перевозки, которым можно{' '}
            <span className="text-secondary">доверять</span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Быстрая и надёжная доставка грузов по всей России и странам СНГ. 
            Современный подход к логистике.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all">
              <Icon name="Package" className="mr-2 h-5 w-5" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-xl">
              <Icon name="MapPin" className="mr-2 h-5 w-5" />
              Карта маршрутов
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '15+', label: 'лет на рынке' },
              { number: '500+', label: 'машин в автопарке' },
              { number: '50+', label: 'городов доставки' },
              { number: '24/7', label: 'поддержка клиентов' }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-white/60" />
      </div>
    </div>
  );
};

export default Hero;
