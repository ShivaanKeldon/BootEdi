(function(bootedi){
    var id = "bootstrap_row",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Row";
                this.category = "Divs";
                this.bootClass = "row";
                this.innerClass = "bootedi_bordered bootedi_hmin150";
                this.tagStart = "div";
                this.tagEnd = "div";
                this.dropRefuse = ["bootstrap_container","bootstrap_row"];
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);