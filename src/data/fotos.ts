import type { ImageMetadata } from 'astro';
import { getServico } from './servicos';

// Uma foto por serviço (src/assets/fotos/<slug>.jpg), mais a foto "geral" do topo da página inicial.
// Os originais ficam em fotos/<slug>/ na raiz do repositório.
// Enquanto não houver foto, o site mostra o ícone do serviço no lugar.

// As fotos atuais são ILUSTRATIVAS (banco de imagens, ver fotos/CREDITOS.md).
// Mude para true só quando todas forem fotos reais de serviços da empresa:
// isso libera a galeria "Trabalhos realizados" e a legenda "serviço realizado por".
export const fotosReais = false;
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

// Texto alternativo de cada foto (descreve o que aparece na imagem)
const alts: Record<string, string> = {
  'geral': 'Trabalhador lavando calçada com jato de água de mangueira',
  'desentupimento-de-pia': 'Pia redonda de aço inox com torneira aberta',
  'desentupimento-de-ralo': 'Ralo redondo de ferro em piso de concreto',
  'desentupimento-de-vaso-sanitario': 'Equipamento de desentupimento sendo usado dentro de um vaso sanitário',
  'desentupimento-de-cano': 'Dois trabalhadores consertando tubulação em uma vala',
  'desentupimento-de-esgoto': 'Caixa de inspeção de esgoto aberta em um gramado, com água parada',
  'desentupimento-de-conduite': 'Fios saindo de conduíte em parede',
  'desentupimento-de-agua-limpa': 'Água corrente caindo da torneira em uma cuba',
  'hidrojateamento': 'Mão segurando pistola de jato de alta pressão durante limpeza',
  'limpa-fossa': 'Caminhão limpa fossa com mangotes estendidos pelo gramado e máquina desentupidora em uma caixa de esgoto',
  'limpeza-de-caixa-de-gordura': 'Cozinheiro lavando panela na pia de uma cozinha de restaurante',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  const nome = getServico(slug)?.nome ?? 'Serviço';
  return { src: mod.default, alt: alts[slug] ?? nome };
}

export const temFotos = fotosReais && Object.keys(arquivos).some((k) => !k.endsWith('/geral.jpg'));
