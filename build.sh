##rm -f dist/main.d.ts

mkdir dist/ts

mkdir dist/js

cp -a lib/. dist/ts

tsc  --target esnext --outfile dist/main.js --module system

mv dist/main.js dist/js/main.js

mv dist/main.d.ts dist/js/main.d.ts
