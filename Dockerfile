# Usando a imagem oficial do nginx como base
FROM nginx:alpine

# Removendo o diretório de configuração padrão do nginx
RUN rm -rf /etc/nginx/conf.d/*

# Copiando o conteúdo da pasta dist para o diretório de trabalho do nginx
COPY ./dist/cap-frontend/browser /usr/share/nginx/html

# Expondo a porta 80 para acessar a aplicação através do navegador
EXPOSE 80

# Comando para iniciar o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
