## Soma simples com Gulp

Projeto bem simples com o intuito de fazer um estudo sobre a ferramenta [Gulp](https://gulpjs.com/).

Gulp é uma ferramenta de automação de tarefas em Javascript. Atraveś do Gulp podemos, por exemplo, otimizar e minificar arquivos facilmente fazendo uso de 'plugins' (códigos criados por outros desenvolvedores), tornando o desenvolvimento web muito mais produtivo. 

## Sobre o projeto

A estrutura do projeto é bem simples. Em `src` temos o código que manipulamos em desenvolvimento e através do Gulp direcionamos de forma automatizada o resultado para pasta `public`, que é o código realmente do site/projeto. No arquivo `gulpfile.js` temos as tarefas que desejamos que o Gulp execute.

Os plugins utilizados no projeto podem ser visualizados no arquivo `package.json` em `dependencies`. A documentação de cada plugin pode ser encontrada [aqui](https://gulpjs.com/plugins), bastando colocar o nome do plugin na pesquisa.

Caso queira testar o projeto, faça:

1. Clone o repositório:

  ```bash
  git clone https://github.com/devrodrigues/soma_Gulp
  ```
2. Com o Node.js instalado na sua máquina, instale o Gulp CLI globalmente:

  ```bash
  npm install --global gulp-cli
  ```
3. Vá até a pasta do projeto `soma_Gulp` e instale suas dependências executando localmente:

  ```bash
  npm install
  ```
4. Execute o comando `gulp` localmente. Veja agora que o gulp vai ficar monitorando quaisquer alterações salvas. Qualquer alteração será "refletida" automaticamente em `public`.