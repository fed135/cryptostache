;(function(){
	
	function cryptostache(){
		this.value = "";
	}
	
	cryptostache.prototype.encrypt = function(str, salt){
		var segments, seglen, i, front, count, seg;
		
		str = str.split(" ").join("");
		
		if(salt == undefined) salt = [str.length];
		if(typeof salt === "string") salt = [salt];
		
		segments = []
		seglen = 0;
		front = true;
		while(seglen < 1){
			for(i = 0; i<salt.length; i++){
				if(front) str = ((salt[i] || 0) + "") + str;
				else str += ((salt[i] || 0) + "");
			}
			
			seglen = str.length/16;
			front = !front;
		}
		
		while(str.length > seglen){
			if(front){
				segments.unshift(str.substring(0, seglen));
				seg = segments[0];
			}
			else{
				segments[segments.length] = str.substring(0, seglen);
				seg = segments[segments.length-1];
			}
			
			count = 0;
			for(i = 0; i<seg.length; i++){
				if(!isNaN(parseInt(seg[i]))) count += parseInt(seg[i]);
				else count += (seg.charCodeAt(i));
			}
			this.value += Math.floor((count*0.5)).toString(16);
			
			str = str.substring(seglen);
			
			front = !front;
		}
		
		if(this.value.length > 32) this.value = this.value.substring(0, 32);
		else{
			while(this.value.length < 32){
				this.value += "0";
			}
		}
		
		return this;
	};
	
	cryptostache.prototype.barcode = function(str, salt){
		if(this.value === "") this.encrypt(str, salt);
			
		var img = makeCanvas(160, 32);
		img.fillStyle = "black";
		for(var i = 0; i<this.value.length; i++){
			//TODO
			img.fillRect(i*5, 0, Math.ceil(parseInt(this.value[i])*0.25), 32);
		}
		
		var result = img.canvas.toDataURL("image/png");
		img = null;

		return result;
	};
	
	cryptostache.prototype.colours = function(str, salt){
		if(this.value === "") this.encrypt(str, salt);
			
		//TODO
		return this;
	};

	function makeCanvas(width, height){
		var cnv = document.createElement("canvas");
		cnv.width = width;
		cnv.height = height;
		return cnv.getContext("2d");
	} 
	
	if(window.define && window.define.amd){
		define("cryptostache", [], function(){
			return cryptostache;
		});
	}
	else window.cryptostache = cryptostache;
})();
