(function() {

    var validar_email =/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;


    console.log(validar_email.test("asWsdd@gmail.com") === true);
    console.log(validar_email.test("aaa.eeee.ccc@gsdf.t") === true);
    console.log(validar_email.test("asd23123@121213.com") === true);
    console.log(validar_email.test("@dsda.com") === false);
    console.log(validar_email.test(".asd") === false);
    console.log(validar_email.test("    ") === false);
    console.log(validar_email.test("123123@323223.asd") === false);
    


})();
