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
$ npm install --save sequelize
#
$ npm install --save pg pg-hstore

# Usage
$ git clone https://github.com/takahumi0806/node-docker.git 

＄ cd node-docker
# 開発環境の立ち上げ
1.設定ファイル(.env)を生成する。
```bash
.envファイル作成
$ cp .env.example .env
```
2.dockerイメーげを生成する
```bash
$ docker-compose build
```
3.dockerコンテナを起動する
```bash
$ docker-compose up -d
$ docker-compose run --rm app /bin/bash
```
4.インストールする
```bash
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
```
5.データベース確認
```bash
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
