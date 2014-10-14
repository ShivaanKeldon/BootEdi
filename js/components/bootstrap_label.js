(function(bootedi){
    var id = "bootstrap_label",
        labels = ["default","primary","success","info","warning","danger"],
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Label";
                this.category = "Bootstrap Components";
                this.bootClass = "label label-default";
                this.innerClass = "";
                this.tagStart = "span";
                this.tagEnd = "span";
                this.content = "Label";
                this.isContentEditable = true;
            },
            generateCustomOptions: function(o){
                var i, n = labels.length, $o=$(o), old="default", sel;
                $("#options_plus").html("<select id='opt_label'></select>");
                for(i=0; i<n; i++){
                    sel = "";
                    if($o.hasClass("label-"+labels[i])) {
                        sel = "selected";
                        old = labels[i];
                    }
                    $("#opt_label").append("<option "+sel+" value='"+labels[i]+"'>"+labels[i]+"</option>");
                }
                $("#opt_label").off().on("change",function(){
                    var val = $(this).val();
                    $o.removeClass("label-"+old).addClass("label-"+val);
                    old = val;
                });
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);