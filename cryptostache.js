;(function(){
	
	function cryptostache(len){
		this.value = "";
		this.len = len || 16
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
			
			seglen = str.length/this.len;
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
		
		if(this.value.length > this.len*2) this.value = this.value.substring(0, this.len*2);
		else{
			while(this.value.length < this.len*2){
				this.value += "0";
			}
		}
		
		return this;
	};
	
	cryptostache.prototype.barcode = function(){
		if(this.value != ""){
			
		}
		return this;
	};
	
	cryptostache.prototype.colours = function(){
		if(this.value != ""){
			
		}
		return this;
	};
	
	if(window.define && window.define.amd) define("cryptostache", [], cryptostache);
	else window.cryptostache = cryptostache;
})();
