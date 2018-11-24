var grades = [[89,77,78],[76,82,81,],[91,94,89]];
var total = 0;
var average = 0.0;
// 个人平均成绩
for(var row = 0;row<grades.length;++row){
	for(var col = 0;col<grades[row].length;++col){
		total+=grades[row][col];
	}
	average = total/grades[row].length;
	print("student"+ parseInt(row+1)+"average:"+average.toFixed(2));
	total= 0;
	average=0.0;
}
// 各科平均成绩
for(var col = 0;col<grades.length;++col){
	for(var row = 0;row<grades[col].length;++row){
		total+=grades[row][col];
	}
	average = total/grades[col].length;
	print("test"+ parseInt(col+1)+"average:"+average.toFixed(2));
	total= 0;
	average=0.0;
}

//  创建一个记录学生成绩的对象， 提供一个添加成绩的方法， 以及一个显示学生平均成绩的方法。
function Student(){
	this.datastore=[];
	// this.add = add;
	// this.average = average;
}
Student.prototype={
	add:function (name,score){
		if(name&&score){
			this.datastore.push({
				name:name,
				score:score
			});
		}else{
			throw '姓名或分数不能为空';
		}
		print(this.datastore[0].name +'--'+ this.datastore[0].score)
		
	},
	average:function(){
		var total=0;
		for(var i =0;i<this.datastore.length;++i){
			total+=this.datastore[i].score;
		}
		return total/this.datastore.length;
	}
}

// function add(temp){
// 		this.datastore.push(temp);
// 	}
// function average(){
// 	var total=0;
// 	for(var i =0;i<datastore.length;++i){
// 		total+=this.datastore[i];
// 	}
// 	return total/this.datastore.length;
// }


var student = new Student();
student.add('赵刚',72);
student.add('田璐',82);
student.add('孙斌',72);
student.add('李云',92);
student.add('周玲玲',62);
student.add('吴毅',72);
student.add('郑轩',86);

// console.log(student.average())

print(student.average());


// 将一组单词存储在一个数组中， 并按正序和倒序分别显示这些单词

function Words(){
	this.datastore=[];
}
Words.prototype={
	save:function(temp){
		for(var i = 0;i<temp.length;i++){
			this.datastore.push(temp[i]);
		}
	},
	show:function(){
		// console.log(this.datastore)
		print(this.datastore)
	},
	showreverse:function(){
		// console.log(this.datastore.reverse())
		print(this.datastore.reverse())
	}
}
var words = new Words();
var arr=['food','good','nice','beautiful']
// words.save("aa")
words.save(arr);
words.show();
words.showreverse();


// 修改本章前面出现过的 weeklyTemps 对象， 使它可以使用一个二维数组来存储每月的有
// 用数据。 增加一些方法用以显示月平均数、 具体某一周平均数和所有周的平均数。

// function weekTemps() {
// this.dataStore = [];
// this.add = add;
// this.average = average;
// } 
// function add(temp) {
// this.dataStore.push(temp);
// } 
// function average() {
// var total = 0;
// for (var i = 0; i < this.dataStore.length; ++i) {
// total += this.dataStore[i];
// } 
// return total / this.dataStore.length;
// } 
// var thisWeek = new weekTemps();
// thisWeek.add(52);
// thisWeek.add(55);
// thisWeek.add(61);
// thisWeek.add(65);
// thisWeek.add(55);
// thisWeek.add(50);
// thisWeek.add(52);
// thisWeek.add(49);
//print(thisWeek.average()); // 显示 54.875

function WeeksTemps(){
	this.datastore=[];

}
WeeksTemps.prototype={
	save:function(temp){
		for(var i=0;i<temp.length;++i){
			this.datastore.push(temp[i])
		}
		console.log(this.datastore.length)
	},
	monthaverage:function(){
		var total=0;
		var month=[];
		for(var i=0;i<this.datastore.length;i++){
			for(var j=0;j<this.datastore[i].length;j++){
				total+=this.datastore[i][j];
			}
			month.push(total/this.datastore[i].length);
		}
		return month;
	},
	weeksaverage:function(){

	},
	everweeksaverage:function(){

	}
}

var week = new WeeksTemps();
var arr1 = [[12,11],[212],[1112,855,11,2,],[22],[12,15,36,15],[55,24,63],[557,55,67,88],[93,97,658],[652,88,98,77,56],[66,49,88,77,55,14],[212],[1112,855,11,2,]];
week.save(arr1)
console.log(week.datastore)
console.log(week.monthaverage())

// 创建这样一个对象， 它将字母存储在一个数组中， 并且用一个方法可以将字母连在一
// 起， 显示成一个单词

function Dataword(data){
	if(!(data instanceof Array)){
		console.log('请传入一个数组');
	}
	this.data=data;
	this.letter = function (){
		return this.data.join("");
	}
}

var dataword = new Dataword(["a",'e','a','o','e']);
var www = dataword.letter();
print(www)