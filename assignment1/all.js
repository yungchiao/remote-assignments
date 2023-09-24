function delayedResult(n1, n2, delayTime, callback) {
    setTimeout(function () {
        var result = n1 + n2;
        var formattedResult = `${result} (${n1}+${n2})`;
        callback(formattedResult);
    }, delayTime);
}

delayedResult(4, 5, 3000, function (result) {
    console.log(result);
});
    

delayedResult(-5, 10, 2000, function(result) {
    window.alert(result);
    }); // 5 (-5+10) will be shown in an alert dialog after 2 seconds