import Icon from '@/components/ui/icon';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Алексей Иванов',
      company: 'ООО "СтройТехника"',
      text: 'Работаем с компанией уже 3 года. Всегда доставляют точно в срок, груз приходит в целости. Особенно ценим оперативную поддержку и честные цены.',
      rating: 5,
    },
    {
      name: 'Мария Петрова',
      company: 'ИП Петрова М.А.',
      text: 'Отличный сервис! Перевозили оборудование из Москвы в Новосибирск — всё приехало в целости, документы оформили быстро. Рекомендую!',
      rating: 5,
    },
    {
      name: 'Дмитрий Сидоров',
      company: 'ООО "ТоргСнаб"',
      text: 'Профессиональная команда, современная техника, прозрачные условия. Решают любые задачи по логистике. Очень довольны сотрудничеством!',
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Отзывы наших клиентов
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Более 1000 компаний доверяют нам свои грузы
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-accent/40 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'both' }}
          >
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Icon key={i} name="Star" className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              "{testimonial.text}"
            </p>

            <div className="border-t pt-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="User" className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
