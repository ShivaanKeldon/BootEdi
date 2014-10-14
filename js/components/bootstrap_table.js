(function(bootedi){
    var id = "bootstrap_table",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Table";
                this.category = "Table";
                this.bootClass = "table";
                this.innerClass = "";
                this.tagStart = "table";
                this.tagEnd = "table";
                this.dropAccept = ["bootstrap_tbody"];
            },
            generate: function(p){
                var tid = this._super(p), i, j;
                $("#tag_"+tid).append('<thead></thead>');
                bootedi.components["bootstrap_tr"].generate($("#tag_"+tid+" > thead").first(),false);
                // th
                for(i=0; i<3; i++){
                    bootedi.components["bootstrap_th"].generate($("#tag_"+tid+" > thead > tr").first());
                }
                // tr
                bootedi.components["bootstrap_tbody"].generate($("#tag_"+tid+""));
                for(i=0; i<3; i++){
                    bootedi.components["bootstrap_tr"].generate($("#tag_"+tid+" > tbody"));
                }
                
            }
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);