(function(bootedi){
    var id = "bootstrap_container",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Container";
                this.category = "Divs";
                this.bootClass = "container";
                this.innerClass = "bootedi_bordered bootedi_hmin150";
                this.tagStart = "div";
                this.tagEnd = "div";
                this.dropRefuse = ["bootstrap_container_fluid","bootstrap_container"];
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);