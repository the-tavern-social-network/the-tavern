import React from 'react';

import styles from './Presentation.module.scss';
import crossSword from '../../../../assets/images/logocroix.svg';
const Presentation = () => {
  return (
    <div className={styles.Presentation}>
      <p className={styles.Mobile}>Bienvenue dans le premier réseau social dédié au jeu de rôle.</p>
      <p className={styles.Mobile}>
        Créé pour vous, joueur de jeu de rôle débutant ou initié ! Rencontrez de nouveau amis,
        rassemblez vous pour jouer grâce à un système de partage d’écran et surtout racontez vos
        folles aventures.
      </p>
      <p className={styles.Desktop}>
        Bienvenue dans le premier réseau social dédié au jeu de rôle.
      </p>
      <p className={styles.Desktop}>
        « Le feu crépite dans la cheminée, l’odeur des braises se mélange à celle du vieux bois et
        aux brumes des breuvages servis dans l’établissement. Les discutions vont bon train,
        certains racontent leurs aventures du jour, d’autres se préparent pour un long périple. Pas
        de doutes cette taverne a quelque chose de spécial et vous n’allez pas tarder à le découvrir
        ! »
      </p>
      <p className={styles.Desktop}>
        Créé pour vous, joueur de jeu de rôle débutant ou initié ! Rencontrez de nouveau amis,
        rassemblez vous pour jouer grâce à un système de partage d’écran et surtout racontez vos
        folles aventures.
      </p>
      <p className={styles.Desktop}>
        « Prenez place et mettez-vous à l'aise, il y a toujours une table de libre pour vous. »
      </p>
      <p className={styles.Signature}>Le tavernier</p>
      <img className={styles.CrossSword} src={crossSword} />
    </div>
  );
};

export default Presentation;
