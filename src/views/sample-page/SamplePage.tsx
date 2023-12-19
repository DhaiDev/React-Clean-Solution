// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { Typography } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Sample Page',
  },
];

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      {/* breadcrumb */}
      <Breadcrumb title="Sample Pafsgea" items={BCrumb} />
      {/* end breadcrumb */}
      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;