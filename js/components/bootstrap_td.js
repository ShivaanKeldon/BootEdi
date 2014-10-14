(function(bootedi){
    var id = "bootstrap_td",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Cell";
                this.category = "Table";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "td";
                this.tagEnd = "td";
                this.content = "cell";
                this.isContentEditable = true;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);