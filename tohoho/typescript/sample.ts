// 「: 型名」を指定すると型宣言が出来る
let v_bool: boolean = true;
let v_num: number = 123;
let v_str: string = "ABCDEFG";
let v_null: null = null;
let v_undef: undefined = undefined;

// list, tuple
let v_arr1: string[] = ["Red", "Green", "Blue"];
let v_arr2: Array<string> = ["Red", "Green", "Blue"];
let v_tuple: [string, number] = ["Yamada", 26];

//object
let v_obj: object = {"name": "Yamada", "age": 26};

// enum
enum Color {Red, Green, Blue};
let v_enm: Color = Color.Green;

// class
class MyClass { name: string; }
var val_class: MyClass = new MyClass();

// 任意の型
let v_any: any = 4;

// stringかnumber
let v_strnum: string | number = "aa";

// function: voidは値を返却しない事を意味する
function hello(name: string): void {
  console.log("Hello " + name + "!");
}
let your_name: string = "Yamada";
hello(your_name);

// function: neverはreturnなしを意味する
function error(msg: string): never {
  throw new Error(msg);
}

// 型アサーション（as XXXX）
interface Person {
  name: string;
  age: number;
}
let bar = {} as Person
bar.name = "Yamane"; // 型アサーションがないとエラーになる

// 型に別名をつける
type yesno = boolean;
let flag: yesno = true;
