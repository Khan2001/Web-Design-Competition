function login() {
    function verify() {
        fetch("http://192.168.8.101:8080/databaseconn/testconn", {
                method: 'POST',
                body: JSON.stringify({
                    "username": "root",
                    "password": "200034"
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            })
            .then(res => res.json())
            .then((resjson) => {
                console.log(resjson);
            })
            .catch((err) => {
                alert(err);
            });
    }

    verify();  //验证登录信息
}

login();