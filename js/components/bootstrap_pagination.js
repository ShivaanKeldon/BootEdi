(function(bootedi){
    var id = "bootstrap_pagination",
        obj = bootedi.Component.extend({
            init: function(){
                this._super();
                this.id = id;
                this.title = "Pagination";
                this.category = "Bootstrap Components";
                this.bootClass = "pagination";
                this.innerClass = "";
                this.tagStart = "ul";
                this.tagEnd = "ul";
                this.content = '<li><a href="#">&laquo;</a></li><li class="active"><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#">&raquo;</a></li>';
            },
        });
    
    bootedi.components[id] = new obj();
    
    if(bootedi.debugMode) console.log("Component "+ id +" loaded");
    
})(bootedi);