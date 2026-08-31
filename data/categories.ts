import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'mercearia',
    name: 'Mercearia & Essenciais',
    shortDescription: 'Arroz, trigo, farinhas, massas, óleos e conservas essenciais para o dia a dia.',
    description: 'Tudo o que não pode faltar na despensa da sua casa ou empresa: arroz, trigo, farinhas de uso diário, massas, óleos, açúcar, feijão e conservas — alimentos essenciais que garantem praticidade e qualidade nas refeições de todos os dias.',
    image: '/images/categories/MerceariaEssenciais.png',
    bannerImage: '/images/categories/MerceariaEssenciais.png',
    iconName: 'ShoppingBag',
    itemCount: '60+ Produtos',
    highlights: ['Arroz CIM, Dona & Europa', 'Farinhas Florbela & Top Score', 'Azeite & Conservas Gourmet', 'Óleos Dona & Massas Polana']
  },
  {
    id: 'cat-2',
    slug: 'bebidas',
    name: 'Bebidas & Garrafeira',
    shortDescription: 'Águas puras, sumos naturais, refrigerantes e vinhos de colheitas especiais.',
    description: 'Uma garrafeira e secção de bebidas organizada por temperatura e origem. Encontre desde a hidratação diária a referências de vinhos e destilados para ocasiões inesquecíveis.',
    image: '/images/categories/Bebidas.png',
    bannerImage: '/images/categories/Bebidas.png',
    iconName: 'Wine',
    itemCount: '30+ Produtos',
    highlights: ['Néctares Compal 12 Sabores', 'Água Mineral Namaacha', 'Coca-Cola, Fanta & Sprite', 'Spar-Letta & Twist']
  },
  {
    id: 'cat-3',
    slug: 'laticinios',
    name: 'Laticínios & Frescos',
    shortDescription: 'Queijos curados, manteigas cremosas, iogurtes e leites de qualidade certificada.',
    description: 'Conservados em balcões refrigerados de última geração que garantem frescura máxima, textura ideal e pureza de sabor desde o produtor até à sua mesa.',
    image: '/images/categories/lacticiniosFrescos.png',
    bannerImage: '/images/categories/lacticiniosFrescos.png',
    iconName: 'Milk',
    itemCount: 'Em Breve',
    highlights: ['Leite Europa', 'Nido FortiGrow', 'Lacticínios Selecionados', 'Produtos Frescos']
  },
  {
    id: 'cat-4',
    slug: 'congelados',
    name: 'Congelados Selecionados',
    shortDescription: 'Pescados nobres, carnes premium, vegetais ultracongelados e sobremesas.',
    description: 'Cadeia de frio rigorosa que preserva nutrientes e propriedades organolépticas intactas. Variedade inigualável para a sua conveniência e nutrição.',
    image: '/images/categories/Carnes.png',
    bannerImage: '/images/categories/Carnes.png',
    iconName: 'Snowflake',
    itemCount: '3 Produtos',
    highlights: ['Frango DUM 1KG', 'Carne de Vaca DUM', 'Carne de Peru DUM', 'Selecção Fresca']
  },
  {
    id: 'cat-5',
    slug: 'higiene',
    name: 'Higiene & Cuidado Pessoal',
    shortDescription: 'Fórmulas suaves, sabonetes botânicos, champôs e dermocosméticos essenciais.',
    description: 'Um corredor dedicado ao seu bem-estar diário e auto-cuidado, com marcas consagradas para pele, cabelo e higiene familiar completa.',
    image: '/images/categories/HigieneCuidadoPessoal.png',
    bannerImage: '/images/categories/HigieneCuidadoPessoal.png',
    iconName: 'Sparkles',
    itemCount: '20+ Produtos',
    highlights: ['Pastas Colgate & Aquafresh', 'Sabonetes Dettol', 'Sabonetes Líquidos', 'Escovas Colgate']
  },
  {
    id: 'cat-6',
    slug: 'limpeza',
    name: 'Limpeza & Cuidado do Lar',
    shortDescription: 'Detergentes de alta eficácia, amaciadores perfumados e desinfetantes.',
    description: 'Tudo para manter residências e instalações comerciais impecavelmente higienizadas e perfumadas com as melhores marcas mundiais de limpeza profissional.',
    iconName: 'ShieldCheck',
    itemCount: '20+ Produtos',
    highlights: ['Dettol Antissépticos', 'MaQ Detergentes & Lixívias', 'MaQ Amaciadores Soft', 'Lava Loiça MaQ']
  },
  {
    id: 'cat-7',
    slug: 'snacks',
    name: 'Snacks, Chocolates & Delícias',
    shortDescription: 'Chocolates finos, frutos secos tostados, biscoitos crocantes e café gourmet.',
    description: 'Para pausas revigorantes, momentos de celebração ou sobremesas em família. Uma seleção irresistível de doçaria e petiscos estaladiços.',
    iconName: 'Cookie',
    itemCount: '30+ Produtos',
    highlights: ['Bolachas Bakers (15 Tipos)', 'Cereais Nestlé Cerevita', 'Café Europa', 'Hot Chocolate Nestlé']
  },
  {
    id: 'cat-8',
    slug: 'infantil',
    name: 'Linha Infantil & Bebé',
    shortDescription: 'Nutrição infantil, fraldas ultra-absorventes e toalhetes dermotestados.',
    description: 'O maior carinho e segurança para os pequenos. Produtos testados pediatricamente para garantir tranquilidade absoluta aos pais.',
    iconName: 'HeartHandshake',
    itemCount: '3 Produtos',
    highlights: ['Nido FortiGrow 400G', 'Nido FortiGrow 900G', 'Nido FortiGrow 1.8KG', 'Nutrição de Crescimento']
  }
];
