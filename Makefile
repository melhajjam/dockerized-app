build:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d --build
up:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml up -d
down:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml down
restart:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml restart
ps:
	@docker ps
status:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml ps -f --tail=100
stop:
	@docker-compose -f docker-compose.yml -f docker-compose-dev.yml stop

.PHONY: build up down restart status stop