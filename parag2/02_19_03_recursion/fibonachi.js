var many = +prompt("задайте ваше число фибоначчи?", '');
var choise = +prompt("каким вариантом считать ваше число фибоначчи 1-екурсия, 2- цикл", '');

switch (choise) {
    case 1:
        {
            function fib(n) {
                return n <= 1 ? n : fib(n - 1) + fib(n - 2);
            }
            alert(fib(many));
        }
        break;

    case 2:
        {

            function fib(n) {
                var a = 1;
                var b = 1;
                for (var i = 3; i <= n; i++) {
                    var c = a + b;
                    a = b;
                    b = c;
                }
                return b;
            }
            alert(fib(many));
            break;
        }

    default:
        alert("надо было выбирать из предложенных вариантов");
}
