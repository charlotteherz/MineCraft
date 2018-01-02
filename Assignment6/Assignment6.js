$(document).ready(function(){
    $("#modal").modal('show');

    $("#instructionBtn").click(function(){
        $("#myModal").modal('show');
        $("#modal").modal('hide');
    });

    $("#returnMainPage").click(function(){
        $("#myModal").modal('hide');
        $("#modal").modal('show');
    });

    $("#startBtn").click(function(){
        $("#modal").modal('hide');
    });
    /* setTimeout(function(){
        $(".ToolBar").css("visibility","visible");
    },500); */
    createContainer();
    createClouds();
    createTree();
    createLeaves();
    createRocks();
    $(".ToolBarButton").click(selectTool);


});

var Minecraft={};
Minecraft.Storage="";
Minecraft.selectedTool;
Minecraft.width=20;
Minecraft.height=12;
//Minecraft.matrix= new Array(Minecraft.width);
//for(var i=0; i< Minecraft.matrix.length; i++){
//    Minecraft.matrix[i] = new Array(Minecraft.height);
//}

var createClouds = function(){
    var cloudsLocation = ['23','24','25','27', '43','44','45','46','47','48','64' ,'65', '67'];

    for (var i=0;i<cloudsLocation.length;i++){
        var element = $('#block' + cloudsLocation[i]);
        element.addClass('clouds');
    }
};

var createTree = function(){
    var treesLocation = ['95','115','135'];

    for (var i=0;i<treesLocation.length;i++){
        var element = $('#block' + treesLocation[i]);
        element.addClass('tree');
    }
};

var createLeaves = function(){
    var leavesLocation = ['34','35','36','54','55','56','74','75','76','105','124','125','126'];

    for (var i=0;i<leavesLocation.length;i++){
        var element = $('#block' + leavesLocation[i]);
        element.addClass('Leaves');
    }
};
var createRocks = function(){
    var RocksLocation = ['131', '132', '140'];

    for (var i=0;i<RocksLocation.length;i++){
        var element = $('#block' + RocksLocation[i]);
        element.addClass('Rocks');
    }
};


var createContainer= function(){
    var container = $('<div>');
    var toolbox= $('<div>');
    var counter=0;

    container.addClass('GameBoard');//added class gameboard to container div
    toolbox.addClass('toolbox');//gave right side shed a class

    for(var i = 0; i< Minecraft.height; i++){
        for (var j=0; j<Minecraft.width; j++){
            counter++;
            var div = $('<div>');
            container.append(div);
            div.attr('id','block'+counter);
            div.addClass("pixels");
            div.click(changeTile);

            //Minecraft.matrix[i][j]=div;

    if (i>7){
        div.addClass("dirt");
    }
      else if(i==7){
        div.addClass("grass")
    }
    }
    }

    $('body').append(container);
    $('body').append(toolbox);
};
var selectTool=function(){
Minecraft.selectedTool=this.id;
}

var changeTile=function(){
    var element=$('#'+ this.id);
    if(Minecraft.selectedTool=="Storage"){
        if(!element.attr("class").includes("dirt") ||
              !element.attr("class").includes("tree") ||
              !element.attr("class").includes("Leaves") ||
              !element.attr("class").includes("Rocks") ||
              !element.attr("class").includes("grass")){

                element.addClass(Minecraft.Storage);
                $('#Storage').removeClass(Minecraft.Storage);
                Minecraft.Storage = "";

            }
        }else if(Minecraft.selectedTool=="Shovel"){
            if(element.attr("class").includes("dirt")) {
                element.removeClass("dirt");
                Minecraft.Storage= "dirt";
            } else if( element.attr("class").includes("grass")) {
                element.removeClass("grass");
                Minecraft.Storage= "grass";
            }


        }else if(Minecraft.selectedTool=="Pickaxe"){
            if(element.attr("class").includes("Rocks")) {
                element.removeClass("Rocks");
                Minecraft.Storage= "Rocks";
            }

        }else if(Minecraft.selectedTool=="Axe"){
            if(element.attr("class").includes("tree")) {
                element.removeClass("tree");
                Minecraft.Storage= "tree";
            } else if( element.attr("class").includes("Leaves")) {
                element.removeClass("Leaves");
                Minecraft.Storage= "Leaves";
            }
        }

        $('#Storage').addClass(Minecraft.Storage);
}
