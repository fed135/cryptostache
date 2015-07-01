# cryptostache


A short 2-sided encryption script that can turn your strings/ product keys into mustache-shaped bar codes! 


## Installation

1. You need to make sure that Cairo is installed on your system.
  The platform-specific guides can be found here: https://github.com/Automattic/node-canvas/wiki/_pages

2. Install the cryptostache package

    $ npm install cryptostache --save


## Usage

    var cryptostache = require('cryptostache');

    var product_code = new cryptostache();
    encoder.encrypt('some_product_code', 'secret_key');

    console.log(product_code.value);
    //The encoded product code (Hex string)

    console.log(product_code.barcode());
    //The base64 image data for your shiny new barcode :D


## Customization

1. You can specify the mask to use to create other shapes of barcode !

    product_code.template = (your base64 mask data)

2. You can specify the color for the bars. (background is transparent)

    product_code.barcode('red');


## TODO

1. Finish masking

1. Add tests

2. Document ideal template sizes

3. Docs

## Why?

Why not?
