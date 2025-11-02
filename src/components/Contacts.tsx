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
      value: 'г. Иваново',
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

          <Card className="border-2">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Мы в социальных сетях</h3>
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://vk.com/kargoks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-all bg-white"
                >
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.38 14.14h-1.39c-.56 0-.73-.45-1.73-1.47-.87-.87-1.26-.98-1.48-.98-.3 0-.39.09-.39.5v1.34c0 .36-.12.58-1.06.58-1.55 0-3.27-.94-4.48-2.69-1.81-2.58-2.3-4.52-2.3-4.91 0-.22.09-.43.5-.43h1.39c.38 0 .52.17.67.58.75 2.2 2.01 4.13 2.52 4.13.2 0 .28-.09.28-.6v-2.33c-.06-1.11-.65-1.2-.65-1.6 0-.17.14-.35.37-.35h2.17c.31 0 .43.17.43.54v3.14c0 .31.14.43.23.43.2 0 .36-.12.73-.49 1.12-1.26 1.93-3.2 1.93-3.2.1-.22.28-.43.66-.43h1.39c.42 0 .51.21.42.54-.15.75-1.8 3.09-1.8 3.09-.17.28-.23.41 0 .72.17.23.73.72 1.11 1.15.68.77 1.21 1.41 1.35 1.86.14.44-.08.67-.5.67z"/>
                  </svg>
                  <span className="font-semibold text-sm">ВКонтакте</span>
                </a>
                <a 
                  href="https://t.me/kargofujen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-primary transition-all bg-white"
                >
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                  <span className="font-semibold text-sm">Telegram</span>
                </a>
                <a 
                  href="https://wa.me/79010370963" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-[#25D366] transition-all bg-white"
                >
                  <Icon name="MessageCircle" className="h-6 w-6 text-[#25D366]" />
                  <span className="font-semibold text-sm">WhatsApp</span>
                </a>
                <a 
                  href="tel:+79010370963"
                  className="flex items-center gap-3 p-4 rounded-lg border-2 border-gray-200 hover:border-accent transition-all bg-white"
                >
                  <Icon name="Phone" className="h-6 w-6 text-accent" />
                  <span className="font-semibold text-sm">Позвонить</span>
                </a>
              </div>
            </CardContent>
          </Card>

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