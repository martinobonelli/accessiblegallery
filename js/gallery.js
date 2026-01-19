
function upDate(previewPic) {
    
    const image = document.getElementById('image');
    
    console.log("Image src:", previewPic.src);

    console.log("Image alt:", previewPic.alt);

    image.style.backgroundImage = `url('${previewPic.src}')`;
    
    image.textContent = previewPic.alt;






}

function setImages () {

    let options = ["Trastevere.jpg","historic-center.jpg","Coppedè.jpg","Palazzo_di_Giustizia.jpg","Piazza_Ungheria.jpg","Campo_dei_Fiori.jpg"]

    let currentImages = document.querySelectorAll(".preview")
    for (let i = 0; i < currentImages.length; i++) {

        console.log("Image" + i)

        currentImages[i].src= "images/" + options[i];

        console.log(currentImages[i].tabIndex);

        currentImages[i].setAttribute("tabindex","0")
    

        currentImages[i].addEventListener("focus", function () {
            upDate(this);
            this.style.opacity = "1";
        
        });
        
        currentImages[i].addEventListener("blur", function () {
            unDo();
            this.style.opacity = "0.75";
        });

        currentImages[i].addEventListener("mouseover", function () {
            this.style.opacity = "1";
        });
        
        currentImages[i].addEventListener("mouseout", function () {
            this.style.opacity = "0.75";
        });



}

}
    


	function unDo(){
  
    const image = document.getElementById('image');

    image.style.backgroundImage = '';

    image.textContent = 'Hover over or tab to an image below to display here.';



    }
		
