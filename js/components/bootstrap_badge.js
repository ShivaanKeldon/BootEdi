(function(bootedi){
    var id = "bootstrap_badge",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Badge";
                this.category = "Bootstrap Components";
                this.bootClass = "badge";
                this.innerClass = "";
                this.tagStart = "span";
                this.tagEnd = "span";
                this.content = "0";
                this.isContentEditable = true;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);