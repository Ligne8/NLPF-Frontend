import React, { useState } from 'react';

interface StockExchangeModalProps<T> {
    item: T;
    itemType: 'lot' | 'tractor';
    minDate: string;
    closeModal: () => void;
}

const AddToStockExchangeModal = <T extends { id: string }>({
    item,
    itemType,
    minDate,
    closeModal,
}: StockExchangeModalProps<T>) => {
    const [limitDate, setLimitDate] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = {
            id: item.id,
            limit_date: new Date(limitDate).toISOString(),
        };
        if (itemType === 'lot')
        {
            // FIXME: Implement the logic to add an offer using Stock Exchange API
            // POST /offers/lots
            console.log("Sending Lot data to API:", data);
        }
        else if (itemType === 'tractor')
        {
            // FIXME: Implement the logic to add an offer using Stock Exchange API
            // POST /offers/tractors
            console.log("Sending Tractor data to API:", data);
        }
        closeModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/3" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-800" onClick={closeModal}>
                    &times;
                </button>
                <h2 className="text-2xl font-bold mb-6">{`Stock exchange`}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Limit Date :</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 p-2 rounded"
                            value={limitDate}
                            onChange={(e) => setLimitDate(e.target.value)}
                            min={minDate}
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" className="bg-blue-500 text-white px-10 py-2 rounded hover:bg-blue-600">
                            <i className="fas fa-check"></i>
                            <span className="font-bold">Add</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToStockExchangeModal;
