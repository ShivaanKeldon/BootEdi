(function(bootedi){
    var id = "bootstrap_jumbotron",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Jumbotron";
                this.category = "Bootstrap Components";
                this.bootClass = "jumbotron";
                this.innerClass = "";
                this.tagStart = "div";
                this.tagEnd = "div";
            },
            generate: function(p){
                var tid = this._super(p), i;
                bootedi.components["html_h1"].generate($("#tag_"+tid).first());
                i = bootedi.components["bootstrap_p"].generate($("#tag_"+tid));
                bootedi.components["html_text"].generate($("#tag_"+i));
                bootedi.components["bootstrap_button"].generate($("#tag_"+tid));
            }
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);