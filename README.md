<h1 align="center">
    Foodfy
</h1>

<h2 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="250px" />
</h2>

## :notebook: Sumário

* <a href="#rocket-sobre-a-aplica%C3%A7%C3%A3o">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
* <a href="#robot-tecnologias-utilizadas">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
* <a href="#zap-como-executar-a-aplica%C3%A7%C3%A3o-em-sua-m%C3%A1quina">Como executar em sua máquina</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
* <a href="#memo-licença">Licença</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
* <a href="#telephone_receiver-contatos">Contatos</a>


## :rocket: Sobre a aplicação

Esse projeto está sendo desenvolvido durante o curso LaunchBase - [RocketSeat](https://rocketseat.com.br/). A aplicação **Foodfy** serve como uma exposição de receitas. Nessa etapa do curso estamos aprendendo a criar um servidor HTTP com *Express* e também tudo que é necessário para gerenciarmos esse servidor, desde a criação das rotas, persistência dos dados e etc até a configuração e utilização do *Nunjucks*, o template engine utilizado para deixar o HTML mais dinâmico e flexível. **Ainda em desenvolvimento**.

#### O que ainda está por vir

A parte mais básica já está pronta, como o próprio servidor, rotas e layout. Ainda vou implementar a parte de cadastro de usuário e receitas, além da área de administração e outras coisas.

## :robot: Tecnologia utilizadas:
----------------------

* HTML, CSS e Javascript;
* Node js;
* Express;
* Nunjucks;
* nodemon;

## :eyes: Preview:

Home:
-----

Cada "card" de receita aqui leva para a respectiva receita com um
sistema de links criado com o Nunjucks

![](/readme-content/home.png)

Sobre:
------

Page com textos fictícios, só para constar

![](/readme-content/sobre.png)

Detalhes da Receita:
--------------------

Os dados dessa página são trazidos de forma dinâmica. Estão todos
armazenados num arquivo js, que está servindo como um data base.

![]()![](/readme-content/receita1.png)

![]()![](/readme-content/receita2.png)

Note que o item "informações adicionais" só aparece quando não está
vazio, isso é controlado através de uma condicional do njk

![]()![](/readme-content/receita3.png)

## :zap: Como executar essa aplicação em sua máquina

```bash
# Instalar o NodeJS (Versão LTS)
https://nodejs.org/en/

# Instalar o GIT para Windows ou Mac
https://gitforwindows.org/
https://git-scm.com/download/mac

# Clonar o repositório
git clone https://github.com/caique-dev/foodfy.git

# Entrar no diretório
cd foodfy

# Baixar as dependências
npm install

# Executar o servidor
npm start

# No seu terminal deve aparecer
O servidor está ligado e pode ser acessado na em http://localhost:5000
Para desligar o servidor, tecle "ctrl + c" no terminal
```

Feito isso, abra o seu navegador e acesse `http://localhost:5000/`

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](../LICENSE) para mais detalhes.

## :telephone_receiver: Contatos

[![Linkedin Badge](https://img.shields.io/badge/-caique_andrade-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/caique-andrade-8a8153189/)](https://www.linkedin.com/in/caique-andrade-8a8153189/)
[![Linkedin Badge](https://img.shields.io/badge/-caiquepinheiro@icloud.com-red?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:caiquepinheiro@icloud.com)](mailto:caiquepinheiro@icloud.com)
[![Rocktseat](https://img.shields.io/badge/-Caique%20Andrade-%239466FF?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAALVBMVEVHcExxWsF0XMJzXMJxWcFsUsD///9jRrzY0u6Xh9Gsn9n39fyMecy0qd2bjNJWBT0WAAAABHRSTlMA2Do606wF2QAAAGlJREFUGJVdj1cWwCAIBLEsRU3uf9xobDH8+GZwUYi8i6ucJwrxKE+7D0G9Q4vlYqtmCSjndr4CgCgzlyFgfKfKCVO0LrPKjmiqMxGXkJwNnXskqWG+1oSM+BSwD8f29YLNjvx/OQrn+g99oQSoNmt3PgAAAABJRU5ErkJggg==)](https://app.rocketseat.com.br/me/caique-andrade-1591990375)

Desenvolvido com :heart: por Caique Andrade