// 「: 型名」を指定すると型宣言が出来る
var v_bool = true;
var v_num = 123;
var v_str = "ABCDEFG";
var v_null = null;
var v_undef = undefined;
// list, tuple
var v_arr1 = ["Red", "Green", "Blue"];
var v_arr2 = ["Red", "Green", "Blue"];
var v_tuple = ["Yamada", 26];
//object
var v_obj = { "name": "Yamada", "age": 26 };
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var v_enm = Color.Green;
// class
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    return MyClass;
}());
var val_class = new MyClass();
// 任意の型
var v_any = 4;
// stringかnumber
var v_strnum = "aa";
// function: voidは値を返却しない事を意味する
function hello(name) {
    console.log("Hello " + name + "!");
}
var your_name = "Yamada";
hello(your_name);
// function: neverはreturnなしを意味する
function error(msg) {
    throw new Error(msg);
}
var bar = {};
bar.name = "Yamane"; // 型アサーションがないとエラーになる
var flag = true;
