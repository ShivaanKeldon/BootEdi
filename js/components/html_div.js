(function(bootedi){
    var id = "html_div",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Div";
                this.category = "Divs";
                this.bootClass = "";
                this.innerClass = "bootedi_bordered bootedi_hmin150";
                this.tagStart = "div";
                this.tagEnd = "div";
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);