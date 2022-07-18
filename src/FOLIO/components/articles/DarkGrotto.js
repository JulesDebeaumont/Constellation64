import * as React from "react";

function DarkGrotto(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const Description = React.lazy(() => import('../parts/Description'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Dark Grotto" />
                <Image path="DarkGrotto4.png" alts="Dark Grotto 1" />
                <Stats
                    engine="F3DZEX"
                    polys="5888"
                    rooms="3"
                    region="The Whispering Sea"
                />
                <Image path="DarkGrotto3.png" alts="Dark Grotto 2" />
                <Description>
                    Dark Grotto, also known as Crystal Grotto, is located on of the three islands of the <i>Whispering Sea</i>. <br />
                    
                    Shoutouts to <i>Motteux</i> for the third room inspiration.
                </Description>
                <Image path="DarkGrotto2.png" alts="Dark Grotto 3" />

            </LayoutArticle>
        </>
    );
}

export default DarkGrotto;