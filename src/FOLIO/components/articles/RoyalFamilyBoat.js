import * as React from "react";

function RoyalFamilyBoat(props) {
    const LayoutArticle = React.lazy(() => import('../parts/LayoutArticle'));
    const Title = React.lazy(() => import('../parts/Title'));
    const Stats = React.lazy(() => import('../parts/Stats'));
    const Image = React.lazy(() => import('../parts/Image'));
    const Description = React.lazy(() => import('../parts/Description'));
    
    const {textColor} = props

    return (
        <>
            <LayoutArticle textColor={textColor}>
                <Title title="Royal Family Boat" />
                <Image path="RoyalFamilyBoat2.png" alts="Royal FamilyBoat 1" />
                <Stats
                    engine="Eevee"
                    polys="5874"
                    rooms="6"
                    region="The Whispering Sea"
                />
                <Image path="RoyalFamilyBoat3.png" alts="Royal FamilyBoat 2" />
                <Description>
                    This ship was created by the <i>Sheikah</i> for the Royal Family to escape the Hyrulean Civil War by the sea. <br />
                    Today, the Royal Family Boat sails by itself on the <i>Whispering Sea</i>, floating around the Great Rupee Mines.<br /><br />
                    Gossip stone hint : <i>They say that if you see empty webs, their hosts are probably hunting in the murk.</i>
                </Description>
                <Image path="RoyalFamilyBoat4.png" alts="Royal FamilyBoat 3" />

            </LayoutArticle>
        </>
    );
}

export default RoyalFamilyBoat;