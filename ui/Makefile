.EXPORT_ALL_VARIABLES:
SHELL = bash
.PHONY: test build

repl:
	clj -A:dev -R:dev -e "(repl)" -r

clean:
	rm -rf target/ .cpcache/

prod:
