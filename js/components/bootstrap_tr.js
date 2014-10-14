(function(bootedi){
    var id = "bootstrap_tr",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Row";
                this.category = "Table";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "tr";
                this.tagEnd = "tr";
                this.dropAccept = ["bootstrap_td","bootstrap_th"];
            },
            generate: function(p, b){
                b = typeof b !== 'undefined' ?  false : true;
                var tid = this._super(p), j;
                if(!b) return ;
                for(j=0; j<3; j++){
                    bootedi.components["bootstrap_td"].generate($("#tag_"+tid));
                }
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);