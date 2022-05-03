import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;
    transition: 350ms;

    &:hover{
        background-color: #1f1f1b;
        border-left: 4px solid #6d44dc;
        transition: 350ms;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    text-align: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 1.25rem 0 0 3rem;
    text-decoration: none;
    color: #ffffff;

    &:hover{
        background-color: #1f1f1b;
        transition: 350ms;
    }
`;

const Submenu: FC<SidebarLinkProps> = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    
    return (
    <>
        <SidebarLink to={item.path} onClick={showSubnav}>
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>{item?.subnav && subnav ? item.iconOpened : item?.iconClosed}</div>
        </SidebarLink>
        {subnav && 
            item?.subnav?.map((subnavItem, index) => {
            return (
                <DropdownLink to={subnavItem.path} key={index}>
                    {subnavItem.icon}
                    <SidebarLabel>{subnavItem.title}</SidebarLabel>
                </DropdownLink>
            );
        })}
    </>
    );
}

export default Submenu;
