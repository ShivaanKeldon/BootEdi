(function(bootedi){
    var id = "bootstrap_container_fluid",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Container fluid";
                this.category = "Divs";
                this.bootClass = "container-fluid";
                this.innerClass = "bootedi_bordered bootedi_hmin150";
                this.tagStart = "div";
                this.tagEnd = "div";
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);