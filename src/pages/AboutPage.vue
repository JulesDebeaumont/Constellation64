<template>
    <q-page class="row items-center justify-evenly">
        <div id="about">
            <div>
                <h2 class="q-pt-xl text-center">About</h2>

                <div class="text-center text-h6 q-px-md">
                    Hi, I'm Ostrealava02, I do 3D modeling for fun.<br />
                    I made an <i>Ocarina of Time</i> romhack called <i>Nimpize Adventure</i> in 2018 and since then,
                    I've discovered a craze for drawing old-school style scenes.<br />
                    I use <i>Blender 2.8</i> mixed with <i>Fast64</i>, a community-made pluggin that allows easy injections
                    for <i>Nintendo64</i> games.<br />
                    Sometimes I like to use the <i>Eevee Engin</i> to make scenes.
                </div>

                <div class="flex row flex-center q-pt-xl">
                    <div class="row1">
                        <div class="case">
                            <div class="caseTitle">
                                <div>
                                    Game inspiration
                                </div>
                            </div>
                            <div class="content flex flex-center column q-py-md">
                                <span>The Legend of Zelda</span>
                                <span>Metroid</span>
                                <span>World of Warcraft</span>
                            </div>
                        </div>

                        <div class="case">
                            <div class="caseTitle">
                                <div>
                                    People inspiration
                                </div>
                            </div>
                            <div class="content flex flex-center column q-py-md">
                                <span>Benjamin Sprout</span>
                                <span>Benjamin Walton</span>
                                <span>Motteux</span>
                                <span>ESK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </q-page>
</template>

<style scoped>
#about {
    width: 100%;
    min-height: calc(100vh - 64px);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/img/Nimpize.PNG');
    background-size: cover;
    background-position-x: 40%;
    background-position-y: -60%;
}

.case:hover {
    background-color: rgba(43, 43, 43, 0.438);
    transition: all 0.25s;
}

.row1 {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.content {
    margin-top: 10px;
    padding-bottom: 10px;
    font-size: 25px;
}

.case {
    display: flex;
    flex-direction: column;
    max-width: 550px;
    margin: 6px;
    padding: 6px;
    border-radius: 5px;
    background-color: rgba(48, 48, 48, 0.295);
    border: 1px solid rgba(100, 100, 100, 0.253);
}

@media screen and (max-width: 400px) {
    .case {
        width: auto;
    }
}

.caseTitle {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 29px;
    text-align: center;
    color: var(--important);
    font-weight: bold;
    margin-top: 10px;
    padding-bottom: 7px;
    border-bottom: rgba(133, 128, 99, 0.6) 1px solid;
}
</style>