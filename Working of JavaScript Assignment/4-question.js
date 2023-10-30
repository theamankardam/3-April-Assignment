// 04. Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
// them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting.



{
    // console.log(one); // throw refernceError
    console.log(two);
    // console.log(three); // throw refernceError

    let one = 11;
    var two = 12;
    const three = 13

    console.log(one);
    console.log(two);
    console.log(three);


}