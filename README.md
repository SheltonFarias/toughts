# Toughts

![Toughts Logo](./public/img/toughts_logo.png)

## Descrição

Toughts é uma aplicação web desenvolvida em Node.js e Express, que permite aos usuários criar e compartilhar seus pensamentos. A aplicação conta com um sistema de autenticação de usuários, onde cada usuário pode gerenciar seus próprios pensamentos, incluindo a criação, edição e exclusão.

## Funcionalidades

*   **Autenticação de Usuários:** Sistema completo de registro e login.
*   **Gerenciamento de Pensamentos:** Crie, edite e exclua seus pensamentos.
*   **Dashboard:** Visualize todos os seus pensamentos em um só lugar.
*   **Página Inicial:** Veja os pensamentos de todos os usuários.
*   **Busca:** Encontre pensamentos específicos na página inicial.

## Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução do JavaScript no servidor.
*   **Express:** Framework para aplicações web em Node.js.
*   **Handlebars:** Template engine para renderização de views.
*   **Sequelize:** ORM para Node.js, compatível com Postgres, MySQL, MariaDB, SQLite e Microsoft SQL Server.
*   **MySQL2:** Driver do MySQL para Node.js.
*   **Bcrypt.js:** Biblioteca para hashing de senhas.
*   **Express Session:** Middleware para gerenciamento de sessões.
*   **Nodemon:** Ferramenta que reinicia o servidor automaticamente durante o desenvolvimento.

## Instalação e Execução

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/toughts.git
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Configure o banco de dados:**
    *   Crie um banco de dados MySQL.
    *   Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente com as credenciais do seu banco de dados.
4.  **Execute a aplicação:**
    ```bash
    npm start
    ```
5.  **Acesse a aplicação:**
    *   Abra o seu navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

```
.
├── controllers
│   ├── AuthController.js
│   └── ToughtController.js
├── db
│   ├── conn.js
│   └── script.sql
├── helpers
│   └── auth.js
├── models
│   ├── Tought.js
│   └── User.js
├── public
│   ├── css
│   │   └── styles.css
│   └── img
│       ├── favicon.ico
│       └── toughts_logo.png
├── routes
│   ├── authRoutes.js
│   └── toughtsRoutes.js
├── views
│   ├── auth
│   │   ├── login.hbs
│   │   └── register.hbs
│   ├── layouts
│   │   └── main.hbs
│   └── toughts
│       ├── create.hbs
│       ├── dashboard.hbs
│       ├── edit.hbs
│       └── home.hbs
├── .gitignore
├── index.js
├── package.json
└── README.md
```