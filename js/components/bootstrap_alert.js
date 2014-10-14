(function(bootedi){
    var id = "bootstrap_alert",
        labels = ["success","info","warning","danger"],
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Alert";
                this.category = "Bootstrap Components";
                this.bootClass = "alert alert-success";
                this.innerClass = "";
                this.tagStart = "div";
                this.tagEnd = "div";
            },
            generate: function(p){
                var tid = this._super(p);
                bootedi.components["html_text"].generate($("#tag_"+tid));
                return tid;
            },
            generateCustomOptions: function(o){
                var i, n = labels.length, $o=$(o), old="default", sel;
                $("#options_plus").html("<select id='opt_label'></select>");
                for(i=0; i<n; i++){
                    sel = "";
                    if($o.hasClass("alert-"+labels[i])) {
                        sel = "selected";
                        old = labels[i];
                    }
                    $("#opt_label").append("<option "+sel+" value='"+labels[i]+"'>"+labels[i]+"</option>");
                }
                $("#opt_label").off().on("change",function(){
                    var val = $(this).val();
                    $o.removeClass("alert-"+old).addClass("alert-"+val);
                    old = val;
                });
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);