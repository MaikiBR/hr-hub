import { faFaceLaughBeam, faHandshake } from '@fortawesome/free-regular-svg-icons';
import { faBank, faBorderAll, faCirclePlay, faDiagramProject, faFileCirclePlus, faFileLines, faGauge, faHelmetSafety, faMagnifyingGlass, faMedal, faScaleBalanced, faSignature, faUserGear, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "@/styles/Sidebar.module.css";

export const routes = [
    {
        path: '/',
        name: 'Inicio',
        icon: <FontAwesomeIcon icon={faBorderAll} className={styles.icons}/>,
        isDisabled: false,
    },
    {
        path: '/estructuraOrg',
        name: 'Estructura Organizacional',
        icon: <FontAwesomeIcon icon={faDiagramProject} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/atraccionTalento',
        name: 'Atracción de Talento',
        icon: <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/contratacion',
        name: 'Contratación',
        icon: <FontAwesomeIcon icon={faSignature} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/integracionPersonal',
        name: 'Integración de personal',
        icon: <FontAwesomeIcon icon={faHandshake} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/bancoTalento',
        name: 'Banco de Talento',
        icon: <FontAwesomeIcon icon={faBank} className={styles.icons}/>,
        isDisabled: false,
    },
    {
        path: '/retencionTalento',
        name: 'Retención de Talento',
        icon: <FontAwesomeIcon icon={faUsers} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/prevencionLaboral',
        name: 'Prevención Laboral',
        icon: <FontAwesomeIcon icon={faScaleBalanced} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/climaOrg',
        name: 'Clima Organizacional',
        icon: <FontAwesomeIcon icon={faFaceLaughBeam} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/seguridadLaboral',
        name: 'Seguridad Laboral',
        icon: <FontAwesomeIcon icon={faHelmetSafety} className={styles.icons}/>,
        isDisabled: true,
    },
    {
        path: '/pcRH',
        name: 'Panel de Control RH',
        icon: <FontAwesomeIcon icon={faGauge} className={styles.icons}/>,
        isDisabled: true,
    },
    
    /* SOLO ADMIN */
    // {
    //     path: '/admin',
    //     name: 'Admin Manager ',
    //     icon: <FontAwesomeIcon icon={faUserGear} className={styles.icons}/>,
    //     isDisabled: true,
    // },
];

/*
VIDEOS:
Institucionales
Procesos
Seguridad

*/
