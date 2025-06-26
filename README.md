# Angular Hesap Makinesi

# Bu proje, modern bir arayüze sahip, fonksiyonel ve responsive bir hesap makinesi uygulamasıdır. Proje Angular 20 ile geliştirilmiş olup, arayüzde Tailwind CSS kullanılmaktadır.

Bu proje, modern ve kullanıcı dostu bir arayüze sahip, fonksiyonel ve responsive bir hesap makinesi uygulamasıdır. Proje Angular ile geliştirilmiş olup, arayüzde Tailwind CSS kullanılmaktadır.

> > > > > > > 6b23199 (README.md dosyası güncellendi)

## Özellikler

- Dört işlem (toplama, çıkarma, çarpma, bölme)
- Parantezli işlemler
- Sonuç geçmişi görüntüleme
- Klavye ve mouse ile kullanım
- Modern ve responsive (mobil uyumlu) arayüz
- Temiz ve okunabilir kod yapısı

## Ekran Görüntüsü

![Ekran Görüntüsü](docs/screenshot.png)

> > > > > > > 6b23199 (README.md dosyası güncellendi)

## Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone https://github.com/iberil/Angular-Hesap-Makinesi.git
   cd Angular-Hesap-Makinesi
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi başlatın:**
   ```bash
   ng serve
   ```
   Ardından tarayıcınızda `http://localhost:4200` adresine gidin.

## Tailwind CSS Entegrasyonu

- # Projede [Tailwind CSS](https://tailwindcss.com/) v3 kullanılmaktadır.
- Projede [Tailwind CSS](https://tailwindcss.com/) kullanılmaktadır.
  > > > > > > > 6b23199 (README.md dosyası güncellendi)
- Tüm arayüz stilleri doğrudan HTML dosyalarında Tailwind yardımcı sınıfları ile yazılmıştır.
- Ekstra bir SCSS/CSS dosyasına gerek yoktur.

## Klasör Yapısı

```
├── src/
│   ├── app/
│   │   ├── calculator/
│   │   │   ├── calculator.component.html
│   │   │   ├── calculator.component.ts
│   │   │   └── calculator.component.scss (boş)
│   │   ├── pipes/
│   │   └── services/
│   ├── assets/
│   │   └── icons/
│   │       └── history.svg
│   ├── styles.scss (Tailwind direktifleri)
│   └── ...
├── tailwind.config.js
└── ...
```

## Notlar

- Eğer arayüzde Tailwind CSS sınıfları çalışmıyorsa, projenizi durdurup tekrar `ng serve` ile başlatın.
- Farklı bir tema veya renk düzeni için HTML'deki Tailwind sınıflarını kolayca değiştirebilirsiniz.

## Katkı

Katkıda bulunmak isterseniz, lütfen bir fork oluşturun ve pull request gönderin.

## Lisans

MIT
