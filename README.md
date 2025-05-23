# Portal de Ingressos - Frontend

Este projeto é um portal de eventos desenvolvido em React, com foco em componentização, usabilidade e layout moderno.

## Principais características

- **Componentização**: Componentes reutilizáveis como `Header`, `BarraPesquisa`, `CategoriaCard` e modais.
- **Header sticky e glassmorphism**: O header utiliza `sticky top-0` e efeito glassmorphism com Tailwind CSS, permanecendo visível no topo durante o scroll.
- **Barra de pesquisa centralizada**: O componente `Header` recebe `<BarraPesquisa />` via `children` e já centraliza na faixa branca sticky.
- **Modais para acesso**: Modais para "Acesso Visitante" e "Acesso Restrito", controlados por estado no componente de página.
- **Sugestões rápidas**: A barra de pesquisa exibe sugestões rápidas para facilitar a busca.
- **Layout responsivo**: Utilização de Tailwind CSS para responsividade e visual moderno.

## Estrutura de Componentes

```
src/
  components/
    Header.jsx
    BarraPesquisa.jsx
    CategoriaCard.jsx
  pages/
    cliente/
      HomePage.jsx
```

- `Header.jsx`: Header fixo no topo, recebe handlers e children.
- `BarraPesquisa.jsx`: Barra de busca com sugestões e autocomplete.
- `CategoriaCard.jsx`: Card para exibição de categorias de eventos.
- `HomePage.jsx`: Página principal, controla estado dos modais e renderiza os componentes.

## Exemplo de uso do Header

```jsx
<Header
  onAcessoVisitante={handleAcessoVisitante}
  onAcessoRestrito={handleAcessoRestrito}
>
  <BarraPesquisa
    onSearch={...}
    sugestoes={["hoje", "amanhã", "nesta semana", ...]}
  />
</Header>
```

## Como rodar o projeto

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) no navegador.

## Branches

- Use nomes de branch descritivos, como `feature/barra-pesquisa`, `feature/header-glassmorphism`, etc.
- Cada branch representa um estágio ou feature do desenvolvimento.

---

Nenhuma cópia é permitida sem autorização.