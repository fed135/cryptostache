cryptostache
============

A short, 16bit, one-sided "encryption" with pretty-print optional output (bar code, coloured avatar, etc)


Usage:

    var encoder = new cryptostache();
    encoder.encrypt("some string from hell 666");

    console.log(encoder.value);
    //1039373632393a393437333339373634

    var barcodeImg = new Image();
    barcodeImg.src = encoder.barcode();

