import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TrackCargo = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState<any>(null);

  const handleTrack = () => {
    setTrackingResult({
      number: trackingNumber,
      status: 'В пути',
      currentLocation: 'Москва, склад №3',
      destination: 'Санкт-Петербург',
      estimatedDelivery: '15.11.2025',
      timeline: [
        { date: '01.11.2025 10:30', event: 'Груз принят на склад', location: 'Новосибирск', completed: true },
        { date: '02.11.2025 14:20', event: 'Груз отправлен', location: 'Новосибирск', completed: true },
        { date: '03.11.2025 08:15', event: 'Прибытие на склад', location: 'Москва', completed: true },
        { date: '04.11.2025 12:00', event: 'В пути к получателю', location: 'Москва → Санкт-Петербург', completed: false },
        { date: '15.11.2025 ≈16:00', event: 'Ожидается доставка', location: 'Санкт-Петербург', completed: false }
      ]
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
          <Icon name="Search" className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Отслеживание</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Отследить груз онлайн
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Введите номер накладной для получения актуальной информации о местонахождении вашего груза
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>Поиск груза</CardTitle>
            <CardDescription>Номер накладной указан в документах при отправке</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-3">
              <Input
                placeholder="Введите номер накладной (например: CF-2025-123456)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="text-lg h-12"
              />
              <Button onClick={handleTrack} size="lg" className="px-8">
                <Icon name="Search" className="mr-2 h-5 w-5" />
                Найти
              </Button>
            </div>
          </CardContent>
        </Card>

        {trackingResult && (
          <Card className="mt-8 border-2 border-secondary/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Груз {trackingResult.number}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    <Icon name="MapPin" className="inline h-4 w-4 mr-1" />
                    {trackingResult.currentLocation} → {trackingResult.destination}
                  </CardDescription>
                </div>
                <div className="bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold">
                  {trackingResult.status}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Ожидаемая доставка:</span>
                  <span className="text-lg font-semibold text-secondary">
                    {trackingResult.estimatedDelivery}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {trackingResult.timeline.map((event: any, index: number) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        event.completed ? 'bg-secondary text-white' : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon name={event.completed ? "CheckCircle2" : "Circle"} className="h-5 w-5" />
                      </div>
                      {index < trackingResult.timeline.length - 1 && (
                        <div className={`w-0.5 h-16 ${event.completed ? 'bg-secondary' : 'bg-muted'}`} />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="font-semibold">{event.event}</div>
                      <div className="text-sm text-muted-foreground mt-1">{event.location}</div>
                      <div className="text-xs text-muted-foreground mt-1">{event.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default TrackCargo;
