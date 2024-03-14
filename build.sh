##rm -f dist/main.d.ts

rm -r dist

mkdir dist

mkdir ts

mkdir js

cp -a lib/. ts

tsc  --target esnext --outfile dist/main.js --module system

mv dist/main.js js/main.js

mv dist/main.d.ts js/main.d.ts
