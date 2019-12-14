
PROJECTNAME="Copy Link"

all: prelogue archive epilogue

prelogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build started"
	@echo ""

archive: ./app
	@zip copy-link.zip -r ./app

epilogue:
	@echo ""
	@echo ">>> $(PROJECTNAME) build has successfully finished"
	@echo ""

.PHONY: prelogue archive epilogue
