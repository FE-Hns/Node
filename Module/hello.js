/*
 * @Author: hunaisong 
 * @Date: 2017-09-14 13:30:07 
 * @Last Modified by: hunaisong
 * @Last Modified time: 2017-09-14 13:34:11
 */
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName
    }
    this.sayHello = function () {
        console.log("Hello "+name)
    }
}

module.exports = Hello;