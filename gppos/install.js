(function() {
var storage = new LargeLocalStorage({
    size: 1024*1024*1024,
    name: 'gpposdev'
});
storage.initialized.then(function() {
    con.log(storage.getCapacity());
    if (storage.getCapacity() != -1 && storage.getCapacity() != 1024*1024*1024) {
        con.log('uh oh');
    }


    gpposInstall();
}, function() {
    con.log('denied');
});

function gpposInstall() {
    storage.setContents('installVer', '0/dev').then(function() {con.log('Installing from 0/dev')});
    storage.setAttachment()
}

})();