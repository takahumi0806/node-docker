# Name 
 
掲示板アプリ
 
ユーザー登録後にコメントを投稿できるアプリケーション
  
# Features
 
新規ユーザー登録、ログイン機能を実装、今後コメントの投稿、編集、削除機能を追加していく。
 
# Requirement
```bash
node.js v14.4.0
Docker Engine Version: 20.10.5
```
# Installation
$ npm init
#
$ npm install express --save
#
$ npm install ejs --save
#
$ npm install nodemon
#
$ npm install mysql
#
$ npm install body-parser
#
$ npm install passport
#
$ npm install passport-local
#
$ npm install jsonwebtoken
#
$ npm install --save express-validator
#
$ npm install express-session
#

# Usage
$ git clone https://github.com/takahumi0806/node-docker.git
＄ cd node-docker
# 開発環境の立ち上げ
```bash
.envファイル作成
MYSQL_ROOT_HOST=%
MYSQL_ROOT_PASSWORD=root
MYSQL_SERVER=mysql
MYSQL_USER=takafumi
MYSQL_PASSWORD=root
MYSQL_DATABASE=post_dbと入力
$ docker-compose build
$ docker-compose run --rm app /bin/bash
#コンテナ起動
$ npm install
$ npm install express --save
$ npm install ejs --save
$ npm install nodemon
$ npm install mysql
$ npm install body-parser
$ npm install passport
$ npm install passport-local
$ npm install jsonwebtoken
$ npm install --save express-validator
$ npm install express-session
$ exit
#コンテナを抜ける
$ docker-compose up -d
#コンテナID確認
$ docker ps
$　docker exec -it コンテナID bash
#mysql起動
$mysql -u root -p
#パスワード入力
#データベース作成されているか確認
show databases;
exit
```
# Author
* 作成者/yabuta
* 所属/千葉県市原市出身
* E-mail/yabuta@hotmail.com
 
# License

Copyright free
