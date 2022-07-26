import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(pros) {
    return (
        <div className="expense-item">
            <ExpenseDate date={pros.date} />
            <div className="expense-item__description">
                <h2>{pros.title}</h2>
                <div className="expense-item__price">${pros.amount}</div>
            </div >
        </div >
    )

}

export default ExpenseItem;