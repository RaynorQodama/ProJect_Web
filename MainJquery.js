$('.prin').on('click', function () {

    printElement(document.getElementById('Bprint'));
});

// Fungsi untuk mencetak elemen dengan id yang diberikan
function printElement(elem) {
    var domClone = elem.cloneNode(true);
    
    var $printSection = document.getElementById('printSection');
    
    if (!$printSection) {
        var $printSection = document.createElement('div');
        $printSection.id = 'printSection';
        document.body.appendChild($printSection);
    }
    
    $printSection.innerHTML = '';
    window.print();
}