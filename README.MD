
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

# CapFrontend

Projeto desenvolvido na versão ^17.3.6 do Angular Cli e Node versão 20.12.2.

 Tem por finalidade mostrar meu know-how em Angular e pode ser usado como template efetuando alguns ajustes conforme sua necessidade.

## Development server

# CapFrontend



## Development server

Execute `ng serve` para abrir um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. A aplicação será carregada automaticamente se você modificar algum dos arquivos de origem(Hot Reload).

## Build

Execute `ng build` para buildar o projeto. O Artifact do projeto será armazenado no diretório `dist/`.

## Rodando o Projeto em um Container

Para fins de facilidade, e caso não queira instalar determinadas versões do node e angular CLI, deste modo poluindo seu ambiente local, este projeto foi atualizado com o dist(artefato buildado) da aplicação.

Para subir um container desta aplicação rode o comando:

> docker-compose up

Após executar o comando, o docker irá carregar os arquivos da pasta /dist em um servidor NGINX dentro de um container docker, para usar a aplicação dentro do container, navegue até:

[LOCALHOST:8080](http://localhost:8080)

Se você efetuar qualquer alteração no código e quiser rodar um novo container terá que buildar a aplicação e gerar um /dist.

**NÃO ESQUEÇA DE SUBIR O BACK-END DA APLICAÇÃO, QUE SE ENCONTRA https://github.com/W4rL0ck1/cap-backend**

# Utilizando a Aplicação

Com a Aplicação rodando basta efetuar o cadastro na página inicial do projeto, ou você pode efetuar o login utilizando as credenciais abaixo:

`login: renato.teste@teste.com
senha: renato123`

Pronto! Basta Utilizar a aplicação! :D

