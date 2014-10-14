(function(bootedi){
    var id = "html_radio",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Radio";
                this.category = "HTML Forms";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "input type='radio'";
                this.tagEnd = null;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);