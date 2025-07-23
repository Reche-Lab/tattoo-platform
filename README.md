````markdown
# ✨ Estúdio Místico - Website

Bem-vindo ao repositório é um template completo para um website de um estudio de tatuagem, no exemplo o Estúdio Místico, o primeiro estúdio de tatuagem em Ubatuba fundado e operado por mulheres. Este projeto é mais do que um site: é um portal digital que busca capturar a essência mística, artística e acolhedora do nosso espaço físico.

Desenvolvido com tecnologias de ponta, o site oferece uma experiência de usuário imersiva, fluida e visualmente impactante, desde a navegação em um ambiente 3D até a exploração detalhada do portfólio de talentosas artistas.

[🔗 Acesse o site ao vivo aqui](Link para o deploy na Vercel quando estiver pronto)

---

---

## 🔮 Funcionalidades Principais

Este projeto foi cuidadosamente construído para oferecer uma jornada completa ao visitante:

* **Homepage Imersiva**: Uma cena 3D interativa com um objeto místico que reage ao mouse, criando um impacto visual imediato.
* **Design Responsivo e Minimalista**: Interface limpa e elegante que se adapta perfeitamente a qualquer dispositivo, de desktops a celulares, com um menu "hambúrguer" para navegação mobile.
* **Perfis de Artistas**: Uma seção dedicada para apresentar cada tatuadora, sua especialidade e biografia.
* **Portfólio Detalhado**: Galerias de imagem individuais para cada artista, com um layout de grade consistente e alinhado.
* **Visualizador de Imagens (Lightbox)**: Ao clicar em uma imagem do portfólio, ela se expande em um modal com fundo escuro, permitindo navegação entre as fotos com setas na tela e no teclado.
* **SEO Otimizado**: Metadados dinâmicos para cada página (incluindo perfis de artistas), sitemap gerado automaticamente e uso de tags semânticas para garantir a melhor indexação pelos motores de busca.
* **Mapa de Contato Customizado**: Um mapa do Google Maps estilizado com um tema escuro para se integrar perfeitamente à identidade visual do site.
* **Arquitetura Escalável**: O código é parametrizado com variáveis de ambiente para o nome do estúdio e URL do site,itando a manutenção e futuras atualizações.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído sobre uma base de tecnologias modernas, focando em performance, experiência do desenvolvedor e otimização para produção.

* **Framework**: [Next.js](https://nextjs.org/) (App Router)
* **Linguagem**: JavaScript
* **Estilização**: [Tailwind CSS](https://tailwindcss.com/)
* **Renderização 3D**:
    * [Three.js](https://threejs.org/)
    * [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
    * [Drei](https://github.com/pmndrs/drei)
* **Animações**: [React Spring](https://www.react-spring.dev/) (para a interatividade do objeto 3D)
* **Componentes de UI (Headless)**: [Headless UI](https://headlessui.com/) (para o modal da galeria e o menu responsivo)
* **Ícones**: [Heroicons](https://heroicons.com/)
* **Mapas**: Google Maps com a biblioteca [@vis.gl/react-google-maps](https://visgl.github.io/react-google-maps/)
* **Deploy**: [Vercel](https://vercel.com/)

---

## 🚀 Como Executar o Projeto Localmente

Para clonar e rodar esta aplicação em seu ambiente local, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão 20.x ou superior recomendada)
* npm ou yarn

### 1. Clone o Repositório

```bash
git clone [https://github.com/seu-usuario/estudio-mistico.git](https://github.com/seu-usuario/estudio-mistico.git)
cd estudio-mistico
````

### 2\. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3\. Configure as Variáveis de Ambiente

Crie um arquivo chamado `.env.local` na raiz do projeto e adicione as seguintes variáveis. Você precisará de uma chave da API do Google Maps.

```
# URL base para desenvolvimento
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Nome do estúdio
NEXT_PUBLIC_STUDIO_NAME="Estúdio Místico"

# Chaves do Google Maps
NEXT_PUBLIC_Maps_API_KEY="SUA_CHAVE_DE_API_DO_Maps"
NEXT_PUBLIC_GOOGLE_MAP_ID="SEU_ID_DE_MAPA_CUSTOMIZADO"
```

### 4\. Rode o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) em seu navegador para ver o resultado.

-----

