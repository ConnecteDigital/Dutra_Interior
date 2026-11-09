# Desentupidora Dutra · site

Site da Desentupidora Dutra (desentupidora e limpa fossa 24h em Campinas e região, DDD 19), com foco em SEO local
e tráfego de Google Ads. Feito com [Astro](https://astro.build): gera páginas estáticas e é publicado na Vercel.

## Rodar localmente

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # gera dist/
npm run verificar  # confere GTM, WhatsApp e telefone em todas as páginas geradas
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Domínio do site | `astro.config.mjs` (constante `DOMINIO`) |
| Telefone/WhatsApp, nome, tempo de chegada, ID do GTM | `src/data/site.ts` |
| Serviços (textos, FAQ, SEO) | `src/data/servicos.ts` |
| Regiões e cidades atendidas | `src/data/locais.ts` |
| Posts do blog | `src/content/blog/*.md` |
| Logotipo (provisório, em texto) | `src/components/Logo.astro` |
| Fotos reais | pasta `fotos/` (ver `fotos/README.md`) |
| Cabeçalhos de segurança | `vercel.json` |

## Páginas geradas

- `/servicos/<serviço>/`: uma página por serviço
- `/desentupidora-em-<cidade>/` e `/limpa-fossa-em-<cidade>/`: duas páginas por cidade
- `/cidades-atendidas/`, `/blog/`, `/politica-de-privacidade/`

## Regras de rastreamento (não quebrar)

- Só o Google Tag Manager `GTM-NKTZBFPR`, uma vez no `<head>` e uma no `<noscript>`. Nada de `gtag/js`, `AW-` ou `GT-` no código.
- Botões de WhatsApp são sempre `<a href="https://api.whatsapp.com/send?phone=5519991709018&text=...">`. Sem `wa.me`, `onclick` ou `window.open`.
- Telefone sempre `tel:+5519991709018`.
- Não remover nem reescrever parâmetros da URL de entrada (`gclid`, `gbraid`, `wbraid` etc.).
- `npm run verificar` confere tudo isso e falha se algo estiver fora do padrão.
