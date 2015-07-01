var Canvas = require('canvas');

var binaries = [
	/* 0 */ [0,0,0,0],
	/* 1 */ [1,0,0,0],
	/* 2 */ [0,1,0,0],
	/* 3 */ [1,1,0,0],
	/* 4 */ [0,0,1,0],
	/* 5 */ [1,0,1,0],
	/* 6 */ [0,1,1,0],
	/* 7 */ [1,1,1,0],
	/* 8 */ [0,0,0,1],
	/* 9 */ [1,0,0,1],
	/* 10 */ [0,1,0,1],
	/* 11 */ [1,1,0,1],
	/* 12 */ [0,0,1,1],
	/* 13 */ [1,0,1,1],
	/* 14 */ [0,1,1,1],
	/* 15 */ [1,1,1,1]
];

//5 pixels per line

function print(code, color){
	var index = 0;
	var serie;
	var buffer = new Canvas((code.length * 5) + 8, 50);
	var ctx = buffer.getContext('2d');

	ctx.fillStyle = color || 'black';

	//Make left edge |_|_

	ctx.fillRect(0, 0, 1, buffer.height);
	ctx.fillRect(2, 0, 1, buffer.height); 

	//Make right edge |_|_

	ctx.fillRect(buffer.width - 4, 0, 1, buffer.height);
	ctx.fillRect(buffer.width - 2, 0, 1, buffer.height);

	//Print the code

	index = 4;
	code.forEach(function(e) {
		//console.log(e + '->' + parseInt(e));
		serie = binaries[parseInt(e)];

		serie.forEach(function(a) {
			if (a === 1) {
				ctx.fillRect(index, 0, 1, buffer.height);
			}

			index++;
		});

		index++;
	});

	//Mask!

	return buffer.toDataURL();
}

module.exports = print;