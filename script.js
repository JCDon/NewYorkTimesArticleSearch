$(document).ready(function(){
// 1. pull data from user form
$('.timesForm').on('submit', function(){
    // create form obj
    var formInput = {
        searchTerms: $("#searchInput").val(),
        numOfRec: $("#numOfRec").val(),
        startDate: $("#startDate").val(),
        endDate: $("#endDate").val()
    }
    console.log(formInput);
    // makeAjaxLogic(formInput)
})


function makeAjaxLogic(form){
    // 2. do some logic - to determin what query
    var apiKey = "2uYlWGKk4jAqETBQ0VosPSWWfWNTHr05"
    var baseQueryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${apiKey}`

    

    var inputDate = `&fq=${date}`

    
    makeAjaxCall(queryURL)
}

// 3. make AJAX call


function makeAjaxCall(requestURL){
    // var apiKey = "2uYlWGKk4jAqETBQ0VosPSWWfWNTHr05"
    // var inputDate = `&fq=${date}`
    
    // var queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}${inputDate}&api-key=${apiKey}`

    $.ajax({
        url: requestURL,
        method: "GET"
        
        
    }).then(function(response) {
        console.log(response)
    });
}

https://api.nytimes.com/svc/search/v2/articlesearch.json?q=elections&api-key=2uYlWGKk4jAqETBQ0VosPSWWfWNTHr05



// 4. display raw JSON on page


// save relative data to their respective fields

// var query = get info from user

// for no date 
// http://developer.nytimes.com/article_search_v2.json&q=${query}

// with start date
// http://developer.nytimes.com/article_search_v2.json&q=${query}&begin_date=20120101

// with end date
// http://developer.nytimes.com/article_search_v2.json&q=${query}&end_date=20121231

// with start and end date
// http://developer.nytimes.com/article_search_v2.json&q=${query}&start_date=20120101&end_date=20121231

// dates go year, month, day

})
