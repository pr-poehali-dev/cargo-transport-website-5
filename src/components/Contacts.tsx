import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Новая заявка с сайта:%0A%0AИмя: ${name}%0AТелефон: ${phone}%0AEmail: ${email}%0AСообщение: ${message}`;
    
    window.open(`https://wa.me/79010370963?text=${whatsappMessage}`, '_blank');
    
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  };
  const contactInfo = [
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (901) 037-09-63',
      description: 'Звоните с 9:00 до 21:00'
    },
    {
      icon: 'Mail',
      title: 'Email',
      value: 'koroleva26.07@mail.ru',
      description: 'Ответим в течение часа'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'г. Москва, ул. Логистическая, 1',
      description: 'Главный офис и склад'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      value: '24/7',
      description: 'Без выходных и праздников'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <Icon name="MessageCircle" className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Контакты</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Готовы ответить на все ваши вопросы и подобрать оптимальное решение для вашего бизнеса
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl">Оставьте заявку</CardTitle>
              <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input 
                    placeholder="Ваше имя" 
                    className="h-12" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Телефон" 
                    type="tel" 
                    className="h-12" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Input 
                    placeholder="Email" 
                    type="email" 
                    className="h-12" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <Textarea 
                    placeholder="Опишите ваш груз и задачу..." 
                    className="min-h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full h-12 text-lg">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          {contactInfo.map((contact, index) => (
            <Card key={index} className="border-2 hover:border-secondary transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={contact.icon} className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground mb-1">{contact.title}</div>
                    <div className="text-lg font-semibold mb-1">{contact.value}</div>
                    <div className="text-sm text-muted-foreground">{contact.description}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <Card className="border-2 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Нужна срочная консультация?</h3>
              <p className="mb-4 opacity-90">
                Позвоните нам прямо сейчас, и наши специалисты помогут решить вашу задачу
              </p>
              <Button variant="secondary" className="w-full" size="lg" asChild>
                <a href="tel:+79010370963">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Позвонить сейчас
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;