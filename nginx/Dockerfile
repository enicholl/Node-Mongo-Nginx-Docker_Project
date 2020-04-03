FROM nginx

COPY . /

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled

RUN ln -s /appmount/reverse-proxy.conf /etc/nginx/conf.d/reverse-proxy.conf

CMD ["nginx", "-g", "daemon off;"]
