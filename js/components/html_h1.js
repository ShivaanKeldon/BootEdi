(function(bootedi){
    var id = "html_h1",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Heading";
                this.category = "Text";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "h1";
                this.tagEnd = "h1";
                this.content = "Heading";
                this.isContentEditable = true;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);