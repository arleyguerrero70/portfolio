import React from "react";
import styles from './InformationPage.module.css';

interface InformationPageProps {
    title: string
}

const InformationPage: React.FC<InformationPageProps> = ({title}) => {
    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <h2>Blog</h2>
                <div className={styles.skeleton}>
                    <div className={styles.comingSoon}>Próximamente</div>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Proyectos</h2>
                <div className={styles.skeleton}>
                    <div className={styles.comingSoon}>Próximamente</div>
                </div>
            </div>
            <div className={styles.section}>
                <h2>Podcast</h2>
                <div className={styles.skeleton}>
                    <div className={styles.comingSoon}>Próximamente</div>
                </div>
            </div>
        </div>
    )
}

export default InformationPage;