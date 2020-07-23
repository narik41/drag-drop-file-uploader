var dropArea = document.getElementById("drag-drop-file-container");

;
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
    document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}


;
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
})


;
['dragleave', 'drop'].forEach(eventName => {
    console.log('dragleave')
    dropArea.addEventListener(eventName, unhighlight, false);
});

function highlight(event) {
    dropArea.classList.add("highlight");
}

function unhighlight(event) {
    dropArea.classList.remove("highlight");
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(event) {
    let dt = event.dataTransfer;
    let files = dt.files;

    handleFiles(files);
}

function handleFiles(files) {
    files = [...files]

    files.forEach(previewFile)
}

/**
 * Show the files in a browser 
 * 
 * @param  file 
 */
function previewFile(file) {
    const reader = new FileReader();


    reader.readAsDataURL(file);
    reader.onloadend = function() {
        let img = document.createElement("img")
        img.src = reader.result;
        document.getElementById("gallery").appendChild(img)
    }
}