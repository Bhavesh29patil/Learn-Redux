import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { incrementBonus } from '../actions';

function Bonus() {
  const amount = useSelector(state => state.account.amount)
  const points = useSelector(state => state.bonus.points)
  const dispatch = useDispatch()
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Bonus : ${points}</h3>
        <h3>Amount : ${amount}</h3>

        <button onClick={() => dispatch(incrementBonus(5))}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
