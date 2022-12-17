const screenshotBtn = document.querySelector('#src-btn'),
screenshotPreview = document.querySelector('.src-preview'),
closeBtn = document.querySelector('#close-btn')

const captureScreen  = async () =>{
    try{
        //asking permission to use a media input to record current tab
        const stream = await navigator.mediaDevices.getDisplayMedia({preferCurrentTab : true});
        // console.log(stream)
        const video = document.createElement('video');

        video.addEventListener('loadedmetadata',()=>{
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            //passing video width and height as canvas width and height
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            video.play(); //playing the video so the drawn image won't be blcak or blank

            //drawing an image from the captured video stream
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            stream.getVideoTracks()[0].stop();//terminating first video track of the stream
            // document.body.appendChild(canvas)

            //passing canvas data url as screenshot preview src
            screenshotPreview.querySelector('img').src = canvas.toDataURL();
            screenshotPreview.classList.add('show');
        })

        video.srcObject = stream; //passing capture stream data as video source object
    }
    catch(errr){
        //if image could'nt capture by ant reason then show alert!
        alert('Failed to capture screenshot')
    }
}

closeBtn.addEventListener("click",()=>{
    screenshotPreview.classList.toggle('show');
})

screenshotBtn.addEventListener('click',captureScreen);
