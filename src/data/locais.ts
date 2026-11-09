// Cidades atendidas (DDD 19), agrupadas por região. Cada cidade gera duas páginas:
// /desentupidora-em-<cidade>/ e /limpa-fossa-em-<cidade>/.

export interface Regiao {
  slug: string;
  nome: string;
  resumo: string;
}

export interface Cidade {
  slug: string;
  nome: string;
  regiao: string; // slug da região
  // Texto exclusivo da página de desentupidora
  sobre: string;
  // Texto exclusivo da página de limpa fossa
  fossa: string;
  vizinhas: string[];
}

export const regioes: Regiao[] = [
  { slug: 'campinas', nome: 'Região de Campinas', resumo: 'Campinas e as cidades da região metropolitana.' },
  { slug: 'piracicaba-limeira', nome: 'Piracicaba, Limeira e Rio Claro', resumo: 'O eixo das rodovias Anhanguera, Bandeirantes e Luiz de Queiroz.' },
  { slug: 'mogiana', nome: 'Mogiana e Circuito das Águas', resumo: 'De Mogi Guaçu a São João da Boa Vista, passando pelas estâncias.' },
];

export const cidades: Cidade[] = [
  // Região de Campinas
  { slug: 'campinas', nome: 'Campinas', regiao: 'campinas', vizinhas: ['Valinhos', 'Sumaré', 'Hortolândia', 'Paulínia'],
    sobre: 'Maior cidade do interior paulista, Campinas tem de tudo: prédios no Cambuí e no Taquaral, casas no Jardim Chapadão e no Ouro Verde, e condomínios em Barão Geraldo e Sousas. No centro expandido, os chamados mais comuns são coluna de prédio e caixa de gordura de restaurante; nos bairros, ramal de esgoto e caixa de inspeção.',
    fossa: 'Nos distritos de Sousas, Joaquim Egídio e Barão Geraldo e em bairros como Campo Grande e Village Campinas há muitas chácaras e casas com fossa séptica, fora da rede coletora.' },
  { slug: 'sumare', nome: 'Sumaré', regiao: 'campinas', vizinhas: ['Hortolândia', 'Nova Odessa', 'Campinas', 'Monte Mor'],
    sobre: 'Sumaré se divide entre o centro, Nova Veneza e a região do Matão, com muitos bairros residenciais de casas térreas e um parque industrial grande. Atendemos residências, comércios e empresas ao longo da Anhanguera.',
    fossa: 'Em bairros mais afastados e em áreas de chácaras de Sumaré, a fossa ainda é a solução de esgoto. Também limpamos caixas de gordura e poços de indústrias e galpões.' },
  { slug: 'hortolandia', nome: 'Hortolândia', regiao: 'campinas', vizinhas: ['Sumaré', 'Campinas', 'Monte Mor', 'Paulínia'],
    sobre: 'Hortolândia cresceu rápido, com bairros populosos como o Jardim Amanda e o Jardim Rosolém e um polo de empresas de tecnologia. Casas construídas em etapas costumam ter rede de esgoto sem caixa de inspeção, o que dificulta a limpeza e facilita o entupimento.',
    fossa: 'Atendemos fossas em casas e chácaras de Hortolândia e fazemos a limpeza de caixas de gordura e redes de esgoto de empresas e condomínios.' },
  { slug: 'paulinia', nome: 'Paulínia', regiao: 'campinas', vizinhas: ['Campinas', 'Cosmópolis', 'Sumaré', 'Jaguariúna'],
    sobre: 'Paulínia abriga o polo petroquímico e bairros residenciais planejados, com muitos condomínios horizontais. Atendemos casas, condomínios e empresas, inclusive com hidrojateamento de redes de maior diâmetro.',
    fossa: 'Chácaras da região de Betel e propriedades às margens do rio Atibaia usam fossa séptica. Para as empresas do polo, fazemos sucção de caixas de gordura e poços.' },
  { slug: 'valinhos', nome: 'Valinhos', regiao: 'campinas', vizinhas: ['Vinhedo', 'Campinas', 'Itatiba', 'Louveira'],
    sobre: 'Valinhos é conhecida pelos condomínios fechados e pelas chácaras de figo e goiaba. Em terreno acidentado, as redes de esgoto têm muito desnível e as caixas de passagem acumulam terra e raízes.',
    fossa: 'Boa parte das chácaras, sítios e condomínios mais antigos de Valinhos funciona com fossa séptica e sumidouro, que pedem esgotamento periódico.' },
  { slug: 'vinhedo', nome: 'Vinhedo', regiao: 'campinas', vizinhas: ['Valinhos', 'Louveira', 'Itatiba', 'Campinas'],
    sobre: 'Vinhedo tem alguns dos maiores condomínios residenciais da região, com casas de alto padrão e redes internas longas. Raiz de jardim dentro da tubulação é o motivo mais frequente de chamado.',
    fossa: 'Condomínios e chácaras de Vinhedo que não estão ligados à rede pública dependem de fossa. Fazemos o esgotamento com caminhão a vácuo, com acesso combinado com a portaria.' },
  { slug: 'indaiatuba', nome: 'Indaiatuba', regiao: 'campinas', vizinhas: ['Salto', 'Monte Mor', 'Campinas', 'Elias Fausto'],
    sobre: 'Indaiatuba é uma cidade planejada, com bairros residenciais organizados, muitos condomínios e um distrito industrial ativo. Atendemos casas, prédios da região do Parque Ecológico e indústrias.',
    fossa: 'Em Itaici, no Mato Dentro e nas áreas de chácaras de recreio, a fossa séptica é comum. Atendemos também caixas de gordura de restaurantes e de indústrias do distrito.' },
  { slug: 'americana', nome: 'Americana', regiao: 'campinas', vizinhas: ['Santa Bárbara d’Oeste', 'Nova Odessa', 'Limeira', 'Cosmópolis'],
    sobre: 'Americana tem tradição têxtil, um centro comercial forte e bairros residenciais consolidados. Nas casas mais antigas, a rede de esgoto em manilha de barro entope por raiz; nas tecelagens e confecções, por fiapo e resíduo.',
    fossa: 'Na região da Praia Azul e da represa do Salto Grande há casas de veraneio e chácaras com fossa. Atendemos também as caixas de gordura do comércio do centro.' },
  { slug: 'santa-barbara-d-oeste', nome: 'Santa Bárbara d’Oeste', regiao: 'campinas', vizinhas: ['Americana', 'Piracicaba', 'Nova Odessa', 'Capivari'],
    sobre: 'Santa Bárbara d’Oeste é praticamente emendada com Americana pela zona leste, onde ficam os bairros mais populosos. Atendemos residências, comércios e indústrias dos dois lados da cidade.',
    fossa: 'Sítios e chácaras da zona rural barbarense e bairros mais afastados usam fossa. Fazemos também limpeza de caixas de gordura de restaurantes e condomínios.' },
  { slug: 'nova-odessa', nome: 'Nova Odessa', regiao: 'campinas', vizinhas: ['Sumaré', 'Americana', 'Santa Bárbara d’Oeste', 'Paulínia'],
    sobre: 'Nova Odessa fica entre Sumaré e Americana, com bairros residenciais tranquilos e indústrias às margens da Anhanguera. Atendemos entupimento de pia, ralo, vaso e esgoto em casas e empresas.',
    fossa: 'Atendemos fossas de chácaras e propriedades rurais de Nova Odessa e caixas de gordura e poços de empresas instaladas na cidade.' },
  { slug: 'monte-mor', nome: 'Monte Mor', regiao: 'campinas', vizinhas: ['Hortolândia', 'Indaiatuba', 'Sumaré', 'Capivari'],
    sobre: 'Monte Mor tem um centro pequeno e muitos loteamentos e chácaras espalhados pelo município. As distâncias são maiores, e por isso o atendimento sai assim que o chamado é feito.',
    fossa: 'Monte Mor é uma das cidades da região com mais chácaras de recreio e loteamentos com fossa séptica, e a limpa fossa é um dos serviços mais pedidos por lá.' },
  { slug: 'jaguariuna', nome: 'Jaguariúna', regiao: 'campinas', vizinhas: ['Pedreira', 'Holambra', 'Paulínia', 'Santo Antônio de Posse'],
    sobre: 'Jaguariúna combina indústrias de grande porte, condomínios e um movimento forte de eventos e turismo. Atendemos residências, hotéis, restaurantes e empresas.',
    fossa: 'Chácaras, haras e pousadas da zona rural de Jaguariúna usam fossa séptica. Em época de eventos, restaurantes e espaços de festa pedem limpeza de caixa de gordura com mais frequência.' },
  { slug: 'cosmopolis', nome: 'Cosmópolis', regiao: 'campinas', vizinhas: ['Paulínia', 'Artur Nogueira', 'Americana', 'Limeira'],
    sobre: 'Cosmópolis é uma cidade residencial, vizinha do polo de Paulínia, com casas térreas na maior parte dos bairros. Os chamados mais comuns são esgoto voltando pelo ralo e caixa de inspeção cheia.',
    fossa: 'Atendemos fossas em sítios, chácaras e bairros afastados de Cosmópolis, além de caixas de gordura residenciais e comerciais.' },
  { slug: 'artur-nogueira', nome: 'Artur Nogueira', regiao: 'campinas', vizinhas: ['Cosmópolis', 'Engenheiro Coelho', 'Holambra', 'Mogi Mirim'],
    sobre: 'Artur Nogueira tem perfil residencial, com bairros de casas e condomínios novos em expansão. Atendemos desentupimento de pia, vaso, ralo e rede de esgoto a qualquer hora.',
    fossa: 'A zona rural de Artur Nogueira, com sítios e chácaras, depende de fossa séptica. Fazemos o esgotamento com caminhão a vácuo.' },
  { slug: 'holambra', nome: 'Holambra', regiao: 'campinas', vizinhas: ['Jaguariúna', 'Artur Nogueira', 'Santo Antônio de Posse', 'Cosmópolis'],
    sobre: 'Holambra vive das flores e do turismo, com restaurantes, pousadas e produtores espalhados pelo município. Atendemos cozinhas comerciais, estufas e residências.',
    fossa: 'Sítios produtores de flores, pousadas e restaurantes fora do centro de Holambra usam fossa e caixa de gordura de grande volume, que limpamos com caminhão.' },
  { slug: 'pedreira', nome: 'Pedreira', regiao: 'campinas', vizinhas: ['Jaguariúna', 'Amparo', 'Campinas', 'Morungaba'],
    sobre: 'Pedreira é conhecida pelo comércio de porcelana e louça, que enche a cidade nos fins de semana. O relevo de morros faz as redes de esgoto trabalharem com muito desnível.',
    fossa: 'Chácaras e casas nas encostas e na zona rural de Pedreira usam fossa. Atendemos também os restaurantes do comércio turístico.' },
  // Piracicaba, Limeira e Rio Claro
  { slug: 'piracicaba', nome: 'Piracicaba', regiao: 'piracicaba-limeira', vizinhas: ['Santa Bárbara d’Oeste', 'Rio das Pedras', 'Limeira', 'Iracemápolis'],
    sobre: 'Piracicaba é a maior cidade da região depois de Campinas. Tem prédios no centro e no bairro Alto, casas em Santa Teresinha e na Vila Rezende e um polo de bares e restaurantes na Rua do Porto, onde a gordura é o principal motivo de entupimento.',
    fossa: 'Nos distritos de Tupi, Ártemis e Santa Terezinha e nas muitas chácaras do município, a fossa séptica é a regra. Restaurantes de peixe da beira do rio também pedem limpeza frequente de caixa de gordura.' },
  { slug: 'limeira', nome: 'Limeira', regiao: 'piracicaba-limeira', vizinhas: ['Cordeirópolis', 'Iracemápolis', 'Americana', 'Araras'],
    sobre: 'Limeira é polo de joias folheadas e tem indústria e comércio fortes. Atendemos bairros residenciais, o centro e empresas às margens da Anhanguera e da Bandeirantes.',
    fossa: 'Chácaras e condomínios rurais de Limeira usam fossa séptica. Para as indústrias, fazemos sucção de caixas e poços com caminhão a vácuo.' },
  { slug: 'rio-claro', nome: 'Rio Claro', regiao: 'piracicaba-limeira', vizinhas: ['Santa Gertrudes', 'Cordeirópolis', 'Araras', 'Ipeúna'],
    sobre: 'Rio Claro tem ruas e avenidas numeradas, relevo plano e muitas casas térreas. Em rede com pouco caimento, a gordura e a areia param com facilidade e a caixa de inspeção enche.',
    fossa: 'Nos distritos de Ajapi e Assistência e nas chácaras do entorno de Rio Claro, a fossa séptica é comum. Atendemos também as cerâmicas e indústrias da região.' },
  { slug: 'araras', nome: 'Araras', regiao: 'piracicaba-limeira', vizinhas: ['Leme', 'Limeira', 'Rio Claro', 'Conchal'],
    sobre: 'Araras é uma cidade arborizada, com bairros residenciais de casas e um centro comercial movimentado. Raízes em tubulação antiga estão entre os entupimentos mais comuns.',
    fossa: 'Sítios, chácaras e propriedades rurais de Araras usam fossa séptica. Fazemos o esgotamento e a limpeza de caixas de gordura de comércios.' },
  { slug: 'leme', nome: 'Leme', regiao: 'piracicaba-limeira', vizinhas: ['Araras', 'Pirassununga', 'Santa Cruz da Conceição', 'Conchal'],
    sobre: 'Leme fica às margens da Anhanguera, com economia ligada à agroindústria e bairros de casas térreas. Atendemos residências, comércios e empresas a qualquer hora.',
    fossa: 'Atendemos fossas em chácaras e propriedades rurais de Leme, além de caixas de gordura de restaurantes de beira de estrada.' },
  { slug: 'capivari', nome: 'Capivari', regiao: 'piracicaba-limeira', vizinhas: ['Rafard', 'Monte Mor', 'Rio das Pedras', 'Elias Fausto'],
    sobre: 'Capivari tem um centro antigo, com casas de rede de esgoto em manilha, e bairros novos em volta. Atendemos desentupimento de pia, ralo, vaso e esgoto em toda a cidade.',
    fossa: 'Na zona rural de Capivari, sítios e chácaras usam fossa. Fazemos o esgotamento com caminhão a vácuo e o hidrojateamento de redes.' },
  { slug: 'iracemapolis', nome: 'Iracemápolis', regiao: 'piracicaba-limeira', vizinhas: ['Limeira', 'Piracicaba', 'Santa Bárbara d’Oeste', 'Cordeirópolis'],
    sobre: 'Iracemápolis é uma cidade pequena entre Limeira e Piracicaba, com bairros residenciais e indústrias. Atendemos casas e empresas com saída imediata após o chamado.',
    fossa: 'Atendemos fossas de sítios e chácaras de Iracemápolis e caixas e poços de empresas da cidade.' },
  { slug: 'cordeiropolis', nome: 'Cordeirópolis', regiao: 'piracicaba-limeira', vizinhas: ['Limeira', 'Rio Claro', 'Santa Gertrudes', 'Araras'],
    sobre: 'Cordeirópolis fica no entroncamento da Anhanguera com a Washington Luís e faz parte do polo cerâmico. Atendemos residências e as redes de esgoto e de água de chuva de indústrias.',
    fossa: 'Propriedades rurais e chácaras de Cordeirópolis usam fossa. Nas cerâmicas, o caminhão a vácuo é usado na limpeza de caixas e canaletas.' },
  // Mogiana e Circuito das Águas
  { slug: 'mogi-guacu', nome: 'Mogi Guaçu', regiao: 'mogiana', vizinhas: ['Mogi Mirim', 'Estiva Gerbi', 'Itapira', 'Conchal'],
    sobre: 'Mogi Guaçu é a maior cidade da Baixa Mogiana, com indústrias de papel e cerâmica e bairros populosos dos dois lados do rio. Atendemos casas, comércios e empresas.',
    fossa: 'No distrito de Martinho Prado e nas chácaras do município, a fossa séptica é comum. Fazemos também limpeza de caixas de gordura e poços industriais.' },
  { slug: 'mogi-mirim', nome: 'Mogi Mirim', regiao: 'mogiana', vizinhas: ['Mogi Guaçu', 'Itapira', 'Santo Antônio de Posse', 'Artur Nogueira'],
    sobre: 'Mogi Mirim tem um centro histórico com casarões antigos e um distrito industrial. Nas casas mais velhas, a tubulação de barro e de ferro pede cuidado na escolha do equipamento.',
    fossa: 'Sítios e chácaras de Mogi Mirim, principalmente na saída para Itapira e Conchal, usam fossa séptica e pedem esgotamento periódico.' },
  { slug: 'itapira', nome: 'Itapira', regiao: 'mogiana', vizinhas: ['Mogi Mirim', 'Mogi Guaçu', 'Lindóia', 'Jacutinga'],
    sobre: 'Itapira tem ruas inclinadas, um centro tradicional e hospitais e clínicas que funcionam dia e noite. Atendemos residências, comércios e estabelecimentos de saúde em qualquer horário.',
    fossa: 'Na zona rural de Itapira, com muitos sítios, a fossa é a solução de esgoto. Fazemos o esgotamento com caminhão a vácuo.' },
  { slug: 'amparo', nome: 'Amparo', regiao: 'mogiana', vizinhas: ['Serra Negra', 'Pedreira', 'Monte Alegre do Sul', 'Jaguariúna'],
    sobre: 'Amparo é uma das cidades do Circuito das Águas, com centro histórico preservado e ruas estreitas. Casarões antigos têm instalações de esgoto que já passaram por muitas reformas.',
    fossa: 'Pousadas, sítios e chácaras da zona rural de Amparo usam fossa séptica. Restaurantes e hotéis pedem limpeza de caixa de gordura na alta temporada.' },
  { slug: 'serra-negra', nome: 'Serra Negra', regiao: 'mogiana', vizinhas: ['Amparo', 'Lindóia', 'Águas de Lindóia', 'Monte Alegre do Sul'],
    sobre: 'Serra Negra é estância turística, com dezenas de hotéis, restaurantes e lojas de malha. Nos fins de semana e feriados o movimento multiplica, e é quando as cozinhas mais entopem.',
    fossa: 'Hotéis-fazenda, pousadas e chácaras nos morros de Serra Negra dependem de fossa e de caixas de gordura grandes, que limpamos com caminhão.' },
  { slug: 'sao-joao-da-boa-vista', nome: 'São João da Boa Vista', regiao: 'mogiana', vizinhas: ['Aguaí', 'Águas da Prata', 'Vargem Grande do Sul', 'Espírito Santo do Pinhal'],
    sobre: 'São João da Boa Vista é polo regional de comércio, saúde e ensino, ao pé da Serra da Mantiqueira. Atendemos casas, prédios do centro, clínicas e faculdades.',
    fossa: 'Sítios e chácaras ao pé da serra usam fossa séptica. Atendemos também caixas de gordura de restaurantes e de instituições.' },
  { slug: 'pirassununga', nome: 'Pirassununga', regiao: 'mogiana', vizinhas: ['Leme', 'Porto Ferreira', 'Santa Cruz das Palmeiras', 'Descalvado'],
    sobre: 'Pirassununga tem bairros residenciais de casas, um campus universitário e a Academia da Força Aérea. Atendemos residências, repúblicas e comércios a qualquer hora.',
    fossa: 'Em Cachoeira de Emas, os restaurantes de peixe à beira do rio Mogi Guaçu precisam de limpeza frequente de caixa de gordura. Chácaras e ranchos da região usam fossa.' },
  { slug: 'espirito-santo-do-pinhal', nome: 'Espírito Santo do Pinhal', regiao: 'mogiana', vizinhas: ['São João da Boa Vista', 'Mogi Guaçu', 'Santo Antônio do Jardim', 'Albertina'],
    sobre: 'Espírito Santo do Pinhal é terra de café e, mais recentemente, de vinícolas que recebem turistas. O centro tem casarões antigos e ruas em ladeira.',
    fossa: 'Fazendas de café, vinícolas e sítios de Pinhal usam fossa séptica e caixas de gordura de restaurante, que limpamos com caminhão a vácuo.' },
];

export const cidadePath = (c: Cidade) => `/desentupidora-em-${c.slug}/`;
export const fossaPath = (c: Cidade) => `/limpa-fossa-em-${c.slug}/`;
export const getRegiao = (slug: string) => regioes.find((r) => r.slug === slug)!;

export function cidadesPorRegiao() {
  return regioes.map((regiao) => ({ regiao, cidades: cidades.filter((c) => c.regiao === regiao.slug) }));
}

// Cidades em destaque no menu e no topo da página inicial
export const principais = ['campinas', 'sumare', 'hortolandia', 'indaiatuba', 'americana', 'piracicaba', 'limeira', 'paulinia', 'valinhos', 'mogi-guacu'];
