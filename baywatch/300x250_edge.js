
(function(compId){var _=null,y=true,n=false,zy='scaleY',x2='5.0.0',x4='rgba(0,0,0,0)',e13='${Title}',zx='scaleX',e12='${CTA}',b='block',e17='${Splash2}',x23='0',e15='${Splash}',m='rect',x18='0px',e14='${mouseOver}',i='none',x3='6.0.0.400',o='opacity',lf='left',e16='${BG}',x21='auto',e25='${CTA_Over}',x22='CTA_Over',x11='rgba(255,255,255,1)',tp='top',x20='250px',x1='6.0.0',d='display',g='image',x19='300px';var g10='Border.png',g6='Title.png',g9='CTA.png',g8='Splash2.png',g7='Splash.png',g24='CTA_Over.png',g5='BG.jpg';var im='images/',aud='media/',vid='media/',js='js/',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'BG',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'0',f:[x4,im+g5,'0px','0px'],tf:[[],[],[],['1.27','1.27']]},{id:'Title',t:g,r:['0px','0px','300px','250px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px'],tf:[[],[],[],['1.32','1.32']]},{id:'Splash',t:g,r:['0px','69px','300px','250px','auto','auto'],f:[x4,im+g7,'0px','0px']},{id:'Splash2',t:g,r:['0px','41px','300px','250px','auto','auto'],o:'0',f:[x4,im+g8,'0px','0px'],tf:[[],[],[],['0.56999','0.56999']]},{id:'CTA',t:g,r:['0px','-53px','300px','250px','auto','auto'],o:'0',f:[x4,im+g9,'0px','0px'],tf:[[],[],[],['1.65','1.65']]},{id:'mouseOver',symbolName:'mouseOver',v:b,t:m,r:['0','0','300','250','auto','auto']},{id:'Border',t:g,r:['0px','0px','300px','250px','auto','auto'],cu:'pointer',f:[x4,im+g10,'0px','0px']}],style:{'${Stage}':{isStage:true,r:['null','null','300px','250px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:2000,a:y,data:[["eid33",zx,1395,298,"linear",e12,'1.65','1'],["eid15",zx,500,500,"easeInOutQuad",e13,'1.32','1'],["eid45",d,0,0,"linear",e14,b,i],["eid46",d,1693,0,"linear",e14,i,b],["eid18",tp,1000,500,"easeInOutQuad",e15,'69px','0px'],["eid35",o,1395,298,"linear",e12,'0','1'],["eid10",o,500,500,"easeInOutQuad",e13,'0.000000','1'],["eid4",zy,0,750,"easeInOutQuad",e16,'1.27','1'],["eid23",zx,1660,90,"linear",e17,'0.56999','1'],["eid34",zy,1395,298,"linear",e12,'1.65','1'],["eid25",lf,1750,0,"linear",e17,'0px','0px'],["eid27",o,1660,33,"linear",e17,'0','1'],["eid24",zy,1660,90,"linear",e17,'0.56999','1'],["eid16",zy,500,500,"easeInOutQuad",e13,'1.32','1'],["eid7",o,0,500,"easeInOutQuad",e16,'0','1'],["eid36",tp,1660,90,"linear",e17,'41px','-12px'],["eid3",zx,0,750,"easeInOutQuad",e16,'1.27','1'],["eid38",tp,1395,298,"linear",e12,'-53px','0px']]}},"mouseOver":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{r:[x18,x18,x19,x20,x21,x21],id:x22,o:x23,t:g,f:[x4,im+g24,x18,x18]}],style:{'${symbolSelector}':{r:[_,_,x19,x20]}}},tt:{d:2000,a:y,l:{"over":500,"out":1500},data:[["eid42",o,500,500,"linear",e25,'0.000000','1'],["eid44",o,1500,500,"linear",e25,'1','0']]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-449246208");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${Border}","mouseover",function(sym,e){sym.getSymbol("mouseOver").play("over");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Border}","mouseout",function(sym,e){sym.getSymbol("mouseOver").play("out");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${Border}","click",function(sym,e){Enabler.exit('Logo_Clickthrough');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'mouseOver'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
})("mouseOver");
//Edge symbol end:'mouseOver'
})})(AdobeEdge.$,AdobeEdge,"EDGE-449246208");