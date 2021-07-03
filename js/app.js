


// search-Button
// Fetch Data from wikipedia

const displayWikipediaDta = () => {
    // input value 
    let searchString = $('#searchString').val();
    // console.log(searchString);
    
    // wikipedia api url
    let apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search= ${searchString}  &format=json&callback=Callback`;
    
    // Make Ajax request
    $.ajax({
        url: apiUrl,
        dataType: 'jsonp',
        jsonp: 'callback',
        success: (res) => {
            // outPut data searched from wikipedia onto screen
            console.log(res)
        }
    });
    return false;
}

$('#form').submit(displayWikipediaDta);