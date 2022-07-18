import * as React from "react";

function TheRoomUnderground(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="The Room Underground" />
                <Image path="TRU1.png" alts="The Room Underground 1" />
                <Stats
                    engine="Eevee"
                    polys="3604"
                    rooms="1"
                    region="Unknown"
                />

            </LayoutArticle>
        </>
    );
}

export default TheRoomUnderground;