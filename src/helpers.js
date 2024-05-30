export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800))

//colors
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}


// Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteItem = ({ key, id }) => {
    const existingData = fetchData(key);
    if (id) {
        const newData = existingData.filter((item) => item.id !== id)
        return localStorage.setItem(key, JSON.stringify(newData))
    }
    return localStorage.removeItem(key);
}

export const getAllMatchingItems = ({ category, key, value }) => {
    const data = fetchData(category) ?? []
    return data.filter((item) => item[key] === value)
}


//FORMAT
export const formatCurrency = (amt) => {
    return (amt).toLocaleString(undefined, {
        style: "currency",
        currency: "INR"
    })
}


export const formaPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionalDigits: 0

    })
}

export const formatDateToString = (epoch) => new Date(epoch).toLocaleString()

