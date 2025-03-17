# Trilha JS Developer - Pokedex

# Pokedex

Este repositório contém um projeto de Pokédex interativa que permite visualizar uma lista de Pokémons obtida de uma API externa. O projeto utiliza HTML, CSS e JavaScript para exibir as informações de maneira dinâmica e responsiva.

## Recursos
- Listagem de Pokémons com imagem e nome.
- Paginação para carregar mais Pokémons.
- Exibição detalhada ao clicar em um Pokémon.
- Design responsivo e moderno.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- API de Pokémons
- Normalize.css
- Google Fonts (Roboto)

## Como Executar o Projeto
1. Clone este repositório:
   ```sh
   git clone https://github.com/wallaskoelho/DIO-js-developer-pokedex
   ```
2. Acesse a pasta do projeto:
   ```sh
   cd pokedex
   ```
3. Abra o arquivo `index.html` no navegador.

## Estrutura do Projeto
```
/
|-- assets/
|   |-- css/
|   |   |-- global.css
|   |   |-- pokedex.css
|   |-- js/
|   |   |-- pokemon-model.js
|   |   |-- poke-api.js
|   |   |-- main.js
|   |   |-- view-details.js
|-- index.html
```

## Funcionalidades
- `pokemon-model.js`: Define a estrutura dos dados dos Pokémons.
- `poke-api.js`: Faz requisições à API para obter os Pokémons.
- `main.js`: Gerencia a renderização da lista de Pokémons e a paginação.
- `view-details.js`: Controla a exibição de detalhes de um Pokémon.

## Contribuição
Contribuições são bem-vindas! Siga os passos:
1. Fork este repositório.
2. Crie um branch para sua funcionalidade: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona minha feature'`
4. Envie para o branch principal: `git push origin minha-feature`
5. Abra um Pull Request.

## Licença
Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

