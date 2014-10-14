(function(bootedi){
    var id = "bootstrap_p",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Paragraph";
                this.category = "Text";
                this.bootClass = "";
                this.innerClass = "bootedi_bordered bootedi_hmin50";
                this.tagStart = "p";
                this.tagEnd = "p";
                this.content = "";
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);