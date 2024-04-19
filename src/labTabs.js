import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainPage } from './mainPage';
import { WorkPage } from './workPage';
import { AboutPage } from './aboutPage';

const TabItem = styled(Tab) ({
    fontWeight: 300,
    color: '#000000',
    letterSpacing: 2,

});

export function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <TabContext value={value}>
            <TabList onChange={handleChange}>
            <TabItem label="Home" value="1" />
            <TabItem label="Portfolio" value="2" />
            <TabItem label="About Me" value="3" />
            </TabList>
            <TabPanel value="1"><MainPage/></TabPanel>
            <TabPanel value="2"><WorkPage/></TabPanel>
            <TabPanel value="3"><AboutPage/></TabPanel>
        </TabContext>
  );
}
