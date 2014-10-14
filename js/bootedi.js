var bootedi = {
    debugMode: false,
    ids: 0,
    selected: null,
    customCss: {},
    components : {},
    Component: Class.extend({
        // object init
        init: function(){
            // behaviors
            this.isDraggable = true;            // need more infos ?
            this.isDroppable = true;            // need more infos ?
            this.dropAccept = [];               // css classes for jquery droppable accept
            this.dropRefuse = [];               // same but for refuse
            this.isContentEditable = false;     // can we edit text content ?
            // attributes
            this.bootClass = "";                // the class attribute for bootstrap components
            this.innerClass = "";               // css class for bootedi
            this.hid = null;                    // increment
            this.id = "Rename";                 // html object id
            this.title = "Rename";              // the title to show in the toolbar
            this.tagStart = null;               // html tag
            this.tagEnd = null;                 // html tag
            this.content = "";                  // innerHTML content
        },
        // generate bootstrap html
        generate: function(p){
            this.hid = bootedi.ids++;
            var html = "<" + this.tagStart + " id='tag_" + this.hid + "' class='bootedi_item "+ this.bootClass + " " + this.innerClass + "' ";
            if(this.isContentEditable) html += " contenteditable='true' ";
            html += " data-class='" + this.id + "' ";
            
            if(this.tagEnd)
                html += " >"+ this.content +"</" + this.tagEnd + ">";
            else
                html += " />";
            $(p).append(html);
            
            if(this.isDroppable) this.makeDroppable();
            $("#tag_"+this.hid).on("mouseover",function(e){e.stopPropagation();$(this).addClass("bootedi_hover");});
            $("#tag_"+this.hid).on("mouseout",function(e){e.stopPropagation();$(this).removeClass("bootedi_hover");});
            $("#tag_"+this.hid).on("click",function(e){
                e.stopPropagation();
                $(".bootedi_selected").removeClass("bootedi_selected");
                $(this).addClass("bootedi_selected");
                bootedi.generateCommonOptions(this);
                bootedi.selected = $(this).attr("id");
                bootedi.showActions(this);
            });
            bootedi.customCss["tag_"+this.hid] = {};
            return this.hid;
        },
        // generate item for toolbar
        generateToolsItem: function(){
            return "<div class='tools_item' class='text-center'><img src='js/components/base.png' id='tools_item_"+ this.id +"'/><br/><div>"+ this.title +"</div></div>";
        },
        generateCustomOptions: function(){},
        makeDroppable: function(){
            var that = this;
            $("#tag_"+this.hid).droppable({
                hoverClass: "droppable_hover",
                greedy: true,
                accept: function(o){
                    if(that.checkAccept(that,o) && that.checkRefuse(that,o)) return true;
                    return false;
                },
                drop: that.onDrop
            });
        },
        onDrop: function(event,ui){
            var obj = bootedi.components[ui.draggable.attr("id").substr(11)];
            obj.generate(this);
            $(".ui-droppable").removeClass("droppable_hover");
        },
        checkAccept: function(that,o){
            var i,n=that.dropAccept.length,c;
            if(n==0) return true;
            c=o.attr("id").substr(11);
            for(i=0; i<n; i++){
                if(c==that.dropAccept[i]) return true;
            }
            return false;
        },
        checkRefuse: function(that,o){
            var i,n=that.dropRefuse.length,c;
            if(n==0) return true;
            c=o.attr("id").substr(11);
            for(i=0; i<n; i++){
                if(c==that.dropRefuse[i]) return false;
            }
            return true;
        },
    }),
    init: function(){
        this.initMenuTools();
        this.optionsBindings();
        $("#maincenter").droppable({
            hoverClass: "droppable_hover",
            greedy: true,
            drop: function(event, ui){
                var obj = bootedi.components[ui.draggable.attr("id").substr(11)];
                obj.generate(this);
            }
        }).on("click",function(e){
            $(".bootedi_selected").removeClass("bootedi_selected");
            $("#options").hide();
            $("#bootedi_actions").remove();
        });
        $("#filemenu_export").on("click",this.export);
        $("#filemenu_test").on("click",this.test);
        $("#filemenu_build").on("click",this.build);
        $("#mainright_accordion").accordion({heightStyle:"content"});
    },
    initMenuTools: function(){
        var html = "<div class='accordion'>", i, o, cat;
        $("#mainleft").append("<div id='mainleft_accordion'></div>");
        for(i in this.components){
            o = this.components[i];
            cat = o.category.split(" ").join("_");
            if(!$("#tools_menu_"+cat).length){
                $("#mainleft_accordion").append("<h3>"+o.category+"</h3><div id='tools_menu_"+cat+"'></div>");
            }
            $("#tools_menu_"+cat).append(o.generateToolsItem());
            $("#tools_item_"+o.id).draggable({helper:"clone"});
        }
        $("#mainleft_accordion").accordion({heightStyle:"content"});
    },
    export: function(){
        var html = "&lt;style>\n" + bootedi.generateCustomStyle() + "&lt;/style>\n", i, j, o, cpt=0;
        html += $.htmlClean(bootedi.clean(),{
            format:true,
            removeAttrs: ["style","contenteditable"],
            allowedAttributes: [["id"]],
        });
        //clean unused ids
        for(i in bootedi.customCss){
            cpt = 0;
            for(j in bootedi.customCss[i]) cpt++;
            if(0==cpt){
                html = html.replace(' id="tag_'+i.substr(4)+'"',"");
            }
        }
        
        $("#bootedi_export_textarea").html(html);
        $("#modal_export").modal();
    },
    test: function(){
        $(".bootedi_selected").removeClass("bootedi_selected");
        bootedi.selected = null;
        $("#bootedi_actions").remove();
        $("#options").hide();
        
        $("#maintest").html(bootedi.clean());
        $(this).parent().addClass("active");
        $("#filemenu_build").parent().removeClass("active");
        $("#main").animate({opacity:0},400,function(){
            $("#maintest").css("opacity","0").show().animate({opacity:1},400);
            $("#main").hide();
            $("#custom_css").html(bootedi.generateCustomStyle());
        });
        $("table").addClass("table_test");
    },
    build: function(){
        $(this).parent().addClass("active");
        $("#filemenu_test").parent().removeClass("active");
        $("#maintest").animate({opacity:0},400,function(){
            $("#main").css("opacity","0").show().animate({opacity:1},400);
            $("#maintest").hide();
            //$("#custom_css").html("");
            bootedi.generateBuildStyle();
        });
        $("table").removeClass("table_test");
    },
    clean: function(){
        var html = $("#maincenter").html(), i, n,
            classes = [/ui-droppable/gi,/bootedi_selected/gi,/bootedi_bordered/gi,/bootedi_item/gi,/bootedi_hmin150/gi,/bootedi_hmin50/gi,
                /contenteditable=\"true\"/gi,/class=\"( )*text( )*\"/gi,/class=\"( )*\"/gi
            ];
        for(i=0,n=classes.length; i<n; i++){
            html = html.replace(classes[i],"");
        }
        return html;
    },
    generateCommonOptions: function(o){
        var id = $(o).attr("id"), i, n,
            attrs = ["margin-top","margin-left","margin-right","margin-bottom","padding-top","padding-left","padding-right","padding-bottom","color",
                "background-color","font-family","font-size","text-align","width","height","position","top","right","bottom","left","font-style","font-weight"
            ];
        $("#options").show();
        $("#opt_id").val(id);
        $("#opt_component").html(bootedi.components[$(o).attr("data-class")].title);
        
        for(i=0,n=attrs.length; i<n; i++){
            $("#opt_"+attrs[i]).val(bootedi.customCss[id][attrs[i]] || "");
        }
        $("#options_plus").html("");
        bootedi.components[$(o).attr("data-class")].generateCustomOptions(o);
    },
    optionsBindings: function(){
        $(".opt_input").off().on("blur",function(){
            if(!bootedi.selected) return;
            var id = $(this).attr("id").substr(4);
            bootedi.customCss[bootedi.selected][id] = $(this).val();
            bootedi.generateBuildStyle();
        });
        $("#opt_id").off().on("blur",function(){
            var val = $(this).val();
            bootedi.customCss[val] = bootedi.customCss[bootedi.selected];
            delete(bootedi.customCss[bootedi.selected]);
            $("#"+bootedi.selected).attr("id",val);
            bootedi.selected = val;
        });
    },
    generateCustomStyle: function(){
        var css = "", tmp, i, j;
        for(i in this.customCss){
            tmp = "";
            for(j in this.customCss[i]){
                if(this.customCss[i][j]=="") continue;
                tmp += j + ":" + this.customCss[i][j] + ";";
            }
            if(tmp=="") continue;
            css += "#" + i + "{" + tmp + "}\n";
        }
        return css;
    },
    generateBuildStyle: function(){
        var css = "", tmp, i, j;
        for(i in this.customCss){
            tmp = "";
            for(j in this.customCss[i]){
                if(!this.customCss[i][j] || this.customCss[i][j]=="" || this.customCss[i][j].indexOf("padding")!=-1) continue;
                tmp += j + ":" + this.customCss[i][j] + ";";
            }
            if(tmp=="") continue;
            css += "#" + i + "{" + tmp + "}\n";
        }
        $("#custom_css").html(css);
        console.log("generateBuildStyle",css);
    },
    showActions: function(o){ 
        var offset = $(o).offset(),
            html = "<div id='bootedi_actions'><span class='glyphicon glyphicon-trash' id='bootedi_action_delete'></span>&nbsp;"+ bootedi.components[$(o).attr("data-class")].title +"</div>";
        $("#bootedi_actions").remove();
        $(document.body).append(html);
        $("#bootedi_actions").css({
            top: (offset.top-22)+"px",
            left: offset.left+"px"
        });
        $("#bootedi_action_delete").off().on("click",function(){
            $("#"+bootedi.selected).remove();
            $("#bootedi_actions").remove();
        });
    },
};
//bootedi.debugMode = true;

// load
$(function(){
    bootedi.init();
});