// dataService.ts

import fs from 'fs';
import path from 'path';
import { IArchitektonickaPamatka, ICyklovylety, IHrady, IInfocentra, IInformacniCentraAutobusoveDopravy, IKina, IKulturniDomy, ILazne, ILekarskaPohotovostniSluzba, IMuzeaAGalerie, INarodniKulturniPamatky, INaslednaLuzkovaPece, IOdborneLecebneUstavy, IOstatniHistorickePamatky, IPamatkoveRezervace, IPamatkoveZony, IPivovary, IPoskytovateleSocialnichSluzeb, IPraktictiLekariProDospele, IRozhlednyAVyhlidky, IRybareni, ISolneJeskyne, ITechnickePamatky, IValecneHrobyVeVlastnictviKraje, IZamky, IZubniLekari } from './firebase';

interface IData {
    architektonicke_pamatky: string[];
    cyklovylety: string[];
    hrady: string[];
    infocentra: string[];
    informacni_centra_autobusove_dopravy: string[];
    kina: string[];
    kulturni_domy: string[];
    lazne: string[];
    lekarska_pohotovostni_sluzba: string[];
    muzea_a_galerie: string[];
    narodní_kulturní_pamatky: string[];
    nasledna_luzkova_pece: string[];
    odborné_lecebne_ustavy: string[];
    ostatni_historicke_pamatky: string[];
    pamatkove_rezervace: string[];
    pamatkove_zony: string[];
    pivovary: string[];
    poskytovatele_socialnich_sluzeb: string[];
    prakticti_lekari_pro_dospele: string[];
    rozhledny_a_vyhlidky: string[];
    rybareni: string[];
    solne_jeskyne: string[];
    technicke_pamatky: string[];
    valecne_hroby_ve_vlastnictvi_kraje: string[];
    zamky: string[];
    zubni_lekari: string[];
}

// Load JSON data from a file
const loadData = (): IData => {
    const filePath = path.join('app/a.json'); // Adjust the path if necessary
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
};

// Function to get cycling trips
export const getCyklovylety = (): ICyklovylety[] => {
    const data = loadData();
    return data.cyklovylety as unknown as ICyklovylety[];
};

// Function to get architectural monuments
export const getArchitektonickePamatky = (): IArchitektonickaPamatka[] => {
    const data = loadData();
    return data.architektonicke_pamatky as unknown as IArchitektonickaPamatka[];
};

// Function to get castles
export const getHrady = (): IHrady[] => {
    const data = loadData();
    return data.hrady as unknown as IHrady[];
};

// Function to get information centers
export const getInfocentra = (): IInfocentra[] => {
    const data = loadData();
    return data.infocentra as unknown as IInfocentra[];
};

// Function to get bus transport information centers
export const getInformacniCentraAutobusoveDopravy = (): IInformacniCentraAutobusoveDopravy[] => {
    const data = loadData();
    return data.informacni_centra_autobusove_dopravy as unknown as IInformacniCentraAutobusoveDopravy[];
};

// Function to get cinemas
export const getKina = (): IKina[] => {
    const data = loadData();
    return data.kina as unknown as IKina[];
};

// Function to get cultural centers
export const getKulturniDomy = (): IKulturniDomy[] => {
    const data = loadData();
    return data.kulturni_domy as unknown as IKulturniDomy[];
};

// Function to get spas
export const getLazne = (): ILazne[] => {
    const data = loadData();
    return data.lazne as unknown as ILazne[];
};

// Function to get medical emergency services
export const getLekarskaPohotovostniSluzba = (): ILekarskaPohotovostniSluzba[] => {
    const data = loadData();
    return data.lekarska_pohotovostni_sluzba as unknown as ILekarskaPohotovostniSluzba[];
};

// Function to get museums and galleries
export const getMuzeaAGalerie = (): IMuzeaAGalerie[] => {
    const data = loadData();
    return data.muzea_a_galerie as unknown as IMuzeaAGalerie[];
};

// Function to get national cultural monuments
export const getNarodniKulturniPamatky = (): INarodniKulturniPamatky[] => {
    const data = loadData();
    return data.narodní_kulturní_pamatky as unknown as INarodniKulturniPamatky[];
};

// Function to get subsequent nursing care
export const getNaslednaLuzkovaPece = (): INaslednaLuzkovaPece[] => {
    const data = loadData();
    return data.nasledna_luzkova_pece as unknown as INaslednaLuzkovaPece[];
};

// Function to get specialized treatment institutes
export const getOdborneLecebneUstavy = (): IOdborneLecebneUstavy[] => {
    const data = loadData();
    return data.odborné_lecebne_ustavy as unknown as IOdborneLecebneUstavy[];
};

// Function to get other historical monuments
export const getOstatniHistorickePamatky = (): IOstatniHistorickePamatky[] => {
    const data = loadData();
    return data.ostatni_historicke_pamatky as unknown as IOstatniHistorickePamatky[];
};

// Function to get monument reserves
export const getPamatkoveRezervace = (): IPamatkoveRezervace[] => {
    const data = loadData();
    return data.pamatkove_rezervace as unknown as IPamatkoveRezervace[];
};

// Function to get monument zones
export const getPamatkoveZony = (): IPamatkoveZony[] => {
    const data = loadData();
    return data.pamatkove_zony as unknown as IPamatkoveZony[];
};

// Function to get breweries
export const getPivovary = (): IPivovary[] => {
    const data = loadData();
    return data.pivovary as unknown as IPivovary[];
};

// Function to get social service providers
export const getPoskytovateleSocialnichSluzeb = (): IPoskytovateleSocialnichSluzeb[] => {
    const data = loadData();
    return data.poskytovatele_socialnich_sluzeb as unknown as IPoskytovateleSocialnichSluzeb[];
};

// Function to get general practitioners for adults
export const getPraktictiLekariProDospele = (): IPraktictiLekariProDospele[] => {
    const data = loadData();
    return data.prakticti_lekari_pro_dospele as unknown as IPraktictiLekariProDospele[];
};

// Function to get lookout towers and viewpoints
export const getRozhlednyAVyhlidky = (): IRozhlednyAVyhlidky[] => {
    const data = loadData();
    return data.rozhledny_a_vyhlidky as unknown as IRozhlednyAVyhlidky[];
};

// Function to get fishing information
export const getRybareni = (): IRybareni[] => {
    const data = loadData();
    return data.rybareni as unknown as IRybareni[];
};

// Function to get salt caves
export const getSolneJeskyne = (): ISolneJeskyne[] => {
    const data = loadData();
    return data.solne_jeskyne as unknown as ISolneJeskyne[];
};

// Function to get technical monuments
export const getTechnickePamatky = (): ITechnickePamatky[] => {
    const data = loadData();
    return data.technicke_pamatky as unknown as ITechnickePamatky[];
};

// Function to get war graves owned by the region
export const getValecneHrobyVeVlastnictviKraje = (): IValecneHrobyVeVlastnictviKraje[] => {
    const data = loadData();
    return data.valecne_hroby_ve_vlastnictvi_kraje as unknown as IValecneHrobyVeVlastnictviKraje[];
};

// Function to get castles
export const getZamky = (): IZamky[] => {
    const data = loadData();
    return data.zamky as unknown as IZamky[];
};

// Function to get dentists
export const getZubniLekari = (): IZubniLekari[] => {
    const data = loadData();
    return data.zubni_lekari as unknown as IZubniLekari[];
};

// Function to return all data
export const getAllData = (): IData => {
    return loadData();
};
