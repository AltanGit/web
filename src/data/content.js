const BASE = import.meta.env.BASE_URL;

export const content = {
  tr: {
    nav: {
      home: 'Anasayfa',
      about: 'Hakkımda',
      projects: 'Projeler',
      gallery: 'Galeri',
      blog: 'Blog',
      contact: 'İletişim'
    },
    hero: {
      badge: 'Antalya, Türkiye • Bilgisayar Programcılığı',
      titleStart: 'Yazılım, Elektronik ve',
      titleAccent: 'Fiziksel Üretim.',
      subtitle:
        'Ben Altan Duran. Teknolojiyi yalnızca ekranda çalışan kodlar olarak değil; sensörlerle dünyayı algılayan, tasarım ve mühendisliği birleştiren somut sistemler olarak kurguluyorum.',
      primaryCta: 'Projeleri İncele',
      secondaryCta: 'Beni Tanı',
      scrollHint: 'Keşfetmek için kaydır'
    },
    homeSections: {
      aboutTag: 'Kısa Özet',
      aboutTitle: 'Fikirden Çalışan Ürüne.',
      aboutDesc:
        '2007 doğumlu, Antalya’da yaşayan bir Bilgisayar Programcılığı öğrencisiyim. C#/.NET ve web teknolojilerinden Arduino/ESP32 tabanlı gömülü sistemlere, Fusion 360 3D tasarımından otonom araçlara kadar disiplinler arası projeler geliştiriyorum.',
      readMore: 'Özgeçmiş & Yetenekler',
      stats: [
        { label: 'Odak Alanı', value: '5+', detail: 'Yazılım, Gömülü, 3D, Robotik, UI' },
        { label: 'Konum', value: 'Antalya', detail: 'Akdeniz Üniversitesi' },
        { label: 'Yaklaşım', value: 'Uçtan Uca', detail: 'Tasarım → Kod → Donanım' }
      ],
      projectsTag: 'Seçili Çalışmalar',
      projectsTitle: 'Mühendislik & Dijital Projeler',
      allProjects: 'Tüm Projeler',
      galleryTag: 'Görsel Arşiv',
      galleryTitle: 'Çalışma Alanım ve Anlar',
      allGallery: 'Galeriye Git',
      ctaTitle: 'Bir fikri somut bir sisteme dönüştürelim.',
      ctaDesc: 'Yazılım, gömülü donanım, 3D prototipleme veya modern web arayüzleri hakkında konuşmak için ulaşabilirsin.',
      ctaButton: 'İletişime Geç'
    },
    about: {
      tag: 'Hakkımda',
      title: 'Merhaba, Ben Altan Duran.',
      lead: 'Teknolojiye meraklı, üretmeyi seven, öğrenmeye ve kendini geliştirmeye odaklanan bir bilgisayar programcılığı öğrencisiyim.',
      bioParagraphs: [
        '2007 yılında doğdum ve Antalya’da yaşıyorum. Teknoloji, yazılım, elektronik ve dijital tasarım gibi birbirini tamamlayan alanlara ilgi duyuyorum. Kendimi yalnızca tek bir alanla sınırlandırmak yerine farklı disiplinler arasındaki bağlantıları anlamayı ve öğrendiklerimi somut projelere dönüştürmeyi seviyorum.',
        'Bir konuyla ilgilenmeye başladığımda yalnızca nasıl çalıştığını öğrenmekle yetinmem; arkasındaki mantığı, çalışma prensiplerini ve geliştirilebilecek yönlerini de analiz ederim. Bir yazılımın fiziksel bir cihazı kontrol etmesi veya gerçek bir problemi otomatikleştirmesi benim için en heyecan verici nokta.',
        'Mantık, sorgulama ve çözüm odaklılık düşünce biçimimin temelini oluşturuyor. Felsefe ve psikolojiye duyduğum ilgi sayesinde farklı bakış açılarını değerlendirmeye, takım çalışmalarında ortak akıl üretmeye önem veriyorum.'
      ],
      educationTitle: 'Eğitim Hayatı',
      education: [
        {
          period: 'Devam Ediyor',
          school: 'Akdeniz Üniversitesi — Teknik Bilimler MYO',
          program: 'Bilgisayar Programcılığı (Ön Lisans)',
          desc: 'Yazılım geliştirme, programlama mantığı, algoritmik düşünme, veri tabanı ve modern web teknolojileri üzerine uygulamalı eğitim.'
        },
        {
          period: 'Mezuniyet',
          school: 'Bilişim Teknolojileri Lise Eğitimi',
          program: 'Yazılım & Temel Elektronik Altyapısı',
          desc: 'Yazılıma olan ilgimin donanım, otomasyon ve mühendislik disiplinleriyle birleştiği temel dönem.'
        }
      ],
      skillsTitle: 'İlgi Alanları & Yetenek Matrisi',
      skills: [
        {
          title: 'Yazılım Geliştirme',
          items: ['C# & .NET Ekosistemi', 'Python & Algoritmalar', 'HTML5, CSS3, JavaScript', 'React & Modern Web UI']
        },
        {
          title: 'Elektronik & Gömülü Sistemler',
          items: ['ESP32 & Arduino', 'Sensör Entegrasyonu', 'Devre Tasarımı & Otomasyon', 'Haberleşme Protokolleri']
        },
        {
          title: '3D Tasarım & Üretim',
          items: ['Fusion 360 (CAD)', '3D Baskı & Prototipleme', 'Mekanik Parça Modelleme', 'Tolerans & Montaj']
        },
        {
          title: 'Robotik & Otonom Sistemler',
          items: ['İnsansız Sualtı Aracı (ROV)', 'Otonom Kara Araçları', 'Sensör Veri İşleme', 'Sistem Entegrasyonu']
        },
        {
          title: 'Dijital Tasarım & İletişim',
          items: ['UI/UX ve Tipografi', 'Görsel Hiyerarşi', 'Responsive Arayüzler', 'Marka & Ürün Kurgusu']
        }
      ],
      visionTitle: 'Gelecek Hedeflerim',
      visionText:
        'Gelecekte yalnızca kod yazan bir geliştirici olmak yerine yazılım, elektronik ve mühendislik birikimini bir araya getiren kendi teknoloji ekibimi kurmayı; gerçek kullanıcıların hayatına dokunan sürdürülebilir ürünler geliştirmeyi hedefliyorum. Öğrenmeye, denemeye, geliştirmeye ve üretmeye devam.'
    },
    projectsPage: {
      tag: 'Portfolyo',
      title: 'Projeler & Üretim Süreci',
      subtitle: 'Yazılım, gömülü sistemler, robotik ve 3D üretim ekseninde geliştirdiğim çalışmalar.',
      allFilter: 'Tümü',
      viewDetail: 'Detayları Gör',
      backToProjects: 'Projelere Dön',
      techStack: 'Kullanılan Teknolojiler',
      highlights: 'Öne Çıkan Mühendislik Detayları',
      roleLabel: 'Rolüm',
      yearLabel: 'Dönem'
    },
    projects: [
      {
        slug: 'otonom-arac-ve-3d-sasi',
        title: 'Otonom Araç & 3D Şasi Prototipi',
        category: 'Robotik',
        year: '2025 - 2026',
        role: 'Sistem Tasarımı, 3D Modelleme & Yazılım',
        image: `${BASE}assets/otonom.jpg`,
        summary: 'Çevresini sensörlerle algılayan, Fusion 360 ile modellenip 3D yazıcıda üretilmiş modüler otonom araç platformu.',
        description:
          'Bir aracın çevresini algılaması, sensörlerden veri toplaması ve karar mekanizması üretmesi üzerine kurgulanan bu projede; mekanik gövde Fusion 360 üzerinde sıfırdan tasarlandı ve 3D baskı ile fiziksel prototipe dönüştürüldü. Elektronik kontrol katmanı ve yazılım algoritmaları tek bir modüler mimaride birleştirildi.',
        technologies: ['Fusion 360', '3D Baskı', 'ESP32', 'C++ / Python', 'Ultrasonik & Optik Sensörler'],
        highlights: [
          'Ağırlık merkezini dengeleyen modüler 3D baskı şasi tasarımı.',
          'Engel algılama ve gerçek zamanlı yön düzeltme algoritması.',
          'Hızlı parça değişimine olanak tanıyan geçmeli mekanik yuvalar.'
        ]
      },
      {
        slug: 'insansiz-sualti-araci-rov',
        title: 'İnsansız Sualtı Aracı (ROV) Çalışması',
        category: 'Robotik',
        year: '2025',
        role: 'Elektronik Entegrasyon & Takım Geliştirme',
        image: `${BASE}assets/sualti-real.jpg`,
        summary: 'Sualtı görevleri için çok disiplinli mühendislik yaklaşımıyla geliştirilen uzaktan kontrollü/otonom sualtı aracı.',
        description:
          'İnsansız sualtı aracı projesinde; sızdırmazlık, itki kontrolü, sualtı kamera aktarımı ve gömülü kontrol kartı entegrasyonu süreçlerinde aktif rol aldım. Farklı mühendislik disiplinlerinin tek bir fiziksel sistemde nasıl senkronize çalıştığını deneyimlediğim temel projelerden biridir.',
        technologies: ['Gömülü Sistemler', 'Motor Sürücüleri (ESC)', 'Sensör Füzyonu', 'Takım Mühendisliği'],
        highlights: [
          'Su geçirmez elektronik hazne ve kablo geçiş optimizasyonu.',
          'Çok eksenli hareket kabiliyeti için itki dağılımı testleri.',
          'Gerçek zamanlı telemetri ve kontrol arayüzü deneyimi.'
        ]
      },
      {
        slug: 'python-otomasyon-ve-algoritma',
        title: 'Python & C# Algoritma / Otomasyon Araçları',
        category: 'Yazılım',
        year: '2025 - 2026',
        role: 'Full-Stack & Algoritma Geliştirici',
        image: `${BASE}assets/python.png`,
        summary: 'Günlük teknik problemleri çözen, veri işleyen ve donanımla haberleşebilen yazılım modülleri.',
        description:
          'Bilgisayar Programcılığı eğitimim ve kişisel merakım doğrultusunda geliştirdiğim; algoritmik optimizasyon, seri port üzerinden mikrodenetleyici haberleşmesi ve masaüstü/web otomasyon araçlarını içeren yazılım koleksiyonu.',
        technologies: ['Python', 'C# / .NET', 'JavaScript', 'REST / Serial API'],
        highlights: [
          'Temiz ve modüler nesne yönelimli (OOP) kod mimarisi.',
          'Donanım sensör verilerini canlı grafikleyen seri port köprüsü.',
          'Yüksek performanslı algoritmik problem çözümleri.'
        ]
      },
      {
        slug: 'esp32-akilli-sensor-agi',
        title: 'ESP32 Kablosuz Otomasyon & Sensör Ağı',
        category: 'Elektronik',
        year: '2026',
        role: 'Gömülü Yazılım & Devre Tasarımı',
        image: `${BASE}assets/esp32.jpeg`,
        summary: 'ESP32 mikrodenetleyicileri üzerinden ortam verilerini toplayıp belirli koşullara göre tepki veren akıllı otomasyon sistemi.',
        description:
          'Arduino ve ESP32 platformlarını kullanarak günlük hayattaki mekanik veya çevresel süreçleri otomatikleştirmek amacıyla kurgulanan haberleşme sistemi. Sensör verileri yerel ağ üzerinden düşük gecikmeyle izlenebilir ve eşik değerlere göre aktüatörler tetiklenebilir.',
        technologies: ['ESP32', 'Wi-Fi / MQTT', 'Arduino IDE', 'Web Dashboard'],
        highlights: [
          'Düşük güç tüketimli kablosuz sensör düğümü yapısı.',
          'Tarayıcı üzerinden anlık durum izleme ve manuel müdahale paneli.',
          'Modüler pin haritası sayesinde kolay sensör ekleme.'
        ]
      }
    ],
    galleryPage: {
      tag: 'Galeri',
      title: 'Beni Yansıtan Kareler',
      subtitle: 'Üretim sürecinden, teknik çalışmalardan ve günlük yaşamımdan seçilmiş fotoğraflar.',
      close: 'Kapat'
    },
    galleryItems: [
      {
        id: 1,
        src: `${BASE}assets/atolye.jpeg`,
        title: 'Atölye ve Üretim Masası',
        caption: 'Yazılım, elektronik devreler ve tasarım fikirlerinin somutlaştığı çalışma ortamım.',
        span: 'md:col-span-2 md:row-span-2'
      },
      {
        id: 2,
        src: `${BASE}assets/otonom.jpg`,
        title: 'Donanım ve Prototipleme',
        caption: 'Sensörler, mikrodenetleyiciler ve test düzenekleriyle geçen geliştirme süreçleri.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 3,
        src: `${BASE}assets/3d.jpeg`,
        title: '3D Baskı & Mekanik Detaylar',
        caption: 'Dijital CAD çizimlerinin katman katman fiziksel parçaya dönüşme anı.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 4,
        src: `${BASE}assets/sualti-real.jpg`,
        title: 'Saha Testi ve Mühendislik',
        caption: 'Teorik bilginin gerçek dünya koşullarında sınandığı anlar.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 5,
        src: `${BASE}assets/odak.jpeg`,
        title: 'Antalya & İlham',
        caption: 'Odaklanmak, düşünmek ve yeni projeler planlamak için soluklandığım anlar.',
        span: 'md:col-span-1 md:row-span-1'
      }
    ],
    blogPage: {
      tag: 'Blog & Notlar',
      title: 'Teknik Makaleler',
      subtitle: 'Gömülü sistemler, 3D tasarım ve modern web mühendisliği üzerine deneyimlerim ve rehberler.',
      allCategories: 'Tüm Kategoriler',
      readArticle: 'Makaleyi Oku',
      backToBlog: 'Bloga Dön',
      categoryLabel: 'Kategori',
      tagsLabel: 'Etiketler',
      readTimeSuffix: 'dk okuma'
    },
    blogs: [
      {
        slug: 'esp32-sensor-fuzyonu-otonom-sistemler',
        title: 'ESP32 ve Sensör Füzyonu ile Otonom Sistemlere Giriş',
        date: '14 Kasım 2026',
        readTime: '5',
        categories: ['Elektronik', 'Robotik'],
        tags: ['ESP32', 'Arduino', 'gömülü sistemler', 'otonom', 'sensör'],
        excerpt:
          'Bir mikrodenetleyicinin yalnızca tek bir sensöre güvenmek yerine birden fazla veriyi birleştirerek nasıl daha kararlı kararlar verebileceğini inceliyoruz.',
        content: [
          'Otonom sistemlerde en sık karşılaşılan problem, tek bir sensörden gelen gürültülü veriye dayanarak karar almaktır. Örneğin yalnızca ultrasonik sensör kullanan bir araç, açılı yüzeylerde yankı kaybı yaşayabilir.',
          'ESP32 gibi çift çekirdekli ve yüksek işlem kapasiteli bir mikrodenetleyici kullandığımızda; bir çekirdekte sensör verilerini (mesafe, IMU, enkoder) yüksek frekansta okuyup filtreleyebilir, diğer çekirdekte ise karar ve motor kontrol algoritmalarını çalıştırabiliriz.',
          'Basit bir hareketli ortalama (moving average) veya tamamlayıcı filtre (complementary filter) uygulamak bile aracın titremesini ve hatalı yönelimlerini ciddi oranda azaltır. Donanım ve yazılımı birlikte tasarlamanın gerçek gücü tam olarak burada ortaya çıkar.'
        ]
      },
      {
        slug: 'fusion-360-3d-baski-mekanik-toleranslar',
        title: 'Fusion 360’tan 3D Baskıya: Mekanik Parça Tasarımında Toleranslar',
        date: '06 Kasım 2026',
        readTime: '4',
        categories: ['3D Tasarım', 'Üretim'],
        tags: ['Fusion 360', 'CAD', '3D baskı', 'prototipleme', 'tolerans'],
        excerpt:
          'CAD ortamında milimetrik olarak kusursuz görünen parçalar neden 3D yazıcıdan çıktığında birbirine geçmez? Pratik tolerans kuralları.',
        content: [
          'Dijital ortamda 10 mm çapında bir deliğe 10 mm çapında bir mil çizdiğinizde ekranda kusursuz oturur. Ancak FDM 3D yazıcılarda eriyen filamentin genleşmesi ve nozul çapı nedeniyle fiziksel parçada birkaç ondalık milimetrelik daralma oluşur.',
          'Fusion 360 üzerinde parametrik tasarım yaparken "clearance" (boşluk) parametresi tanımlamak hayat kurtarır. Sıkı geçme (press-fit) için 0.15 mm, rahat hareket eden geçmeli parçalar için 0.30 mm – 0.40 mm boşluk bırakmak çoğu baskıda ilk seferde doğru sonuç verir.',
          'Ayrıca baskı yönünü (layer orientation) parçaya binecek mekanik yüke dik değil, paralel olacak şekilde planlamak parçanın kırılma direncini katbekat artırır.'
        ]
      },
      {
        slug: 'modern-web-arayuzlerinde-3d-ve-performans',
        title: 'Modern Web Arayüzlerinde Performanslı 3D ve Tipografi Dengesi',
        date: '28 Ekim 2026',
        readTime: '6',
        categories: ['Yazılım', 'Tasarım'],
        tags: ['React', 'Three.js', 'UI/UX', 'WebGL', 'performans'],
        excerpt:
          'Web sitelerine 3D sahneler eklerken mobil cihazları yormadan 60 FPS akıcılığı korumanın ve okunabilirliği kaybetmemenin yolları.',
        content: [
          'Üç boyutlu web deneyimleri (WebGL / Three.js) doğru kurgulandığında ziyaretçide güçlü bir marka algısı yaratır. Ancak aşırı poligon sayısı, ağır gölgelendirmeler ve gereksiz ışık kaynakları özellikle mobil cihazlarda ısınmaya ve takılmalara yol açar.',
          'İyi bir mühendislik yaklaşımı, cihazın piksel yoğunluğunu (DPR) mobilde 1.5 ile sınırlamak, 3D kanvası kullanıcı etkileşimini engellemeyecek şekilde konumlandırmak ve geometrileri prosedürel olarak hafif tutmaktır.',
          'Tasarım tarafında ise 3D obje hiçbir zaman tipografinin önüne geçmemelidir. Yüksek kontrastlı metinler, dengeli boşluk kullanımı (whitespace) ve ince cam efektleriyle 3D sahne içeriği destekleyen sofistike bir arka plana dönüşür.'
        ]
      }
    ],
    contact: {
      tag: 'İletişim',
      title: 'Bağlantı Kuralım',
      subtitle: 'Proje iş birlikleri, teknik sorular veya tanışmak için bana ulaşabilirsin.',
      addressLabel: 'Adres',
      addressValue: 'Akdeniz Üniversitesi, Dumlupınar Bulvarı, 07058 Konyaaltı / Antalya, Türkiye',
      phoneLabel: 'Telefon',
      phoneValue: '+90 (542) 648 71 13',
      emailLabel: 'E-Posta',
      emailValue: '07altanduran07@gmail.com',
      formTitle: 'Mesaj Gönder',
      namePlaceholder: 'Adınız Soyadınız',
      emailPlaceholder: 'E-posta Adresiniz',
      subjectPlaceholder: 'Konu',
      messagePlaceholder: 'Mesajınızı buraya yazın...',
      sendButton: 'Mesajı Gönder',
      successMessage: 'Mesajınız başarıyla alındı! En kısa sürede dönüş yapacağım.',
      mapTitle: 'Konum (Google Haritalar)'
    },
    footer: {
      tagline: 'Öğrenmeye, denemeye, geliştirmeye ve üretmeye devam.',
      rights: 'Tüm hakları saklıdır.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      gallery: 'Gallery',
      blog: 'Blog',
      contact: 'Contact'
    },
    hero: {
      badge: 'Antalya, Turkey • Computer Programming',
      titleStart: 'Software, Electronics &',
      titleAccent: 'Physical Creation.',
      subtitle:
        'I am Altan Duran. I treat technology not just as code on a screen, but as tangible systems that sense the world, combining engineering, design, and hardware.',
      primaryCta: 'Explore Projects',
      secondaryCta: 'About Me',
      scrollHint: 'Scroll to explore'
    },
    homeSections: {
      aboutTag: 'Overview',
      aboutTitle: 'From Idea to Working Product.',
      aboutDesc:
        'Born in 2007 and based in Antalya, I am a Computer Programming student building interdisciplinary projects spanning C#/.NET, modern web interfaces, Arduino/ESP32 embedded systems, Fusion 360 3D CAD, and autonomous robotics.',
      readMore: 'CV & Capabilities',
      stats: [
        { label: 'Disciplines', value: '5+', detail: 'Software, Embedded, 3D, Robotics, UI' },
        { label: 'Location', value: 'Antalya', detail: 'Akdeniz University' },
        { label: 'Mindset', value: 'End-to-End', detail: 'Design → Code → Hardware' }
      ],
      projectsTag: 'Selected Work',
      projectsTitle: 'Engineering & Digital Projects',
      allProjects: 'All Projects',
      galleryTag: 'Visual Archive',
      galleryTitle: 'Workspace & Moments',
      allGallery: 'Open Gallery',
      ctaTitle: 'Let’s turn an idea into a working system.',
      ctaDesc: 'Reach out to discuss software engineering, embedded hardware, 3D prototyping, or modern web experiences.',
      ctaButton: 'Get in Touch'
    },
    about: {
      tag: 'About Me',
      title: 'Hello, I’m Altan Duran.',
      lead: 'A Computer Programming student passionate about technology, hands-on creation, and continuous self-improvement.',
      bioParagraphs: [
        'I was born in 2007 and live in Antalya, Turkey. My interests span interconnected fields including software development, electronics, 3D fabrication, and digital design. Instead of limiting myself to a single lane, I enjoy discovering how disciplines intersect and turning concepts into working prototypes.',
        'Whenever I dive into a subject, I go beyond surface-level usage to understand the underlying principles and architecture. Seeing software control physical hardware or automate a real-world problem is what excites me most.',
        'Logic, curiosity, and structured problem-solving shape my mindset. My interest in philosophy and psychology also helps me evaluate diverse perspectives and collaborate effectively within teams.'
      ],
      educationTitle: 'Education',
      education: [
        {
          period: 'Present',
          school: 'Akdeniz University — Vocational School of Technical Sciences',
          program: 'Computer Programming (Associate Degree)',
          desc: 'Hands-on curriculum focused on software engineering, algorithmic thinking, database architecture, and modern web technologies.'
        },
        {
          period: 'Graduated',
          school: 'Information Technology High School',
          program: 'Software & Core Electronics Foundation',
          desc: 'The foundational period where my passion for coding expanded into hardware, automation, and engineering.'
        }
      ],
      skillsTitle: 'Interests & Capabilities',
      skills: [
        {
          title: 'Software Development',
          items: ['C# & .NET Ecosystem', 'Python & Algorithms', 'HTML5, CSS3, JavaScript', 'React & Modern Web UI']
        },
        {
          title: 'Electronics & Embedded',
          items: ['ESP32 & Arduino', 'Sensor Integration', 'Circuit Design & Automation', 'Communication Protocols']
        },
        {
          title: '3D Design & Fabrication',
          items: ['Fusion 360 (CAD)', '3D Printing & Prototyping', 'Mechanical Modeling', 'Tolerance & Assembly']
        },
        {
          title: 'Robotics & Autonomy',
          items: ['Unmanned Underwater Vehicle (ROV)', 'Autonomous Ground Vehicles', 'Sensor Data Processing', 'System Integration']
        },
        {
          title: 'Digital Design & UX',
          items: ['UI/UX & Typography', 'Visual Hierarchy', 'Responsive Interfaces', 'Product Architecture']
        }
      ],
      visionTitle: 'Future Vision',
      visionText:
        'My long-term goal is to bridge software, electronics, and entrepreneurship—building my own technology team and shipping sustainable products that deliver real value to people. Always learning, testing, refining, and building.'
    },
    projectsPage: {
      tag: 'Portfolio',
      title: 'Projects & Engineering Process',
      subtitle: 'Selected works across software, embedded electronics, robotics, and 3D manufacturing.',
      allFilter: 'All',
      viewDetail: 'View Details',
      backToProjects: 'Back to Projects',
      techStack: 'Tech Stack',
      highlights: 'Key Engineering Highlights',
      roleLabel: 'Role',
      yearLabel: 'Timeline'
    },
    projects: [
      {
        slug: 'otonom-arac-ve-3d-sasi',
        title: 'Autonomous Vehicle & 3D Chassis Prototype',
        category: 'Robotics',
        year: '2025 - 2026',
        role: 'System Design, 3D CAD & Firmware',
        image: `${BASE}assets/otonom.jpg`,
        summary: 'A modular autonomous vehicle platform designed in Fusion 360, 3D printed, and equipped with real-time sensor navigation.',
        description:
          'Built to explore environmental sensing and autonomous decision-making, this vehicle features a custom chassis modeled from scratch in Fusion 360 and manufactured via 3D printing. Control electronics and sensor algorithms operate inside a clean modular architecture.',
        technologies: ['Fusion 360', '3D Printing', 'ESP32', 'C++ / Python', 'Ultrasonic & Optical Sensors'],
        highlights: [
          'Balanced center-of-gravity modular 3D-printed chassis.',
          'Obstacle detection and real-time trajectory correction logic.',
          'Snap-fit mechanical mounts for rapid component swaps.'
        ]
      },
      {
        slug: 'insansiz-sualti-araci-rov',
        title: 'Unmanned Underwater Vehicle (ROV)',
        category: 'Robotics',
        year: '2025',
        role: 'Electronics Integration & Team Engineering',
        image: `${BASE}assets/sualti-real.jpg`,
        summary: 'A multidisciplinary underwater vehicle project integrating waterproofing, thruster control, and live telemetry.',
        description:
          'Participated in electronics integration, propulsion control, and waterproofing workflows for an unmanned underwater vehicle. This project solidified my hands-on experience in coordinating mechanical, electronic, and software subsystems within a team.',
        technologies: ['Embedded Systems', 'ESC Thruster Control', 'Sensor Fusion', 'Team Engineering'],
        highlights: [
          'Waterproof electronics enclosure and cable penetrator optimization.',
          'Multi-axis thrust distribution and stability testing.',
          'Real-time telemetry and operator control loop.'
        ]
      },
      {
        slug: 'python-otomasyon-ve-algoritma',
        title: 'Python & C# Automation / Algorithm Suite',
        category: 'Software',
        year: '2025 - 2026',
        role: 'Full-Stack & Algorithm Developer',
        image: `${BASE}assets/python.png`,
        summary: 'Modular software utilities solving daily engineering problems, data processing, and serial hardware communication.',
        description:
          'A collection of software utilities built during my Computer Programming studies and independent research—covering algorithmic optimization, microcontroller serial communication bridges, and desktop/web workflow automation.',
        technologies: ['Python', 'C# / .NET', 'JavaScript', 'REST / Serial API'],
        highlights: [
          'Clean, maintainable object-oriented architecture.',
          'Live serial port telemetry bridge for hardware sensors.',
          'Performance-tuned algorithmic solutions.'
        ]
      },
      {
        slug: 'esp32-akilli-sensor-agi',
        title: 'ESP32 Wireless Automation & Sensor Network',
        category: 'Electronics',
        year: '2026',
        role: 'Firmware & Circuit Design',
        image: `${BASE}assets/esp32.jpeg`,
        summary: 'An ESP32-powered telemetry and automation node that monitors environmental conditions and triggers smart responses.',
        description:
          'Designed around Arduino and ESP32 microcontrollers to automate real-world processes. Sensor readings stream over local wireless networks with low latency, enabling automated actuator control based on configurable thresholds.',
        technologies: ['ESP32', 'Wi-Fi / MQTT', 'Arduino IDE', 'Web Dashboard'],
        highlights: [
          'Low-power wireless sensor node architecture.',
          'Browser-based real-time monitoring and manual override dashboard.',
          'Modular pin layout for rapid sensor expansion.'
        ]
      }
    ],
    galleryPage: {
      tag: 'Gallery',
      title: 'Moments That Reflect Me',
      subtitle: 'Selected snapshots from my workspace, prototypes, and everyday life.',
      close: 'Close'
    },
    galleryItems: [
      {
        id: 1,
        src: `${BASE}assets/atolye.jpeg`,
        title: 'Workshop & Creation Desk',
        caption: 'Where software, electronics, and design concepts turn into reality.',
        span: 'md:col-span-2 md:row-span-2'
      },
      {
        id: 2,
        src: `${BASE}assets/otonom.jpg`,
        title: 'Hardware & Prototyping',
        caption: 'Iterative testing with microcontrollers, sensors, and circuits.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 3,
        src: `${BASE}assets/3d.jpeg`,
        title: '3D Printing & Mechanical Craft',
        caption: 'Watching digital CAD models materialize layer by layer.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 4,
        src: `${BASE}assets/sualti-real.jpg`,
        title: 'Field Testing & Engineering',
        caption: 'Validating theory under real-world conditions.',
        span: 'md:col-span-1 md:row-span-1'
      },
      {
        id: 5,
        src: `${BASE}assets/odak.jpeg`,
        title: 'Antalya & Perspective',
        caption: 'Stepping back to recharge, think clearly, and plan the next build.',
        span: 'md:col-span-1 md:row-span-1'
      }
    ],
    blogPage: {
      tag: 'Blog & Notes',
      title: 'Technical Articles',
      subtitle: 'Notes and guides on embedded systems, 3D fabrication, and modern web engineering.',
      allCategories: 'All Categories',
      readArticle: 'Read Article',
      backToBlog: 'Back to Blog',
      categoryLabel: 'Category',
      tagsLabel: 'Tags',
      readTimeSuffix: 'min read'
    },
    blogs: [
      {
        slug: 'esp32-sensor-fuzyonu-otonom-sistemler',
        title: 'Introduction to Autonomous Systems with ESP32 & Sensor Fusion',
        date: 'November 14, 2026',
        readTime: '5',
        categories: ['Electronics', 'Robotics'],
        tags: ['ESP32', 'Arduino', 'embedded systems', 'autonomy', 'sensors'],
        excerpt:
          'How combining multiple sensor streams on a microcontroller yields far more reliable autonomous decisions than relying on a single input.',
        content: [
          'One of the most common pitfalls in autonomous builds is trusting a single noisy sensor. An ultrasonic sensor alone, for instance, can suffer echo loss on angled surfaces.',
          'With a dual-core microcontroller like the ESP32, one core can sample and filter high-frequency sensor data (distance, IMU, encoders) while the second core handles decision-making and motor control loops.',
          'Even lightweight techniques such as moving averages or complementary filters drastically reduce jitter and erratic steering. This synergy is where hardware-aware software truly shines.'
        ]
      },
      {
        slug: 'fusion-360-3d-baski-mekanik-toleranslar',
        title: 'From Fusion 360 to 3D Printing: Designing Mechanical Tolerances',
        date: 'November 06, 2026',
        readTime: '4',
        categories: ['3D Design', 'Manufacturing'],
        tags: ['Fusion 360', 'CAD', '3D printing', 'prototyping', 'tolerances'],
        excerpt:
          'Why parts that align perfectly in CAD often fail to fit off the printer—and practical clearance rules that work on the first print.',
        content: [
          'In CAD, a 10 mm shaft fits inside a 10 mm hole with zero friction. In FDM 3D printing, thermal expansion and extrusion width inevitably shrink internal holes by a fraction of a millimeter.',
          'Defining a parametric "clearance" variable in Fusion 360 saves hours of reprinting. Using 0.15 mm for press-fits and 0.30–0.40 mm for sliding joints produces reliable assemblies on most consumer printers.',
          'Equally important is print orientation: aligning layer lines along the load axis rather than perpendicular to it dramatically improves mechanical strength.'
        ]
      },
      {
        slug: 'modern-web-arayuzlerinde-3d-ve-performans',
        title: 'Balancing Performant 3D and Typography in Modern Web UI',
        date: 'October 28, 2026',
        readTime: '6',
        categories: ['Software', 'Design'],
        tags: ['React', 'Three.js', 'UI/UX', 'WebGL', 'performance'],
        excerpt:
          'How to integrate interactive WebGL scenes at a steady 60 FPS on mobile devices without sacrificing readability.',
        content: [
          'Thoughtfully crafted WebGL scenes elevate digital presence, yet excessive polygon counts and unoptimized shaders quickly drain mobile batteries and cause frame drops.',
          'A disciplined approach caps device pixel ratio (DPR) at 1.5 on mobile, keeps canvas pointer events non-blocking for smooth touch scrolling, and relies on clean procedural geometry.',
          'Visually, 3D elements should amplify—not compete with—typography. High-contrast text, generous whitespace, and subtle glass surfaces turn 3D into an atmospheric stage for the content.'
        ]
      }
    ],
    contact: {
      tag: 'Contact',
      title: 'Let’s Connect',
      subtitle: 'Reach out for collaborations, engineering discussions, or just to say hello.',
      addressLabel: 'Address',
      addressValue: 'Akdeniz University, Dumlupınar Blvd, 07058 Konyaaltı / Antalya, Turkey',
      phoneLabel: 'Phone',
      phoneValue: '+90 (542) 648 71 13',
      emailLabel: 'Email',
      emailValue: '07altanduran07@gmail.com',
      formTitle: 'Send a Message',
      namePlaceholder: 'Your Full Name',
      emailPlaceholder: 'Your Email Address',
      subjectPlaceholder: 'Subject',
      messagePlaceholder: 'Write your message here...',
      sendButton: 'Send Message',
      successMessage: 'Your message has been received! I will get back to you soon.',
      mapTitle: 'Location (Google Maps)'
    },
    footer: {
      tagline: 'Always learning, testing, refining, and building.',
      rights: 'All rights reserved.'
    }
  }
};