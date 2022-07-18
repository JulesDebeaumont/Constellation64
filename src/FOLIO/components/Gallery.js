// react & router
import '../gallery.css';
import * as React from "react";
import {
	Routes,
	Route,
	useNavigate
} from "react-router-dom";
// articles
const DarkGrotto = React.lazy(() => import('./articles/DarkGrotto'));
const RoyalFamilyBoat = React.lazy(() => import('./articles/RoyalFamilyBoat'));
const KeetasEnd = React.lazy(() => import('./articles/KeetasEnd'));
const EclipseTemple = React.lazy(() => import('./articles/EclipseTemple'));
const DIC = React.lazy(() => import('./articles/DIC'));
const GrottoWoods = React.lazy(() => import('./articles/GrottoWoods'));
const TheUndergroundForest = React.lazy(() => import('./articles/TheUndergroundForest'));
const TheFrozenShore = React.lazy(() => import('./articles/TheFrozenShore'));
const MeanwhileInHyrule = React.lazy(() => import('./articles/MeanwhileInHyrule'));
const GreatDekuReef = React.lazy(() => import('./articles/GreatDekuReef'));
const GoronCave = React.lazy(() => import('./articles/GoronCave'));
const BlackSandCavern = React.lazy(() => import('./articles/BlackSandCavern'));
const FungalBlight = React.lazy(() => import('./articles/FungalBlight'));
const SacredTree = React.lazy(() => import('./articles/SacredTree'));
const WetlandsOverworld = React.lazy(() => import('./articles/WetlandsOverworld'));
const WetlandsHouses = React.lazy(() => import('./articles/WetlandsHouses'));
const GoronSanctum = React.lazy(() => import('./articles/GoronSanctum'));
const HotSpringHole = React.lazy(() => import('./articles/HotSpringHole'));
const HotSpringValley = React.lazy(() => import('./articles/HotSpringValley'));
const HotSpringTourizm = React.lazy(() => import('./articles/HotSpringTourizm'));
const HotSpringGrottos = React.lazy(() => import('./articles/HotSpringGrottos'));
const PurpleBog = React.lazy(() => import('./articles/PurpleBog'));
const FungalBlightGrottos = React.lazy(() => import('./articles/FungalBlightGrottos'));
const TheBadMaw = React.lazy(() => import('./articles/TheBadMaw'));
const CoastTown = React.lazy(() => import('./articles/CoastTown'));
const TheRoomUnderground = React.lazy(() => import('./articles/TheRoomUnderground'));
const WolfosHideout = React.lazy(() => import('./articles/WolfosHideout'));

function Gallery() {
	const navigate = useNavigate();

	const allItemLinks = [
		{
			image: "RoyalFamilyBoat1.png",
			imageAlt: "Royal Family Boat",
			route: "royal-family-boat",
			color: "#0c824b",
			colorText: "#ace3c9",
			component: <RoyalFamilyBoat textColor="#ace3c9" />
		},
		{
			image: "KeetasEnd1.png",
			imageAlt: "Keeta's End",
			route: "keeta-end",
			color: "#ab5f22",
			colorText: "#dbae8a",
			component: <KeetasEnd textColor="#dbae8a" />
		},
		{
			image: "EclipseTemple1.png",
			imageAlt: "Eclipse Temple",
			route: "eclipse-temple",
			color: "#4f4ce6",
			colorText: "#afaeeb",
			component: <EclipseTemple textColor="#afaeeb" />
		},
		{
			image: "DarkIceCathedrale1.png",
			imageAlt: "Dark Ice Cathedrale",
			route: "dark-ice-cathedrale",
			color: "#19a4d1",
			colorText: "#aedceb",
			component: <DIC textColor="#aedceb" />
		},		{
			image: "GrottoWoods1.png",
			imageAlt: "Grotto Woods",
			route: "grotto-woods",
			color: "#3f168a",
			colorText: "#c1cbd9",
			component: <GrottoWoods textColor="#c1cbd9" />
		},
		{
			image: "TheUndergroundForest1.png",
			imageAlt: "The Underground Forest",
			route: "the-underground-forest",
			color: "#6e16d9",
			colorText: "#c2a8e0",
			component: <TheUndergroundForest textColor="#c2a8e0" />
		},
		{
			image: "FrozenShore1.png",
			imageAlt: "The Frozen Shore",
			route: "the-frozen-shore",
			color: "#4c3bd1",
			colorText: "#a8aee0",
			component: <TheFrozenShore textColor="#a8aee0" />
		},
		{
			image: "JDR1.png",
			imageAlt: "Meanwhile in Hyrule",
			route: "meanwhile-in-hyrule",
			color: "#d9af16",
			colorText: "#e0d2b8",
			component: <MeanwhileInHyrule textColor="#e0d2b8" />
		},
		{
			image: "GreatDekuReef1.png",
			imageAlt: "Great Deku Reef",
			route: "great-deku-reef",
			color: "#27c255",
			colorText: "#99c9a7",
			component: <GreatDekuReef textColor="#99c9a7" />
		},
		{
			image: "GoronCavern1.png",
			imageAlt: "Goron Cave",
			route: "goron-cavern",
			color: "#e0cea5",
			colorText: "#decfb4",
			component: <GoronCave textColor="#decfb4" />
		},
		{
			image: "BlackSandCavern1.png",
			imageAlt: "Black Sand Cavern",
			route: "black-sand-cavern",
			color: "#204c78",
			colorText: "#a5aed4",
			component: <BlackSandCavern textColor="#a5aed4" />
		},
		{
			image: "FungalBlight1.png",
			imageAlt: "Fungal Blight",
			route: "fungal-blight",
			color: "#e0cea5",
			colorText: "#cccfa1",
			component: <FungalBlight textColor="#cccfa1" />
		},
		{
			image: "SacredTree1.png",
			imageAlt: "Sacred Tree",
			route: "sacred-tree",
			color: "#944318",
			colorText: "#91cc9a",
			component: <SacredTree textColor="#91cc9a" />
		},
		{
			image: "Wetlands1.png",
			imageAlt: "Wetlands Overworld",
			route: "wetlands",
			color: "#286b13",
			colorText: "#c7cfae",
			component: <WetlandsOverworld textColor="#c7cfae" />
		},
		{
			image: "WetlandsHouse1.png",
			imageAlt: "Wetlands Houses",
			route: "wetlands-house",
			color: "#e0cea5",
			colorText: "#dbc18a",
			component: <WetlandsHouses textColor="#dbc18a" />
		},
		{
			image: "GoronSanctum1.png",
			imageAlt: "Goron Sanctum",
			route: "goron-sanctum",
			color: "#66d1cc",
			colorText: "#b8e0de",
			component: <GoronSanctum textColor="#b8e0de" />
		},
		{
			image: "HotSpringHole1.png",
			imageAlt: "Hot Spring Hole",
			route: "hot-spring-hole",
			color: "#ced1d6",
			colorText: "#a9a5cf",
			component: <HotSpringHole textColor="#a9a5cf" />
		},
		{
			image: "HotSpringValley1.png",
			imageAlt: "Hot Spring Valley",
			route: "hot-spring-valley",
			color: "#e0cea5",
			colorText: "#d9c69e",
			component: <HotSpringValley textColor="#d9c69e" />
		},
		{
			image: "HotSpringTourizm1.png",
			imageAlt: "Hot Spring Tourizm",
			route: "hot-spring-tourizm",
			color: "#c25c1d",
			colorText: "#d9bc9e",
			component: <HotSpringTourizm textColor="#d9bc9e" />
		},
		{
			image: "HotSpringGrotto1.png",
			imageAlt: "Hot Spring Grottos",
			route: "hot-spring-grotto",
			color: "#1a9599",
			colorText: "#c8ddde",
			component: <HotSpringGrottos textColor="#c8ddde" />
		},
		{
			image: "PurpleBog1.png",
			imageAlt: "Purple Bog",
			route: "purple-bog",
			color: "#5d34a3",
			colorText: "#78c2ac",
			component: <PurpleBog textColor="#78c2ac" />
		},
		{
			image: "FungalBlightGrotto1.png",
			imageAlt: "Fungal Blight Grottos",
			route: "fungal-blight-grottos",
			color: "#168a67",
			colorText: "#77bd86",
			component: <FungalBlightGrottos textColor="#77bd86" />
		},
		{
			image: "DarkGrotto1.png",
			imageAlt: "Dark Grotto",
			route: "dark-grotto",
			color: "#2751a3",
			colorText: "#a5c5d1",
			component: <DarkGrotto textColor="#a5c5d1" />
		},
		{
			image: "TheBadMaw1.png",
			imageAlt: "The Bad Maw",
			route: "the-as-maw",
			color: "#1aad75",
			colorText: "#91c9b4",
			component: <TheBadMaw textColor="#91c9b4" />
		},
		{
			image: "CoastTown1.png",
			imageAlt: "Coast Town",
			route: "coast-town",
			color: "#9c911f",
			colorText: "#b6bd88",
			component: <CoastTown textColor="#b6bd88" />
		},
		{
			image: "TheRoomUnderground1.png",
			imageAlt: "The Room Underground",
			route: "the-room-underground",
			color: "#edc25f",
			colorText: "#ccc4b1",
			component: <TheRoomUnderground textColor="#ccc4b1" />
		},
		{
			image: "WolfosHideout1.png",
			imageAlt: "Wolfos Hideout",
			route: "wolfos-hideout",
			color: "#66d1cc",
			colorText: "#b8e0de",
			component: <WolfosHideout textColor="#b8e0de" />
		},
	];

	const allItems = allItemLinks.map((item) => (
		<div className="item-gallery-layer" key={item.route}
			style={{ backgroundImage: `url("./imgFolio/${item.image}")` }}>
			<article className="item-gallery-link"
				onClick={() => navigate(`/gallery/${item.route}`)}
				style={{ '--hover-color': item.color }}>
				<h1 className="item-gallery-title" style={{ '--title-color': item.colorText }}>{item.imageAlt}</h1>
			</article>
		</div>
	));

	const allRoutes = allItemLinks.map((item) => (
		<Route exact path={`${item.route}`} key={item.route} element={
			<React.Suspense fallback={<div className="overlay-loading"></div>}>
				{item.component}
			</React.Suspense>
		} />
	));

	return (
		<>
			<div className="gallery">

				<Routes>
					<Route exact path="/" element={allItems} />
					{allRoutes}
				</Routes>
			</div>
		</>
	);
}

export default Gallery;