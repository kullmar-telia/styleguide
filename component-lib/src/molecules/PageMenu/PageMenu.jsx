import React from 'react';
import classNames from 'classnames';

import { preventDefault } from '../../utils';
import MenuOverlay from './MenuOverlay';
import MenuTopPanel from './MenuTopPanel';
import MenuBar from './MenuBar';
import Button from '../../atoms/Button/Button';
import Tabs from '../../molecules/Tabs/Tabs';

const PageMenu = ({
    menuLinks = [],
    menuId,
    isExpanded,
    onClose,
    fixedPosition,
    textAboveLoginButton,
    isLoggedIn,
    menuSelectedTabIndex,
    onTabSelect,
    showButtons,
    logoutLink = '#',
    onLogoutClick,
    loginLink = '#',
    onLoginClick
}) => {
    const showTabs = menuLinks.find(it => it.heading);
    return (
        <div>
            <div
                className={classNames(
                    'page-menu',
                    { 'page-menu--fixed': fixedPosition },
                    { 'page-menu--expanded': isExpanded })}
                id={menuId || 'page-header-menu'}>
                <MenuTopPanel isExpanded={isExpanded} menuId={menuId} onClose={onClose} />
                <nav aria-label="Main menu">
                    {(showTabs || (showButtons && !isLoggedIn)) && (
                        <div className="page-menu__top-panel page-menu__top-panel--with-padding page-menu__top-panel--centered-content">
                            {showTabs && (
                                <Tabs
                                    uniqueId="menu-tabs"
                                    onSelect={onTabSelect}
                                    selectedIndex={menuSelectedTabIndex}
                                    skipPanelRendering={true}
                                    noMargin={true}
                                    compact={true}>
                                    {menuLinks.map((menuLink, i) =>
                                        <Tabs.Tab key={i} heading={menuLink.heading} />
                                    )}
                                </Tabs>
                            )}

                            {showButtons && !isLoggedIn &&
                            <div className="page-menu__top-panel-content">
                                <p className="paragraph">{textAboveLoginButton}</p>
                                {loginLink
                                    ? <a href={loginLink}>
                                        <Button text="Logg inn" kind="primary" onClick={onLoginClick} />
                                    </a>
                                    : <Button text="Logg inn" kind="primary" onClick={onLoginClick} />
                                }
                            </div>}
                        </div>
                    )}

                    {menuLinks.map((menuLink, i) =>
                        <Tabs.TabPanel key={i} index={i} uniqueId="separated-tabs" isSelected={menuSelectedTabIndex === i}>
                            <MenuBar ariaLabel="innlogget brukermeny" items={menuLink.loggedInLinks} isEmphasised />
                            <MenuBar items={menuLink.loggedOutLinks} />
                        </Tabs.TabPanel>
                    )}

                    {isLoggedIn &&
                    <ul className="page-menu__item-list">
                        <li className="page-menu__item">
                            <div className="page-menu__item-link">
                                <a className="page-menu__log-out-button link" href={logoutLink} onClick={preventDefault(onLogoutClick)}>Logg ut</a>
                            </div>
                        </li>
                    </ul>}
                </nav>
            </div>
            {fixedPosition && <MenuOverlay onClick={onClose} active={isExpanded} />}
        </div>
    );
};

export default PageMenu;