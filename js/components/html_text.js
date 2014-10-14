(function(bootedi){
    var id = "html_text",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Text";
                this.category = "Text";
                this.bootClass = "";
                this.innerClass = "text";
                this.tagStart = "span";
                this.tagEnd = "span";
                this.content = "text";
                this.isContentEditable = true;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);