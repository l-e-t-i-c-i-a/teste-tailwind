import { investments } from './data/investments';
import { InvestmentCard } from './components/InvestmentCard';
 
import '../css/style.css';
 
const investmentsGrid = document.querySelector('.investments');
 
investmentsGrid.innerHTML = investments
  .map((investment) => InvestmentCard(investment))
  .join('');