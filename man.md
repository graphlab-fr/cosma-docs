Cosma
====

> Cosma - Cosma is a document graph visualization tool.

## SYNOPSIS

`cosma  [config]  [c]  [record]  [r]  [autorecord]  [a]  [batchrecord]  [b]  [modelize]  [m]  [--citeproc]  [-c]  [--publish]  [-p]  [--load_css_custom]  [-css]  [--files_origin]  [-f]  [--export_target]  [-e]  [--lang]  [-l]  [--history]  [-h]  [--save]  [-s]`

## EXAMPLES

`cosma autorecord "my note" "idea", "tag 1,tag2"`

`cosma m -p -c -css`

`cosma b "./records.json"`

## OPTIONS

`config`, `c`
	Generate a template configuration file

`record`, `r`
	Create a record (form mode)

`autorecord`, `a`
	Create a record (oneliner)

`batchrecord`, `b`
	Create a series of records

`modelize`, `m`
	Generate a cosmoscope (visualization)

`modelize --citeproc`, `m -c`
	Generate a cosmoscope with quoting

`modelize --load_css_custom`, `m -css`
	Generate a cosmoscope with custom CSS

`modelize --files_origin`, `m -f`
	Generate a cosmoscope from a directory

`modelize --export_target`, `m -e`
	Generate a cosmoscope to a directory

`modelize --lang`, `m -l`
	Generate a cosmoscope to a directory

`modelize --history`, `m -h`
	Save the cosmoscope to history

`modelize --save`, `m -s`
	Save options to the config file

## LICENSE

ANR HyperOtlet, GPL-3.0 License.