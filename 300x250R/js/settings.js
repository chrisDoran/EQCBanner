/*
Setting Release Date Message and CTA
*/
function releaseDate(_dateEvent){
    var event = "date";
    var dateEvent = _dateEvent;
    var currentDate = new Date();
    
    for (var i = 0; i < dateEvent.length; i++) {
        if (currentDate >= dateEvent[i][0]) {
            event = dateEvent[i][1];
        }
    }

    return event;
}

function changeDateMsg(_dateEvent, _target, _label){
    if (_dateEvent && _target) {
        var label = (_label != undefined || _label != null) ? _label : releaseDate(_dateEvent);
        for(var i=0; i<_target.length;i++){
            if (_target[i]) _target[i].stop(label);
            else console.warn("changeDateMsg not found :"+_target[i], label);
        }
    }else{
        console.warn("changeDateMsg not found :",_target, _dateEvent, label);
    }
}

/*
Function to create Border SVG
*/
function createBorder(_target, _x, _y, _width, _height, _color){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("style", "position:absolute; border: 1px solid; pointer-events: none; top:"+_y+"px; left:"+_x+"px");
    svg.setAttribute("width", _width);
    svg.setAttribute("height", _height);
    svg.style.borderColor = _color || "black";
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    if (_target) {
        _target.appendChild(svg);
    }
}

/*
Function to check mobile & tablet
*/
function mobileAndTabletcheck(){var a=!1;return function(b){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0,4)))&&(a=!0)}(navigator.userAgent||navigator.vendor||window.opera),a}
var isMobile = mobileAndTabletcheck();
/*
check current label
*/
function isLabel(_label, _sym){
    var label = (_label == undefined || _label == null) ? "" : _label;
    var sym = (_sym == undefined || _sym == null ) ? _stage : _sym;
    if (sym){
        if (sym.getPosition() == sym.getLabelPosition(label)){
            return true;
        }else{
            return false;
        }   
    }else{
        console.log("no symbol found")
    };
    return undefined;
}

/*
Function for Exit Tracking and Custom Tracking
*/
var exitTracking = function(_exit){
    switch (_exit) {
        case "facebook":
        case "fb":
            console.log("exit track : facebook exit");
            EB.clickthrough("facebook");
            break;
        case "twitter":
        case "tw":
            //console.log("exit track : twitter exit");
            //EB.clickthrough("twitter");
            break;
        case "instagram":
        case "ig":
            //console.log("exit track : instagram exit");
            //EB.clickthrough("instagram");
            break;
        case "cta":
            console.log("exit track : official CTA exit");
            EB.clickthrough("official");
            //EB.clickthrough();
            break;
        default:
            console.log("exit track : main exit");
            EB.clickthrough("default");
            //EB.clickthrough();
            break;
    }
}
var userTracking = function(_user){
    switch (_user) {
        case "replay":
            console.log("user track : replay");
            EB.userActionCounter("replay");
            break;
        case "clickForAudio":
            //console.log("user track : click for audio");
            //EB.userActionCounter("click for audio");
            break;
    }
}
