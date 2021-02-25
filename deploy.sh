rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
#git remote add origin git@github.com:Leerongyue/linkUI-website.git &&
git remote add origin git@gitee.com:leerongyue/link-ui-website.git &&
git push -f -u origin master &&
cd -
#echo https://leerongyue.github.io/linkUI-website
#echo https://leerongyue.gitee.io/link-ui-website