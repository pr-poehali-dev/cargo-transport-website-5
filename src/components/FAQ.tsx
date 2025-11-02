import { useState } from 'react';
import Icon from '@/components/ui/icon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Какие документы нужны для отправки груза?',
      answer: 'Для отправки груза необходимы: паспорт отправителя, товарная накладная, опись вложения. Для международных перевозок дополнительно требуются инвойс и таможенная декларация. Мы поможем оформить все документы.'
    },
    {
      question: 'Как рассчитывается стоимость доставки?',
      answer: 'Стоимость зависит от веса, объема груза, расстояния и срочности доставки. Для точного расчета свяжитесь с нами по телефону +7 (901) 037-09-63 или через WhatsApp — мы бесплатно рассчитаем стоимость за 5 минут.'
    },
    {
      question: 'Какие сроки доставки по России?',
      answer: 'Сроки доставки зависят от направления: Москва — Санкт-Петербург 1-2 дня, Москва — Екатеринбург 3-4 дня, Москва — Новосибирск 5-7 дней. Доставка в Казахстан и Беларусь — от 3 до 10 дней в зависимости от города.'
    },
    {
      question: 'Можно ли застраховать груз?',
      answer: 'Да, мы предлагаем полное страхование грузов. Стоимость страховки составляет от 0.5% до 2% от объявленной стоимости груза. В случае повреждения или утраты вы получите 100% компенсацию.'
    },
    {
      question: 'Какие способы оплаты вы принимаете?',
      answer: 'Мы принимаем: безналичный расчет для юридических лиц, наличные, банковские карты, электронные платежи. Для постоянных клиентов доступна оплата по факту доставки и отсрочка платежа.'
    },
    {
      question: 'Доставляете ли вы негабаритные грузы?',
      answer: 'Да, мы специализируемся на перевозке негабаритных и тяжеловесных грузов. В нашем парке есть специализированная техника: низкорамные тралы, длинномеры, краны-манипуляторы. Оформляем все разрешения на перевозку.'
    }
  ];

  return (
    <div className="container mx-auto px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-accent/10 rounded-3xl -z-10"></div>
      <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="inline-flex items-center gap-2 bg-primary/5 px-5 py-2.5 rounded-md mb-4 border border-primary/10">
          <Icon name="HelpCircle" className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-primary tracking-wide uppercase">Вопросы и ответы</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          Часто задаваемые вопросы
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ответы на популярные вопросы о наших услугах
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border-2 border-gray-200 hover:border-accent/40 transition-all animate-in fade-in slide-in-from-bottom-4 duration-700"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left gap-4"
            >
              <span className="text-lg font-semibold text-primary">
                {faq.question}
              </span>
              <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                <Icon name="ChevronDown" className="h-6 w-6 text-accent" />
              </div>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-8 pb-6 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-gradient-to-br from-primary to-accent text-white rounded-2xl p-8 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-700">
        <Icon name="MessageCircle" className="h-12 w-12 mx-auto mb-4 opacity-90" />
        <h3 className="text-2xl font-bold mb-3">Не нашли ответ на свой вопрос?</h3>
        <p className="text-lg mb-6 opacity-90">
          Свяжитесь с нами любым удобным способом — ответим на все вопросы!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+79010370963"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Icon name="Phone" className="h-5 w-5" />
            +7 (901) 037-09-63
          </a>
          <a
            href="https://wa.me/79010370963"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2"
          >
            <Icon name="MessageCircle" className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;