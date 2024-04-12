DB=ecommerce
DATA=${CURDIR}/data
USERS=$(DATA)/users.csv
PRODUCTS=$(DATA)/products.csv
BUILD=${CURDIR}/build.sql
CHECK_VARIABLES=${CURDIR}/check_variables.txt

SCRIPTS=${CURDIR}/scripts
CREATE_TABLES=$(SCRIPTS)/create_tables.sql
IMPORT_USERS=$(SCRIPTS)/import_users.sql

all: import_users
	mysql -u root $(DB) < $(BUILD)
	@echo "script finished"

create_tables:
	@cat $(CREATE_TABLES) >> $(BUILD)

import_users: create_tables
	mysql -u root --load-data-local-dir=$(DATA)
	@echo "load data infile '$(USERS)'" >> $(BUILD)
	@cat $(IMPORT_USERS) >> $(BUILD)

check_variables:
	@rm -rf $(CHECK_VARIABLES)
	@echo $(DB) >> $(CHECK_VARIABLES)
	@echo $(DATA) >> $(CHECK_VARIABLES) 
	@echo $(USERS) >> $(CHECK_VARIABLES) 
	@echo $(PRODUCTS) >> $(CHECK_VARIABLES) 
	@echo $(BUILD) >> $(CHECK_VARIABLES)

clean:
	@rm -rf $(CHECK_VARIABLES)
	@rm -rf $(BUILD)