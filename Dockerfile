# FROM define nossa imagem base para a construção da nova imagem.
FROM node:16

# O RUN executa comandos do terminal
# Aqui vamos atualizar os pacotes do ubuntu
RUN apt-get update

# O ENV define variáveis de ambiente
# Aqui estamos definindo a variável PORT que esta sendo usada para escolher a porta na aplicação express
ENV PORT=3000

# EXPOSE determina qual porta do contêiner será visível para o host.
EXPOSE 3000

# WORKDIR define a pasta raiz da sua aplicação
WORKDIR /app

# COPY copia os arquivos package.json e yarnlock para a pasta raiz do contêiner.
COPY [ "package.json", "yarn.lock" ] .

# Nesse casso vamos executar o yarn para restaurar as dependências.
RUN yarn

# Aqui estamos copiando todos os arquivos da pasta onde atual
# e mandando para a pasta raiz no contêiner.
COPY . .

# User define o usuario do ubuntu.
USER node

# CMD é o comando usado para iniciar a aplicação.
CMD [ "yarn", "start" ]