cryptostache
============

WIP

A short 2-sided encryption script that can turn your strings/ product keys into mustache-shaped bar codes! 


Usage:

    var encoder = new cryptostache();
    encoder.encrypt("body_lotion");

    console.log(encoder.value);
    //1039373632393a393437333339373634

    var barcodeImg = new Image();
    barcodeImg.src = encoder.barcode();
