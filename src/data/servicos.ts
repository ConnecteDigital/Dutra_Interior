import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  categoria: 'Desentupimento' | 'Limpa fossa e limpeza';
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
}

export const servicos: Servico[] = [
  {
    slug: 'limpa-fossa',
    nome: 'Limpa fossa',
    keyword: 'Limpa Fossa em Campinas e Região',
    resumo: 'Caminhão a vácuo para esgotar fossa séptica, fossa negra e sumidouro de casas, chácaras, sítios e empresas.',
    metaDescription:
      'Limpa fossa 24h em Campinas e região (DDD 19): fossa séptica, fossa negra e sumidouro com caminhão a vácuo. Chácaras, sítios, casas e empresas. Chegamos em até 20 minutos.',
    icon: 'truck',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'No interior, muita casa, chácara, sítio e condomínio de recreio não tem rede de esgoto na porta: quem faz esse trabalho é a fossa. Ela funciona bem por meses, até o lodo do fundo ocupar o espaço da água. Daí em diante o esgoto não tem para onde ir e começa a aparecer no ralo, no vaso ou no gramado.',
      'A Desentupidora Dutra faz o esgotamento com caminhão limpa fossa em Campinas e nas cidades do DDD 19. O mangote vai do caminhão até a boca da fossa e suga líquido e lodo de uma vez, sem sujeira e sem contato com o resíduo.',
    ],
    sinais: [
      'Descarga lenta e ralos borbulhando em toda a casa',
      'Cheiro de esgoto perto da tampa da fossa',
      'Grama mais verde e terreno úmido em cima do sumidouro',
      'Esgoto aflorando no quintal depois de chuva',
      'Mais de doze meses desde a última limpeza',
    ],
    comoFazemos: [
      'Você informa a cidade, o tipo de imóvel e a distância da rua até a fossa',
      'O caminhão chega, a equipe abre a tampa e estende o mangote',
      'Toda a fossa é esgotada por sucção a vácuo',
      'A tampa é recolocada e a área fica limpa',
    ],
    faq: [
      {
        q: 'Atendem chácaras e sítios em estrada de terra?',
        a: 'Sim. Atendemos zona rural, condomínios de chácaras e sítios. Avise sobre o acesso ao fazer o chamado, para irmos com o caminhão adequado.',
      },
      {
        q: 'Qual a distância máxima entre o caminhão e a fossa?',
        a: 'O mangote pode ser emendado para alcançar fossas distantes da rua. Informe a distância aproximada pelo WhatsApp.',
      },
      {
        q: 'Com que frequência devo limpar a fossa?',
        a: 'Para uma família, uma vez por ano costuma ser suficiente. Pousadas, restaurantes e casas de aluguel por temporada precisam de intervalos menores.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de caixa de gordura',
    keyword: 'Limpeza de Caixa de Gordura em Campinas e Região',
    resumo: 'Retirada da gordura e lavagem da caixa em residências, condomínios, restaurantes, hotéis e indústrias.',
    metaDescription:
      'Limpeza de caixa de gordura em Campinas e região: casas, condomínios, restaurantes e indústrias. Sucção com caminhão e lavagem. Atendimento 24h, chegada em 20 minutos.',
    icon: 'grease',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'Toda a água da pia da cozinha passa pela caixa de gordura. Lá dentro a gordura boia, fica presa e só a água segue para o esgoto. Só que a caixa enche: quando a camada de gordura fica espessa, ela escapa para a tubulação, endurece e fecha o cano.',
      'Limpamos caixas de gordura de qualquer porte em Campinas e região. Nas residenciais, a retirada é manual. Em restaurantes, hotéis, condomínios e refeitórios de indústria, o caminhão a vácuo suga o conteúdo e o hidrojato lava as paredes da caixa e os canos de entrada e saída.',
    ],
    sinais: [
      'Odor de gordura velha vindo da pia ou do quintal',
      'Água da pia descendo cada vez mais devagar',
      'Tampa da caixa suja de gordura ou transbordando',
      'Baratas aparecendo perto da cozinha',
      'Restaurante com fiscalização sanitária agendada',
    ],
    comoFazemos: [
      'Abrimos a caixa e medimos a camada de gordura',
      'Removemos tudo, à mão nas caixas pequenas e por sucção nas grandes',
      'Raspamos e lavamos as paredes, a entrada e a saída',
      'Conferimos o escoamento abrindo a torneira da pia',
    ],
    faq: [
      {
        q: 'Qual o intervalo certo entre as limpezas?',
        a: 'Em casa, duas vezes por ano. Em cozinha comercial, depende do movimento: muitos restaurantes limpam todo mês.',
      },
      {
        q: 'Dá para fazer com o restaurante fechado, de madrugada?',
        a: 'Sim. O plantão é 24 horas, então agendamos fora do horário de atendimento ao público.',
      },
      {
        q: 'Atendem hotéis e pousadas do Circuito das Águas?',
        a: 'Sim. Atendemos Amparo, Serra Negra e as demais cidades listadas no site.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento em Campinas e Região',
    resumo: 'Água em alta pressão para lavar por dentro tubulações, redes de esgoto, galerias e caixas.',
    metaDescription:
      'Hidrojateamento em Campinas e região: limpeza de tubulações, redes de esgoto, galerias pluviais e caixas com jato de alta pressão. Condomínios e indústrias. 24 horas.',
    icon: 'jet',
    categoria: 'Limpa fossa e limpeza',
    intro: [
      'Existe entupimento que a máquina de cabo resolve na hora e volta no mês seguinte. Isso acontece porque o cabo fura a obstrução, mas a gordura e o lodo continuam grudados na parede do cano. O hidrojateamento resolve esse resto: uma mangueira com bico de alta pressão percorre a tubulação e lava todo o diâmetro.',
      'É o serviço que indicamos para redes de condomínios, indústrias, hospitais, escolas e cozinhas de grande movimento em Campinas e região, e também para galerias de água de chuva tomadas por areia e terra.',
    ],
    sinais: [
      'O mesmo trecho entope várias vezes por ano',
      'Rede coletiva de condomínio sem limpeza há muito tempo',
      'Raízes ou gordura petrificada dentro do cano',
      'Galeria pluvial assoreada, alagando em chuva forte',
      'Indústria que precisa de manutenção programada da rede',
    ],
    comoFazemos: [
      'Vistoriamos as caixas de inspeção e definimos os pontos de entrada',
      'Ajustamos a pressão ao diâmetro e ao material da tubulação',
      'Passamos o jato trecho a trecho, no sentido contrário ao fluxo',
      'Se houver muito resíduo, o caminhão a vácuo faz a retirada',
    ],
    faq: [
      {
        q: 'Hidrojato estraga cano de PVC?',
        a: 'Com a pressão regulada para o tipo de cano, não. Esse ajuste é feito antes de começar.',
      },
      {
        q: 'Vocês fazem contrato de manutenção para condomínio e indústria?',
        a: 'Fazemos limpezas programadas. Chame no WhatsApp para combinarmos a frequência e as redes a atender.',
      },
      {
        q: 'Serve para rede de água de chuva?',
        a: 'Sim. O jato remove areia, terra e folhas de galerias, calhas enterradas e bocas de lobo internas.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de esgoto',
    keyword: 'Desentupimento de Esgoto em Campinas e Região',
    resumo: 'Rede parada, caixa de passagem cheia ou esgoto voltando para dentro de casa: atendimento imediato.',
    metaDescription:
      'Desentupimento de esgoto 24h em Campinas e região. Esgoto voltando, caixa de inspeção cheia ou rede parada? Casas, condomínios e empresas. Chegamos em até 20 minutos.',
    icon: 'sewer',
    categoria: 'Desentupimento',
    intro: [
      'Quando a rede de esgoto para, a casa inteira sente: descarga que não vai embora, ralo que devolve água escura, cheiro forte no quintal. O ponto mais baixo do imóvel é sempre o primeiro a mostrar o problema.',
      'Atendemos redes de esgoto de casas, condomínios, comércios e indústrias em Campinas e nas cidades vizinhas. O trabalho começa pelas caixas de inspeção, segue com máquina rotativa de grande porte e, se a rede estiver muito carregada, termina com hidrojateamento.',
    ],
    sinais: [
      'Água suja subindo pelo ralo do banheiro ou da garagem',
      'Tampa de caixa de inspeção vazando',
      'Vaso do térreo borbulhando quando alguém usa o andar de cima',
      'Mau cheiro persistente no quintal',
      'Nenhum ponto da casa escoa direito',
    ],
    comoFazemos: [
      'Abrimos as caixas para descobrir onde o fluxo está parado',
      'Rompemos a obstrução com máquina rotativa ou hidrojato',
      'Limpamos as caixas de inspeção e lavamos a rede',
      'Conferimos a saída até a ligação com a rede da rua',
    ],
    faq: [
      {
        q: 'E se o problema for na rede da rua?',
        a: 'Identificamos isso no local, pela última caixa do imóvel, e orientamos você a abrir chamado na concessionária de saneamento da sua cidade.',
      },
      {
        q: 'Atendem condomínio fechado?',
        a: 'Sim, tanto a rede interna da casa quanto a rede coletiva do condomínio, em contato com a administração.',
      },
      {
        q: 'Vocês vêm de madrugada?',
        a: 'Sim. O plantão funciona 24 horas, de domingo a domingo.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de pia',
    keyword: 'Desentupimento de Pia em Campinas e Região',
    resumo: 'Pia de cozinha, cuba de banheiro e tanque que não escoam, em casas e cozinhas comerciais.',
    metaDescription:
      'Desentupimento de pia 24 horas em Campinas e região: pia de cozinha, lavatório e tanque. Residências e restaurantes. Chegamos em até 20 minutos. Chame no WhatsApp.',
    icon: 'sink',
    categoria: 'Desentupimento',
    intro: [
      'A pia da cozinha entope devagar. Primeiro a água demora um pouco mais para descer, depois forma uma poça, e um dia para de vez. O que fecha o cano é a gordura das panelas, que endurece na tubulação e segura borra de café, arroz e casca.',
      'Atendemos pias de cozinha, lavatórios e tanques em Campinas e região, em casas, apartamentos, bares e restaurantes. A máquina de cabo flexível entra pelo sifão ou pelo ralo e limpa o cano até a caixa de gordura.',
    ],
    sinais: [
      'A cuba enche enquanto você lava a louça',
      'A água desce com barulho de garganta',
      'Cheiro ruim mesmo com a pia limpa',
      'A água da cozinha aparece no ralo da lavanderia',
      'Produtos de supermercado não resolveram',
    ],
    comoFazemos: [
      'Desmontamos e limpamos o sifão',
      'Passamos o cabo flexível no cano da parede até a caixa de gordura',
      'Verificamos se a caixa de gordura precisa de limpeza',
      'Deixamos a torneira aberta para confirmar o escoamento',
    ],
    faq: [
      {
        q: 'Soda cáustica ajuda?',
        a: 'Não indicamos. Ela aquece, pode deformar o PVC e causar queimaduras, e em gordura antiga o efeito dura poucos dias.',
      },
      {
        q: 'O serviço faz sujeira na cozinha?',
        a: 'Trabalhamos com proteção embaixo da pia e deixamos o local limpo no final.',
      },
      {
        q: 'Atendem cozinha de restaurante em horário de movimento?',
        a: 'Sim. Em emergência, a equipe vai na hora, a qualquer horário.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de vaso sanitário',
    keyword: 'Desentupimento de Vaso Sanitário em Campinas e Região',
    resumo: 'Vaso entupido, cheio até a borda ou transbordando resolvido sem danificar a louça.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em Campinas e região. Vaso entupido ou transbordando? Atendimento imediato, a qualquer hora. Chegamos em até 20 minutos.',
    icon: 'toilet',
    categoria: 'Desentupimento',
    intro: [
      'Poucas coisas incomodam tanto quanto um vaso sanitário entupido. Na maior parte dos atendimentos, a causa é algo que não deveria ter ido para o vaso: lenço umedecido, absorvente, cotonete, fralda, excesso de papel ou um objeto que caiu sem ninguém ver.',
      'A Desentupidora Dutra atende Campinas e região 24 horas por dia. Usamos equipamento próprio para louça sanitária, que passa pelo sifão do vaso sem riscar o esmalte. Se a obstrução estiver no esgoto, e não no vaso, seguimos com a máquina pela tubulação.',
    ],
    sinais: [
      'A água sobe em vez de descer na descarga',
      'O nível de água do vaso fica mais alto que o normal',
      'O vaso só esvazia depois de vários minutos',
      'Sai bolha no vaso quando a máquina de lavar despeja água',
      'Houve transbordamento',
    ],
    comoFazemos: [
      'Verificamos se o problema é só no vaso ou em toda a rede',
      'Desobstruímos com equipamento que preserva a louça',
      'Se preciso, passamos a máquina no ramal de esgoto',
      'Damos várias descargas seguidas para testar',
    ],
    faq: [
      {
        q: 'O que fazer até a equipe chegar?',
        a: 'Não acione a descarga outra vez e feche o registro do vaso. Evite produtos químicos, porque eles não dissolvem objetos e deixam a água perigosa.',
      },
      {
        q: 'O vaso vai precisar ser removido?',
        a: 'Raramente. Só quando há um objeto duro travado no sifão da louça que não sai de outra forma.',
      },
      {
        q: 'Atendem em feriado?',
        a: 'Sim, todos os dias do ano, 24 horas.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de ralo',
    keyword: 'Desentupimento de Ralo em Campinas e Região',
    resumo: 'Ralos de box, banheiro, área de serviço, quintal, garagem e piscina desobstruídos.',
    metaDescription:
      'Desentupimento de ralo 24h em Campinas e região: box, banheiro, lavanderia, quintal e garagem. Atendimento imediato e chegada em até 20 minutos.',
    icon: 'drain',
    categoria: 'Desentupimento',
    intro: [
      'O ralo é a porta de entrada de tudo o que não deveria ir para o esgoto: fio de cabelo, resto de sabonete, tampinha, areia do quintal, folha de árvore. Esse material se junta na caixa sifonada, logo abaixo da grelha, ou no cano de saída.',
      'Desentupimos ralos internos e externos em Campinas e região. Em casas com quintal grande e em chácaras, é comum o ralo de água de chuva estar cheio de terra, e nesses casos a limpeza é feita com máquina e jato de água.',
    ],
    sinais: [
      'O banho termina com água na altura do tornozelo',
      'Cheiro de esgoto que piora em dias quentes',
      'Ralo da lavanderia espumando quando a máquina esvazia',
      'Quintal ou garagem alagando com chuva',
      'Mosquitinhos de ralo no banheiro',
    ],
    comoFazemos: [
      'Retiramos a grelha e limpamos a caixa sifonada',
      'Passamos o cabo na saída do ralo até o ramal de esgoto',
      'Enxaguamos a tubulação e testamos com água corrente',
      'Recolocamos tudo no lugar',
    ],
    faq: [
      {
        q: 'O cheiro de esgoto no ralo é entupimento?',
        a: 'Pode ser. Também pode ser o fecho hídrico seco ou a caixa sifonada danificada. Avaliamos no local.',
      },
      {
        q: 'Vocês limpam ralo de quintal e calha enterrada?',
        a: 'Sim. Removemos terra, areia e folhas com máquina e, em trechos longos, com hidrojateamento.',
      },
      {
        q: 'Atendem apartamento?',
        a: 'Sim, em prédios de todas as cidades atendidas.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de cano',
    keyword: 'Desentupimento de Cano em Campinas e Região',
    resumo: 'Desobstrução de tubulações de esgoto e de água de chuva, colunas de prédio e ramais enterrados.',
    metaDescription:
      'Desentupimento de cano e tubulação 24h em Campinas e região: ramais, colunas e redes enterradas, com máquina rotativa e hidrojato. Chegada em até 20 minutos.',
    icon: 'pipe',
    categoria: 'Desentupimento',
    intro: [
      'Se a pia, o ralo e o vaso dão problema juntos, o entupimento está no cano que liga todos eles. Em casas com jardim, a causa mais comum na nossa região é raiz: ela encontra uma junta mal vedada, entra na tubulação atrás de umidade e cresce lá dentro.',
      'Desentupimos canos de todos os diâmetros em Campinas e região, em residências, prédios, galpões e indústrias. Cada caso pede uma ferramenta: cabo fino para ramal, cabo pesado com ponteira de corte para raiz, hidrojato para gordura e areia.',
    ],
    sinais: [
      'Dois ou mais pontos da casa lentos ao mesmo tempo',
      'Usar o tanque faz o ralo do banheiro transbordar',
      'Entupimento que reaparece em poucas semanas',
      'Afundamento do piso ou do gramado sobre o cano',
      'Caixa de passagem sempre cheia',
    ],
    comoFazemos: [
      'Mapeamos a rede pelas caixas e pontos de acesso',
      'Selecionamos cabo e ponteira de acordo com o cano',
      'Desobstruímos, cortamos raízes e lavamos o trecho',
      'Avisamos quando há sinal de cano rompido ou desalinhado',
    ],
    faq: [
      {
        q: 'Depois de cortar a raiz, ela volta?',
        a: 'Se o cano continuar com a fresta por onde ela entrou, volta com o tempo. Explicamos a situação para você decidir entre a limpeza periódica e o reparo do trecho.',
      },
      {
        q: 'Atendem coluna de prédio?',
        a: 'Sim, colunas de esgoto e de gordura, em contato com o síndico ou o zelador.',
      },
      {
        q: 'Trabalham em galpões e indústrias?',
        a: 'Sim, inclusive em redes de grande diâmetro e fora do horário de produção.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-conduite',
    nome: 'Desentupimento de conduíte',
    keyword: 'Desentupimento de Conduíte em Campinas e Região',
    resumo: 'Eletrodutos travados por massa, concreto ou amassamento liberados para passar fios e cabos.',
    metaDescription:
      'Desentupimento de conduíte em Campinas e região: eletrodutos obstruídos por massa, concreto ou amassados. Obras, casas e empresas. Atendimento 24 horas.',
    icon: 'cable',
    categoria: 'Desentupimento',
    intro: [
      'Na hora de passar a fiação, o eletricista descobre que a guia não atravessa o conduíte. É um problema comum em casa nova e em reforma: caiu massa dentro do tubo durante o reboco, o concreto da laje esmagou um trecho ou a curva ficou fechada demais.',
      'Fazemos a desobstrução de conduítes e eletrodutos em obras, residências e empresas de Campinas e região, liberando o caminho para cabos elétricos, de internet, de TV, de interfone, de alarme e de energia solar.',
    ],
    sinais: [
      'A guia de passar fio para no meio do caminho',
      'Ponto de luz ou tomada que ficou sem fiação na obra',
      'Troca de fiação antiga que não sai do conduíte',
      'Instalação de ar-condicionado, câmeras ou internet travada',
      'Tubulação de piso com massa ou água dentro',
    ],
    comoFazemos: [
      'Testamos o trecho entre duas caixas para achar o ponto travado',
      'Aplicamos equipamento próprio para tubulação seca e fina',
      'Liberamos a passagem e conferimos com a guia',
      'Deixamos a guia passada, se o eletricista pedir',
    ],
    faq: [
      {
        q: 'Vai ter que quebrar a parede ou o piso?',
        a: 'Quase nunca. Só quando o conduíte está esmagado ou partido, e aí indicamos o ponto exato antes de qualquer abertura.',
      },
      {
        q: 'Vocês também fazem a parte elétrica?',
        a: 'Não. Nosso trabalho é liberar o conduíte. A fiação fica com o eletricista da obra.',
      },
      {
        q: 'Atendem construtora, com vários pontos?',
        a: 'Sim. Atendemos obras com vários pontos no mesmo chamado.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-agua-limpa',
    nome: 'Desentupimento de água limpa',
    keyword: 'Desentupimento de Tubulação de Água Limpa em Campinas e Região',
    resumo: 'Canos de água com pouca vazão por ferrugem, calcário ou areia de poço voltam a ter pressão.',
    metaDescription:
      'Desentupimento de tubulação de água limpa em Campinas e região. Pouca pressão na torneira ou no chuveiro? Desobstrução de canos de água e de poço. Atendimento 24h.',
    icon: 'drop',
    categoria: 'Desentupimento',
    intro: [
      'A água que chega fraca na torneira nem sempre é falta de pressão da rua. Muitas vezes o cano está parcialmente fechado por dentro: ferrugem nos canos de ferro das casas antigas, calcário, lodo que desceu da caixa d’água e, em imóveis abastecidos por poço, areia fina.',
      'Desobstruímos tubulações de água limpa em casas, chácaras, prédios e comércios de Campinas e região, devolvendo a vazão para chuveiros, torneiras, descargas e para o enchimento da caixa.',
    ],
    sinais: [
      'A vazão caiu aos poucos ao longo do tempo',
      'Um banheiro tem pressão boa e o outro não',
      'Chuveiro elétrico desarma ou esquenta demais por falta de água',
      'Caixa d’água leva horas para encher',
      'Água com cor de ferrugem ou com areia',
    ],
    comoFazemos: [
      'Medimos a vazão em vários pontos para achar o trecho fechado',
      'Desobstruímos o cano com equipamento exclusivo para água limpa',
      'Lavamos a rede e limpamos filtros e arejadores',
      'Refazemos o teste de vazão ponto a ponto',
    ],
    faq: [
      {
        q: 'Como diferenciar entupimento de falta de água?',
        a: 'Se a torneira do cavalete, junto ao hidrômetro, tem pressão e os pontos internos não, o problema está dentro do imóvel.',
      },
      {
        q: 'Atendem casas com água de poço?',
        a: 'Sim. Areia e lodo de poço são causas comuns de entupimento em chácaras e sítios.',
      },
      {
        q: 'Posso beber a água depois?',
        a: 'Sim. A rede é lavada com água corrente no fim do serviço e pode ser usada normalmente.',
      },
    ],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}

export const categorias: Servico['categoria'][] = ['Limpa fossa e limpeza', 'Desentupimento'];
