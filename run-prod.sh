cd /app/sai-back/build

node ace migration:run --force
# node ace swagger:generate
dumb-init node server.js
