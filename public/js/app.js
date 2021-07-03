


// search-Button
// Fetch Data from wikipedia

const displayWikipediaDta = () => {
    // input value 
    let searchString = $('#searchString').val();
    // linkList outPut value
    let $linkElement = $('#links');
    
    // wikipedia api url
    let apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search= ${searchString}  &format=json&callback=Callback`;
    
    // Make Ajax request
    $.ajax({
        url: apiUrl,
        dataType: 'jsonp',
        jsonp: 'callback',
        success: (res) => {
            // outPut data searched from wikipedia onto screen
            let linkLists = res[1];
            
            // iterate each element of the searh data and 
            linkLists.forEach(item => {
                let url = `http://en.wikipedia.org/wiki/${item}`;
                $linkElement.append(`<li><a href=${url} >${item}</a> </li>`);
                return url;
            })
        }
    });
    return false;
}

$('#form').submit(displayWikipediaDta);