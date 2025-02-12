<template>
    <div class="container-fluid">
        <h1>Statistics</h1>
        <div class="row padding">
            <div data-aos="fade-right" class="col-xl-4 d-flex flex-column align-content-center col-lg-6">
                <div class="box Landing-picture d-none d-lg-block">
                    <img src="../assets/images/pictureOfSelf1.png" alt="picture of myself">
                </div>
                <div class="box pop tech">
                    <div class="row p-2">
                        <h3>Technical Skill Set</h3>
                        <div class="col skill skill"><span>HTML5</span></div>
                        <div class="col skill"><span>CSS3</span></div>
                        <div class="col skill"><span>Bootstrap</span></div>
                        <div class="col skill"><span>GitBash</span></div>
                        <div class="col skill"><span>Javascript</span></div>
                        <div class="col skill"><span>Vue.js</span></div>
                        <div class="col skill"><span>Node.js</span></div>
                        <div class="col skill"><span>MySQL</span></div>
                        <div class="col skill"><span>Python</span></div>
                        <div class="col skill"><span>Wordpress</span></div>
                        <div class="col skill"><span>SEO</span> </div>
                        <div class="col skill"><span>SCRUM</span> </div>
                    </div>
                </div>
                <div class="box pop soft">
                    <div class="row p-2">
                        <h3>Soft Skill Set</h3>
                        <div class="col skill"><span>Collabrative</span></div>
                        <div class="col skill"><span>Disciplined</span></div>
                        <div class="col skill"><span>Dedicated</span></div>
                        <div class="col skill"><span>Adaptable</span></div>
                        <div class="col skill"><span>Communacative</span></div>
                        <div class="col skill"><span>Efficienct</span></div>
                    </div>
                </div>
                <div class="box pop status">
                    <h3>Status</h3>
                    <p>This user is open to work</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6  d-flex flex-column align-content-center">
                <div data-aos="fade-down" class="box pop mt-4 brief">
                    <div class="col">
                        <h3>Brief</h3>
                        <ul>
                            <li>Name: Chandré Leigh Davids</li>
                            <li>Contact : 073 325 3129</li>
                            <li>Profession: Full Stack Developer</li>
                        </ul>
                    </div>
                </div>
                <div data-aos="fade-up" class="box pop about my-2">
                    <div class="col">
                        <h3>About</h3>
                        <p class="p">I am Chandre Leigh Davids, a Full Stack Developer with a real passion for creating
                            meaningful digital
                            experiences. I enjoy working on both the backend and frontend, always looking for ways
                            to improve and learn
                            something new along the way. There's always something fresh to explore in development,
                            and that constant
                            opportunity to learn is what keeps me excited about this field. I’m always up for a
                            challenge, and I love
                            collaborating with others to bring ideas to life!</p>
                    </div>
                    <div class="col">
                        <h3>Hobbies</h3>
                        <ul>
                            <li>Hiking</li>
                            <li>Reading</li>
                            <li>Crafts</li>
                            <li>Playing Guitar</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div data-aos="fade-left" class="col-xl-5 d-flex flex-column align-content-center">
                <div class="box pop mt-4 resume">
                    <div class="row">
                        <div class="col">
                            <h3>Education</h3>
                            <ul>
                                <li v-for="(item, index) in education" :key="index" @click="openModal(item)">
                                    <div class="row">
                                        <div class="imgDiv">
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div class="col">
                                            <span class="info m-1">{{ item.title }}</span><br>
                                            <span class="brief m-1">{{ item.brief }}</span><br>
                                            <span class="year m-1">{{ item.year }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h3>Experience</h3>
                            <ul>
                                <li v-for="(item, index) in experience" :key="index" @click="openModal(item)">
                                    <div class="row">
                                        <div class="imgDiv">
                                            <img :src="item.img" alt="">
                                        </div>
                                        <div class="col fit-content">
                                            <span class="info m-1">{{ item.title }}</span><br>
                                            <span class="brief m-1">{{ item.brief }}</span><br>
                                            <span class="year m-1">{{ item.year }}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h3>Download CV</h3>
                            <a href="https://chandre-leigh-davids-2.github.io/Portfolio/src/assets/CV/Simple%20Professional%20CV%20Resume.pdf"
                                target="_blank" download="Chandre-Leigh-Davids-CV">
                                <div class="cv">
                                    <img src="../assets/images/CV.png" alt="CV Image">
                                </div>
                            </a>

                            <div class="col">
                                <h3>Learn More </h3>
                                <router-link to="/LearnMore">Learn More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal -->
            <div v-if="showModal" class="modal" tabindex="-1" role="dialog" @click.self="closeModal">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{ modalTitle }}</h5>
                        </div>
                        <div class="modal-body">
                            <p>{{ modalContent }}</p>
                        </div>
                        <div class="modal-footer d-flex justify-content-between">
                            <p>{{ modalFooter }}</p>
                            <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- badges -->

        <div class="padding">
            <div class="row">
                <h1>Badges Obtained</h1>
            </div>
            <div data-aos="fade-up" class="row">
                <div class="col mt-5">
                    <div class="box d-flex justify-content-center">
                        <div class="scroll">
                            <button class="badge"><img src="../assets/images/Linux.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/operatingSystems.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/aws.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/JSE2.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/python.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/python.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/UIUX.png" alt=""></button>
                            <button class="badge"><img src="../assets/images/WordPressBadge.png" alt=""></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

import mondale from '../assets/images/mondaleBadge.jpeg'
import studio from '../assets/images/LC Studio.jpeg'
import LCA from '../assets/images/LCA.jpeg'
import UE from '../assets/images/UpperEdge.jpeg'
import business from '../assets/images/business.jpg'

export default {
    data() {
        return {
            showModal: false,
            modalTitle: '',
            modalContent: '',
            modalFooter: '',
            education: [
                {
                    title: 'Mondale High School',
                    brief: 'This is where I completed my high school education.',
                    content: 'I studied at Mondale High School. I learnt most of my communacative skills here. I majored in Pure Maths, Life Science and Accounting. ',
                    year: '2019 - 2023',
                    img: mondale,
                },
                {
                    title: 'Life Choices Academy',
                    brief: 'I attended Life Choices Academy 6 month bootcamp',
                    content: 'I attended Life Choices Academy 6 month bootcamp, where I built my foundation in Computer Science. I learnt HTML, CSS, JavaScript, Node.js, Vue.js and MySQL.',
                    year: 'April 2024 - September 2026',
                    img: LCA,
                },
            ],
            experience: [
                {
                    title: 'Upper Edge',
                    brief: 'I casualed and did filing and admin work',
                    content: 'I casualed and did filing and admin work. My duties included: filing and packing. I worked alongside my employer to make sure all the files were up to date.',
                    year: 'December 2024 - March 2024',
                    img: UE,
                },
                {
                    title: 'LC Studio',
                    brief: 'I am currently interning at LC Studio',
                    content: 'I completed my Web Development learning journey where I learnt Wordpress and SEO. I also sharpened my skills in JavaScript and now I am currently on my second learning journey which is Software Development. Whikst at Studio we learnt about SCRUM methodologies, hence I have an understanding of the Agile Methodologies',
                    year: 'September 2024 - present',
                    img: studio,
                },
                {
                    title: 'Prettier is Pink',
                    brief: 'I started and currently run my own business',
                    content: 'I started and currently run my own business, where I sell bouquets and crafts as gifts',
                    year: 'October 2023 - present',
                    img: business,
                }
            ],
        };
    },
    methods: {
        openModal(item) {
            this.modalTitle = item.title;
            this.modalContent = item.content;
            this.modalFooter = item.year;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        }
    },
  mounted() {
    // Initialize AOS animations
    AOS.init();

    // Ensure AOS refreshes after navigation
    this.$watch('$route', () => {
      AOS.refreshHard();
    });
  },
};

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*::-webkit-scrollbar-track {
    background-color: #4CAF50;
    /* Green color for the thumb */
}

.fit-content {
    width: fit-content;
    height: fit-content;
}

@media screen and (min-width: 992px) {
    .about {
        height: 100%;
    }
}

@media screen and (min-width:1200px) {
    .about {
        height: 658px;
    }

    .resume {
        height: 838px;
    }

    .brief {
        height: 172px;
    }

    .p {
        font-size: 1.9vh;
    }

    .status {
        height: 92px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .tech {
        height: 218px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .soft {
        height: 183px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    /* Custom Scrollbar for .x */
    .soft::-webkit-scrollbar {
        width: 12px;
    }

    .soft::-webkit-scrollbar-thumb {
        background-color: white;
        /* Green thumb */
        border-radius: 10px;
    }

    .soft::-webkit-scrollbar-thumb:hover {
        background-color: rgb(253, 201, 241);
        /* Darker green when hovered */
    }

    .soft::-webkit-scrollbar-track {
        background-color: transparent;
        /* Light grey track */
        border-radius: 10px;
    }

    /* Custom Scrollbar for .status */
    .status::-webkit-scrollbar {
        width: 10px;
    }

    .status::-webkit-scrollbar-thumb {
        background-color: white;
        /* Orange thumb */
        border-radius: 10px;
    }

    .status::-webkit-scrollbar-thumb:hover {
        background-color: rgb(253, 201, 241);
        /* Darker orange on hover */
    }

    .status::-webkit-scrollbar-track {
        background-color: transparent;
        /* Lighter background for track */
        border-radius: 10px;
    }

    /* Custom Scrollbar for .tech */
    .tech::-webkit-scrollbar {
        width: 12px;
    }

    .tech::-webkit-scrollbar-thumb {
        background-color: white;
        /* Blue thumb */
        border-radius: 10px;
    }

    .tech::-webkit-scrollbar-thumb:hover {
        background-color: rgb(253, 201, 241);
        /* Darker blue on hover */
    }

    .tech::-webkit-scrollbar-track {
        background-color: transparent;
        /* Light grey track */
        border-radius: 10px;
    }
}

h1 {
    text-align: center;
    margin: 2%;
    color: white;
    font-family: "Orbitron", serif;
    text-shadow: -2px -2px 4px rgb(66, 66, 66);
    /* font-size: 3vw; */
}

.skill {
    background-color: green;
    border: 2px solid gold;
    color: white;
    margin: 1%;
    border-radius: 15px;
    height: fit-content;
    padding: 7px;
    text-indent: 3px;
}

.skill:hover {
    background-color: gold;
    border: 2px solid green;
    color: white;
    margin: 1%;
    transition: 0.25s ease-in-out;
}

p,
li {
    color: rgb(39, 39, 39);
    margin-left:2px;
    font-family: "Poppins", serif;

}

ul li:hover {
    color: white;
    cursor: grab;
}

h3 {
    color: white;
    font-family: "Orbitron", serif;
}

.padding {
    padding: 0 4vw 0 4vw;
}

.container-fluid {
    min-height: 100vh;
    width: 95vw;
    padding: 3%;
    background-color: transparent;
    border: 3px solid white;
    border-radius: 15px;
}

img {
    /* object-fit: contain; */
    width: 100%;
    height: 100%;
}

.Landing-picture {
    position: relative;
    height: 355px;
    /* height: 50vh; */
}

.pop {
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(233, 225, 225);
    border: 1px solid white;
    padding: 3%;
    margin: 1% 1% 0 1%;
    background-color: rgba(255, 255, 255, 0.496);
    border-radius: 10px;
    backdrop-filter: blur(8px);
    /* Apply blur effect to the background */
    -webkit-backdrop-filter: blur(8px);
    /* For Safari support */
}

.imgDiv {
    width: 60px;
    height: 50px;
}

/* modal */
.modal {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1050;
    background: rgba(0, 0, 0, 0.63);
    overflow: auto;
}

.modal-dialog {
    max-width: 500px;
    margin: 10% auto;
}

.modal-content {
    background: rgb(8, 0, 0);
    padding: 20px;
    border-radius: 10px;
    color: white;
}

.close {
    font-size: 1.5rem;
    font-weight: bold;
    color: #000;
}

.box {
    display: flex;
    flex-direction: column;
    /* Stack items vertically */
}

.x {
    height: max-content;
}

/* badges */

.box {
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(233, 225, 225);
    border: 1px solid white;
    padding: 1%;
    background-color: rgba(255, 255, 255, 0.496);
    border-radius: 10px;
    backdrop-filter: blur(8px);
    /* Apply blur effect to the background */
    -webkit-backdrop-filter: blur(8px);
    /* For Safari support */
}

.boxCards {
    min-height: 40vh;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(233, 225, 225);
    border: 1px solid white;
    padding: 3%;
    background-color: rgba(255, 255, 255, 0.496);
    border-radius: 10px;
    backdrop-filter: blur(8px);
    /* Apply blur effect to the background */
    -webkit-backdrop-filter: blur(8px);
    /* For Safari support */
}

.boxButtons {
    min-height: 40vh;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(233, 225, 225);
    border: 1px solid white;
    padding: 3%;
    background-color: rgba(255, 255, 255, 0.496);
    border-radius: 10px;
    backdrop-filter: blur(8px);
    /* Apply blur effect to the background */
    -webkit-backdrop-filter: blur(8px);
    /* For Safari support */
}

.badge {
    width: 14.95vw !important;
    /* Reduced width to allow horizontal scrolling */
    margin: 2px;
}

.scroll {
    height: 235px;
    /* Set a max height to make it scrollable */
    overflow-x: auto;
    /* Enables horizontal scrolling */
    align-items: center;
}

@media screen and (max-width: 1085px) {
    .badge {
        width: 25vw !important;
        /* Reduced width to allow horizontal scrolling */
        margin: 0.5px;
        display: inline-block;
        /* Display buttons as inline-block to allow horizontal scrolling */
    }

    .scroll {
        height: 200px;
        /* Set a max height to make it scrollable */
    }
}

@media screen and (max-width: 466px) {
    .badge {
        width: 24vw !important;
        /* Reduced width to allow horizontal scrolling */
        margin-left: 0px;
        display: inline-block;
        /* Display buttons as inline-block to allow horizontal scrolling */
    }

    .scroll {
        height: 13.5vh;
    }
}

img {
    width: 100%;
}

.certificate {
    width: 25vw !important;
    /* Reduced width to allow horizontal scrolling */
    margin: 2px;
}

.info {
    text-decoration: none;
    color: #3B5B43;
    transition: 0.1s ease-in-out;
}

.info:hover {
    text-decoration: 1px underline #3B5B43;
    transition: 0.1s ease-in-out;
}

.cv {
    width: 8vw;
    height: 19vh;
    margin-left: 2px;
}

.cv>img {
    width: 100%;
    height: 100%;
}
</style>