# srpl
Search and replace in large files using node &amp; npm with regexp without freeze ^^

Ex. a large my_db.sql file 10GB ->

```bash
npm install srpl -g
```

From Terminal / CMD
```
srpl my_db.sql '2017/12/(.*?).png' '2017/12/png/\$1.png'
```

It should now create a copy repl_my_db.sql with all strings 2017/12/\*.png replaced by 2017/12/png/\*.png

Where * is a wildcard

(It now only supports global replacement)
