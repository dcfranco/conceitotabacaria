const {webFrame} = require('electron');
webFrame.setZoomLevel(-1);

function test(){
    console.log(webFrame.getZoomLevel());
    console.log(webFrame.getZoomFactor());
}
