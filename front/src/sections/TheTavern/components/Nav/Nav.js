import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import NavLinks from './NavLinks/NavLinks';

import logo from '../../../../assets/images/logo1.svg';
// import menu from '../../../../assets/images/menu.svg';
import styles from './Nav.module.scss';
import style from './Swords-styles.css';

const Nav = ({ logout, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.Nav__Header}>
      <div className={styles.Welcome}>
        <h1>Bienvenue</h1>
        <h2 className={styles.Welcome__User}>Nom Utilisateur</h2>
      </div>
      <nav className={styles.Nav}>
        <Link to="/" className={styles.Nav__Logo}>
          <img src={logo} alt="logo TheTavern" />
        </Link>
        <div className={styles.Nav__Menu__Container}>
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? styles.Nav__Menu__Open : styles.Nav__Menu}>
            {/* {<img src={menu} alt="menu de navigation" />} */}
            {/* <div className={styles.Menu}>
              <div className={styles.Sword}>
                <div className={styles.FirstContainer__Container}>
                  <div className={styles.FirstSword}>
                    <div className={styles.FirstSword__FirstHandleOrb__HandleOrb}></div>
                    <div className={styles.FirstHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstHandle__Handle}></div>
                    <div className={styles.FirstSmallHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstLargeHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstBlade}>
                      <div className={styles.FirstBladeTop__BladeTop}></div>
                      <div className={styles.FirstBladeLeft__BladeLeft}></div>
                      <div className={styles.FirstBladeRight__BladeRight}></div>
                      <div className={styles.FirstBladeBottom__BladeBottom}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.Sword}>
                <div className={styles.FirstContainer__Container}>
                  <div className={styles.FirstSword}>
                    <div className={styles.FirstHandleOrb__HandleOrb}></div>
                    <div className={styles.FirstHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstHandle__Handle}></div>
                    <div className={styles.FirstsmallHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstLargeHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstBlade}>
                      <div className={styles.FirstBladeTop__BladeTop}></div>
                      <div className={styles.FirstBladeLeft__BladeLeft}></div>
                      <div className={styles.FirstBladeRight__BladeRight}></div>
                      <div className={styles.FirstBladeBottom__BladeBottom}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.Sword}>
                <div className={styles.FirstContainer__Container}>
                  <div className={styles.FirstSword}>
                    <div className={styles.FirstHandleOrb__HandleOrb}></div>
                    <div className={styles.FirstHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstHandle__Handle}></div>
                    <div className={styles.FirstsmallHandleBlock__HandleBlock}></div>
                    <div className={styles.FirstLargeHandleBlockCurve__HandleBlockCurve}></div>
                    <div className={styles.FirstBlade}>
                      <div className={styles.FirstBladeTop__BladeTop}></div>
                      <div className={styles.FirstBladeLeft__BladeLeft}></div>
                      <div className={styles.FirstBladeRight__BladeRight}></div>
                      <div className={styles.FirstBladeBottom__BladeBottom}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="sword-menu">
              <div className="sword">
                <div className="l-container container">
                  <div className="l-sword">
                    <div className="l-handle-orb handle-orb"></div>
                    <div className="l-handle-block handle-block"></div>
                    <div className="l-handle-block-curve handle-block-curve"></div>
                    <div className="l-handle handle"></div>
                    <div className="l-small-handle-block handle-block"></div>
                    <div className="l-large-handle-block-curve handle-block-curve"></div>
                    <div className="l-blade">
                      <div className="l-blade-top blade-top"></div>
                      <div className="l-blade-left blade-left"></div>
                      <div className="l-blade-right blade-right"></div>
                      <div className="l-blade-bottom blade-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sword">
                <div className="l-container container">
                  <div className="l-sword">
                    <div className="l-handle-orb handle-orb"></div>
                    <div className="l-handle-block handle-block"></div>
                    <div className="l-handle-block-curve handle-block-curve"></div>
                    <div className="l-handle handle"></div>
                    <div className="l-small-handle-block handle-block"></div>
                    <div className="l-large-handle-block-curve handle-block-curve"></div>
                    <div className="l-blade">
                      <div className="l-blade-top blade-top"></div>
                      <div className="l-blade-left blade-left"></div>
                      <div className="l-blade-right blade-right"></div>
                      <div className="l-blade-bottom blade-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sword">
                <div className="l-container container">
                  <div className="l-sword">
                    <div className="l-handle-orb handle-orb"></div>
                    <div className="l-handle-block handle-block"></div>
                    <div className="l-handle-block-curve handle-block-curve"></div>
                    <div className="l-handle handle"></div>
                    <div className="l-small-handle-block handle-block"></div>
                    <div className="l-large-handle-block-curve handle-block-curve"></div>
                    <div className="l-blade">
                      <div className="l-blade-top blade-top"></div>
                      <div className="l-blade-left blade-left"></div>
                      <div className="l-blade-right blade-right"></div>
                      <div className="l-blade-bottom blade-bottom"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <NavLinks logout={logout} isOpen={isOpen} setIsOpen={()=> setIsOpen(!isOpen)}/>
        </div>
      </nav>
    </div>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Nav;
