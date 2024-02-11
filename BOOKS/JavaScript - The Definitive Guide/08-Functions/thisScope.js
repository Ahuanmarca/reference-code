let o = {                      // An object o.
  m: function () {             // Method m of the object.
    let self = this;           // Save the "this" value in a variable.
    console.log(this === o);   // => true: "this" is the object o.
    f();                       // Now call the helper function f().

    function f() {              // A nested function f
      console.log(this === o);  // => false: "this" is global or undefined
      console.log(self === o);  // => true: self is the outer "this" value.
    }

    // Workaround using Arrow Function
    const f2 = () => {
      console.log(this === o);  // true
    }
    f2();

    // Workaround using bind() method
    const f3 = (function() {
      console.log(this === o);
    }).bind(this);
    f3();
  },
};

o.m();              // Invoke the method m on the object o.
