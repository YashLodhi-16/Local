console.log('YASH LODHI');

// tut=49;

let regex = /\war/;

// regex = /\w+d1r/;

// regex = /\Wbhai/;

// regex = /\W+bhai/;

// regex = /number \d999/;

// regex = /number \d+/;

// regex = /\D999/;

// regex = /\D+999/;

// regex = /\ska number/;

// regex = /\s+ka number/;

// regex = /\Ska number/;

// regex = /\S+ka number/;

// regex = /4r5r\b/;

// regex = /h(?=y)/;

// regex = /h(?!y)/;

let str = "hasfjsjf93409809q80r$!$@#^$^&!$^&W#@# erjjsn u932 jerqw202303";

tut=51;

function myIterable(){
    let counter = 0;
    return {
        next: function(){
            if (counter < 5) {
                counter++;
                return { done: false, value: counter, };
            } else {
                return { done: true, value: undefined};
            }
        }
    }
}