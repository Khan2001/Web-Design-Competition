function index(){
    function getHome() {
        fetch("http://192.168.8.101:8080/databasemanager/")
            .then(res => res.json())
            .then((resjson) => {
                showHome(resjson.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    function showHome(data) {
        data.forEach(element => {
            /*var article = document.createElement("li");
            article.innerHTML = element.title;
            document.getElementById("").appendChild(article);*/
        });
    }
    getHome();  //获取首页信息
};

index();