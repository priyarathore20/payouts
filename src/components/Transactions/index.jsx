import React from "react";
import { TransactionsStyles } from "./styles";
import { ReactComponent as Sort } from "../../icons/Sort.svg";
import { ReactComponent as Download } from "../../icons/download.svg";
import { data } from "../../data";
import { ReactComponent as Info } from "../../icons/Info.svg";
import Input from "../Input";
import Pagination from "../Pagination";
import { Months } from "../../utils/helper";

const Transactions = () => {
  return (
    <TransactionsStyles.Container>
      <TransactionsStyles.Title>
        Transactions | This month
      </TransactionsStyles.Title>
      <TransactionsStyles.Content>
        <TransactionsStyles.Options>
          <Input
            placeholder="Search by Order ID..."
            showSearchIcon
            variant="secondary"
          />
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
              <div>
                Order date <span className="arrow">▼</span>
              </div>
            </th>
            <th className="text-right">Order amount</th>
            <th>
              <div className="text-right">
                Transaction fees <Info />
              </div>
            </th>
          </tr>
          {data.payments.map((items) => (
            <tr>
              <td>
                <a href="#">{items.id}</a>
              </td>
              <td>{`${new Date(items.date).getDay()} ${
                Months[new Date(items.date).getMonth()]
              }, ${new Date(items.date).getFullYear()}`}</td>
              <td className="text-right">{items.amount}</td>
              <td className="text-right">{items.fees}</td>
            </tr>
          ))}
        </TransactionsStyles.Table>

        <TransactionsStyles.PaginationContainer>
          <Pagination />
        </TransactionsStyles.PaginationContainer>
      </TransactionsStyles.Content>
    </TransactionsStyles.Container>
  );
};

export default Transactions;
