NAME := front_nyffin
FRONT_DIR := ./
DOCKER := docker
DC := docker-compose

all: up logs

up:
	$(DC) up --build --detach

exec:
	$(DOCKER) exec -it $(NAME) sh

build:
	$(DOCKER) exec -it $(NAME) yarn build

deploy:
	./deploy.sh

re: fclean all

reload: down all

logs:
	$(DC) logs --follow --tail 1000

stop:
	$(DC) stop

down:
	$(DC) down

ps:
	$(DC) ps

fclean:
	$(DC) down --rmi all --volumes
	rm -rf ${FRONT_DIR}/dist
	rm -rf ${FRONT_DIR}/node_modules
