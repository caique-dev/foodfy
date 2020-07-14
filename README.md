FOODFY
======

A Foody é uma empresa fictícia para qual criamos um site que mostra
deliciosas receitas.

Necessário para rodar:
----------------------

Para rodar esta aplição você precisará apenas do node.js intalado em sua
máquina, todas as dependências já estão inclusas. \
 Código para iniciar o servidor local:

npm start

Tecnologia utilizadas:
----------------------

HTML e CSS

Nunjucks

Javascript

Node js

Páginas:
========

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
armazenados num arquivo js, que es†á servindo como um data base.

![]()![](/readme-content/receita1.png)

![]()![](/readme-content/receita2.png)

Note que o item "informações adicionais" só aparece quando não está
vazio, isso é controlado através de uma condicional do njk

![]()![](/readme-content/receita3.png)
