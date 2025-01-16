<template>
  <div class="container-fluid">
    <div class="row">
      
      <div class="col">
        <div class="y">
          <div class="contact-form">
            <span class="heading">Contact Us</span>
            <form>
              <label for="name">Name:</label>
              <input type="text" required="">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required="">
              <label for="message">Message:</label>
              <textarea id="message" name="message" required=""></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <div class="map my-3">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26441.71336306175!2d18.587063302499228!3d-34.06402368172923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4622ec44b0cf%3A0xb5b1f1fda71db68d!2sRocklands%2C%20Cape%20Town%2C%207798!5e0!3m2!1sen!2sza!4v1736791999798!5m2!1sen!2sza"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12" style="text-align: center; padding: 5%;">
        <p><i> "This is just gonna be text of something like Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsam voluptatibus aspernatur ipsa doloribus excepturi facere, deserunt animi exercitationem tempora blanditiis corrupti, non, repellat pariatur laborum magnam sunt esse aliquam." </i></p>
      </div>
    </div>

  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.container-fluid{
  min-height: 100vh;
  width: 95vw;
  padding: 3%;
  background-color: transparent;
}

.y {
  /* background-color: green; */
  height: 60vh;
  width: 100%;
}

.z {
  width: 100%;
  margin-top: 2%;
}

iframe {
  width: 100%;
  height: 50vh;
  align-self: baseline;
}
p{
  color: white;
}
/* contact form */
.contact-form {
  background-color: #f2f2f2;
  padding: 2%;
  border-radius: 10px;
  height: 100%;
}

.contact-form label {
  color: black;
}

.contact-form .heading {
  font-size: 24px;
  color: black;
  ;
  margin-bottom: 12px;
  font-weight: bold;
  display: block;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin-bottom: 10px;
}

textarea {
  resize: none;
  height: 80px;
  width: 200px;
}

.contact-form input, .contact-form textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
}

.contact-form input:focus, .contact-form textarea:focus {
  outline: none;
  box-shadow: 0 0 5px #ff6384;
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

.contact-form button[type="submit"] {
  background-color: #ff6384;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.contact-form button[type="submit"]:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

</style>