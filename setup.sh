APPNAME="myapp"

mkdir $APPNAME
cd $APPNAME

## Install Node LTS
echo 22.2.0 > .node-version
nodenv install
node -v

## Install Next.js
npm install next@latest react@latest react-dom@latest typescript@latest @types/react @types/node
mkdir app

## Download .gitignore (needs curl)
curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore

## add Scripts to package.json (needs jq)
cat package.json | jq '. |= .+{"scripts": {"dev":"next dev","build":"next build","start":"next start","lint":"next lint"}}' > package.json.new
cp ./package.json ./package.json.bak
mv ./package.json.new ./package.json
