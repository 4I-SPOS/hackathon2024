/*import { DocumentData } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, QueryDocumentSnapshot } from 'firebase/firestore';

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
}*/

interface IActivity {
    zemepisna_sirka_v_souradnicovem_systemu_wgs84: string;
    zemepisna_delka_v_souradnicovem_systemu_wgs84: string;
    nazev: string;
    webove_stranky: string;
    bezbarierovost: string;
    popis: string;
}

export interface IArchitektonickaPamatka extends IActivity {
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

export interface ICyklovylety extends IActivity {
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

export interface IHrady extends IActivity {
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

export interface IInfocentra extends IActivity {
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

export interface IInformacniCentraAutobusoveDopravy extends IActivity {
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

export interface IKina extends IActivity {
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

export interface IKulturniDomy extends IActivity {
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

export interface ILazne extends IActivity {
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

export interface ILekarskaPohotovostniSluzba extends IActivity {
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

export interface IMuzeaAGalerie extends IActivity {
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

export interface INarodniKulturniPamatky extends IActivity {
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

export interface INaslednaLuzkovaPece extends IActivity {
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

export interface IOdborneLecebneUstavy extends IActivity {
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

export interface IOstatniHistorickePamatky extends IActivity {
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

export interface IPamatkoveRezervace extends IActivity {
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

export interface IPamatkoveZony extends IActivity {
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

export interface IPivovary extends IActivity {
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

export interface IPoskytovateleSocialnichSluzeb extends IActivity {
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

export interface IPraktictiLekariProDospele extends IActivity {
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

export interface IRozhlednyAVyhlidky extends IActivity {
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

export interface IRybareni extends IActivity {
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

export interface ISolneJeskyne extends IActivity {
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

export interface ITechnickePamatky extends IActivity {
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

export interface IValecneHrobyVeVlastnictviKraje extends IActivity {
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

export interface IZamky extends IActivity {
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

export interface IZubniLekari extends IActivity {
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

//export { db };