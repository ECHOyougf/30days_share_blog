(function(){
    var articleList=[
        {
            id:"gulp",//文件名
            title:"构建自动化工具-gulp",
            summary:"用自动化构建工具增强你的工作流程！自动化神器，可用于合并、编译、压缩文件......对于体积较大的二进制文件，比如音频、视频文件，动辄几个GB大小，如果使用全部写入，很容易使内存“爆仓”。理想的方法应该是读一部分，写一部分，不管文件有多大，只要时间允许，总会处理完成，这里就需要用到流的概念。把文件比作装水的桶，而水就是文件里的内容，我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，这样就慢慢的实现了大文件的复制过程......",
            thumbnail:"images/gulp.png",
            author:"小尤",
            time:"2016-09-20"
        },
        {
            id:"howtoanalisysaproduct",//文件名
            title:"如何分析一款互联网产品",
            summary:"团队构成要素;产品经理职责;数据分析范围;大咖目前数据;2016年底目标术语——KISS......",
            thumbnail:"images/logo.jpg",
            author:"耀武",
            time:"2016-09-20"
        },
        {
            id:"progress",//文件名
            title:"渐变色进度条",
            summary:"Quartz2D 是一个 二维视图 引擎.可以完成的工作: ①.绘制图形:三角形\矩形\圆形等. ②.绘制文字③.裁剪图片…...平时的开发中,为了是界面更为的美观,但是有时候UI会比较复杂,UIKit框架中并实现出来,这个时候就可以通过Quartz2D 来自定义一个UI控件.",
            thumbnail:"images/progress.png",
            author:"玉龙",
            time:"2016-09-13"
        },
        {
            id:"mysqlreplication",//文件名
            title:"Mysql主从复制replication",
            summary:"MySQL的Replication是一种多个MySQL的数据库做主从同步的方案，特点是异步，广泛用在各种对MySQL有更高性能，更高可靠性要求的场合。与之对应的另一个技术是同步的MySQL Cluster，但因为比较复杂，使用者较少。",
            thumbnail:"images/mysql.jpg",
            author:"王威",
            time:"2016-08-31"
        },
        {
            id:"sql",//文件名
            title:"浅谈索引及SQL查询优化",
            summary:"索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。解释：生活中最经典的例子就是字典了，字典它有检索目录，如果我们不看偏旁、部首等目录检索页，直接在字典里面找的话，速度很慢很慢，这就相当于对数据表进行全表扫描，数据越多，扫描的时间越长，但是如果使用了检索目录，我们通常可以很快的查找到要找的字，这里的检索目录就是我要说的索引了。" ,
            thumbnail:"images/mysql.jpg",
            author:"文豪",
            time:"2016-08-31"
        },
        {
            id:"nodejs",//文件名
            title:"nodejs压力测试",
            summary:"服务器并发处理能力的量化描述，单位是reqs/s，指的是某个并发用户数下单位时间内处理的请求数。某个并发用户数下单位时间内能处理的最大请求数，称之为最大吞吐率。计算公式：总请求数 / 处理完成这些请求数所花费的时间",
            thumbnail:"images/node.jpg",
            author:"阿深",
            time:"2016-08-31"
        },
        {
            id:"swift",//文件名
            title:"Swift学习-从Objective-C到Swift",
            summary:"Swift学习-从Objective-C到Swift",
            thumbnail:"images/swift.png",
            author:"乐乐",
            time:"2016-08-15"
        },
        {
            id:"uicollection",//文件名
            title:"UICollectionView",
            summary:"UICollectionView 和 UICollectionViewController 类是iOS6 新引进的API，用于展示集合视图，布局更加灵活，可实现多列布局",
            thumbnail:"images/uicollection.png",
            author:"煜阳",
            time:"2016-08-15"
        }
    ];
    var categoryString="";
    for(var i=0;i<articleList.length;i++){
        categoryString+='<div class="col-md-12" style="margin-bottom:50px;"> <div class="col-md-3"> <img class="img-thumbnail" src="' +
            articleList[i].thumbnail+'"> </div> <div class="col-md-9"> <h2>' +
            articleList[i].title+'</h2>  <p class="text-right">' +
            articleList[i].time+'&nbsp;&nbsp;&nbsp;&nbsp;'+articleList[i].author+'</p><p class="summary"> ' +
            articleList[i].summary+'</p> <div class="col-md-12"> <a class="btn btn-info link-content" href="content.html?id=' +
            articleList[i].id+'">阅读全文</a></div> </div> </div>';
    }
    $("#category").html(categoryString);

})();