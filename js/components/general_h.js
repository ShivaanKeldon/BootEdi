(function(bootedi){
    var id = "general_h",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Heading";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "h1";
                this.tagEnd = "h2";
                this.content = "Heading";
                this.isContentEditable = true;
            },
            //generate: function(p){console.log("ha ha !");},
            //generateToolsItem: function(){this._super();}
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);