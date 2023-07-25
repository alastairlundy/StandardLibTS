##rm -f dist/main.d.ts

mkdir src/dist/ts

mkdir src/dist/js

cp -a src/lib/. src/dist/ts 

tsc  --target esnext --outfile src/dist/main.js --module system

mv src/dist/main.js src/dist/js/main.js

mv src/dist/main.d.ts src/dist/js/main.d.ts
