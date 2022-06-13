# Teste Kukac

## Sumário
- **[Documentação](#documentação)**
- **[Desafios](#desafios)**
- **[Instalação](#instalação)**
- **[Tecnologias](#tecnologias)**

## Documentação
**Todas as rotas possuem um prefixo "/api".**  
**Esta aplicação não depende Banco de dados** 

### **Desafio 1 (palíndromos)**
/POST: /api/palidromes

Resource URL: http://localhost:3000/api/palindromes

Parameters:
- **first** | required | o primeiro número para do intervalo
- **last** | required | o último número do intervalo

Return: Uma lista de números palíndromos dentro do intervalo de números estabelecido  

### **Desafio 2 (caixa)**
/POST: /api/purchase

Resource URL: http://localhost:3000/api/purchase

Parameters:
- **total** | required | o total da compra
- **payment** | required | valor do pagamento

Return: Valor total da compra, valor do pagamento, valor do troco e a quantidade de notas de 100, 10 e 1 real do troco

### **Desafio 3 (veículos)**
/POST: /api/vehicles

Resource URL: http://localhost:3000/api/vehicles

Parameters:
- **model** | required | modelo do veículo
- **yearManufacture** | required | data de fabricação do veículo
- **brand** | required | marca do veículo
- **quantityDoors** | optional | quantidade de portas que o carro possui. *Esta propriedade só é válida para carros
- **passengers** | optional | quantidade de passageiros que a moto comporta. *Esta propriedade só é válida para motos

**Exemplo de criação de um carro:**  
/POST: /api/vehicles  
Body:  
    - model: 'HB20',  
    - yearManufacture: '12/09/2012',  
    - brand: 'Hyundai',  
    - quantityDoors: 4  

**Exemplo de criação de uma moto:**  
/POST: /api/vehicles  
Body:  
    - model: 'GZP900',  
    - yearManufacture: '03/06/1984',  
    - brand: 'Kawasaki',  
    - passengers: 4

Return: Mensagem de sucesso

**OBS**:  
Os dados gerados ao criar um novo veículo é salvo em um arquivo JSON dentro de **src/database/data.json**


### **Desafio 4 (CEP's)**
/POST: /api/ceps

Resource URL: http://localhost:3000/api/ceps

Parameters: Você deve enviar de 1 a 5 CEP's **válidos** e de preferência sem o "-" (hífen); o nome dos parâmetros você pode escolher.    
**Ex:**  
cep1: 'xxxxxxxx'  
cep2: 'xxxxxxxx'  
cep3: 'xxxxxxxx'

Return: Informações e dados de todos os CEP's informados

## Desafios
1. Números palíndromos são aqueles que escritos da direita para esquerda ou da esquerda para direita tem o mesmo valor. Exemplo: 929, 44, 97379.  
Fazer um algoritmo que imprima todos os números palíndromos entre um intervalo que será escolhido pelo usuário da aplicação.

2. Suponha que um caixa disponha apenas de notas de 1, 10 e 100 reais. Considerando que alguém está pagando uma compra, escreva um algoritmo que  mostre o número mínimo de notas que o caixa deve fornecer como troco.  
Mostre também: o valor da compra, o valor do troco e a quantidade de cada tipo de nota do troco. Suponha que o sistema monetário não utilize moedas.
O valor da compra e o valor de dinheiro entregue ao caixa deve ser informado pelo usuário.

3. Precisamos controlar melhor os dados de alguns veículos que ficam na nossa garagem e para isso precisamos que seja feito o seguinte:  
    - a) Crie a interface “Veiculo” com os seguintes atributos:  
    – Modelo  
    – Ano de fabricação  
    – Quantidade de Portas  
    – Marca  

    - b) Crie a classe “Carro”, que herda de Veículo e tem os seguintes atributos:  
    – Quantidade de Portas: entre 2 e 4  

    - c) Crie a classe “Moto”, que herda de Veículo, e possui os seguintes atributos:  
    – Rodas: 2  
    – Passageiros: entre 1 e 2  

        - Deve ser solicitado ao usuário que preencha as informações sobre o seu veículo, os dados devem ser salvos em um arquivo JSON (para não precisar trabalhar com banco de dados, até porquê já vai ser bem próximo de um banco NoSQL)

4. Deve ser informado pelo usuário 5 CEP’s, a aplicação deve consumir a api [VIACep](https://viacep.com.br/) e obtiver dados sobre esses CEP’s.  
Os CEP’s informados pelo usuário devem ser inicialmente armazenados em um array, e o consumo da API deve ser de forma síncrona (aguardar a   resposta do primeiro para iniciar a requisição do segundo e assim por diante).  
Os dados após o processamento devem ser exibidos na tela.  

## Instalação
### Clone este repositório
`$ git clone https://github.com/guigovaski/teste-kukac.git`

### Instale as dependências
`$ npm install`

### Execute o servidor
`$ npm run dev`

## Tecnologias
As seguintes tecnologias foram utilizadas para desenvolver este projeto:
- [Node](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [Axios](https://axios-http.com/)
