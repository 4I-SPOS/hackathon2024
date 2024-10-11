// firebase.js
import { DocumentData } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore';
import { Architects_Daughter } from 'next/font/google';

const firebaseConfig = {
    apiKey: "AIzaSyCYXwEqpqfz28_jsYW8KSX7PTHpefVNP0s",
    authDomain: "hackathlon2024.firebaseapp.com",
    databaseURL: "https://hackathlon2024-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hackathlon2024",
    storageBucket: "hackathlon2024.appspot.com",
    messagingSenderId: "1029478744993",
    appId: "1:1029478744993:web:9dbb08742da5695faac1e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);


export function converter<T extends DocumentData>() {
    return {
        toFirestore(data: T): DocumentData {
            return data;
        },
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): T {
            return snapshot.data() as T;
        },
    };
}

export interface IArchitektonickaPamatka extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    objectid: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface ICyklovylety extends DocumentData {
    delka_cyklovyletu_v_metrech: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_vyssiho_uzemniho_samospravneho_celku: string;
    nazev: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    telefon: string;
    webove_stranky: string;
}

export interface IHrady extends DocumentData {
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IInfocentra extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IInformacniCentraAutobusoveDopravy extends DocumentData {
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    email: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev_autobusoveho_dopravce: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    oteviraci_doba: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IKina extends DocumentData {
    bezbarierovost: string;
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kapacita: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pocet_salu: string;
    poznamka_k_bezbarierovosti: string;
    provozovatel: string;
    psc: string;
    typ_cisla_domovniho: string;
    typ_kina: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IKulturniDomy extends DocumentData {
    bezbarierovost: string;
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pocet_mist_k_sezeni: string;
    poradane_akce: string;
    poznamka_k_bezbarierovosti: string;
    poznamka_ke_kapacite: string;
    provozovatel_nebo_zrizovatel: string;
    psc: string;
    technicka_vybavenost: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface ILazne extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    druh_zarizeni: string;
    forma_pece: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    poskytovatel: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
    zrizovatel: string;
}

export interface ILekarskaPohotovostniSluzba extends DocumentData {
    cilova_skupina: string;
    cislo_domovni: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    ordinacni_hodiny: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IMuzeaAGalerie extends DocumentData {
    bezbarierovost: string;
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    poznamka_k_bezbarierovosti: string;
    psc: string;
    typ_cisla_domovniho: string;
    typ_muzea: string;
    webove_stranky: string;
    zamereni_muzea: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
    zrizovatel: string;
}

export interface INarodniKulturniPamatky extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    objectid: string;
    pravni_forma: string;
    predmet_ochrany_pamatkove_pece: string;
    psc: string;
    rejstrikove_cislo_v_ustrednim_seznamu_kulturnich_pamatek: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface INaslednaLuzkovaPece extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pravni_forma: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
    zrizovatel: string;
}

export interface IOdborneLecebneUstavy extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    druh_pece: string;
    druh_zarizeni: string;
    forma_pece: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    obor_pece: string;
    poskytoval: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
    zrizovatel: string;
}

export interface IOstatniHistorickePamatky extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IPamatkoveRezervace extends DocumentData {
    datum_prohlaseni_za_pamatkovou_rezervaci: string;
    datum_ucinnosti_prohlaseni_za_pamatkovou_rezervaci: string;
    dokument: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    psc: string;
    rejstrikove_cislo_v_ustrednim_seznamu_kulturnich_pamatek: string;
    vyhlasovatel: string;
    webove_stranky: string;
}

export interface IPamatkoveZony extends DocumentData {
    datum_prohlaseni_za_pamatkovou_zonu: string;
    datum_ucinnosti_prohlaseni_za_pamatkovou_zonu: string;
    dokument: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    psc: string;
    rejstrikove_cislo_v_ustrednim_seznamu_kulturnich_pamatek: string;
    vyhlasovatel: string;
    webove_stranky: string;
}

export interface IPivovary extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    email_c: {
        1: string;
        2: string;
    };
    fax: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    mobil_c: {
        1: string;
        2: string;
    };
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    primarni_zatrideni: string;
    psc: string;
    region: string;
    sekundarni_zatrideni: string;
    telefon: string;
    tercialni_zatrideni: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IPoskytovateleSocialnichSluzeb extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    dic: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_poskytovatele: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    nazev_zarizeni: string;
    pravni_forma: string;
    pravni_forma_zrizovatele: string;
    psc: string;
    typ_cisla_domovniho: string;
    typ_socialni_sluzby_dle_1082006_sb: {
        [key: string]: string;
    };
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IPraktictiLekariProDospele extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev_obce: string;
    nazev_oboru: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pravni_forma: string;
    provozovatel: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IRozhlednyAVyhlidky extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IRybareni extends DocumentData {
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    email_c: {
        [key: number]: string;
    };
    fax: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    mobil_c: {
        [key: number]: string;
    };
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    primarni_zatrideni: string;
    psc: string;
    region: string;
    sekundarni_zatrideni: string;
    telefon: string;
    tercialni_zatrideni: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface ISolneJeskyne extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    email_c: {
        [key: number]: string;
    };
    fax: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    mobil_c: {
        [key: number]: string;
    };
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    primarni_zatrideni: string;
    psc: string;
    region: string;
    sekundarni_zatrideni: string;
    telefon_c: {
        [key: number]: string;
    };
    tercialni_zatrideni: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface ITechnickePamatky extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    telefon: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IValecneHrobyVeVlastnictviKraje extends DocumentData {
    autor: string;
    charakter_hrobu: string;
    cislo_hrobu_jine: string;
    cislo_kulturni_pamatky_z_ustredniho_seznamu_kulturnich_pamatek_cr: string;
    cislo_parcely: string;
    cislo_z_centralni_evidence_valecnych_hrobu: string;
    fotografie_v_rozliseni_2000x1500_pixelu: string;
    fotografie_v_rozliseni_200x150_pixelu: string;
    historicka_udalost: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    katastralni_uzemi: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pocet_pohrbenych: string;
    popis: string;
    popis_lokality: string;
    poznamka: string;
    rok_vzniku: string;
    verejne_pristupne_misto: string;
    vlastnik_hrobu: string;
    vlastnik_lokality: string;
    webove_stranky_centralni_evidence_valecnych_hrobu: string;
    webove_stranky_pamatkoveho_katalogu: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IZamky extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    id: string;
    jedinecny_identifikator_v_datovem_skladu_turistickeho_portalu_khk: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev: string;
    nazev_obce: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    popis: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}

export interface IZubniLekari extends DocumentData {
    cislo_orientacni: string;
    cislo_popisne_nebo_evidencni_podle_typu_cisla_domovniho: string;
    ico: string;
    id: string;
    jedinecny_identifikator_v_katalogu_otevrenych_dat_data_khk: string;
    kod_obce_dle_ciselniku_csu: string;
    kod_okresu_dle_ciselniku_csu: string;
    kod_spravniho_obvodu_obce_s_rozsirenou_pusobnosti_dle_ciselniku_csu: string;
    kod_vyssiho_uzemniho_samospravneho_celku_dle_ciselniku_csu: string;
    nazev_obce: string;
    nazev_oboru: string;
    nazev_okresu: string;
    nazev_spravniho_obvodu_obce_s_rozsirenou_pusobnosti: string;
    nazev_ulice: string;
    nazev_vyssiho_uzemniho_samospravneho_celku: string;
    pravni_forma: string;
    provozovatel: string;
    psc: string;
    typ_cisla_domovniho: string;
    webove_stranky: string;
    zapis_vektorove_geometrie: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
}



export const getArchitektonickePamatky = async () => {
    try {
        const pamatkyCollection = collection(db, 'architektonicke_pamatky');
        const querySnapshot = await getDocs(pamatkyCollection);

        const architektonickePamatky = querySnapshot.docs.map(doc =>
            doc.data() as IArchitektonickaPamatka
        );

        return architektonickePamatky;
    } catch (error) {
        console.error("Error fetching (architektonicke_pamatky): ", error);
        throw error;
    }
};

export const getCyklovylety = async () => {
    try {
        const cyklovyletyCollection = collection(db, 'cyklovylety');
        const querySnapshot = await getDocs(cyklovyletyCollection);

        const cyklovylety = querySnapshot.docs.map(doc =>
            doc.data() as ICyklovylety
        );

        return cyklovylety;
    } catch (error) {
        console.error("Error fetching (cyklovylety): ", error);
        throw error;
    }
};

export const getHrady = async () => {
    try {
        const hradyCollection = collection(db, 'hrady');
        const querySnapshot = await getDocs(hradyCollection);

        const hrady = querySnapshot.docs.map(doc =>
            doc.data() as IHrady
        );

        return hrady;
    } catch (error) {
        console.error("Error fetching (hrady): ", error);
        throw error;
    }
};

export const getInfocentra = async () => {
    try {
        const infocentraCollection = collection(db, 'infocentra');
        const querySnapshot = await getDocs(infocentraCollection);

        const infocentra = querySnapshot.docs.map(doc =>
            doc.data() as IInfocentra
        );

        return infocentra;
    } catch (error) {
        console.error("Error fetching (infocentra): ", error);
        throw error;
    }
};

export const getInformacniCentraAutobusoveDopravy = async () => {
    try {
        const informacniCentraAutobusoveDopravyCollection = collection(db, 'informacni_centra_autobusove_dopravy');
        const querySnapshot = await getDocs(informacniCentraAutobusoveDopravyCollection);

        const informacniCentraAutobusoveDopravy = querySnapshot.docs.map(doc =>
            doc.data() as IInformacniCentraAutobusoveDopravy
        );

        return informacniCentraAutobusoveDopravy;
    } catch (error) {
        console.error("Error fetching (informacni_centra_autobusove_dopravy): ", error);
        throw error;
    }
};

export const getKina = async () => {
    try {
        const kinaCollection = collection(db, 'kina');
        const querySnapshot = await getDocs(kinaCollection);

        const kina = querySnapshot.docs.map(doc =>
            doc.data() as IKina
        );

        return kina;
    } catch (error) {
        console.error("Error fetching (kina): ", error);
        throw error;
    }
};

export const getKulturniDomy = async () => {
    try {
        const kulturniDomyCollection = collection(db, 'kulturni_domy');
        const querySnapshot = await getDocs(kulturniDomyCollection);

        const kulturniDomy = querySnapshot.docs.map(doc =>
            doc.data() as IKulturniDomy
        );

        return kulturniDomy;
    } catch (error) {
        console.error("Error fetching (kulturni_domy): ", error);
        throw error;
    }
};

export const getLazne = async () => {
    try {
        const lazneCollection = collection(db, 'lazne');
        const querySnapshot = await getDocs(lazneCollection);

        const lazne = querySnapshot.docs.map(doc =>
            doc.data() as ILazne
        );

        return lazne;
    } catch (error) {
        console.error("Error fetching (lazne): ", error);
        throw error;
    }
};

export const getlekarskaPohotovostniSluzba = async () => {
    try {
        const lekarskaPohotovostniSluzbaCollection = collection(db, 'lekarska_pohotovostni_sluzba');
        const querySnapshot = await getDocs(lekarskaPohotovostniSluzbaCollection);

        const lekarskaPohotovostniSluzba = querySnapshot.docs.map(doc =>
            doc.data() as ILekarskaPohotovostniSluzba
        );

        return lekarskaPohotovostniSluzba;
    } catch (error) {
        console.error("Error fetching (lekarska_pohotovostni_sluzba): ", error);
        throw error;
    }
};

export const getMuzeaAGalerie = async () => {
    try {
        const muzeaAGalerieCollection = collection(db, 'muzea_a_galerie');
        const querySnapshot = await getDocs(muzeaAGalerieCollection);

        const muzeaAGalerie = querySnapshot.docs.map(doc =>
            doc.data() as IMuzeaAGalerie
        );

        return muzeaAGalerie;
    } catch (error) {
        console.error("Error fetching (muzea_a_galerie): ", error);
        throw error;
    }
};

export const getNarodniKulturniPamatky = async () => {
    try {
        const narodniKulturniPamatkyCollection = collection(db, 'narodni_kulturni_pamatky');
        const querySnapshot = await getDocs(narodniKulturniPamatkyCollection);

        const narodniKulturniPamatky = querySnapshot.docs.map(doc =>
            doc.data() as INarodniKulturniPamatky
        );

        return narodniKulturniPamatky;
    } catch (error) {
        console.error("Error fetching (narodni_kulturni_pamatky): ", error);
        throw error;
    }
};

export const getNaslednaLuzkovaPece = async () => {
    try {
        const naslednaLuzkovaPeceCollection = collection(db, 'nasledna_luzkova_pece');
        const querySnapshot = await getDocs(naslednaLuzkovaPeceCollection);

        const naslednaLuzkovaPece = querySnapshot.docs.map(doc =>
            doc.data() as INaslednaLuzkovaPece
        );

        return naslednaLuzkovaPece;
    } catch (error) {
        console.error("Error fetching (nasledna_luzkova_pece): ", error);
        throw error;
    }
};

export const getOdborneLecebneUstavy = async () => {
    try {
        const odborneLecebneUstavyCollection = collection(db, 'odborne_lecebne_ustavy');
        const querySnapshot = await getDocs(odborneLecebneUstavyCollection);

        const odborneLecebneUstavy = querySnapshot.docs.map(doc =>
            doc.data() as IOdborneLecebneUstavy
        );

        return odborneLecebneUstavy;
    } catch (error) {
        console.error("Error fetching (odborne_lecebne_ustavy): ", error);
        throw error;
    }
};

export const getOstatniHistorickePamatky = async () => {
    try {
        const ostatniHistorickePamatkyCollection = collection(db, 'ostatni_historicke_pamatky');
        const querySnapshot = await getDocs(ostatniHistorickePamatkyCollection);

        const ostatniHistorickePamatky = querySnapshot.docs.map(doc =>
            doc.data() as IOstatniHistorickePamatky
        );

        return ostatniHistorickePamatky;
    } catch (error) {
        console.error("Error fetching (ostatni_historicke_pamatky): ", error);
        throw error;
    }
};

export const getPamatkoveRezervace = async () => {
    try {
        const pamatkoveRezervaceCollection = collection(db, 'pamatkove_rezervace');
        const querySnapshot = await getDocs(pamatkoveRezervaceCollection);

        const pamatkoveRezervace = querySnapshot.docs.map(doc =>
            doc.data() as IPamatkoveRezervace
        );

        return pamatkoveRezervace;
    } catch (error) {
        console.error("Error fetching (pamatkove_rezervace): ", error);
        throw error;
    }
};

export const getPamatkoveZony = async () => {
    try {
        const pamatkoveZonyCollection = collection(db, 'pamatkove_zony');
        const querySnapshot = await getDocs(pamatkoveZonyCollection);

        const pamatkoveZony = querySnapshot.docs.map(doc =>
            doc.data() as IPamatkoveZony
        );

        return pamatkoveZony;
    } catch (error) {
        console.error("Error fetching (pamatkove_zony): ", error);
        throw error;
    }
};

// PIVOOOOOOO!!!!!!
export const getPivovary = async () => {
    try {
        const pivovaryCollection = collection(db, 'pivovary');
        const querySnapshot = await getDocs(pivovaryCollection);

        const pivovary = querySnapshot.docs.map(doc =>
            doc.data() as IPivovary
        );

        return pivovary;
    } catch (error) {
        console.error("Error fetching (pivovary): ", error);
        throw error;
    }
};

export const getPoskytovateleSocialnichSluzeb = async () => {
    try {
        const poskytovateleSocialnichSluzeCollection = collection(db, 'poskytovatele_socialnich_sluzeb');
        const querySnapshot = await getDocs(poskytovateleSocialnichSluzeCollection);

        const poskytovateleSocialnichSluzeb = querySnapshot.docs.map(doc =>
            doc.data() as IPoskytovateleSocialnichSluzeb
        );

        return poskytovateleSocialnichSluzeb;
    } catch (error) {
        console.error("Error fetching (poskytovatele_socialnich_sluzeb): ", error);
        throw error;
    }
};

export const getPraktictiLekariProDospele = async () => {
    try {
        const dbCollection = collection(db, 'prakticti_lekari_pro_dospele');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IPraktictiLekariProDospele
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (prakticti_lekari_pro_dospele): ", error);
        throw error;
    }
};

export const getRozhlednyAVyhlidky = async () => {
    try {
        const dbCollection = collection(db, 'rozhledny_a_vyhlidky');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IRozhlednyAVyhlidky
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (rozhledny_a_vyhlidky): ", error);
        throw error;
    }
};

export const getRybareni = async () => {
    try {
        const dbCollection = collection(db, 'rybareni');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IRybareni
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (rybareni): ", error);
        throw error;
    }
};

export const getSolneJeskyne = async () => {
    try {
        const dbCollection = collection(db, 'solne_jeskyne');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as ISolneJeskyne
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (solne_jeskyne): ", error);
        throw error;
    }
};

export const getTechnickePamatky = async () => {
    try {
        const dbCollection = collection(db, 'technicke_pamatky');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as ITechnickePamatky
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (technicke_pamatky): ", error);
        throw error;
    }
};

export const getValecneHrobyVeVlastnictviKraje = async () => {
    try {
        const dbCollection = collection(db, 'valecne_hroby_ve_vlastnictvi_kraje');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IValecneHrobyVeVlastnictviKraje
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (valecne_hroby_ve_vlastnictvi_kraje): ", error);
        throw error;
    }
};

export const getZamky = async () => {
    try {
        const dbCollection = collection(db, 'zamky');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IZamky
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (zamky): ", error);
        throw error;
    }
};

export const getZubniLekari = async () => {
    try {
        const dbCollection = collection(db, 'zubni_lekari');
        const querySnapshot = await getDocs(dbCollection);

        const dbData = querySnapshot.docs.map(doc =>
            doc.data() as IZubniLekari
        );

        return dbData;
    } catch (error) {
        console.error("Error fetching (zubni_lekari): ", error);
        throw error;
    }
};

export { db };
