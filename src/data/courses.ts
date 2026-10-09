export const courseCategories = [
  "Programação",
  "Desenvolvimento web",
  "Design",
  "Marketing digital",
  "Informática",
] as const;

export type CourseCategory = (typeof courseCategories)[number];

export type Course = {
  slug: string;
  title: string;
  description: string;
  category: CourseCategory;
  instructor: string;
  price: number;
  coverMark: string;
  topics: string[];
};

export const demoCourses: Course[] = [
  {
    slug: "logica-de-programacao",
    title: "Lógica de programação sem complicação",
    description:
      "Entenda como dividir problemas em passos claros e pratique os fundamentos usados para criar seus primeiros programas.",
    category: "Programação",
    instructor: "Lia Monteverde",
    price: 0,
    coverMark: "{ }",
    topics: ["Pensamento lógico", "Variáveis e decisões", "Repetições e exercícios"],
  },
  {
    slug: "python-para-automacoes",
    title: "Python para pequenas automações",
    description:
      "Conheça a sintaxe essencial de Python e use scripts simples para organizar tarefas repetitivas do dia a dia.",
    category: "Programação",
    instructor: "Caio Nogueira",
    price: 49.9,
    coverMark: "Py",
    topics: ["Primeiros scripts", "Listas e arquivos", "Automação passo a passo"],
  },
  {
    slug: "interfaces-com-react",
    title: "Primeiras interfaces com React",
    description:
      "Monte interfaces em componentes e aprenda a representar informações usando propriedades e estado local.",
    category: "Desenvolvimento web",
    instructor: "Mila Sato",
    price: 79.9,
    coverMark: "</> ",
    topics: ["Componentes reutilizáveis", "Props e estado", "Uma tela interativa"],
  },
  {
    slug: "css-responsivo",
    title: "CSS responsivo na prática",
    description:
      "Crie páginas que se adaptam a telas pequenas e grandes com layouts flexíveis e ajustes progressivos.",
    category: "Desenvolvimento web",
    instructor: "Téo Valença",
    price: 0,
    coverMark: "{css}",
    topics: ["Layouts fluidos", "Flexbox e grid", "Breakpoints e revisão mobile"],
  },
  {
    slug: "design-de-interfaces",
    title: "Fundamentos de design de interfaces",
    description:
      "Explore hierarquia, espaçamento e contraste para organizar telas digitais de forma mais clara.",
    category: "Design",
    instructor: "Nina Salvat",
    price: 59.9,
    coverMark: "UI",
    topics: ["Hierarquia visual", "Ritmo e espaçamento", "Contraste e legibilidade"],
  },
  {
    slug: "composicao-visual",
    title: "Composição visual para produtos digitais",
    description:
      "Pratique princípios de composição para criar páginas equilibradas e destacar o que importa em cada tela.",
    category: "Design",
    instructor: "Ivo Alencar",
    price: 0,
    coverMark: "✳",
    topics: ["Formas e equilíbrio", "Cor como apoio", "Composição em uma página"],
  },
  {
    slug: "planejamento-de-conteudo",
    title: "Planejamento de conteúdo digital",
    description:
      "Organize ideias em pautas e calendários editoriais com objetivos simples e consistentes.",
    category: "Marketing digital",
    instructor: "Bia Monte",
    price: 64.9,
    coverMark: "#ideia",
    topics: ["Objetivos e público", "Pautas e formatos", "Calendário editorial"],
  },
  {
    slug: "seo-para-iniciantes",
    title: "SEO para quem está começando",
    description:
      "Aprenda noções de pesquisa de palavras-chave e estrutura de conteúdo para melhorar a descoberta de páginas.",
    category: "Marketing digital",
    instructor: "Ravi Campelo",
    price: 39.9,
    coverMark: "SEO",
    topics: ["Intenção de busca", "Palavras-chave", "Estrutura de uma página"],
  },
  {
    slug: "organizacao-digital",
    title: "Organização digital do trabalho",
    description:
      "Conheça práticas simples para cuidar de arquivos, tarefas e informações em uma rotina conectada.",
    category: "Informática",
    instructor: "Noa Campos",
    price: 0,
    coverMark: "01",
    topics: ["Pastas e arquivos", "Rotinas digitais", "Organização e cópias de segurança"],
  },
  {
    slug: "seguranca-digital-cotidiana",
    title: "Segurança digital para o cotidiano",
    description:
      "Reconheça hábitos que ajudam a proteger contas e dispositivos durante o uso comum da internet.",
    category: "Informática",
    instructor: "Cris Valedo",
    price: 54.9,
    coverMark: "✓",
    topics: ["Senhas e autenticação", "Links e mensagens suspeitas", "Atualizações de dispositivos"],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return demoCourses.find((course) => course.slug === slug);
}
