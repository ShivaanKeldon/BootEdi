(function(bootedi){
    var id = "general_select",
        obj = bootedi.Component.extend({
            values: [
                {value:1, text:"Option 1"},
                {value:2, text:"Option 2"},
                {value:3, text:"Option 3"},
            ],
            _generateValues: function(){
                var html = "", i, n = this.values.length;
                for(i=0; i<n; i++){
                    html += "<option value='" + this.values[i].value + "'>" + this.values[i].text + "</option>";
                }
                return html;
            },
            init: function(){
                this._super();
                this.id = id;
                this.title = "Select";
                this.bootClass = "";
                this.innerClass = "";
                this.tagStart = "select";
                this.tagEnd = "select";
                this.content = this._generateValues();
            },
            //generate: function(p){console.log("ha ha !");},
            //generateToolsItem: function(){this._super();}
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);