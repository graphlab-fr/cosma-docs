#!/bin/sh
# Copy static content to /docs
STATIC="static/*"
for s in $STATIC
do
	cp $s docs/$(basename "$s")
done
# Convert Markdown content to HTML, output to /docs
FILES="content/*.md"
for f in $FILES
do
	bn=$(basename "$f")
  pandoc -s $f -o docs/${bn%.md}.html \
  -f markdown+ascii_identifiers \
  --standalone \
  --number-sections \
  --template=template.html \
  --toc
done
