(function(bootedi){
    var id = "html_button",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Button";
                this.category = "HTML Forms";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "button";
                this.tagEnd = "button";
                this.content = "Button";
                this.isDroppable = false;
                this.isContentEditable = true;
            }, 
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);