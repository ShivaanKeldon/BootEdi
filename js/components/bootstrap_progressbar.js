(function(bootedi){
    var id = "bootstrap_progressbar",
        labels = ["success","info","warning","danger"],
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Progress Bar";
                this.category = "Bootstrap Components";
                this.bootClass = "progress";
                this.innerClass = "";
                this.tagStart = "div";
                this.tagEnd = "div";
                this.content = '<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">60%</div>';
            },
            generateCustomOptions: function(o){
                var i, n = labels.length, $o=$(o).find(".progress-bar").first(), old="success", sel;
                $("#options_plus").html("<select id='opt_label'></select>");
                for(i=0; i<n; i++){
                    sel = "";
                    if($o.hasClass("progress-bar-"+labels[i])) {
                        sel = "selected";
                        old = labels[i];
                    }
                    $("#opt_label").append("<option "+sel+" value='"+labels[i]+"'>"+labels[i]+"</option>");
                }
                $("#opt_label").off().on("change",function(){
                    var val = $(this).val();
                    $o.removeClass("progress-bar-"+old).addClass("progress-bar-"+val);
                    old = val;
                });
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);