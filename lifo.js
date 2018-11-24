function Stack() {
    this.dataStore = [];
    this.top = 0;
}
Stack.prototype = {
    constructor: Stack,
    // 入栈top++ 后 top+1 this.top=0;++top 后top+1;  this.top++=1;
    push: function(element) {
        this.dataStore[this.top++] = element;
    },
    // 出栈
    pop: function() {
        return this.dataStore[--this.top];
    },
    // 返回栈顶元素
    peek: function() {
        return this.dataStore[this.top - 1];
    },
    // 清空一个栈
    clear: function() {
        this.top = 0;
    },
    //站内元素个数
    length: function() {
        return this.top;
    }


}

var s = new Stack();
s.push("展");
s.push("徐");
s.push("肖");
s.push("张");
s.push("张");
s.push("刘");
s.push("倪");
s.push("冯");
// 测试
console.log(s)
console.log("length:" + s.length());
console.log(s.peek());
console.log(s.peek());
// ------------------------------------------------------
// 例子 数制间的相互转换
// 此算法只针对10进制转换为基数为 2~9 的情况。
function mulBase(num, base) {
    var ss = new Stack();
    // while：先判断再执行。

    // do ...
    //     while： 先执行再判断。（ 无论如何会执行一次循环体里面的代码， 二while循环有可能一次都不会执行）
    do {
        ss.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    // console.log(ss)
    var converted = "";
    while (ss.length() > 0) {
        converted += ss.pop();
    }
    return converted;
}

// mulBase(32, 2)
console.log(mulBase(32, 2))
console.log(mulBase(32, 8))
console.log(mulBase(10000, 2))
    // -------------------------------------------------------------

//  判断给定字符串是否是回文
function isPalindrome(word) {
    const ss = new Stack();
    for (let i = 0; i < word.length; i++) {
        ss.push(word[i]);
    }
    var rword = '';
    // console.log(ss.length())
    while (ss.length() > 0) {
        rword += ss.pop();
        console.log(rword)
    }
    if (rword == word) {
        return true;
    } else {
        return false;
    }
}

function judge(word) {
    if (isPalindrome(word)) {
        console.log(word + " is a palindrome");
    } else {
        console.log(word + " is not a palindrome");
    }
}
judge("hello")
judge("racecar")