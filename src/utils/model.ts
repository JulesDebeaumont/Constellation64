export interface IConfigPage {
    titre: string;
    couleur: string;
    couleurTexte: string;
    folderPicture: string;
    description: {
        region: string;
        engine: 'EEVEE' | 'F3DZEX',
        polyCount: number;
        roomCount: number
    };
    displayPages: IDisplayPage[];
}
export interface IDisplayPage {
    type: 'picture' | 'description' | 'comment',
    filenamePicture?: string;
    comment?: string;
}