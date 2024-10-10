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


export function converter<T extends DocumentData>()
{
    return {
        toFirestore(data: T): DocumentData {
            return data;
        },
        fromFirestore(snapshot: QueryDocumentSnapshot<DocumentData>): T {
            return snapshot.data() as T;
        },
    };
}
export interface IArchitektonickaPamatka extends DocumentData
{
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

export interface ICyklovylety extends DocumentData{
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

        const cyklovyletyPamatky = querySnapshot.docs.map(doc =>
            doc.data() as ICyklovylety
        );

        return cyklovyletyPamatky;
    } catch (error) {
        console.error("Error fetching (cyklovylety): ", error);
        throw error;
    }
};

export { db };
