import React from "react";

function IncomeForm() {
  return (
    <form className="income-form">
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
        ></input>
        <input type="number" name="price" id="price" placeholder="Price..." />
        <input type="date" name="date" id="date" placeholder="Income Date..." />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
