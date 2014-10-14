(function(bootedi){
    var id = "html_checkbox",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Checkbox";
                this.category = "HTML Forms";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "input type='checkbox'";
                this.tagEnd = null;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);