(function(bootedi){
    var id = "general_checkbox",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Checkbox";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "input type='checkbox'";
                this.tagEnd = null;
            },
            //generate: function(p){console.log("ha ha !");},
            //generateToolsItem: function(){this._super();}
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);