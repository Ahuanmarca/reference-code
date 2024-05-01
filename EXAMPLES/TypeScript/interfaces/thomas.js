var _this = this;
var tom = {
    id: 1,
    first: 'Thomas',
    last: 'Anderson',
    nickname: 'Neo',
    greet: function () {
        this.nickname
            ? console.log("hi, I'm ".concat(this.first, " \"").concat(this.nickname, "\" ").concat(this.last))
            : console.log("hi, I'm ".concat(this.first, " ").concat(this.last));
    },
    hello: function () {
        console.log("hi, I'm ".concat(_this.first, " ").concat(_this.last));
    },
    speak: function (line) {
        console.log("".concat(this.first, " says: ").concat(line));
    }
};
tom.greet();
tom.hello();
tom.speak('I know kung fu');
