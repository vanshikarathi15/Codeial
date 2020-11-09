module.exports.home = function(req, res){
    console.log(req.cookies);
    //change the value of coming cookie
    res.cookie('singer','Jassi')
    return res.render('home', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}
//please navigate to folder where codeial okin c: