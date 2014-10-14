(function(bootedi){
    var id = "bootstrap_col",
        opts = {
            cols: {
                title: "Columns",
                html: '<div class="separator"><div class="row"><div class="form-group"><label for="opt_id" class="col-sm-4 control-label">Columns:</label><div class="col-sm-8"><textarea id="opt_col-col" class="form-control" rows="4"></textarea></div></div></div></div>',
                generate: function(that,o){
                    $("#options_plus").append(this.html);
                    var html = "";
                    for(var i=1; i<=12; i++){
                        if($(o).hasClass("col-xs-"+i)) html += "col-xs-"+i+" ";
                        if($(o).hasClass("col-sm-"+i)) html += "col-sm-"+i+" ";
                        if($(o).hasClass("col-md-"+i)) html += "col-md-"+i+" ";
                        if($(o).hasClass("col-lg-"+i)) html += "col-lg-"+i+" ";
                    }
                    $("#opt_col-col").val(html).unbind().bind("blur",function(){opts.cols.change(that,o);});
                },
                change: function(that,o){
                    var i, s;
                    for(i=1; i<=12; i++){
                        if($(o).hasClass("col-xs-"+i)) $(o).removeClass("col-xs-"+i);
                        if($(o).hasClass("col-sm-"+i)) $(o).removeClass("col-sm-"+i);
                        if($(o).hasClass("col-md-"+i)) $(o).removeClass("col-md-"+i);
                        if($(o).hasClass("col-lg-"+i)) $(o).removeClass("col-lg-"+i);
                    }
                    s = $("#opt_col-col").val().split(" ");
                    for(i=0; i<s.length-1; i++){
                        $(o).addClass(s[i]);
                    }
                }
            }
        },
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Col";
                this.category = "Divs";
                this.bootClass = "col-xs-4 col-sm-4 col-md-4 col-lg-4";
                this.innerClass = "bootedi_bordered bootedi_hmin50";
                this.tagStart = "div";
                this.tagEnd = "div";
            },
            generateCustomOptions: function(o){
                opts.cols.generate(this,o);
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);