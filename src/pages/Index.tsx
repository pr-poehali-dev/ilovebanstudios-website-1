import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
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

        <section className="container mx-auto px-4 pb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Наши проекты
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="space-y-6">
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

        <footer className="text-center py-8 text-muted-foreground">
          <p>© 2024 ilovebanstudios - Создаём игры с любовью ❤️</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
