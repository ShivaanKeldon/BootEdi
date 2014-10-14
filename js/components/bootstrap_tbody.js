(function(bootedi){
    var id = "bootstrap_tbody",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "";
                this.category = "Table";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "tbody";
                this.tagEnd = "tbody";
                this.dropAccept = ["bootstrap_tr"];
            },
            generateToolsItem: function(){return "";},
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);