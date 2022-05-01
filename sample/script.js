// 値段の生成
var price = 12300;
document.write('<p>価格：' + price + '円</p>');
const tax = 0.08;
price = price * ( 1.0 + tax );
document.write('<p>税込価格' + price + '円</p>');

// オブジェクト生成
var obj = new Object();
obj.data = [100,82,69,77,91];
obj.calc = function () {
    var total = 0;
    for( var n in this.data ){
        total += this.data[n];
    }

    var avarage = total / 5;
    //合計点、平均点の出力
    document.write('<p>合計は' + total + 'です。平均点は' + avarage + 'です</p>');
}

obj.calc();

var obj1 = {
    data : [100,82,69,77,91],
    calc : function( score ) {
        var total = score;
        for (var n in this.data ){
            total += this.data[n];
        }
    var avarage = total / 5 ;
    document.write('<p>合計は' + total + 'です。平均点は' + avarage + 'です</p>');

    }
}

obj1.calc(10);