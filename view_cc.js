var view_cc = {
    elDocument: document.getElementById('document_div'), 
    on: function() {
        this
        .setLoaded(true)
        .show();
    }, 
    setLoaded: function(v) {
        this.elDocument.setAttribute('data-loaded', v);
        return this; 
    }, 
    show: function() {
        // ...
    }
};
