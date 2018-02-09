# srpl
Search and replace in large files using node &amp; npm with regexp without freeze ^^

Ex. a large my_db.sql file 10GB ->

```bash
npm install srpl -g
```

**Takes 4 arguments, 3 first is required:**

srpl [ source_file search_regexp replace_regexp flag ]

From Terminal / CMD
```
srpl my_db.sql '2017/12/(.*?).png' '2017/12/png/\$1.png' 'ig'
```

It should now create a copy repl_my_db.sql with all strings `2017/12/*.png` replaced by `2017/12/png/*.png` using flag `ig`, where * is a wildcard

Flag defaults to `g`
