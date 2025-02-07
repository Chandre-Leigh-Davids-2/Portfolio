<template>
    <div class="background">
        <div class="container-fluid">
            <div>
            <h1 class="mb-5">View all My certificates</h1>
        </div>
        <div class="row">
            <div class="col-md-6 my-2">
                <div class="certificate">
                    <img src="../assets/images/awsCert.png" alt="">
                </div>
            </div>
            <div class="col-md-6 my-2">
                <div class="certificate">
                    <img src="../assets/images/SEOCert.png" alt="">
                </div>
            </div>
            <div class="col-md-6 my-2">
                <div class="certificate">
                    <img src="../assets/images/SEO2Cert.png" alt="">
                </div>
            </div>
            <div class="col-md-6 my-2">
                <div class="certificate">
                    <img src="../assets/images/DigitalMarketingCert.png" alt="">
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center mt-5">
            <router-link to="/">
                <button>GO BACK</button>
            </router-link>
        </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.background{
    background-color: #3B5B43;
}
.container-fluid {
    min-height: 100vh;
    width: 95vw;
    padding: 3%;
    border: 3px solid white;
    border-radius: 15px;
}
h1 {
    text-align: center;
    margin: 2%;
    color: white;
    font-family: "Orbitron", serif;
    text-shadow: -2px -2px 4px rgb(66, 66, 66);
    /* font-size: 3vw; */
}

.certificate {
    width: 100%;
    height: 48vh;
}

img {
    width: 100%;
    height: 100%;
}

button {
    background-color: #E99532;
    color: white;
    padding: 10px;
    border: 2px solid white;
    border-radius: 5px;
}
</style>