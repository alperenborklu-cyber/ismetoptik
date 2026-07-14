export interface Product {
  id: string;
  name: string;
  category: 'sunglasses' | 'optical';
  price: string;
  description: string;
  image: string;
  tag: string;
  specs: string[];
}

export interface LensTech {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  features: { name: string; value: string }[];
}

export const products: Product[] = [
  {
    id: 'sg-1',
    name: 'Aero Gold Aviator',
    category: 'sunglasses',
    price: '₺7,450',
    description: 'Özel geometrik geçişli camlara sahip, 24 ayar altın kaplama ultra hafif titanyum çerçeve. Moda tutkunları için tasarlandı.',
    image: 'sunglasses-hero',
    tag: 'Popüler',
    specs: ['%100 UVA/UVB Koruması', 'Titanyum Çerçeve', 'İç Yüzey Antirefle Kaplama']
  },
  {
    id: 'sg-2',
    name: 'Obsidian Monolith',
    category: 'sunglasses',
    price: '₺6,890',
    description: 'Kalın eğimli kenarları ve polarize koyu kömür grisi camlarıyla cesur asetat çerçeve. Gizem ve modernizmin mükemmel uyumu.',
    image: 'obsidian-monolith',
    tag: 'Sınırlı Üretim',
    specs: ['Polarize Camlar', 'Premium İtalyan Asetat', 'İtalya\'da El Yapımı']
  },
  {
    id: 'sg-3',
    name: 'Siena Cat-Eye',
    category: 'sunglasses',
    price: '₺5,900',
    description: 'Kaplumbağa kabuğu desen detayları ve sıcak kehribar geçişli camlara sahip şık kedi gözü tasarımı. Zarafet yeniden tanımlandı.',
    image: 'siena-cateye',
    tag: 'Yeni Sezon',
    specs: ['Çizilmeye Dayanıklı Camlar', 'Esnek Yaylı Menteşeler', 'Premium Deri Kılıf Dahil']
  },
  {
    id: 'op-1',
    name: 'Metropolitan Crystal',
    category: 'optical',
    price: '₺4,200',
    description: 'Dayanıklı TR90 malzemeden üretilmiş minimalist şeffaf çerçeve. Profesyonel ortamlar için mükemmel bir modern yol arkadaşı.',
    image: 'optical-glasses',
    tag: 'En Çok Satan',
    specs: ['TR90 Ultra Hafif Polimer', 'Mavi Işık Filtresi Uyumlu', 'Ergonomik Anahtar Deliği Köprü']
  },
  {
    id: 'op-2',
    name: 'Ankara Classic Round',
    category: 'optical',
    price: '₺4,850',
    description: 'Fırçalanmış gümüş saplar ile mat siyah çerçevenin zamansız birleşimi. Şık, sanatsal ve son derece hafif.',
    image: 'ankara-round',
    tag: 'Klasik',
    specs: ['Paslanmaz Çelik ve Asetat', 'Ayarlanabilir Silikon Burun Pedleri', 'Yüksek Esneklikte Saplar']
  },
  {
    id: 'op-3',
    name: 'Linear Titanium Square',
    category: 'optical',
    price: '₺8,100',
    description: 'Minimalist mat altın köprü ve saplara sahip sofistike çerçevesiz yapı. Saf konfor ve mutlak prestij.',
    image: 'titanium-square',
    tag: 'Premium',
    specs: ['Saf Japon Titanyumu', 'Ultra Hafif (9 gram)', 'Hipoalerjenik Malzeme']
  }
];

export const lensTechs: LensTech[] = [
  {
    id: 'zeiss-myocare',
    name: 'ZEISS MyoCare',
    description: 'Genç gözlerde miyopi ilerlemesini yavaşlatırken aynı zamanda net görüş sunmak üzere klinik olarak kanıtlanmış özel cam tasarımı.',
    benefits: [
      'Göz uzamasını %63\'e varan oranda yavaşlatır',
      'Merkezde maksimum optik netlik sağlar',
      'Şeffaf camlarda tam UV koruması sunar'
    ],
    features: [
      { name: 'Teknoloji', value: 'Silindirik Halka Şekilli Kırılma Elemanları (C.A.R.E.)' },
      { name: 'Hedef Kitle', value: 'Çocuklar ve Gençler' },
      { name: 'Kaplama', value: 'DuraVision Premium Kaplama' }
    ]
  },
  {
    id: 'progressive-max',
    name: 'Zeiss Progressive Individual',
    description: 'Duruşunuza, profesyonel çalışma ortamınıza ve fizyolojik okuma mesafenize özel olarak uyarlanan kişiye özel progresif camlar.',
    benefits: [
      'Yakın, orta ve uzak görüş arasında kesintisiz geçiş',
      'Yüzme hissi ve çevresel dalgalanmaların ortadan kaldırılması',
      'Optimize edilmiş dijital ekran konforu'
    ],
    features: [
      { name: 'Kişiselleştirme', value: 'Bireysel FaceFit Parametreleri' },
      { name: 'Optimizasyon', value: 'Digital Inside Teknolojisi' },
      { name: 'Görüş Alanı', value: '%40\'a varan daha geniş görüş alanı' }
    ]
  }
];
