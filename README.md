# github-issues-importer

Import Github issues from various sources (CSV, Excel, etc.)


## Usage

```
node bin/import --file ./issues.xlsx --auth 'user:pass' --repo 'my-conf/cfp-review-2014'
Parsing | ./issues.xlsx
Reading issues | my-conf/cfp-review-2014
Already exists | ZOMG JAVASCRIPT
Already exists | JIFASNIF
Already exists | WHY CANT WE DO ALL THE THINGS
Creating | SOME OTHER NEW TALK
Creating | THAT MEANS THIS IS IDEMPOTENT
```

_n.b. the script is designed to be idempotent so you can run it multiple times and everything will be fine._



## Parsing and Format

This was originally designed (and defaults to) the [CFP format used by EmpireJS 2014][empirejs-cfp-2014]:

| Title | Description |       Type       |    Priority    |    Dificulty   | Anything else? |
|:-----:|:-----------:|:----------------:|:--------------:|:--------------:|:--------------:|

If you would like to use a custom CFP format and template that's easy! Just use the following options:

```
  import-github-issues -t ./path/to/template.md -p ./path/to/parser.js
```

Where the `parser.js` would look something like:

``` js
module.exports = function (columns) {
 return {
      'title': parts[0],
      'description': parts[1],
      'labels': [labels.groups.type[parts[2]],labels.groups.priority[parts[3]],labels.groups.issueCost[parts[4]]],
      'anything-else': parts[5] || ''
    };
};
```

The above matches the default which has a corresponding `issue.md` template under `/templates`:

```
## Description

<description>

## Questions/Comments/You Oughta Know/Anything else? Feel free to put the kitchen sink in here.

<anything-else>
```

