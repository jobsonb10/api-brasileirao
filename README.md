# Api do Brasileirão - NodeJs

<img src="https://imagens.ebc.com.br/jGJLvB1YQEG5kgMYH4OnRKrfDUM=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/cbf_calendario_brasileirao_2021.png?itok=jcKB5J0J" alt="Calendario esportivo"/>

>Api criada para estudar conceitos de back-end, utilizando Node.Js com MongoDB. Nessa Api eu crio um CRUD completo dos times que compõe o campeonato brasileiro(Série A).

Para utilizar o projeto faça o dowload do arquivo .zip desse repositório, ou faça um git clone caso preferir.

Na pasta onde salvou o projeto, abra o terminal e execute o comando `npm i` para baixar as dependencias do projeto.

### Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_marvel.


Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```

## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3333/times
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3333/times/5
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3333/filterByName?nome=Fla


Essa é a estrutura JSON para fazer o POST e o PUT:
*Inclusive já pode usar esse JSON como seu primeiro time a cadastrar! :D*

```json
{
    "nome": "Cuiabá",
    "cidade": "Cuiabá",
    "estado": "Mato Grosso",
    "idade": 20,
}
```

Obrigado por testar e utilizar minha API, volte sempre!
