# cryptostache


A script that can turn your hashes into mustache-shaped bar codes! 


## Installation

1. You need to make sure that Cairo is installed on your system.
  The platform-specific guides can be found here: https://github.com/Automattic/node-canvas/wiki/_pages

2. Install the cryptostache package

    $ npm install cryptostache --save


## Usage

    var cryptostache = require('cryptostache');

    var product_code = new cryptostache('some_product_code', 'secret_key');

    console.log(product_code.value);
    //The encoded product code (Hex string)

    console.log(product_code.barcode());
    //The base64 image data for your shiny new barcode :D


## Customization

1. You can specify the mask to use to create other shapes of barcode !

    product_code.template = (your base64 mask data);

2. You can specify the color for the bars. (background is transparent)

    product_code.barcode('red');


## TODO

1. Finish masking

1. Add better tests

2. Document ideal template sizes

3. Docs

4. Optimize drawing (should be under 16ms)


## Why?

Why not?
