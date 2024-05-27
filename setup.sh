PROJECT_NAME="myapp"
NODE_VERSION="22.2.0"

mkdir $PROJECT_NAME
cd $PROJECT_NAME

## Install Node LTS
echo $NODE_VERSION > .node-version
nodenv install
node -v

## Download .gitignore (needs curl)
curl -o .gitignore https://raw.githubusercontent.com/github/gitignore/main/Node.gitignore

## Install Next.js
npm install next@latest react@latest react-dom@latest typescript@latest @types/react @types/node
mkdir app

## Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

## add Scripts to package.json (needs jq)
cat package.json | jq '. |= .+{"scripts": {"dev":"next dev","build":"next build","start":"next start","lint":"next lint"}}' > package.json.new
cp ./package.json ./package.json.bak
mv ./package.json.new ./package.json
