(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FDF394",
	opacity: 1.00,
	manifest: [
		{src:"images/banner.png?1478537992844", id:"banner"},
		{src:"images/kids.png?1478537992844", id:"kids"},
		{src:"images/milklove.png?1478537992844", id:"milklove"},
		{src:"images/tins.png?1478537992844", id:"tins"},
		{src:"images/url.png?1478537992844", id:"url"}
	]
};



lib.ssMetadata = [];


// symbols:



(lib.banner = function() {
	this.initialize(img.banner);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.kids = function() {
	this.initialize(img.kids);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,800);


(lib.milklove = function() {
	this.initialize(img.milklove);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.tins = function() {
	this.initialize(img.tins);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.url = function() {
	this.initialize(img.url);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.tins_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tins();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.url();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.milklove();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.banner();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.kids_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kids();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,800);


// stage content:
(lib.Karicare_300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//turns mouse pointer into hand
		this.ClickThrough.cursor = "pointer";
		
		//listens for click event and calls click function
		this.ClickThrough.addEventListener("click", clickthroughSizmek);
		
		//click function
		function clickthroughSizmek() {
			console.log("Sizmek Clickthrough");
		
			//for custom clickthrough add string to parenthesis
			EB.clickthrough();
		
			//checks for video and pauses video on clickthrough if present
			if (typeof(videlem) != 'undefined' && videlem != null) {
				videlem.pause();
			}
		}
	}
	this.frame_359 = function() {
		if (!this.looped) this.looped = 1;
		if (this.looped++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(359).call(this.frame_359).wait(1));

	// Layer 4
	this.instance = new lib.kids_1();
	this.instance.parent = this;
	this.instance.setTransform(200,392,1,1,0,0,0,200,400);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73).to({x:190,y:142},12,cjs.Ease.get(1)).wait(72).to({x:178,y:-115},12,cjs.Ease.get(0.99)).wait(72).to({x:158,y:-385},10,cjs.Ease.get(1)).wait(109));

	// Layer 7
	this.instance_1 = new lib.Symbol4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(263).to({_off:false},0).to({alpha:1},12).wait(85));

	// Layer 6
	this.instance_2 = new lib.Symbol3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(150,251,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(263).to({_off:false},0).to({y:125},12,cjs.Ease.get(1)).wait(85));

	// Layer 8
	this.instance_3 = new lib.tins_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,375,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(251).to({_off:false},0).to({y:125},12,cjs.Ease.get(1)).wait(97));

	// Layer 9
	this.instance_4 = new lib.Symbol5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(275).to({_off:false},0).to({alpha:1},12).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,117,400,800);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;