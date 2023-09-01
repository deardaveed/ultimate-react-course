import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [selfRating, setSelfRating] = useState("ratingDissatisfied");
  const [friendRating, setFriendRating] = useState("ratingDissatisfied");

  function handleBillChange(event) {
    setBill(Number(event.target.value));
  }

  function handleSelfRatingChange(event) {
    setSelfRating(event.target.value);
  }

  function handleFriendRatingChange(event) {
    setFriendRating(event.target.value);
  }

  function resetBill() {
    setBill(0);
    setSelfRating("ratingDissatisfied");
    setFriendRating("ratingDissatisfied");
  }

  return (
    <div>
      <BillInput
        onBillChange={handleBillChange}
        bill={bill}
      />
      <ServiceRating
        key={"selfRating"}
        rating={selfRating}
        onRatingChange={handleSelfRatingChange}>
        How did you like the service?
      </ServiceRating>
      <ServiceRating
        key={"friendRating"}
        rating={friendRating}
        onRatingChange={handleFriendRatingChange}>
        How did your friend like the service?
      </ServiceRating>
      <TipCalculator
        bill={bill}
        selfRating={selfRating}
        friendRating={friendRating}
      />
      <BillReset resetBill={resetBill} />
    </div>
  );
}

function BillInput({ bill, onBillChange }) {
  return (
    <div>
      {`How much was the bill?`}
      <input
        type="text"
        value={bill}
        onChange={onBillChange}
      />
    </div>
  );
}

function ServiceRating({ children, rating, onRatingChange }) {
  return (
    <div>
      {children}
      <select
        value={rating}
        onChange={onRatingChange}>
        <option value="ratingDissatisfied">Dissatisfied (0%)</option>
        <option value="ratingOkay">It was okay (5%)</option>
        <option value="ratingGood">It was good (10%)</option>
        <option value="ratingAmazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TipCalculator({ bill, selfRating, friendRating }) {
  let selfRateScore = 0;
  let friendRateScore = 0;
  let tip = 0;

  function calculateTip() {
    if (selfRating === "ratingDissatisfied") {
      selfRateScore = 0;
    } else if (selfRating === "ratingOkay") {
      selfRateScore = 5;
    } else if (selfRating === "ratingGood") {
      selfRateScore = 10;
    } else if (selfRating === "ratingAmazing") {
      selfRateScore = 20;
    }

    if (friendRating === "ratingDissatisfied") {
      friendRateScore = 0;
    } else if (friendRating === "ratingOkay") {
      friendRateScore = 5;
    } else if (friendRating === "ratingGood") {
      friendRateScore = 10;
    } else if (friendRating === "ratingAmazing") {
      friendRateScore = 20;
    }

    // prettier-ignore
    const total = (((selfRateScore + friendRateScore) / 2 / 100) * bill);
    tip = total.toFixed(2);

    return tip;
  }

  calculateTip();

  return (
    <div>
      <h3>
        <p>{`You pay $${
          Number(bill) + Number(tip)
        } ($${bill} + $${tip} tip)`}</p>
      </h3>
    </div>
  );
}

function BillReset({ resetBill, self }) {
  function onClick() {
    resetBill();
  }
  return (
    <div>
      <p>
        <button onClick={onClick}>Reset</button>
      </p>
    </div>
  );
}

export default App;
