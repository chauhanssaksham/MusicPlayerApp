module.exports.home = function(req, res){
    return res.render('home', {
        title: 'Geet.com',
        topPicksArr: [15,16,17,18],
        geetSpecialsArr: [19,20,21,22,23,24],
        topChartsHollywood: [34,35,36,37,38,39,40,41],
        topChartsBollywood: [25,26,27,28,29,30,31,32,33,42]
    });
}