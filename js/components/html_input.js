(function(bootedi){
    var id = "html_input",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Input";
                this.category = "HTML Forms";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "input";
                this.tagEnd = null;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);