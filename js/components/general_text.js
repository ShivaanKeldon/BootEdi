(function(bootedi){
    var id = "general_text",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Text";
                this.bootClass = "";
                this.innerClass = "text";
                this.tagStart = "span";
                this.tagEnd = "span";
                this.content = "Text";
                this.isContentEditable = true;
            },
            //generate: function(p){console.log("ha ha !");},
            //generateToolsItem: function(){this._super();}
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);