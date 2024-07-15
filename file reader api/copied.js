let fileHandel;
async function button(){
     [fileHandel]=await window.showOpenFilePicker(
        //you can do this if you need to
        {
            types:[
                { 
                    description:"images",
                    accept:{
                        'image/*':['.png','.gif','.jpeg','.jpg']
                    }


                }
            ],
            excludeAcceptAllOption:true,
            multiple:false //select multiple files

        }
     );
    
    //to know the type of file =>console.log(fileHandel.kind);

    
    let fileData=await fileHandel.getFile();//blob
    let text=await fileData.text();//text
    console.log(text);
    textArea.textContent=text;
    console.log(fileData);
}
async function save(){
    let stream=await fileHandel.createWritable();
    await stream.write(textArea.innerText);
    await stream.close();

 

}
async function saveAs(){
   fileHandel=await window.showSaveFilePicker();
save(); 
}
