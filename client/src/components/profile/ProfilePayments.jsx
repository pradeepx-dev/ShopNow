import { useState } from "react";

const initialCards = [
  {
    id: "card_1",
    holderName: "PRADEEP K MAURYA",
    last4: "4829",
    expiry: "09/28",
    brand: "mastercard",
    bgGradient: "from-slate-900 via-indigo-950 to-slate-900",
    isDefault: true,
  },
  {
    id: "card_2",
    holderName: "PRADEEP K MAURYA",
    last4: "1934",
    expiry: "04/27",
    brand: "visa",
    bgGradient: "from-blue-900 via-indigo-900 to-sky-900",
    isDefault: false,
  },
];

const initialUpi = [
  { id: "upi_1", vpa: "pradeep.maurya@oksbi", provider: "Google Pay", isDefault: true },
  { id: "upi_2", vpa: "pradeepkm@ybl", provider: "PhonePe", isDefault: false },
];

const ProfilePayments = ({ onNotify }) => {
  const [cards, setCards] = useState(initialCards);
  const [upiList, setUpiList] = useState(initialUpi);
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [cardForm, setCardForm] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleDeleteCard = (id) => {
    setCards(cards.filter((c) => c.id !== id));
    if (onNotify) onNotify("Card removed from saved methods", "info");
  };

  const handleAddCardSubmit = (e) => {
    e.preventDefault();
    if (!cardForm.number || !cardForm.name || !cardForm.expiry) {
      if (onNotify) onNotify("Please fill all card details", "error");
      return;
    }

    const newCard = {
      id: `card_${Date.now()}`,
      holderName: cardForm.name.toUpperCase(),
      last4: cardForm.number.slice(-4) || "8888",
      expiry: cardForm.expiry,
      brand: "visa",
      bgGradient: "from-purple-900 via-pink-900 to-rose-900",
      isDefault: false,
    };

    setCards([...cards, newCard]);
    setIsAddingCard(false);
    setCardForm({ number: "", name: "", expiry: "", cvv: "" });
    if (onNotify) onNotify("New card added securely!", "success");
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          Payment Methods
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Manage saved credit/debit cards and UPI IDs for express checkout.
        </p>
      </div>

      {/* Cards Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            Saved Credit & Debit Cards
          </h3>
          <button
            type="button"
            onClick={() => setIsAddingCard(!isAddingCard)}
            className="text-xs font-bold text-[#e91e8c] hover:underline cursor-pointer"
          >
            {isAddingCard ? "Cancel" : "+ Add New Card"}
          </button>
        </div>

        {/* Add Card Form Modal / Expandable */}
        {isAddingCard && (
          <form
            onSubmit={handleAddCardSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4 max-w-md"
          >
            <h4 className="text-sm font-bold text-slate-900">Add New Card</h4>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Card Number</label>
              <input
                type="text"
                maxLength="19"
                placeholder="4111 2222 3333 4444"
                value={cardForm.number}
                onChange={(e) => setCardForm({ ...cardForm, number: e.target.value })}
                required
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none font-mono"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Name on Card</label>
              <input
                type="text"
                placeholder="FULL NAME"
                value={cardForm.name}
                onChange={(e) => setCardForm({ ...cardForm, name: e.target.value })}
                required
                className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none uppercase"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Expiry (MM/YY)</label>
                <input
                  type="text"
                  placeholder="08/29"
                  maxLength="5"
                  value={cardForm.expiry}
                  onChange={(e) => setCardForm({ ...cardForm, expiry: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">CVV</label>
                <input
                  type="password"
                  maxLength="4"
                  placeholder="•••"
                  value={cardForm.cvv}
                  onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                  required
                  className="w-full rounded-xl border border-slate-200 px-3.5 py-2.5 text-xs font-semibold focus:border-slate-900 focus:outline-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800 transition cursor-pointer"
            >
              Save Card Securely
            </button>
          </form>
        )}

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-tr ${card.bgGradient} p-6 text-white shadow-xl flex flex-col justify-between min-h-[190px]`}
            >
              {/* Card Chip & Network */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-10 rounded-md bg-amber-400/90 shadow-inner flex items-center justify-center border border-amber-300">
                    <span className="h-3 w-5 border-t border-b border-amber-800/40 block" />
                  </div>
                  {card.isDefault && (
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider backdrop-blur-md">
                      Primary
                    </span>
                  )}
                </div>
                <span className="text-sm font-black italic tracking-wider">
                  {card.brand === "mastercard" ? "mastercard" : "VISA"}
                </span>
              </div>

              {/* Card Number Mask */}
              <div className="my-4 font-mono text-base sm:text-lg font-bold tracking-[0.2em] text-slate-100">
                •••• •••• •••• {card.last4}
              </div>

              {/* Card Footer */}
              <div className="flex items-end justify-between text-xs">
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">
                    Card Holder
                  </span>
                  <span className="font-bold tracking-wide truncate block max-w-[150px]">
                    {card.holderName}
                  </span>
                </div>
                <div>
                  <span className="text-[9px] text-slate-400 uppercase tracking-wider block">
                    Expires
                  </span>
                  <span className="font-mono font-bold">{card.expiry}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDeleteCard(card.id)}
                  title="Remove card"
                  className="text-[11px] font-bold text-red-300 hover:text-white bg-black/20 px-2 py-1 rounded-lg backdrop-blur-sm transition cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Saved UPI IDs */}
      <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs space-y-4">
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Saved UPI IDs
        </h3>
        <div className="divide-y divide-slate-100">
          {upiList.map((upi) => (
            <div
              key={upi.id}
              className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 font-black text-xs">
                  UPI
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{upi.vpa}</p>
                  <p className="text-[11px] text-slate-400">{upi.provider}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {upi.isDefault && (
                  <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                    Default UPI
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => {
                    setUpiList(upiList.filter((u) => u.id !== upi.id));
                    if (onNotify) onNotify("UPI ID removed", "info");
                  }}
                  className="text-xs font-bold text-slate-400 hover:text-rose-600 transition cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security Guarantee Banner */}
      <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 flex items-center gap-3.5 text-xs text-slate-600">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 text-lg">
          🛡️
        </div>
        <div>
          <strong className="text-slate-900 block">Bank-Grade 256-Bit SSL Encryption</strong>
          ShowNow never stores your complete card number or CVV. All transactions are PCI-DSS compliant.
        </div>
      </div>
    </div>
  );
};

export default ProfilePayments;
