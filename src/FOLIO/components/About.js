function About() {
    return (
        <>
            <div id="about">
                <div class="section">
                    <h1 class="section-title">About</h1>

                    <div class="descr">
                        Hi, I'm Ostrealava02, I do 3D modeling for fun.<br />
                        I made an <i>Ocarina of Time</i> romhack called <i>Nimpize Adventure</i> in 2018 and since then,
                        I've discovered a craze for drawing old-school style scenes.<br />
                        I use <i>Blender 2.8</i> mixed with <i>Fast64</i>, a community-made pluggin that allows easy injections for <i>Nintendo64</i> games.<br />
                        Sometimes I like to use the <i>Eevee Engin</i> to make cool scenes.
                    </div>

                    <span className="allCases">
                        <div className="row1">
                            <div className="case">
                                <div className="caseTitle">
                                    <div>
                                        Game inspiration
                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li>The Legend of Zelda</li>
                                        <li>Metroid</li>
                                        <li>World of Warcraft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="case">
                                <div className="caseTitle">
                                    <div>
                                    People inspiration
                                    </div>
                                </div>
                                <div className="content">
                                    <ul>
                                    <li>Benjamin Sprout</li>
                                    <li>Benjamin Walton</li>
                                    <li>Motteux</li>
                                    <li>ESK</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </>
    );
}

export default About;