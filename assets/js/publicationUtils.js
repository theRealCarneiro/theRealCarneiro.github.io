function showHide(id) {
	var e = document.getElementById(id);
	e.style.display = e.style.display == 'block' ? 'none' : 'block';
}

function searchArticle() {
    var input = document.getElementById("inputSearch");
    var filter = input.value.toUpperCase();
    var article = document.getElementById("article");
    var list_ol = article.getElementsByTagName("ol");

    for (var i = 0; i < list_ol.length; i++) {
        var list_li = list_ol[i].children;
        for (var j = 0; j < list_li.length; j++) {
            var li = list_li[j].children;
            var li_span = li[0];
            if (li_span) {
                var originalHTML = li_span.innerHTML; // Armazenar o conteúdo original
                var txtValue = li_span.textContent || li_span.innerText;
                var index = txtValue.toUpperCase().indexOf(filter);
                if (index > -1) {
                    txtValue = txtValue.substring(0, index) + "<span style='background-color:yellow;'>" + txtValue.substring(index, index + filter.length) + "</span>" + txtValue.substring(index + filter.length);
                    list_li[j].style.display = "";
                } else {
                    list_li[j].style.display = "none";
                }
                li_span.innerHTML = txtValue;

                // Restaurar o conteúdo original após a busca
                if (txtValue !== originalHTML) {
                    li_span.innerHTML = originalHTML;
                }
            }
        }
    }
}

