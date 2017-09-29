/*
 * @Author: hunaisong 
 * @Date: 2017-09-29 13:26:46 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-29 13:56:49
 */
// 从数据库查询
var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'test'
})
connection.connect();
var sql = 'SELECT * FROM websites';

connection.query(sql,function (err,results) {
    if (err) {
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }else{
        console.log('----------SELECT-------------');
        console.log(results);
        console.log('------------------------------\n\n');
    }
})