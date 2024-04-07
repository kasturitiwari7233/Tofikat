const images = ["https://i.pinimg.com/originals/09/27/36/0927367451ca401cbfeba87d654aecbf.gif",
                "https://i.pinimg.com/originals/0d/b6/59/0db6598c53ff280e4e8b2bac59e2cc6b.gif", 
                "https://i.pinimg.com/originals/28/f0/10/28f010274cef3ce045d6434817593127.gif",
                "https://i.pinimg.com/originals/7d/98/83/7d98838cc65d40355089a301d70a4bca.gif",
                "https://gifdb.com/images/high/angry-anime-cute-menhera-chan-anfmnx876a2m66sw.webp",
                "https://media.tenor.com/I52W87bM7K8AAAAi/anime-aaaa.gif",
                "https://media.tenor.com/mWOA0c_KSgIAAAAi/chibi-anime.gif",
                "https://media.tenor.com/CArnMwDCNPwAAAAi/jinzhan-lily-and-marigold.gif",
                "https://media.tenor.com/YGBfvoeSipYAAAAi/memem-chibi.gif",
                "https://media.tenor.com/5ExGc8sRRAYAAAAi/mythikore-anime-girl.gif"];

let imageIndex = 0;

function changeImageAndText(choice) {
    const image = document.getElementById('main-image');
    const text = document.getElementById('image-text');
    
    if (choice === 'no') {
        // Increment image index (looping back to 0 when it reaches the end)
        imageIndex = (imageIndex + 1) % images.length;
        
        // Change image source and text based on the new index
        image.src = images[imageIndex];
        text.textContent = "THINK AGAIN";
    } else {
        // Reset image and text for 'Yes'
        image.src = "initial-image.jpg";
        text.textContent = "This is the initial text.";
    }
}
