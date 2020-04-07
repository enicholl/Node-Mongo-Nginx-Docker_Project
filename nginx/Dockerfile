# uses nginx base image
FROM nginx

# copies our reverse-proxy config into image
COPY . /

# disable the default configuration for nginx
RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.disabled

# link our reverse-proxy.conf to be the new configuration of nginx
RUN ln -s /reverse-proxy.conf /etc/nginx/conf.d/reverse-proxy.conf

# starts nginx and disables the daemon to prevent constant restarting
CMD ["nginx", "-g", "daemon off;"]
