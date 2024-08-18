just for uni-ui demo

# dev
```bash
cd /path/to/uni-ui
yarn link

cd .
nvm use 20.16.0
npm i -g yarn@1.22.22
yarn link "@dcloudio/uni-ui"
# yarn link v1.22.22
# warning package.json: No license field
# success Using linked package for "@dcloudio/uni-ui".
# Done in 0.04s.

ls -last node_modules/@dcloudio/uni-ui
# 0 lrwxrwxrwx 1 wuwu wuwu 52 Aug 17 23:52 node_modules/@dcloudio/uni-ui -> ../../../../../../.config/yarn/link/@dcloudio/uni-ui

# check src/pages.json easycom/custom uni-(.*) config

# run
yarn run dev:h5
nvim .
```

