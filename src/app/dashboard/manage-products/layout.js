import React from 'react';

export const metadata = {
    title: 'Dash Board || Next Hero',
    description: 'Abul',
  }
const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>Side bar</div>
            {children}
        </div>
    );
};

export default DashboardLayout;