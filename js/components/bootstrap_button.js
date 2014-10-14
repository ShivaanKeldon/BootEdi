(function(bootedi){
    var id = "bootstrap_button",
        labels = ["default","primary","success","info","warning","danger"],
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Button";
                this.category = "Bootstrap Forms";
                this.bootClass = "btn btn-default";
                this.innerClass = "";
                this.tagStart = "button";
                this.tagEnd = "button";
                this.content = "Button";
                this.isDroppable = false;
                this.isContentEditable = true;
            }, 
            generateCustomOptions: function(o){
                var i, n = labels.length, $o=$(o), old="default", sel;
                $("#options_plus").html("<select id='opt_label'></select>");
                for(i=0; i<n; i++){
                    sel = "";
                    if($o.hasClass("btn-"+labels[i])) {
                        sel = "selected";
                        old = labels[i];
                    }
                    $("#opt_label").append("<option "+sel+" value='"+labels[i]+"'>"+labels[i]+"</option>");
                }
                $("#opt_label").off().on("change",function(){
                    var val = $(this).val();
                    $o.removeClass("btn-"+old).addClass("btn-"+val);
                    old = val;
                });
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);