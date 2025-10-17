import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen stars-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-background to-background"></div>
      
      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-float">
                ilovebanstudios
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Добро пожаловать в галактику игр! 🚀
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <Icon name="Rocket" size={32} className="text-primary" />
              <Icon name="Stars" size={32} className="text-secondary" />
              <Icon name="Sparkles" size={32} className="text-primary" />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            🔥 Новости
          </h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-20">
            <Card className="p-6 bg-gradient-to-br from-destructive/20 to-destructive/5 backdrop-blur-sm border-2 border-destructive/50 animate-pulse">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Zap" size={32} className="text-destructive" />
                  <h3 className="text-2xl font-bold text-destructive">АДМИН АБЬЮЗ СЕГОДНЯ!</h3>
                </div>
                
                <div className="bg-background/50 rounded-lg p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">До начала осталось:</p>
                  <div className="flex justify-center gap-4">
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-black text-destructive">{String(timeLeft.hours).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">часов</span>
                    </div>
                    <span className="text-4xl font-black text-destructive">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-black text-destructive">{String(timeLeft.minutes).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">минут</span>
                    </div>
                    <span className="text-4xl font-black text-destructive">:</span>
                    <div className="flex flex-col items-center">
                      <span className="text-4xl font-black text-destructive">{String(timeLeft.seconds).padStart(2, '0')}</span>
                      <span className="text-xs text-muted-foreground">секунд</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-center">
                  Не пропустите уникальное событие! 🎮
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-2 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Newspaper" size={32} className="text-primary" />
                  <h3 className="text-2xl font-bold">Новая игра в разработке</h3>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Calendar" size={20} className="text-secondary" />
                    <span className="font-bold text-lg">Релиз: 5 ноября</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Мы работаем над чем-то невероятным! Следите за обновлениями.
                  </p>
                </div>

                <p className="text-muted-foreground flex items-center gap-2">
                  <Icon name="Sparkles" size={18} />
                  Готовьтесь к новым приключениям!
                </p>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши проекты
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/files/a3d60111-7250-42f1-9c4f-dcffd472da30.png" 
                  alt="Steal a Brainrot"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="Gamepad2" size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Steal a Brainrot</h3>
                    <p className="text-muted-foreground">Эпическая игра на Roblox</p>
                  </div>
                </div>
                
                <p className="text-foreground/80 text-lg leading-relaxed">
                  Погрузитесь в захватывающий мир приключений! Исследуйте, сражайтесь и побеждайте в этой уникальной игре.
                </p>
                
                <Button 
                  size="lg"
                  className="w-full text-lg font-bold bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  onClick={() => window.open('https://www.roblox.com/users/8656342223/profile?friendshipSourceType=PlayerSearch#!#creations', '_blank')}
                >
                  <Icon name="Play" size={24} className="mr-2" />
                  Зайти в игру
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-20">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-secondary/20">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="Shield" size={32} className="text-secondary" />
                  <h2 className="text-3xl font-bold">Правила</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="text-2xl font-bold text-primary">1.</span>
                    <p className="text-lg">Не воровать</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl font-bold text-primary">2.</span>
                    <p className="text-lg">Не оскорблять</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-2xl font-bold text-primary">3.</span>
                    <p className="text-lg">Не материть</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border space-y-3">
                  <h3 className="text-xl font-bold text-destructive flex items-center gap-2">
                    <Icon name="AlertTriangle" size={24} />
                    Наказания
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p>• За оскорбление — кик на 1 год</p>
                    <p>• За воровство — кик на 5 дней</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card 
              className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-all cursor-pointer"
              onClick={() => window.open('https://support.google.com/a/answer/1047213?hl=ru', '_blank')}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Icon name="Headphones" size={32} className="text-primary" />
                  <h2 className="text-3xl font-bold">Поддержка</h2>
                </div>
                
                <p className="text-muted-foreground text-lg">
                  Нужна помощь? Свяжитесь с нашей службой поддержки:
                </p>

                <div className="bg-muted/30 rounded-lg p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon name="User" size={24} className="text-primary" />
                    <span className="text-xl font-bold">@SupportsGlobaladmin</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Официальная поддержка ilovebanstudios
                  </p>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <div className="flex items-start gap-2">
                    <Icon name="Clock" size={20} className="text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Время ответа</p>
                      <p className="text-sm text-muted-foreground">В течение 24 часов</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="MessageCircle" size={20} className="text-secondary mt-1" />
                    <div>
                      <p className="font-semibold">Что мы поможем решить</p>
                      <p className="text-sm text-muted-foreground">Технические проблемы, вопросы по игре, жалобы</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button className="w-full" variant="outline">
                    <Icon name="ExternalLink" size={18} className="mr-2" />
                    Открыть поддержку
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <footer className="text-center py-8 text-muted-foreground">
          <p>© 2024 ilovebanstudios - Создаём игры с любовью ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
