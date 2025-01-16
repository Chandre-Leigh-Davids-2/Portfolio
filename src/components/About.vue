<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-md-5 d-flex d-none d-md-block">
                        <div class="imgSelf d-none d-md-block">
                            <img src="../assets/images/pictureOfSelf.png" alt="picture of self">
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="pop">
                            <h1>This is my</h1>
                            <ul>
                                <li>Full Name</li>
                                <li>age</li>
                            </ul>
                        </div>
                        <div class="pop">
                            <h1>About Me</h1>
                            <p>I am Chandre Leigh Davids, a Full Stack Developer with a real passion for creating
                                meaningful digital
                                experiences. I enjoy working on both the backend and frontend, always looking for ways
                                to improve and learn
                                something new along the way. There's always something fresh to explore in development,
                                and that constant
                                opportunity to learn is what keeps me excited about this field. I’m always up for a
                                challenge, and I love
                                collaborating with others to bring ideas to life!</p>
                        </div>
                    </div>
                </div>
                <div class="row pop">
                    <h1>Experience</h1>
                    <ul>
                        <li v-for="(item, index) in experience" :key="index" @click="openModal(item)">
                            <div class="row">
                                <div class="imgDiv">
                                    <img :src="item.img" alt="">
                                </div>
                                <div class="col">
                                    <div class="info">{{ item.title }}</div>
                                    <div class="year">{{ item.brief }}</div>
                                    <div class="year">{{ item.year }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="edu pop">
                    <h1>Education</h1>
                    <ul>
                        <li v-for="(item, index) in education" :key="index" @click="openModal(item)">
                            <div class="row">
                                <div class="imgDiv">
                                    <img :src="item.img" alt="">
                                </div>
                                <div class="col">
                                    <div class="info">{{ item.title }}</div>
                                    <div class="year">{{ item.brief }}</div>
                                    <div class="year">{{ item.year }}</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- skills -->
        <div class="row">
            <h1>Skills</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quaerat modi, culpa impedit hic
                inventore nobis eligendi, nisi quae aliquam praesentium veniam assumenda maxime doloremque, odio
                exercitationem eaque rem dolorem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
                voluptas quo molestiae modi voluptatibus, sed optio deserunt eaque doloremque asperiores accusamus,
                ipsum quia vel aliquam cumque veniam maiores. Earum, non? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iure laborum eius recusandae et deserunt atque itaque ab consequatur quia! Illum,
                repudiandae mollitia temporibus quibusdam laborum neque nihil quasi dolorum asperiores? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptates tenetur, soluta temporibus quis tempore alias
                deserunt eveniet exercitationem iusto illum placeat quas non deleniti hic sed inventore vel aspernatur
                accusantium?</p>
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
</template>
<script>
import mondale from '../assets/images/mondaleBadge.jpeg'
import studio from '../assets/images/LC Studio.jpeg'
import LCA from '../assets/images/LCA.jpeg'
import UE from '../assets/images/images.jpeg'
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
                    brief: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam ad excepturi temporibus, sunt modi dolorem? Ea delectus fuga sit quaerat commodi iusto quae nesciunt doloremque! Eius maxime quidem odit!',
                    content: 'This is where I completed my high school education.',
                    year: '2019 - 2023',
                    img: mondale,
                },
                {
                    title: 'Life Choices Academy',
                    brief: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam ad excepturi temporibus, sunt modi dolorem? Ea delectus fuga sit quaerat commodi iusto quae nesciunt doloremque! Eius maxime quidem odit!',
                    content: 'A brief description about Life Choices Academy.',
                    year: 'April 2024 - September 2026',
                    img: LCA,
                },
            ],
            experience: [
                {
                    title: 'Upper Edge',
                    brief: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam ad excepturi temporibus, sunt modi dolorem? Ea delectus fuga sit quaerat commodi iusto quae nesciunt doloremque! Eius maxime quidem odit!',
                    content: 'Details about my role at Upper Edge.',
                    year: 'December 2024 - March 2024',
                    img: UE,
                },
                {
                    title: 'LC Studio',
                    brief: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam ad excepturi temporibus, sunt modi dolorem? Ea delectus fuga sit quaerat commodi iusto quae nesciunt doloremque! Eius maxime quidem odit!',
                    content: 'Web Dev and Software Dev',
                    year: 'September 2024 - present',
                    img: studio,
                },
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
    }
};

</script>
<style scoped>
.container-fluid {
    min-height: 100vh;
    width: 95vw;
    padding: 3%;
    background-color: transparent;
    padding: 3%;
    box-shadow:5px 5px 10px #d9006c,
        -5px -5px 10px #ff0092;
    border-radius: 15px;
}

.pop {
    border-radius: 20px;
    border: 2px solid #FF007F;
        padding: 3%;
        margin: 3%;
}

.imgSelf {
    margin: auto;
}

p {
    color: white;
}

h1 {
    color: white;
}

img {
    width: 100%;
    padding: auto;
}

.imgDiv {
    width: 50px;
    height: 50px;
}

ul li {
    color: white;
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
</style>