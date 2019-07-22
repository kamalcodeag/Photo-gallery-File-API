"use strict";



window.onload = function()
{
    let input = document.querySelector("#input");
    let imgUpload = document.querySelector(".drop-area img");
    let dropArea = document.querySelector(".drop-area");

    imgUpload.onclick = function()
    {
        input.click();
    }
    
    input.onchange = function(e)
    {
        // let imgTotal = 0;
        let imgCount = 0;
        let audioCount = 0;
        let videoCount = 0;
        let totalSize = 0;
        let totalCol = document.querySelector(".total-row .total-col");

       [...e.target.files].forEach(file =>
       {
           totalSize += parseInt(file.size/1024);
           totalCol.innerText = totalSize + " kb";

           if(file.type.match("image/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let imgFilesHolder = document.querySelector(".img-files-holder");
                   let imgHolder = document.createElement("div");
                   imgHolder.className = "img-holder mb-2";
                   let img = document.createElement("img");
                   img.src = event.target.result;
                //    let imgNumber = document.createElement("span");
                //    imgNumber.className = "mr-5";
                //    imgNumber.innerText = imgCount + ".";
                   imgCount++;
                   
                   let allCount = document.querySelector(".all-count");
                   let imgTotalCount = document.querySelector(".img-total-count");
                   imgTotalCount.innerHTML = `Total image: ${imgCount}`;

                   let imgSize = document.createElement("span");
                   imgSize.innerText = parseInt(file.size/1024) + " kb";
                   let imgSizeNumber = +imgSize.innerText;
                //    imgTotal += imgSizeNumber;
                   imgHolder.appendChild(img);
                //    imgHolder.appendChild(imgNumber);
                   imgHolder.appendChild(imgSize);
                //    imgHolder.appendChild(imgTotal);                   
                   imgFilesHolder.appendChild(imgHolder);
                  
               }
               fileReader.readAsDataURL(file);
           }
    
           if(file.type.match("audio/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let audioFilesHolder = document.querySelector(".audio-files-holder");
                   let audioHolder = document.createElement("div");
                   audioHolder.className = "audio-holder mb-2";
                   let audioIcon = document.createElement("i");
                   audioIcon.className = "far fa-file-audio";
                //    let audioNumber = document.createElement("span");
                //    audioNumber.className = "mr-5";
                //    audioNumber.innerText = audioCount + ".";
                   audioCount++;

                   let allCount = document.querySelector(".all-count");
                   let audioTotalCount = document.querySelector(".audio-total-count");
                   audioTotalCount.innerHTML = `Total audio: ${audioCount}`;

                   let audioSize = document.createElement("span");
                   audioSize.innerText = parseInt(file.size/1024) + " kb";
                   audioHolder.appendChild(audioIcon);
                //    audioHolder.appendChild(audioNumber);
                   audioHolder.appendChild(audioSize);
                   audioFilesHolder.appendChild(audioHolder);
               }
               fileReader.readAsDataURL(file);
           }
    
           if(file.type.match("video/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let videoFilesHolder = document.querySelector(".video-files-holder");
                   let videoHolder = document.createElement("div");
                   videoHolder.className = "video-holder mb-2";
                   let videoIcon = document.createElement("i");
                   videoIcon.className = "far fa-file-audio";
                //    let videoNumber = document.createElement("span");
                //    videoNumber.className = "mr-5";
                //    videoNumber.innerText = videoCount + ".";
                   videoCount++;

                   let allCount = document.querySelector(".all-count");
                   let videoTotalCount = document.querySelector(".video-total-count");
                   videoTotalCount.innerHTML = `Total video: ${videoCount}`;

                   let videoSize = document.createElement("span");
                   videoSize.innerText = parseInt(file.size/1024) + " kb";
                   videoHolder.appendChild(videoIcon);
                //    videoHolder.appendChild(videoNumber);
                   videoHolder.appendChild(videoSize);
                   videoFilesHolder.appendChild(videoHolder);
               }
               fileReader.readAsDataURL(file);
           }    

        //    totalCol.innerText = totalSize + " kb";

       })
    }  

    dropArea.ondragover = function(e)
    {
        e.preventDefault();
    }

    dropArea.ondrop = function(e)
    {
        e.preventDefault();

        // let imgTotal = 0;
        let imgCount = 0;
        let audioCount = 0;
        let videoCount = 0;
        let totalSize = 0;
        let totalCol = document.querySelector(".total-row .total-col");

       [...e.dataTransfer.files].forEach(file =>
       {
           totalSize += parseInt(file.size/1024);
           totalCol.innerText = totalSize + " kb";

           if(file.type.match("image/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let imgFilesHolder = document.querySelector(".img-files-holder");
                   let imgHolder = document.createElement("div");
                   imgHolder.className = "img-holder mb-2";
                   let img = document.createElement("img");
                   img.src = event.target.result;
                //    let imgNumber = document.createElement("span");
                //    imgNumber.className = "mr-5";
                //    imgNumber.innerText = imgCount + ".";
                   imgCount++;

                   let allCount = document.querySelector(".all-count");
                   let imgTotalCount = document.querySelector(".img-total-count");
                   imgTotalCount.innerHTML = `Total image: ${imgCount}`;

                   let imgSize = document.createElement("span");
                   imgSize.innerText = parseInt(file.size/1024) + " kb";
                   let imgSizeNumber = +imgSize.innerText;
                //    imgTotal += imgSizeNumber;
                   imgHolder.appendChild(img);
                //    imgHolder.appendChild(imgNumber);
                   imgHolder.appendChild(imgSize);
                //    imgHolder.appendChild(imgTotal);                   
                   imgFilesHolder.appendChild(imgHolder);
                  
               }
               fileReader.readAsDataURL(file);
           }
    
           if(file.type.match("audio/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let audioFilesHolder = document.querySelector(".audio-files-holder");
                   let audioHolder = document.createElement("div");
                   audioHolder.className = "audio-holder mb-2";
                   let audioIcon = document.createElement("i");
                   audioIcon.className = "far fa-file-audio";
                //    let audioNumber = document.createElement("span");
                //    audioNumber.className = "mr-5";
                //    audioNumber.innerText = audioCount + ".";
                   audioCount++;
                   
                   let allCount = document.querySelector(".all-count");
                   let audioTotalCount = document.querySelector(".audio-total-count");
                   audioTotalCount.innerHTML = `Total audio: ${audioCount}`;
                   
                   let audioSize = document.createElement("span");
                   audioSize.innerText = parseInt(file.size/1024) + " kb";
                   audioHolder.appendChild(audioIcon);
                //    audioHolder.appendChild(audioNumber);
                   audioHolder.appendChild(audioSize);
                   audioFilesHolder.appendChild(audioHolder);
               }
               fileReader.readAsDataURL(file);
           }
    
           if(file.type.match("video/*"))
           {
               let fileReader = new FileReader();
    
               fileReader.onloadend = function(event)
               {
                   let videoFilesHolder = document.querySelector(".video-files-holder");
                   let videoHolder = document.createElement("div");
                   videoHolder.className = "video-holder mb-2";
                   let videoIcon = document.createElement("i");
                   videoIcon.className = "far fa-file-audio";
                //    let videoNumber = document.createElement("span");
                //    videoNumber.className = "mr-5";
                //    videoNumber.innerText = videoCount + ".";
                   videoCount++;

                   let allCount = document.querySelector(".all-count");
                   let videoTotalCount = document.querySelector(".video-total-count");
                   videoTotalCount.innerHTML = `Total video: ${videoCount}`;

                   let videoSize = document.createElement("span");
                   videoSize.innerText = parseInt(file.size/1024) + " kb";
                   videoHolder.appendChild(videoIcon);
                //    videoHolder.appendChild(videoNumber);
                   videoHolder.appendChild(videoSize);
                   videoFilesHolder.appendChild(videoHolder);
               }
               fileReader.readAsDataURL(file);
           }    


       })
    }
}
