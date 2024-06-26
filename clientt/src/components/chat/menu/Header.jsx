import { useContext, useState } from 'react';

import { Box, styled } from '@mui/material';
import { Chat as MessageIcon } from '@mui/icons-material';

import { AccountContext } from '../../../context/AccountProvider';

//components
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/Drawer';

const Component = styled(Box)`
    height: 44px;
    background: #868889;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;

const Wrapper = styled(Box) `
    margin-left: 10px;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    & :first-child {
        font-size: 82px;
        margin-right: 8px;
        margin-top: 3px;
    }
`;
    
const Image = styled('img') ({
    height: 40,
    width: 40,
    borderRadius: '50%'
})

const Header = () => {
    
    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(false);
    }

    return (
        <>
            <Component>
                {/* <Image src={account.picture} onClick={() => toggleDrawer()} /> */}
                <Image src={account.picture} onClick={() => toggleDrawer()} />
                {/* <Wrapper>
                    <MessageIcon />
                    <HeaderMenu/>
                </Wrapper> */}
                <Wrapper>
                    {account.name}
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} profile={true} />
        </>
    )
}

export default Header;