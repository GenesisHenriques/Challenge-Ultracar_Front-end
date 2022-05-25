import './Dashboard.css';

import ComparativePreviousYear from '../Graphics/ComparativePreviousYear/ComparativePreviousYear';
import RevenueAndGoal from '../Graphics/RevenueAndGoal/RevenueAndGoal';
import SalesBySeller from '../Graphics/SalesBySeller/SalesBySeller';

import MonthlyGoal from '../Graphics/MonthlyGoal/MonthlyGoal';
import MonthlySales from '../Graphics/MonthlySales/MonthlySales';
import DistributionByRegion from '../Graphics/DistributionByRegion/DistributionByRegion';

import SalesByType from '../Graphics/SalesByType/SalesByType';
import OrdersPerMonth from '../Graphics/OrdersPerMonth/OrdersPerMonth';
import CustomersPerMonth from '../Graphics/CustomersPerMonth/CustomersPerMonth';

function Dashboard() {
  return (
    <main className='Dashboard'>
      <section className='sectionOne'>
        <RevenueAndGoal />
        <SalesBySeller />
        <ComparativePreviousYear />
      </section>
      <section className='sectionTwo'>
        <MonthlyGoal />
        <MonthlySales />
        <DistributionByRegion />
      </section>
      <section className='sectionThree'>
        <SalesByType />
        <OrdersPerMonth />
        <CustomersPerMonth />
      </section>
    </main>
  );
}

export default Dashboard;