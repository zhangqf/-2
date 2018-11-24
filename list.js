function List() {
    this.listSize = 0; //列表的元素个数
    this.pos = 0; //列表的当前位置
    this.dataStore = []; //初始化一个空数组来保存列表元素
}
List.prototype = {

    // 将列表的当前位置移动到第一个元素
    front: function() {
        return this.pos = 0;
    },
    // 将列表的当前位置移动到最后一个元素
    end: function() {
        this.pos = this.listSize + 1;
    },
    // 将当前位置后移一位
    prev: function() {
        if (this.pos > 0) {
            --this.pos
        }
    },
    // 将当前位置前移一位
    next: function() {
        if (this.pos < this.listSize) {
            return ++this.pos
        }

    },
    //返回列表的字符形式
    tostring: function() {
        return this.dataStore;
    },
    // 清空列表的所有元素
    clear: function() {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    },
    //返回当前位置的元素
    getElement: function() {
        return this.dataStore[this.pos];
    },
    // 在列表末尾添加新元素
    append: function(element) {
        this.dataStore[this.listSize++] = element;
    },
    // 在现有元素后插入新元素
    insert: function(element, after) {
        if (after < this.dataStore.length) {
            this.dataStore.splice(after, 0, element);
            return true
        }
        return false;
    },
    // 从列表中删除元素
    remove: function(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                this.dataStore.splice(i, 1);
                --this.listSize;
                return true;
            }
        }
        return false;
    },
    // 判断给定值是否在列表中
    contains: function(element) {
        for (var i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] == element) {
                return true
            }
        }
        return false;
    },
    // 返回列表的当前位置
    currPos: function() {
        return this.pos;
    },
    // 将当前位置移动到指定位置
    moveTo: function(position) {
        this.pos = position;
    },
    // 列表中有多少个元素
    length: function() {
        return this.listSize;
    }
}


var names = new List();
names.append("展");
names.append("徐");
names.append("肖");
names.append("张");
names.append("张");
names.append("刘");
names.append("倪");
names.append("冯");
names.next();
names.next();
names.prev();
// console.log(names.getElement());
// console.log(names.front());
// console.log(names.currPos());
// console.log(names.length());
// console.log(names.next());


for (names.front(); names.currPos() < names.length(); names.next()) {
    console.log(names.getElement());
}
// ------------------------------------------------------------------------------
// 有bug
// for (names.end(); names.currPos() >= 0; names.prev()) {
//     console.log(names.getElement());
// }


// print(names.getElement());
// console.log(
//     `用数组索引的方式相比， 使用迭代器的一些优点： 
// 	访问列表元素时不必关心底层的数据存储结构。
// 	当为列表添加一个元素时， 索引的值就不对了， 此时只用更新列表， 而不用更新迭代器。
// 	可以用不同类型的数据存储方式实现 cList 类,迭代器为访问列表里的元素提供了一种统一的方式。`
// )
// -----------------------------------------------------------------------------------
// 一个基于列表的应用 



// var movies = read("filem.txt").split("\n")
// console.log(movies)

// -----------------------------------------------------------------------------------------
// FileSystemObject 对象 https://baike.baidu.com/item/FileSystemObject%E5%AF%B9%E8%B1%A1/15680652


//JS创建、写入、读取本地文件
// 创建本地文件
// function file() {
//     var fso;
//     try {
//         return fso = new ActiveXObject("Scripting.FileSystemObject");
//     } catch (e) {
//         alert("当前浏览器不支持");
//         return
//     }
// }
// createtextfile包含三个参数， 1. 文件的绝对路径； 2. 文件的常数 只读为1， 只写为2 等； 3. 允许新建为true， 相反为false；

// var f1 = file().createtextfile("D:\\121212.txt", true);
// 写入文件
// f1.write("这是我创建的一个文本文档");
//写入一行 
// f1.writeLine("这是您创建的一个文本文档");

// 读取文件
// var openf1 = file().OpenTextFile("F:\新建文件夹 (3)\test\filem.txt");
// 读取一行内容 
// var str1 = openf1.ReadLine();
//读取全部内容
// var str2 = openf1.ReadAll();

// alert(str1)

// -------------------------------------------------------------------------