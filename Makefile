VERSION=`cut -d '"' -f2 $BUILDDIR/../version.js`

UNAME := $(shell uname)

ifeq ($(UNAME), Linux)
  SHELLCMD := bash
endif

ifeq ($(UNAME), Darwin)
  SHELLCMD := sh
endif

test:
	$(SHELLCMD) scripts/prepare.sh test
live:
	$(SHELLCMD) scripts/prepare.sh live