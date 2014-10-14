(function(bootedi){
    var id = "bootstrap_th",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Cell Header";
                this.category = "Table";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "th";
                this.tagEnd = "th";
                this.content = "TH";
                this.isDroppable = false;
                this.isContentEditable = true;
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);