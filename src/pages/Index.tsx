import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Шато Марго 2015",
      category: "Красное вино",
      price: "24 500 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    },
    {
      id: 2,
      name: "Дом Периньон 2012",
      category: "Шампанское",
      price: "18 900 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    },
    {
      id: 3,
      name: "Макаллан 25 лет",
      category: "Виски",
      price: "89 000 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    },
    {
      id: 4,
      name: "Хеннесси XO",
      category: "Коньяк",
      price: "15 400 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    },
    {
      id: 5,
      name: "Бароло Ризерва 2016",
      category: "Красное вино",
      price: "12 800 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    },
    {
      id: 6,
      name: "Кристалл Луи Родерер",
      category: "Шампанское",
      price: "22 300 ₽",
      image: "https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/08bb2711-f0c1-490f-a6b3-07543a3d849e.jpg"
    }
  ];

  const categories = [
    { name: "Вино", icon: "Wine" },
    { name: "Шампанское", icon: "Sparkles" },
    { name: "Виски", icon: "Coffee" },
    { name: "Коньяк", icon: "CircleDot" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/a5dea8b2-d469-4901-88ce-9cfae77a19b8.jpg" 
              alt="Алые паруса" 
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-bold text-primary">Алые паруса</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingCart" size={20} />
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 21, 56, 0.7), rgba(139, 21, 56, 0.7)), url('https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/57de04ca-03fb-4485-826e-eeb639a29799.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white animate-fade-in px-4">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Алые паруса</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
            Премиальные напитки для ценителей вкуса
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
            Перейти в каталог
          </Button>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer animate-scale-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="flex flex-col items-center justify-center p-8 gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={category.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-center">{category.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша коллекция</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Тщательно отобранные напитки от мировых производителей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card 
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button size="sm" className="gap-2">
                      <Icon name="ShoppingCart" size={16} />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                "Алые паруса" — это не просто магазин премиальных напитков. Это место, где каждая бутылка рассказывает свою историю, а каждый вкус открывает новые горизонты.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы путешествуем по винодельням мира, чтобы привезти вам лучшее. От французских шато до шотландских вискокурен — каждый напиток в нашей коллекции прошёл строгий отбор.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Позиций</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/57de04ca-03fb-4485-826e-eeb639a29799.jpg"
                alt="Винный погреб"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Доставка</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center animate-fade-in">
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставим по Москве в течение 2-4 часов
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  100% оригинальная продукция с сертификатами
                </p>
              </CardContent>
            </Card>
            <Card className="text-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Gift" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Премиум упаковка</h3>
                <p className="text-muted-foreground">
                  Элегантная подарочная упаковка бесплатно
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/projects/1218500a-33fb-486e-8301-8f0d70664500/files/a5dea8b2-d469-4901-88ce-9cfae77a19b8.jpg" 
                  alt="Алые паруса" 
                  className="h-10 w-10 object-contain brightness-0 invert"
                />
                <h3 className="text-xl font-bold">Алые паруса</h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Премиальные напитки для ценителей вкуса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Вино</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Шампанское</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Виски</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Коньяк</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@alye-parusa.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© 2024 Алые паруса. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
