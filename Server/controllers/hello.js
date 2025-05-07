function hello (req, res){
    console.log("Controlller hits");
}

function lol(req, res) {
    console.log('Lol func');
}


module.exports = {
    hello,
    lol
}