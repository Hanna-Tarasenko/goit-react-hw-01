import styles from "./TransactionHistory.module.css";
const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionsTable}>
      <thead>
        <tr>
          <th className={styles.transactionTitle}>Type</th>
          <th className={styles.transactionTitle}>Amount</th>
          <th className={styles.transactionTitle}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className={styles.tableItem}>{item.type}</td>
            <td className={styles.tableItem}>{item.amount}</td>
            <td className={styles.tableItem}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
