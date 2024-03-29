(function(bootedi){
    var id = "bootstrap_textarea",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Textarea";
                this.category = "Bootstrap Forms";
                this.bootClass = "form-control";
                this.innerClass = "";
                this.tagStart = "textarea";
                this.tagEnd = "textarea";
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);