// ══════════════════════════════════════════════════════════════════════
//  Dados do portfólio — Guilherme "hayatog" Oliveira de Souza
//  Desacoplado da apresentação (a vantagem do Astro).
// ══════════════════════════════════════════════════════════════════════

export const profile = {
  handle: 'hayatog',
  name: 'Guilherme Oliveira de Souza',
  role: 'Desenvolvedor Mobile & Full Stack',
  quote: 'Levante a cabeça e prossiga com sua vida. Você tem suas próprias pernas para poder andar, então use-as.',
  location: 'São Paulo · Brasil',
  email: 'oliveira.guilherme1801@gmail.com',
  linkedin: 'https://www.linkedin.com/in/guilherme-oliveira18/',
  github: 'https://github.com/hayatog',
  domain: 'hayatog.com.br',
};

export interface Role {
  title: string;
  meta: string;
  now?: boolean;
  bullets: string[];        // pode conter <b> e <span class="win">
  tags: { label: string; hot?: boolean }[];
}
export interface Job {
  company: string;
  period: string;
  place: string;
  now?: boolean;
  roles: Role[];
}

export const jobs: Job[] = [
  {
    company: 'Verzel Soluções em Sistemas',
    period: 'jun 2024 — o momento · 2 a 2 m',
    place: 'São Paulo, Brasil',
    now: true,
    roles: [
      {
        title: 'Desenvolvedor Mobile | Full Stack — Pleno II',
        meta: 'jun 2025 — o momento',
        now: true,
        bullets: [
          'Desenvolvimento de novos endpoints em <b>Java</b>, garantindo performance e escalabilidade.',
          'Evolução e manutenção contínua do principal aplicativo <b>Flutter</b> em produção.',
        ],
        tags: [{ label: 'Flutter', hot: true }, { label: 'Java', hot: true }],
      },
      {
        title: 'Desenvolvedor Full Stack — Pleno',
        meta: 'mai 2025 — jun 2025',
        bullets: [
          'Atuação nas <b>APIs Java</b> que sustentam as aplicações Flutter (Desktop e Android).',
          'Abordagem integrada entre front-end e back-end, com entregas mais robustas e alinhadas ao negócio.',
        ],
        tags: [{ label: 'Java' }, { label: 'Android' }, { label: 'Full Stack' }],
      },
      {
        title: 'Desenvolvedor Flutter — Pleno · Grupo Avenida',
        meta: 'jun 2024 — mai 2025',
        bullets: [
          'Responsável pela evolução técnica e estabilidade do <b>VAR 3.0</b>, aplicação Flutter para Desktop (Windows e Linux).',
          'Criação do módulo de <b>Upsell no PDV</b> — <span class="win">+20% de lucro no período de Natal</span>.',
          'Otimização do tempo de resposta de chamadas de APIs internas e externas (front + back).',
          'Migração do app Desktop para <b>Android</b>: leitor de código de barras, adaptação da UI e novas telas mobile.',
          'Upgrade do Flutter <b>3.3.4 → 3.27.0</b>, resolvendo conflitos de compatibilidade e otimizando performance.',
        ],
        tags: [{ label: 'Flutter', hot: true }, { label: 'Java' }, { label: 'Desktop' }, { label: 'Android' }],
      },
    ],
  },
  {
    company: 'MarketUP',
    period: 'out 2023 — jun 2024 · 9 m',
    place: 'São Paulo, Brasil',
    roles: [
      {
        title: 'Desenvolvedor Flutter',
        meta: 'Tempo integral',
        bullets: [
          '<b>NFSe "Nota Rápida"</b> — Nota Sem Perrengue: novas features, correção de bugs, ajustes de layout, gerenciamento de estado com <b>GetX</b> e testes de regressão.',
          'Criação de <b>aplicativo para Máquina de Cartão</b>.',
          '<b>MarketUP Comandas</b>: refatoração do app, recriação de layout, gerenciamento de estado com <b>MobX</b> e persistência offline com <b>ObjectBox</b>.',
        ],
        tags: [{ label: 'Flutter', hot: true }, { label: 'GetX' }, { label: 'MobX' }, { label: 'ObjectBox' }],
      },
    ],
  },
  {
    company: 'Compugraf',
    period: 'jun 2022 — nov 2022 · 6 m',
    place: 'São Paulo, Brasil · Remoto',
    roles: [
      {
        title: 'Back End Developer — Estágio',
        meta: 'Estágio',
        bullets: [
          'Desenvolvimento de ferramentas em <b>C# (.NET)</b> para consumo de APIs e integração com <b>MS SQL Server</b>.',
          'Manutenção de código legado em JavaScript, HTML, jQuery, CrystalReports e C#.',
          'Manutenção de cronjobs em servidores <b>Linux</b>.',
          'Leitura, inserção e análise de dados com <b>ElasticSearch</b> e <b>Kibana</b>.',
        ],
        tags: [{ label: 'C# .NET', hot: true }, { label: 'MS SQL' }, { label: 'ElasticSearch' }, { label: 'Kibana' }, { label: 'Linux' }],
      },
    ],
  },
  {
    company: 'Magna Sistemas',
    period: 'jul 2021 — jan 2022 · 7 m',
    place: 'São Paulo, Brasil · Híbrido',
    roles: [
      {
        title: 'Desenvolvedor Flutter',
        meta: 'Tempo integral',
        bullets: [
          'Desenvolvimento do <b>Portal Agro SP</b> (Secretaria da Agricultura) para dispositivos móveis Android/iOS com Flutter.',
          'Aprofundamento em desenvolvimento Android/iOS, incluindo estudos de <b>iOS com Swift</b>.',
        ],
        tags: [{ label: 'Flutter', hot: true }, { label: 'Swift' }, { label: 'Android' }, { label: 'iOS' }],
      },
    ],
  },
  {
    company: 'NIC.br',
    period: 'abr 2017 — dez 2020 · 3 a 9 m',
    place: 'São Paulo, Brasil · Projeto IX.br',
    roles: [
      {
        title: 'Suporte Técnico de Redes',
        meta: 'jan 2019 — dez 2020 · 2 anos',
        bullets: [
          'Gerenciamento de redes e configuração de novos participantes na infraestrutura do <b>Internet Exchange do Brasil (IX.br)</b>.',
          'Ativação, desativação e Suporte Nível 2 — roteadores e switches <b>Cisco, Huawei, Extreme e Brocade</b>.',
          'Automação de configurações com scripts <b>Python</b>.',
        ],
        tags: [{ label: 'Redes / IX.br', hot: true }, { label: 'Python' }, { label: 'Cisco' }, { label: 'Huawei' }],
      },
      {
        title: 'Estagiário de Redes',
        meta: 'abr 2017 — dez 2018 · 1 a 9 m',
        bullets: [
          'Configuração de ativos de rede e apoio à infraestrutura do IX.br, que compõe parte da internet brasileira.',
        ],
        tags: [{ label: 'Redes de TI' }, { label: 'Serviços de rede' }],
      },
    ],
  },
];

export interface SkillGroup {
  title: string;
  desc: string;
  skills: string[];
}
export const arsenal: SkillGroup[] = [
  {
    title: 'o ofício mobile',
    desc: 'onde a maioria das horas cai.',
    skills: ['Flutter', 'Dart', 'Android', 'iOS / Swift', 'GetX', 'MobX', 'Riverpod', 'ObjectBox'],
  },
  {
    title: 'back-end & dados',
    desc: 'o que sustenta os apps.',
    skills: ['Java', 'C# .NET', 'Python', 'MS SQL Server', 'MySQL', 'SQLite', 'ElasticSearch', 'Kibana'],
  },
  {
    title: 'low-level & a bancada',
    desc: 'o hobby que virou ofício — homebrew e decomp.',
    skills: ['C', 'C++', 'Rust', 'Go', 'Kotlin', 'Vulkan / NVK', 'Linux', 'Git', 'Redes / IX.br'],
  },
];

export interface Project {
  name: string;
  url: string;
  desc: string;    // pode conter <b> e <i>
  tags: string;
}
export const projects: Project[] = [
  { name: 'dusklight', url: 'https://github.com/hayatog/dusklight',
    desc: 'Twilight Princess <i>decomp</i> rodando na <b>Tegra X1</b> via <b>NVK/Vulkan</b>. O port mais ambicioso da bancada.',
    tags: 'c++ — vulkan — libnx' },
  { name: 'tmc', url: 'https://github.com/hayatog/tmc',
    desc: 'Decompilação de <i>Zelda: The Minish Cap</i>. Byte a byte, até bater <i>matching</i>.',
    tags: 'c — decomp — gba' },
  { name: 'ARMSX2-NX', url: 'https://github.com/hayatog/ARMSX2-NX',
    desc: 'Port do <b>ARMSX2</b> (PS2) pro Nintendo Switch. Emulação em ARM, sem rede de segurança.',
    tags: 'c++ — emulation — switch' },
  { name: 'aurora-switch', url: 'https://github.com/hayatog/aurora-switch',
    desc: 'Aurora fork com bring-up de <b>libnx + Vulkan/NVK</b>. Gráficos no metal.',
    tags: 'c++ — graphics — nvk' },
  { name: 'nova-strike', url: 'https://github.com/hayatog/nova-strike',
    desc: 'Space shooter 2D inteiro em <b>HTML5 Canvas + JS puro</b>. Sem engine — só código.',
    tags: 'javascript — canvas — gamedev' },
  { name: 'arcade-hub', url: 'https://github.com/hayatog/arcade-hub',
    desc: '<b>KEPLER ARCADE</b> — hub de jogos web + <i>TURBO RUSH</i>, um racer 3D infinito.',
    tags: 'javascript — webgl — arcade' },
];

export interface Education { title: string; place: string; date: string; }
export const education: Education[] = [
  { title: 'Bacharelado em Sistemas de Informação', place: 'Centro Universitário Senac', date: 'concluído · 2023' },
  { title: 'Técnico em Redes de Computadores', place: 'SENAI Suíço-Brasileira Paulo Ernesto Tolle', date: 'concluído · 2017' },
];
export const courses = [
  { name: 'Apps Android em Kotlin', place: 'Udemy' },
  { name: 'IPv6 Avançado', place: 'NIC.br · 2018' },
  { name: 'Inglês Superior', place: 'CNA · 2018' },
];
