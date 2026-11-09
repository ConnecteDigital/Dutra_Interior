// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.
// O domínio fica em astro.config.mjs (constante DOMINIO).

// Formato: 55 + DDD + número, só dígitos
const PHONE_DIGITS = '5519991709018';

export const site = {
  name: 'Desentupidora Dutra',
  shortName: 'Dutra',
  url: (import.meta.env.SITE ?? '').replace(/\/$/, ''),
  city: 'Campinas',
  // Como a região aparece nos textos ("em Campinas e região")
  regiao: 'Campinas e região',
  state: 'SP',
  phoneDigits: PHONE_DIGITS,
  // Exibição: (19) 90000-0000
  phoneDisplay: `(${PHONE_DIGITS.slice(2, 4)}) ${PHONE_DIGITS.slice(4, 9)}-${PHONE_DIGITS.slice(9)}`,
  tel: `tel:+${PHONE_DIGITS}`,
  arrivalMinutes: 20,
  description:
    'Desentupidora e limpa fossa 24 horas em Campinas e em toda a região do DDD 19. Desentupimento de pia, ralo, vaso, cano e esgoto, hidrojateamento e caixa de gordura. Chegamos em até 20 minutos.',
};

export const DEFAULT_WHATSAPP_MESSAGE = 'Olá! Vim pelo site e preciso de uma desentupidora.';

// Sempre link normal para api.whatsapp.com/send (o rastreamento do GTM depende desse formato).
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager: ÚNICO rastreamento do site.
// Não colar gtag/js, AW- ou GT- no código: tudo fica dentro do GTM.
export const gtmId = 'GTM-NKTZBFPR';
