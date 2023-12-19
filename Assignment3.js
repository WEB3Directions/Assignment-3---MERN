

  let arr = [
    {
        brand: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom : "128gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom : "32gb",
        
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom : "64gb",
        
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom : "32gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom : "128gb",
        
    }   

]


function getBrand() {
    var searchBrand = document.getElementById("searchBrand").value.toLowerCase();
    var resultDiv = document.getElementById("result");
    var phones = document.getElementById("phones").value.toLowerCase();
    var mobileInfo = "";
    var find;
    
    find = arr.filter((mobile) =>  {
        return mobile.brand.toLowerCase() === searchBrand && mobile.brand === phones.value ? mobileInfo : "No Result";
    });

    
    resultDiv.innerHTML = "";
        
        find.map((mobile) => {
             mobileInfo += `
                <ul>
                    <li>Brand: ${mobile.brand} <li><br>
                    <li>Model:${mobile.model}<li><br>
                    <li>Price: ${mobile.price}<li><br>
                    <li>Camera: ${mobile.camera}<li><br>
                    <li>RAM: ${mobile.ram}<li><br>
                    <li>ROM: ${mobile.rom}<li><br>
                </ul>
                <hr>
            `;

            if (mobileInfo === "") {
                mobileInfo = "<p>No Result Found</p>";
            }
            
           
        });
    
        resultDiv.innerHTML += mobileInfo;

        find = arr.filter((mobile) =>  {
            return mobile.brand.toLowerCase() === searchBrand  && mobile.model === phones.value;
        });

        resultDiv.innerHTML += "";
        

        find.map((mobile) => {
             mobileInfo = `
                <ul>
                <li>Model:${mobile.brand}<li><br>
                    <li>Model:${mobile.model}<li><br>
                   
                </ul>
                <hr>
            `;
            resultDiv.innerHTML += mobileInfo;

        

        });

    

        find = arr.filter((mobile) =>  {
            return mobile.brand.toLowerCase() === searchBrand && mobile.price === phones.value

            
        });

        resultDiv.innerHTML += "";

            resultDiv.innerHTML += "";

            find.map((mobile) => {
                mobileInfo = `
                    <ul>
            
                         <li>Model:${mobile.brand}<li><br>
                        <li>Model:${mobile.price}<li><br>
                       
                    </ul>
                    <hr>
                `;
                resultDiv.innerHTML += mobileInfo;

            });

        

            find = arr.filter((mobile) =>  {
                return mobile.brand.toLowerCase() === searchBrand && mobile.camera === phones.value ? mobileInfo : "No Result Found";
            });

            resultDiv.innerHTML += "";

            find.map((mobile) => {
                 mobileInfo = `
                    <ul>
             
                        <li>Model:${mobile.brand}<li><br>
                        <li>Model:${mobile.camera}<li><br>
                       
                    </ul>
                    <hr>
                `;
                resultDiv.innerHTML += mobileInfo;

            });


    
             var find = arr.filter((mobile) =>  {
                return mobile.brand.toLowerCase() === searchBrand && mobile.ram === phones.value ? mobileInfo : "No Result Found";
            });

            resultDiv.innerHTML += "";

            find.map((mobile) => {
                 mobileInfo = `
                    <ul>
            
                        <li>Model:${mobile.brand}<li><br>
                        <li>Model:${mobile.ram}<li><br>
                       
                    </ul>
                    <hr>
                `;
                resultDiv.innerHTML += mobileInfo;

            });


        
            
             var find = arr.filter((mobile) =>  {
                return mobile.brand.toLowerCase() === searchBrand && mobile.rom === phones.value ? mobileInfo : "No Result Found";
            });

            resultDiv.innerHTML += "";

            find.map((mobile) => {
                 mobileInfo = `
                    <ul>
                    <li>Model:${mobile.brand}<li><br>
                        <li>Model:${mobile.rom}<li><br>
                       
                    </ul>    
                    <hr>
                `;
                resultDiv.innerHTML += mobileInfo;

            });

    
}






 
