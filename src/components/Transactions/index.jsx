import React from "react";
import { TransactionsStyles } from "./styles";
import { ReactComponent as Sort } from "../../icons/Sort.svg";
import { ReactComponent as Download } from "../../icons/download.svg";
import { ReactComponent as Arrow } from "../../icons/arrow.svg";
import { data } from "../../data";
import { ReactComponent as Info } from "../../icons/Info.svg";

const Transactions = () => {
  return (
    <TransactionsStyles.Container>
      <TransactionsStyles.Title>
        Transactions | This month
      </TransactionsStyles.Title>
      <TransactionsStyles.Options>
        <input type="text" placeholder="Search by Order ID..." />
        <div className="options-button">
          <TransactionsStyles.Sort>
            Sort <Sort />
          </TransactionsStyles.Sort>
          <TransactionsStyles.Download>
            <Download />
          </TransactionsStyles.Download>
        </div>
      </TransactionsStyles.Options>

      <TransactionsStyles.Table>
        <tr>
          <th>Order ID</th>
          <th>
            Order date <Arrow />
          </th>
          <th className="text-right">Order amount</th>
          <th className="text-right">
            Transaction fees <Info />
          </th>
        </tr>
        {data.payments.map((items) => (
          <tr>
            <td><a href="#">{items.id}</a></td>
            <td>{items.date}</td>
            <td className="text-right">{items.amount}</td>
            <td className="text-right">{items.fees}</td>
          </tr>
        ))}
      </TransactionsStyles.Table>
    </TransactionsStyles.Container>
  );
};

export default Transactions;
