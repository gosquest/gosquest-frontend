export const storeData = async (key: string, value: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error('Failed to store data');
    }
};

export const getData = async (key: string) => {
    try {
        const data = localStorage.getItem(key);
        return data !== null ? JSON.parse(data) : null;
    } catch (error) {
        throw new Error('Failed to get data');
    }
};

export const updateData = async (key: string, value: any) => {
    try {
        await localStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
        throw new Error('Failed to update data');
    }
};


export const deleteData = async (key: string) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        throw new Error('Failed to delete data');
    }
};
