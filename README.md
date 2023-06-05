# WorkanaPHPChallenge
Desafio Técnico PHP desenvolvido para Workana como etapa de seleção para o cliente SoftExpert.

## Introdução

Esse repositório contém dois projetos: "market" e "market-api", referentes ao frontend e ao backend da aplicação, respectivamente. 

### Market
O projeto do frontend ainda está em desenvolvimento, e será implementado em Angular. Nessa pasta, há apenas a configuração inicial padrão do projeto. Para executá-lo, siga os passos abaixo:

* Abra o prompt de comando e instale o Angular CLI com o comando:
> npm install -g @angular/cli
* Ainda no terminal, navegue até a pasta "market" e execute o comando:
> ng serve
* Abra o navegador e acesse a url:
http://localhost:4200/

### Market API
O backend foi desenvolvido com PHP 8.2 em conjunto com o banco de dados PostgreSQL 15. 

Para a utilização do banco de dados:
* Realize a instalação do PostgreSQL 15;
* Crie um banco vazio chamado "market", com usuário "postgres" e senha "postgres";
* Execute a aplicação.
* Caso deseje um banco com alguns dados, baixe e restaure o arquivo "market-api/market.sql".

Para executar a aplicação:
* Realize a intalação do PHP 8.2
* Abra o terminal e acesse a pasta "market-api"
* Execute o comando:
> php -S localhost:8080

Para testar as APIs, recomendo a utilização de softwares como Postman ou Insomnia. Estão disponíveis as seguintes requisições: 

#### Tipos de Produtos
* Get: http://localhost:8080/product-types
* Post: http://localhost:8080/product-types

    Exemplo de Body JSON:
    ```json
    {
        "code": "006",
        "description": "Convenience products",
        "tax_rate": 0.1
    }
    ```

#### Produtos
* Get: http://localhost:8080/products
* Post: http://localhost:8080/products

    Exemplo de Body JSON:
    ```json
    {
        "code": "002",
        "description": "Convenience products",
        "unit_price": 1.50,
        "type": "44185f15-1b74-49d5-8187-993b6467a7dd"
    }
    ```

#### Vendas
* Get: http://localhost:8080/sales
* Post: http://localhost:8080/sales

    Exemplo de Body JSON:
    ```json
    {
        "total": 15.00,
        "tax": 3.00,
        "items": 
        [
            {
                "quantity": 3,
                "price": 2.00,
                "tax": 0.50,
                "id_product": "c15b1aaa-4dd9-4776-b9bb-d0178e24f468"
            },
            {
                "quantity": 5,
                "price": 10.00,
                "tax": 1.50,
                "id_product": "2ea80600-0613-4a2f-b20b-bec6e300786a"
            }
        ]
    }
    ```
