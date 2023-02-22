import instance from "./config";

const getIntroduce = () => {
    return instance.get("/introduce");
};
const updateIntroduce = (introduce) => {
    return instance.put(`/introduce/`, introduce);
};

export { getIntroduce, updateIntroduce };